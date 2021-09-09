/*
 * @Descripttion: 
 * @version: 
 * @Author: Xiaobo
 * @Date: 2021-09-04 19:42:56
 * @LastEditors: Xiaobo
 * @LastEditTime: 2021-09-09 20:07:22
 * @FilePath: \blackWhite\config\plugin.js
 */
'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  mysql:{
    enable: true,
    package: 'egg-mysql',
  },
  cors: {
    enable: true,
    package: "egg-cors",
  },
  nunjucks :{
    enable: true,
    package: 'egg-view-nunjucks',
  },
};
