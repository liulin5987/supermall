import Toast from "./Toast.vue"
//定义一个toast插件，之后在main.js中引用，在Vue初始化时就安装该插件，则可以在全局中使用$toast方法
const obj = {}

obj.install = function (Vue) {
  //1.创建组件构造器
  const toastConstructor = Vue.extend(Toast)
  //2.以组件构造器为模板，new一个组件对象
  const toast =  new toastConstructor()
  //3.将组件对象手动挂载到某一个元素上。类比根元素#app的挂载，如果不手动挂载的话，toast只是一个组件，无法正常在html中进行挂载
  //$mount是一个全局挂载的方法
  toast.$mount(document.createElement('div'))
  //4.toast.$el对应的就是第三步创建的d挂载了toast的div
  document.body.appendChild(toast.$el)
  //5.将Toast中的methods定义到全局方法$toast上，完成toast插件的安装
  //这个安装过程实现了两个功能，一个是创建了以Toast为原型的toast的div对象，另一个是为Vue添加了一个$toast全局方法
  Vue.prototype.$toast = toast
}

export default obj