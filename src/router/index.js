import { createRouter, createWebHistory } from 'vue-router'
import ArtGallery from '../views/ArtGallery.vue'
import Galerija from '../views/Galerija.vue'
import Prijava from '../views/Prijava.vue'

// Dodavanje novih komponenti
const Registracija = () => import(/* webpackChunkName: "registracija" */ '../views/Registracija.vue')
const PrijavaPrijava = () => import(/* webpackChunkName: "prijavaprijava" */ '../views/PrijavaPrijava.vue')

const routes = [
  {
    path: '/',
    name: 'ArtGallery',
    component: ArtGallery
  },
  {
    path: '/galerija',
    name: 'Galerija',
    component: Galerija
  },
  {
    path: '/prijava',
    name: 'Prijava',
    component: Prijava
  },
  {
    path: '/signup',
    name: 'Registracija',
    component: Registracija
  },
  {
    path: '/signin',
    name: 'PrijavaPrijava',
    component: PrijavaPrijava
  },
  {
    path: '/guest',
    name: 'Guest',
    component: Galerija
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router