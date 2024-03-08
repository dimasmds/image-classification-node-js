import { createServer } from '../http.js';
import { buildImagePayload } from './utils.js';

describe('http test', () => {
  let server = null;

  beforeAll(async () => {
    server = await createServer();
  });

  describe('POST /predict', () => {
    it('should predict "Gogo" when given by Gogo images', async () => {
      // Assert
      const { payload, headers } = await buildImagePayload('gogo.jpg');

      // Action
      const response = await server.inject({
        method: 'POST',
        url: '/predict',
        headers,
        payload,
      });

      // Assert
      const body = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(body.result).toEqual('Gogo');
    });

    it('should predict "Lili" when given by Lili images', async () => {
      // Assert
      const { payload, headers } = await buildImagePayload('lili.jpg');

      // Action
      const response = await server.inject({
        method: 'POST',
        url: '/predict',
        headers,
        payload,
      });

      // Assert
      const body = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(body.result).toEqual('Lili');
    });

    it('should predict "Mirkat" when given by Mirkat images', async () => {
      // Assert
      const { payload, headers } = await buildImagePayload('mirkat.jpg');

      // Action
      const response = await server.inject({
        method: 'POST',
        url: '/predict',
        headers,
        payload,
      });

      // Assert
      const body = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(body.result).toEqual('Mirkat');
    });
  });
});
