/*
 * @Descripttion: 
 * @version: 
 * @Author: Xiaobo
 * @Date: 2021-09-06 20:56:00
 * @LastEditors: Xiaobo
 * @LastEditTime: 2021-09-07 17:47:49
 * @FilePath: \blackWhite\app\service\email.js
 */

'use strict';

const Service = require('egg').Service;

const nodemailer = require('nodemailer');
const USER_EMAIL = 'nanbo720@foxmail.com';
// const user_email = 'aboutnanbo@163.com';
const AUTH_CODE = 'chmjwodtylkvbidd';
// const auth_code = 'wowndxjsgtmunhnd';

const transporter = nodemailer.createTransport({
  host: 'smtp.qq.com',
  //   host: 'smtp.gmail.com',	
  secureConnection: true,
  port: 587,
  auth: {
    user: USER_EMAIL, // 账号
    pass: AUTH_CODE, // 授权码

  },
});

class ToolService extends Service {

  /**
   * @name sendMail 发送邮件
   * @param String email
   * @param String subject 标题
   * @param String text 文本
   * @param String html html文本
   * @return {*}
   */
  async sendMail(email) {
    //设置邮箱文章标题
    const subject = "黑白调"
    const text = ' ';
    //随机生成10进制验证码
    let randomStr = (length) => {
      var str = Math.random().toString(10).substr(2);
      if (str.length >= length) {
        return str.substr(0, length);
      }
      str += randomStr(length - str.length);
      return str;
    }
    //调用随机验证码函数 并传入验证码位数
    const code = randomStr(6);
    
    this.ctx.cookies.set(email, code, {
      maxAge: 1000 * 59 * 10,//10分钟
      httpOnly: true,
      signed: true, // 对 Cookies 进行签名，防止用户修改
      encrypt: true, // 对 Cookies 进行加密，同时获取时ye需要解密
    });
    const mailOptions = {
      from: USER_EMAIL, // 发送者,与上面的user一致
      to: email, // 接收者,可以同时发送多个,以逗号隔开
      subject, //邮箱文章标题
      text, 
      html: `
      <div
      style="padding-left: 20px;
      margin:0 auto;
      width:500px;
      height:400px;
      background-color: #A9C9FF;
      background-image: linear-gradient(180deg, #000 20%, #fff 100%);
      border-radius: 20px;
      color: #fff;">
      <br />
      <p>
      <h3>您本次注册的验证码是</h3>
      </p>
      <p>【黑白调】亲爱的用户，您的验证码为${code}，若非本人操作，请勿泄露，验证码10分钟内有效。 </p>
      <h3 style="position:absolute;bottom: 0px;color:#000">
      by --好凉凉项目小组
      </h3>
    </div>
    `
    };

    try {
      let a = await transporter.sendMail(mailOptions);
      console.log(a)
      return true;
    } catch (err) {
      return false;
    }
  }

}

module.exports = ToolService;