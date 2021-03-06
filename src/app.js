import express from 'express';
import path from 'path';
import routes from './routes';
import cors from 'cors';


class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    );
  }

  routes() {
    this.server.use(cors());
    this.server.use(routes);
  }
}

export default new App().server;