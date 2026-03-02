import { StatusCodes } from "http-status-codes";
import { BaseError } from "../errors/base.error.js";
import { Logger } from "../config/logger.config.js";

export function errorHandler(err, req, res, next) {
  Logger.error(`${err.message} : ${JSON.stringify(err.details)}`);
  if (err instanceof BaseError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      error: err.details,
      data: {}, // because this is an exception so no data is going to be provided
    });
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: "Something went wrong !",
    error: err,
    data: {}, // because this is an exception so no data is going tobe provided
  });
}
