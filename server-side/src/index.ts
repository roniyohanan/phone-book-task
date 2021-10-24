import * as mongoose from 'mongoose';
import { Server } from './server';
import { config } from './config';

const initMongo = async (): Promise<void> => {
  await mongoose.connect(config.db.connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
};

(async () => {
  await initMongo();
  Server.startServer();
})();
