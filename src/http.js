import Hapi from '@hapi/hapi';

async function createServer() {
  const server = Hapi.server({
    host: '0.0.0.0',
    port: 8080,
    debug: {
      request: ['error'],
    },
  });

  server.route({
    method: 'POST',
    path: '/predict',
    handler: async (request, h) => {
      const { image } = request.payload;

      // @TODO - predict the image

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
