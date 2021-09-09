/*
 * @Descripttion: 
 * @version: 
 * @Author: Xiaobo
 * @Date: 2021-09-06 02:04:12
 * @LastEditors: Xiaobo
 * @LastEditTime: 2021-09-06 06:03:27
 * @FilePath: \blackWhite\app\controller\admin.js
 */
'use strict';

const Controller = require('egg').Controller;
const utility = require("utility") //引入utility进行MD5加密

class AdminController extends Controller {
  async postAdmin() {
    const {
      ctx
    } = this;
    const {
      admin_name,
      admin_pwd
    } = await ctx.request.body;
    const res = await ctx.service.user.userLogin(admin_name, "admin");
    if (res != null) {
      let adminPwd = utility.md5(admin_pwd) //进行加密
      console.log(adminPwd);
      if (adminPwd !== res.admin_pwd) {
        ctx.body = {
          code: 202,
          message: '密码错误'
        }
      } else {
        delete res.admin_pwd;
        ctx.body = {
          code: 200,
          message: '登录成功',
          userinfo: res
        }
      }
    } else {
      ctx.body = {
        code: 201,
        message: '管理员不存在'
      }
    }
  }
}

module.exports = AdminController;