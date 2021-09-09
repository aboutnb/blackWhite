// This file is created by egg-ts-helper@1.26.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAnther = require('../../../app/middleware/anther');
import ExportErrorHandler = require('../../../app/middleware/error_handler');

declare module 'egg' {
  interface IMiddleware {
    anther: typeof ExportAnther;
    errorHandler: typeof ExportErrorHandler;
  }
}
