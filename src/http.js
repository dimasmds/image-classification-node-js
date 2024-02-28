import Hapi from '@hapi/hapi';
import { loadModel, predict, transformImage } from './ml.js';

async function createServer() {
  const model = await loadModel();

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
    handler: async (request) => {
      const { image } = request.payload;
      const processedImage = transformImage(image);
      const result = await predict(model, processedImage);
      return { result };
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
