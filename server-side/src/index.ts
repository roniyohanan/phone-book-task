import * as mongoose from 'mongoose';
import { Server } from './server';
import { config } from './config';
import { logger } from './utils/logger/logger';
import { SeverityLevel } from './utils/logger/severity-level';

(() => {
  mongoose.connect(config.db.connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  mongoose.connection.on('connecting', () => {
    logger.log(SeverityLevel.Informational, '[MongoDB] connecting...');
  });

  mongoose.connection.on('connected', () => {
    logger.log(SeverityLevel.Informational, '[MongoDB] connected');
  });

  mongoose.connection.on('error', () => {
    logger.log(SeverityLevel.Informational, '[MongoDB] error');
    // process.exit(1);
  });

  mongoose.connection.on('disconnected', () => {
    logger.log(SeverityLevel.Informational, '[MongoDB] disconnected');
    // process.exit(1);
  });

  Server.startServer();
})();
