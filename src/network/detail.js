import {request} from './request'

export function getitemdata(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}
export function getRecommend(){
  return request({
    url:'/recommend'
  })
}
export class goods{
  constructor(res,itemInfo,columns,services){
    this.iid = res.iid
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.desc = itemInfo.desc
    this.lowPrice = itemInfo.lowPrice
    this.oldPrice = itemInfo.oldPrice
    this.discountDesc = itemInfo.discountDesc
    this.columns = columns
    this.services = services[services.length-1].name
  }
}
export class shopInfo{
  constructor(shopInfo){
    this.shopLogo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.shopUrl = shopInfo.shopUrl
    this.sells = shopInfo.cSells
    this.goods = shopInfo.cGoods
    this.fans = shopInfo.fans
    this.score = shopInfo.score
  }
}
export class productinfo{
  constructor(itemParams){
    this.info = itemParams.info.set
    this.desc = itemParams.rule.desc
    this.claim = itemParams.rule.disclaimer
    this.table = itemParams.rule.tables
  }
}