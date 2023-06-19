const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

const errorsMessage = (num1, num2) => {
    try {
        const suma = num1 + num2
        logger.log(suma);
    } catch (error) {
        logger.error(error);
    }
}

errorsMessage  ("hola" , 3)