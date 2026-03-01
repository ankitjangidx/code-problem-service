import { StatusCodes } from "http-status-codes";
import { BaseError } from "./base.error.js";


export class NotImplemented extends BaseError {
  constructor(methodName) {
    super(
      "NotImplemented",
      StatusCodes.NOT_IMPLEMENTED,
      `${methodName} Not Implemented`,
      {},
    );
  }
}
