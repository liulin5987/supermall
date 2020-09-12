export default{
  cartlength(state){
    return state.product.length
  },
  total(state){
      return '￥' + state.product.filter(item => {
        return item.checked
      }).reduce((prevalue,item) => {
        return prevalue + item.price * item.count
      },0).toFixed(2)
  },
  sum(state){
    return state.product.filter(item => {return item.checked}).length
  },
  isSelectAll(state){
    return ! (state.product.find(item => !item.checked)) && state.product.length > 0
  }
}