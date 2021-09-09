// This file is created by egg-ts-helper@1.26.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdmin = require('../../../app/controller/admin');
import ExportEmail = require('../../../app/controller/email');
import ExportHome = require('../../../app/controller/home');
import ExportWares = require('../../../app/controller/wares');

declare module 'egg' {
  interface IController {
    admin: ExportAdmin;
    email: ExportEmail;
    home: ExportHome;
    wares: ExportWares;
  }
}
