import winston from "winston";

const allowedTrasnport = [];
allowedTrasnport.push(
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),

      winston.format.timestamp({
        format: "YYYY-MM-DD HH:MM:SS",
      }),

      winston.format.printf(
        (log) => `${log.timestamp} [${log.level}]: ${log.message}`,
      ),
    ),
  }),
);
allowedTrasnport.push(
  new winston.transports.File({
    filename: "log.txt",
  }),
);

export const Logger = winston.createLogger({
  format: winston.format.combine(
    // First argument to the combine define how we want the timestamp to come up
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:MM:SS",
    }),
    // Second arugment to the combine define what excatly going to print in log
    winston.format.printf(
      (log) => `${log.timestamp} [${log.level}]: ${log.message}`,
    ),
  ),
  transports: allowedTrasnport,
});
