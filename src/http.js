import Hapi from '@hapi/hapi';

function createServer() {
  const server = Hapi.server({
    host: '0.0.0.0',
    port: 8080,
  });

  server.route({
    method: 'POST',
    path: '/predict',
    handler: (request, h) => {
      const { image } = request.payload;
      console.log(image);

      // @TODO - predict the images class

      return {};
    },
    options: {
      payload: {
        allow: ['multipart/form-data'],
        multipart: true,
      },
    },
  });

  return server;
}

export { createServer };
