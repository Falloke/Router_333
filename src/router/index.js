import { createRouter, createWebHistory } from 'vue-router'
import helloworld from '../components/HelloWorld.vue'
import shop1 from '../shop/shop1.vue'
import shop2 from '../shop/shop2.vue'
import shop3 from '../shop/shop3.vue'
import shop4 from '../shop/shop4.vue'
import shop5 from '../shop/shop5.vue'
import shop6 from '../shop/shop6.vue'
import shop7 from '../shop/shop7.vue'
import shop8 from '../shop/shop8.vue'






const routes = [
  {path: '/' , component: helloworld},
  {path: '/shop1' , component: shop1},
  {path: '/shop2' , component: shop2},
  {path: '/shop3' , component: shop3},
  {path: '/shop4' , component: shop4},
  {path: '/shop5' , component: shop5},
  {path: '/shop6' , component: shop6},
  {path: '/shop7' , component: shop7},
  {path: '/shop8' , component: shop8},

  


  ]
  
  const route = createRouter({ 
      history: createWebHistory(),
      routes,
  })
export default route