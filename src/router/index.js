import { createRouter, createWebHistory } from 'vue-router'
import ArtGallery from '../views/ArtGallery.vue'
import Galerija from '../views/Galerija.vue'
import Prijava from '../views/Prijava.vue'
import KreirajIzlozbu from '../views/KreirajIzlozbu.vue' // Import the new view

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
    path: '/kreiraj-izlozbu',
    name: 'KreirajIzlozbu',
    component: KreirajIzlozbu
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router