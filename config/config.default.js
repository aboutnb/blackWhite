/*
 * @Descripttion: 
 * @version: 
 * @Author: Xiaobo
 * @Date: 2021-09-04 19:42:56
 * @LastEditors: Xiaobo
 * @LastEditTime: 2021-09-09 20:16:02
 * @FilePath: \blackWhite\config\config.default.js
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1630755769122_2533';

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '47.106.143.128',
      // 端口号
      port: '3306',
      // 用户名
      user: 'blackWhite',
      // 密码
      password: 'blackWhite_sql',
      // 数据库名
      database: 'blackwhite',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // add your middleware config here
  config.middleware = ['anther', 'errorHandler'];

  // 统一错误信息配置（注：match和ignore不可以同时配置）
  config.errorHandler = {
    enable: true, // 中间件开启配置
    match: '', // 设置请求中间件的请求路由
    // ignore: '', // 设置不经过这个中间件的请求路由
  };

  // 跨域请求
  config.cors = {
    origin: '*',
    allowMethods: 'GET,POST,PUT,HEAD,DELETE,PATCH'
  }

  config.security = {
    csrf: {
      // headerName: 'x-csrf-token',// 自定义请求头
      // 关闭CSRF
      enable: false
    }
  }
  //页面渲染配置
  const path = require('path');
  // const config = {};
  config.view = {
    root: [
      path.join(appInfo.baseDir, 'app/view'),
      // path.join(appInfo.baseDir, 'path/to/another'),
    ].join(',')
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};