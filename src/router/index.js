import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Home= () => import("../views/Home/Home.vue")
const Search= () => import("../views/Search/Search.vue")
const City= () => import("../views/City/City.vue")
const Particulars= () => import("../views/Home/childRouter/LikeChild/Particulars.vue")
const Week= () => import("../views/Home/childRouter/LikeChild/Week/Week.vue")

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
    {
      path:"/home",
      name:"home",
      component:Home,
    },
    {
      path:"/search",
      name:"search",
      component:Search,
    },
    {
      path:"/city",
      name:"city",
      component:City,
    },
    {
      path:"/particulars/:id",
      name:"particulars",
      component:Particulars,
    },
    {
      path:"/week/:id",
      name:"week",
      component:Week,
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
