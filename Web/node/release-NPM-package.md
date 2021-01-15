# 发布自己的npm包

### 发布

1. 注册[npm账号](https://www.npmjs.com/)
2. 登录npm账户 ```npm login```
3. 初始化项目 ```npm init```
4. + 字段简介
   + name：发布的包名，默认上级文件夹名。不得与现在npm中的包名重复。包名不能有大写字母/空格/下滑线!
   + version：你这个包的版本，默认是1.0.0。对于npm包的版本号有着一系列的规则，模块的版本号采用X.Y.Z的格式，具体体现为：
      - 修复bug，小改动，增加z。
      - 增加新特性，可向后兼容，增加y
      - 有很大的改动，无法向下兼容,增加x
   + description：项目简介
   + mian：入口文件，默认是```index.js```，可以修改成自己的文件 
   + scripts：包含各种脚本执行命令
   + test：测试命令
   + author：作者
   + license：这个直接回车，开源文件协议也可以是MIT。
5. 此时在包目录下已生成```package.json```配置文件，我们还需创建```README.md```和引入包的入口js文件（与```package.json```配置文件中的main字段对应，默认为```index.js```)，然后编辑发布包的内容
6. ```npm publish```

### 更新
1. 按照 ```version``` 规则，更改```package.json```
2. ```npm publish```