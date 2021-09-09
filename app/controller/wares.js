/*
 * @Descripttion: 
 * @version: 
 * @Author: Xiaobo
 * @Date: 2021-09-07 23:32:54
 * @LastEditors: Xiaobo
 * @LastEditTime: 2021-09-08 02:38:55
 * @FilePath: \blackWhite\app\controller\wares.js
 */
'use strict';

const Controller = require('egg').Controller;

class WaresController extends Controller {
    /**
     * @name: 调用添加商品方法
     * @msg: 
     * @param {*}
     * @return {*}
     */
    async postWaresInsert() {
        await this.ctx.service.wares.waresInsert();
    }
    /**
     * @name: 调用删除商品方法
     * @msg: 
     * @param {*}
     * @return {*}
     */
    async postWaresDelete() {
        await this.ctx.service.wares.waresDelete();
    }
    /**
     * @name: 调用修改商品信息方法 
     * @msg: 
     * @param {*}
     * @return {*}
     */    
    async postWaresUpdate() {
        await this.ctx.service.wares.waresUpdate();
    }
    /**
     * @name: 调用查询指定id商品方法
     * @msg: 
     * @param {*}
     * @return {*}
     */    
    async postWaresSelect() {
        await this.ctx.service.wares.waresSelect();
    }
    /**
     * @name: 调用连表查询方法
     * @msg: 
     * @param {*}
     * @return {*}
     */    
    async getWaresSelectTabs() {
        await this.ctx.service.wares.waresSelectTabs();
    }
}

module.exports = WaresController;