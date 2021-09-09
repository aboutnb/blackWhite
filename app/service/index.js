/*
 * @Descripttion: 
 * @version: 
 * @Author: Xiaobo
 * @Date: 2021-09-09 19:33:08
 * @LastEditors: Xiaobo
 * @LastEditTime: 2021-09-09 20:19:07
 * @FilePath: \blackWhite\app\service\index.js
 */
'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
    async index() {
        const html = `<h1 style="margin-top:30px; text-align:center;">黑白调</h1>`;
        return html;
    }
}

module.exports = IndexController;