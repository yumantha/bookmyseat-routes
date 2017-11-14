import Vue from 'vue'
import Router from 'vue-router'
import RoutesHome from '../components/RoutesHome.vue'
import NewRoute from '../components/NewRoute.vue'
import SearchRoutes from '../components/SearchRoutes.vue'
import SearchResults from '../components/SearchResults.vue'
import EditRoute from '../components/EditRoute.vue'

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'RoutesHome',
      component: RoutesHome
    },
    {
      path: '/routes/new',
      name: 'NewRoute',
      component: NewRoute
    },
    {
      path: '/routes/search',
      name: 'SearchRoutes',
      component: SearchRoutes
    },
    {
      path: '/routes/search/results',
      name: 'SearchResults',
      component: SearchResults
    },
    {
      path: '/routes/:id/edit',
      name: 'EditRoute',
      component: EditRoute
    }
  ]
})
