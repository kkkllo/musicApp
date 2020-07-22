import Vue from 'vue'
import Router from 'vue-router'

import Singer from 'comp/singer/singer'
import Search from 'comp/search/search'
import Recommend from 'comp/recommend/recommend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Recommend
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/Recommend',
      name: 'recommend',
      component: Recommend
    }
  ]
})
