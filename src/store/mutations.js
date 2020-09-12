export default{
  addcount(state,payload){
    payload.count += 1
  },
  addToCart(state,payload){
    state.product.push(payload)
  }
}