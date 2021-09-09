/*
 * @Descripttion: 
 * @version: 
 * @Author: Xiaobo
 * @Date: 2021-09-04 19:42:56
 * @LastEditors: Xiaobo
 * @LastEditTime: 2021-09-09 19:38:48
 * @FilePath: \blackWhite\app\router.js
 */
'use strict';

const {
  Controller,
  Service
} = require("egg");

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller,
  } = app;
  router.get('/', controller.home.index);

/**
 * @name: 前端接口路由
 * @msg: 
 * @param {*}
 * @return {*}
 */  

  //用户登录
  router.post('/login', controller.home.postLogin);
  //用户注册
  router.post('/register', controller.home.postReg);
  //发送验证码
  router.post('/sendcode', controller.email.SendMail);
  //用户收货地址
  router.get('/address', controller.home.getAddress);



  /**
   * @name: 后台管理系统接口路由
   * @msg: 
   * @param {*}
   * @return {*}
   */  
  // 后台登录管理
  router.post('/admin', controller.admin.postAdmin);


  // 商品的增,删,改,查,多表查询
  router.post('/waresinsert', controller.wares.postWaresInsert);
  router.post('/waresdelete', controller.wares.postWaresDelete);
  router.post('/waresupdate', controller.wares.postWaresUpdate);
  router.post('/waresselect', controller.wares.postWaresSelect);
  router.get('/waresselecttabs', controller.wares.getWaresSelectTabs);
  
  
  
  
  
  
  
  
  


};