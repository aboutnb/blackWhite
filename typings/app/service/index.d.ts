// This file is created by egg-ts-helper@1.26.0
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportAddress = require('../../../app/service/address');
import ExportAdmin = require('../../../app/service/admin');
import ExportEmail = require('../../../app/service/email');
import ExportIndex = require('../../../app/service/index');
import ExportUser = require('../../../app/service/user');
import ExportWares = require('../../../app/service/wares');

declare module 'egg' {
  interface IService {
    address: AutoInstanceType<typeof ExportAddress>;
    admin: AutoInstanceType<typeof ExportAdmin>;
    email: AutoInstanceType<typeof ExportEmail>;
    index: AutoInstanceType<typeof ExportIndex>;
    user: AutoInstanceType<typeof ExportUser>;
    wares: AutoInstanceType<typeof ExportWares>;
  }
}
