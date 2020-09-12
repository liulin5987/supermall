export default {
  additems(context, payload) {
    //actions中的方法返回的是一个promise对象，可以利用这一点，对事件是否完成，做一个监听
    return new Promise((resolve, reject) => {
      let oldproduct = null;
      // let oldproduct = context.state.product.find(item => item.iid === payload.iid),也可以使用find方法直接找到重复的项目
      for (let item of context.state.product) {
        if (item.iid === payload.iid) {
          oldproduct = item;
        }
      }
      if (oldproduct) {
        // oldproduct.count += 1
        context.commit("addcount", oldproduct);
        resolve('商品数量+1')
      } else {
        payload.count = 1;
        // context.state.product.push(payload)
        context.commit("addToCart", payload);
        resolve('商品已添加到购物车')
      }
    });
  },
};
