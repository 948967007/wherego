import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city:localStorage.getItem("city")||"西安"
  },
  mutations: {
    getCity(state,letter){
      // console.log(state,letter);
      state.city = letter
      localStorage.setItem("city",letter)
    }
  },
  actions: {

  }
})

/* import Vue from 'vue'
import Vuex from 'vuex'
import city from './city'
Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
    city
  },
}) */