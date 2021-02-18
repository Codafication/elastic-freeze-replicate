import * as winston from "winston";
const { colorize, combine, json } = winston.format;

const errorStackFormat = winston.format((info) =>
  info instanceof Error ? { ...info, message: info.stack as string } : info
);

const level = process.env.LOG_LEVEL
  ? process.env.LOG_LEVEL
  : process.env.NODE_ENV === "production"
  ? "error"
  : "info";

const format = combine(colorize(), errorStackFormat(), json());

const defaultLogger = winston.createLogger({
  level,
  format,
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  ],
});

export default defaultLogger;
