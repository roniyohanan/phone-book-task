/* eslint-disable @typescript-eslint/no-unused-vars */
import * as express from 'express';
import * as http from 'http';
import * as helmet from 'helmet';
import * as cors from 'cors';
import { logger } from './utils/logger/logger';
import { SeverityLevel } from './utils/logger/severity-level';
import { errorMiddleware } from './utils/errors/error-handler';
import { config } from './config';
import { AppRouter } from './router';

export class Server {
  public app: express.Application;

  private server: http.Server;

  public static startServer(): Server {
    return new Server();
  }

  public closeServer(): void {
    this.server.close();
  }

  private constructor() {
    this.app = express();
    this.configurationMiddleware();
    this.app.use(AppRouter);
    this.app.use(errorMiddleware);
    this.server = this.app.listen(config.server.port, () => {
      logger.log(SeverityLevel.Informational, `${config.server.name} listening on port ${config.server.port}`);
    });
  }

  private setHeaders = (req: express.Request, res: express.Response,
    next: express.NextFunction): void => {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type');

    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }

    return next();
  };

  private configurationMiddleware(): void {
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(this.setHeaders);
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
}
