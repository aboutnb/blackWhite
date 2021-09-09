/*
 * @Descripttion: 
 * @version: 
 * @Author: Xiaobo
 * @Date: 2021-09-04 19:42:56
 * @LastEditors: Xiaobo
 * @LastEditTime: 2021-09-09 19:37:36
 * @FilePath: \blackWhite\app\controller\home.js
 */

'use strict';

const Controller = require('egg').Controller;
const utility = require("utility") //引入utility进行MD5加密

class HomeController extends Controller {
  async index(){
    const { ctx } = this;
    const res = await ctx.service.index.index();
    ctx.body = res;
  }
  // 用户登录 post
  async postLogin() {
    const {
      ctx
    } = this;
    const {
      uname,
      upwd
    } = await ctx.request.body
    const res = await ctx.service.user.userLogin(uname, "user");
    if (res != null) {
      let mdUpwd = utility.md5(upwd) //进行加密
      if (mdUpwd !== res.upwd) {
        ctx.body = {
          code: 202,
          message: '密码错误'
        }
      } else {
        delete res.upwd;
        ctx.body = {
          code: 200,
          message: '登录成功',
          userinfo: res
        }
      }
    } else {
      ctx.body = {
        code: 201,
        message: '用户不存在'
      }
    }
  }
  /** 用户名注册  post*/
  async postReg() {
    const {
      ctx
    } = this;
    // const resUemail = await ctx.service.user.getEmail()
    const resUname = await ctx.service.user.userReg()
    // 如果 result 返回结果为 undefined 则表示该用户已存在
    ctx.body = {
      message: resUname,
      code: '200'
    }

  }
  // 收货地址 get
  async getAddress() {
    const {
      ctx
    } = this;
    const res = await ctx.service.address.address();
    ctx.body = res
  }
}





module.exports = HomeController;