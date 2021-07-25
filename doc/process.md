# 过程全记录

## 创建github仓库

## 初始化项目

使用vue-cli3初始化项目

1. vue 2.X
2. ts
3. Airbnb EsLint
4. Less
5. Vue-Router、Vuex（给网站使用的）

![image-20210725193400016](https://radishbear-figure-bed.oss-cn-beijing.aliyuncs.com/img/image-20210725193400016.png)

## 修改包名+创建packages文件夹

把src文件夹改为website文件夹，用于测试组件以及搭建文档官网

创建packages文件夹，用于存放组件

## 创建vue.config.js文件

创建vue.config.js文件，并对照上一部中文件名修改配置内容

## 修改tsconfig.json

按照修改后的文件夹名配置tsconfig

## 创建vue声明文件

## 编写组件demo

## 打包组件

npm run lib，详细见package配置

## 设置eslint忽略lib文件夹

lib文件夹存放的是打包后的组件，其中的内容都是经过修改的，无法通过eslint检测

想要在同一个项目内使用lib（website），就要在项目中让eslint忽略lib文件夹

## 编写组件声明文件

## 在website引入组件和css

## 测试

## ！！！当前最大的问题

### 问题描述

声明文件是半手动生成的

就算是在原本的项目里都没法直接使用自己的组件

### 解决方案

element-ui有一个打包时生成声明文件的脚本，看能不能拿来用

## 创建idc远程分支

idc分支用来存放website打包后的文件

## 配置ci文件

搞一个ci文件，用于在push时触发website的构建和部署

（这里的ci文件其实有ci cd的功能）

## 存疑

