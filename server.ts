import { createServer } from '@marblejs/core';
import httpListener from './http.listener';

export const server = createServer({
    port: 1337,
    hostname: '0.0.0.0',
    httpListener
});

server.run();
