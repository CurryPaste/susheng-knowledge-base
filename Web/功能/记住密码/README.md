# 网站上常见的记住密码功能
### 不使用浏览器自带的记住密码功能，而是通过cookie的存取实现

## 思路
1. 登录成功后，判断是否勾选了“记住密码”
  1. 勾选：将账号、密码（加密）、token，储存在cookie中
  2. 未勾：账号、密码（空），储存在cookie
2. 页面加载，从cookie中获取登录信息。赋值到表单

### 功能实现似乎不麻烦，主要考虑安全问题

### 密码加密解密：sha1、base64、jwt