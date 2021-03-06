import Vue from 'vue'
import Router from 'vue-router'
import Horses from '@/components/Horses'
import Horse from '@/components/Horse'
import AddHorse from '@/components/AddHorse'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Horses',
      component: Horses
    },
    {
      path: '/horse/:id',
      name: 'Horse',
      component: Horse,
      props: route => ({ id: Number(route.params.id) })
    },
    {
      path: '/add',
      name: 'AddHorse',
      component: AddHorse
    }
  ]
})
