import { createRouter, createWebHistory } from 'vue-router'
import ArtGallery from '../views/ArtGallery.vue'
import Galerija from '../views/Galerija.vue'
import Prijava from '../views/Prijava.vue'
import PrijavaPrijava from '../views/PrijavaPrijava.vue'
import Registracija from '../views/Registracija.vue'
import KreirajIzlozbu from '../views/KreirajIzlozbu.vue'

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
    path: '/signin',
    name: 'PrijavaPrijava',
    component: PrijavaPrijava
  },
  {
    path: '/signup',
    name: 'Registracija',
    component: Registracija
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