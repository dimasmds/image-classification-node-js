import { createServer } from './http.js';

const server = await createServer();

await server.start();

console.log(`server start at ${server.info.uri}`);
