/*
 * @Descripttion: 
 * @version: 
 * @Author: Xiaobo
 * @Date: 2021-09-04 19:52:33
 * @LastEditors: Xiaobo
 * @LastEditTime: 2021-09-07 23:33:52
 * @FilePath: \blackWhite\app\service\user.js
 */
'use strict';

const Service = require('egg').Service;
const utility = require("utility") //引入utility进行MD5加密
const isEmail = require('outils/isEmail')

class UserService extends Service {
  //用户名登录 & 管理员登录
  async userLogin(name, biao) {
    try {
      const result = await this.app.mysql.get(biao, biao == "admin" ? isEmail(name) ? ({
        admin_email: name
      }) : ({
        admin_name: name
      }) : (isEmail(name) ? ({
        uemail: name
      }) : ({
        uname: name
      })));
      console.log(result);
      return result
    } catch (e) {
      return undefined
    }
  }
  //用户注册   邮箱&用户名
  async userReg() {
    const {
      ctx
    } = this;
    const {
      uname,
      upwd,
      uemail,
      code
    } = ctx.request.body;
    let cookiesCode = ctx.cookies.get(uemail, {
      encrypt: true, // 加密传输
    });
    console.log(cookiesCode);
    let mdUpwd = utility.md5(upwd) //进行加密
    let oldUser = await this.app.mysql.get('user', {
      uname: uname
    })
    console.info(oldUser);
    //如果该用户不存在则执行if中程序
    if (!oldUser) {
      if (code === cookiesCode) {
        const result = await this.app.mysql.insert("user", {
          uname: uname,
          upwd: mdUpwd,
          uemail: uemail,
        });
        this.ctx.cookies.set(uemail, cookiesCode, {
          maxAge: 0, //注册完成之后清除cookie
        });
        return result
      } else {
        return "验证码错误"
      }
    } else {
      return "用户已存在"
    }
  }
}

module.exports = UserService;
