import { createContext } from '@marblejs/core';
import { Server, Database } from './connection';
import httpListener from './app';

const bootstrap = async () => {
    Database.connect();
    await Server.create(httpListener.run(createContext()));
  };
  
  bootstrap();