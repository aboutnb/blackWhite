/*
 * @Descripttion: 
 * @version: 
 * @Author: Xiaobo
 * @Date: 2021-09-07 23:33:31
 * @LastEditors: Xiaobo
 * @LastEditTime: 2021-09-08 02:39:18
 * @FilePath: \blackWhite\app\service\wares.js
 */
'use strict';

const Controller = require('egg').Controller;

class wController extends Controller {
    /**
     * @name: 添加商品
     * @msg: 
     * @param {*}
     * @return {*}
     */
    async waresInsert() {
        const {
            ctx
        } = this;
        const {
            classify_id,
            wares_name,
            wares_cover,
            wares_price,
            wares_title,
            wares_introduction
        } = ctx.request.body;
        const result = await this.app.mysql.insert("wares", {
            classify_id,
            wares_name,
            wares_cover,
            wares_price,
            wares_title,
            wares_introduction
        });
        if (result) {
            ctx.body = {
                message: '添加商品成功',
                waresinfo: result,
                code: 200
            }
        } else {
            ctx.body = {
                message: '添加商品失败',
                code: 201
            }
        }
    }
    /**
     * @name: 删除商品
     * @msg: 
     * @param {*}
     * @return {*}
     */
    async waresDelete() {
        const {
            ctx
        } = this;
        const {
            wares_id
        } = ctx.request.body;
        const result = await this.app.mysql.delete("wares", {
            wares_id: wares_id
        });
        if (result) {
            ctx.body = {
                message: '删除商品成功',
                waresinfo: result,
                code: 200
            }
        } else {
            ctx.body = {
                message: '删除商品失败',
                code: 201
            }
        }
    }
    /**
     * @name: 修改商品信息
     * @msg: 
     * @param {*}
     * @return {*}
     */
    async waresUpdate() {
        const {
            ctx
        } = this;
        const {
            wares_id,
            classify_id,
            wares_name,
            wares_cover,
            wares_price,
            wares_title,
            wares_introduction
        } = ctx.request.body;
        // 如果主键是自定义的 ID 名称，如 custom_id，则需要在 `where` 里面配置
        const row = {
            classify_id,
            wares_name,
            wares_cover,
            wares_price,
            wares_title,
            wares_introduction
        };
        const result = await this.app.mysql.update('wares', row, {
            wares_id
        }); // 更新 posts 表中的记录
        if (result) {
            ctx.body = {
                message: '更新商品成功',
                waresinfo: result,
                code: 200
            }
        } else {
            ctx.body = {
                message: '更新商品失败',
                code: 201
            }
        }
    }
    /**
     * @name: 查询单个商品信息
     * @msg: 
     * @param {*}
     * @return {*}
     */    
    async waresSelect() {
        const { ctx } = this;
        const { wares_id } = ctx.request.body;
        const result = await this.app.mysql.get('wares', {
            wares_id
        })
        console.info(result);
        if (result) {
            ctx.body = {
                message: '查询商品成功',
                waresinfo: result,
                code: 200
            }
        } else {
            ctx.body = {
                message: '该商品不存在',
                code: 201
            }
        }
    }
    /**
     * @name: 连表查询商品
     * @msg: 
     * @param {*}
     * @return {*}
     */    
    async waresSelectTabs() {
        const { ctx } = this;
        const sql =`select * from wares,classify where wares.classify_id = classify.classify_id`
        const result = await this.app.mysql.query(sql)
        console.info(result);
        if (result) {
            ctx.body = {
                message: '查询商品成功',
                waresinfo: result,
                code: 200
            }
        } else {
            ctx.body = {
                message: '查询失败',
                code: 201
            }
        }
    }
}

module.exports = wController;