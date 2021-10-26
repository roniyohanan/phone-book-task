import { SeverityLevel } from './severity-level';

export const logger = {
  log: (severityLevel: SeverityLevel, message: string): void => {
    console.log(`[${severityLevel}]: ${message}`);
  },
};
