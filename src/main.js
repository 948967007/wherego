import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/idnex'
import Axios from 'axios'
import { Indicator } from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.prototype.Axios = Axios
import 'amfe-flexible'

import { 
  Swipe, SwipeItem, //  轮播
  Lazyload,   //懒加载
  Grid, GridItem,  //宫格
  Rate ,  // 评分
  Search , // 搜索
  IndexBar, IndexAnchor, //索引栏
  Cell, CellGroup,  // 单元格
  Icon,
  ImagePreview ,
} from 'vant';

Vue
  .use(Swipe).use(SwipeItem)
  .use(Lazyload)
  .use(Grid).use(GridItem)
  .use(Rate)
  .use(Search)
  .use(IndexBar).use(IndexAnchor)
  .use(Cell).use(CellGroup)
  .use(Icon)
  .use(ImagePreview)

  Axios.interceptors.request.use(function (config) {
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });
      return config;
    }, function (error) {
      return Promise.reject(error);
    });
  
  // Add a response interceptor
  Axios.interceptors.response.use(function (response) {
      setTimeout(()=>{
        Indicator.close();
      },500)
      return response;
    }, function (error) {
      return Promise.reject(error);
    });
Vue.config.productionTip = false
const Retreat =()=>import('./components/Retreat.vue')
Vue.component("Retreat",Retreat)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
