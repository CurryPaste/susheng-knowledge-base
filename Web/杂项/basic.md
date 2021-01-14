# [findsoft-basic-v3](https://currypaste.github.io/vue-cli-plugin-findsoft-basic-v3/#/)

### 目录

##### 请求类封装axios
1. 只对请求地址做处理，对数据的操作还是放到vuex里。
2. 比如mock的地址，或不同身份请求的不同地址(teacher/admin)
3. 某些接口需要不同的header头，也可以在类里面处理。

##### 组件components
1. 引入了一个基础[icon](https://www.iconfont.cn/)，后续根据项目需要再引入其他icon即可。
2. icon的引入方式，照搬了新案例库的引入方式。

##### lib文件夹
1. 准备放置一些公用方法(例如时间处理)
2. 其他方法，如磊哥在案例库写的一个确认框处理。

##### 模拟数据[mock](http://mockjs.com/examples.html)
1. 通过.env 设置 VUE_APP_MOCK = 1 控制
2. 不需要更改请求接口，需要时设置 不为 1 的值，就可以使用mock启动

##### 路由router
1. 引入路由白名单和404页面-参考[vue-element-admin](https://panjiachen.github.io/vue-element-admin/)
2. 404：角色权限不匹配或页面不存在，通过url地址进入页面会进入404
3. 路由权限的判断方式采用的是角色组

##### 仓库vuex
1. 与v2没太大差别
2. 一个处理Boolean类型的方法，偷琪瑞的，很方便

##### 公共样式styles
1. 一些常用的样式，如布局、鼠标小手、超出显示点等。
2. 全局样式变量的引入，目前通过两个json文件控制([antd组件样式](https://github.com/vueComponent/ant-design-vue/blob/master/components/style/themes/default.less)、self样式)，以后再做优化处理(用户自选颜色)
3. json规则：可以使用 -  也可以用{} 最终编译都是 - 
4. [关于css原子化](https://juejin.cn/post/6917073600474415117)

##### types文件夹
1. 除了用swagger生成的interface，现在还放置了一些其他可能会用到的接口，如antd上传组件的回参Afile
2. 其他类，用得上就用。

##### views
1. 目前的编写规则
2. html处理业务逻辑、vuex处理数据、axios处理请求接口。

