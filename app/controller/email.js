/*
 * @Descripttion: 
 * @version: 
 * @Author: Xiaobo
 * @Date: 2021-09-06 21:12:09
 * @LastEditors: Xiaobo
 * @LastEditTime: 2021-09-07 15:29:41
 * @FilePath: \blackWhite\app\controller\email.js
 */

'use strict';

const Controller = require('egg').Controller;
const isEmail = require('outils/isEmail')

class EmailController extends Controller {

	/**
	 * @name SendMail 发送邮件
	 * @param email 接收者的邮箱
	 * @param subject 邮件标题
	 * @param text 文本内容
	 * @param html html内容
	 * @return {*}
	 */
	async SendMail() {
		const ctx = this.ctx;
		const {
			email,
		} = ctx.request.body;
		if(isEmail(email)){
			let oldEmail = await this.app.mysql.get('user', {
				uemail: email
			})
			if (oldEmail) {
				ctx.body = {
					code: 201,
					message: '该邮箱已存在',
				};
			} else {
				const has_send = await this.service.email.sendMail(email);
				if (has_send) {
					ctx.body = {
						code: 200,
						message: '发送成功',
						email: email
					};
					return;
				}
			}
		}else{
			ctx.body = {
				code: 203,
				message: '邮箱格式不正确',
			};
		}
	}
}

module.exports = EmailController;