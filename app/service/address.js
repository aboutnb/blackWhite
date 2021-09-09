/*
 * @Descripttion: 
 * @version: 
 * @Author: Xiaobo
 * @Date: 2021-09-05 14:09:15
 * @LastEditors: Xiaobo
 * @LastEditTime: 2021-09-05 21:41:36
 * @FilePath: \blackWhite\app\service\address.js
 */

'use strict';

const Controller = require('egg').Controller;

class AddressController extends Controller {
  async address() {
    let result = await this.app.mysql.select('deliver_address')
    console.log(result)
    return result
  }
}

module.exports = AddressController;
