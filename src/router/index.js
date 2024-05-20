import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/ArtGallery.vue'
import ArtGallery from '../views/ArtGallery.vue'

const routes = [
  {
    path: '/',
    name: 'ArtGallery',
    component: ArtGallery
  },
  
  {
    path: '/galerija',
    name: 'Galerija',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Galerija.vue')
  },
  {
    path: '/prijava',
    name: 'Prijava',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Prijava.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
