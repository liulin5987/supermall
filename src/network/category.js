import {requset, request} from './request'

export function getCategorydata(){
  return request({
    url:'/category'
  })
}
export function getSubcatagory(maitKey){
  return request({
    url:'/subcategory',
    params:{
      maitKey
    }
  })
}
export function getSubDetail(miniWallkey,type){
  return request({
    url:'/subcategory/detail',
    params:{
      miniWallkey,
      type
    }
  })
}
