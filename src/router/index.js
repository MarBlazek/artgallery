import { createRouter, createWebHistory } from 'vue-router'
import ArtGallery from '../views/ArtGallery.vue'
import Galerija from '../views/Galerija.vue'
import PrijavaLanding from '../views/PrijavaLanding.vue' // Stranica s izborom
import Prijava from '../views/Prijava.vue' // Stranica za prijavu
import Registracija from '../views/Registracija.vue' // Stranica za registraciju
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
    path: '/prijava-izbor', // Nova ruta za stranicu s izborom
    name: 'PrijavaLanding',
    component: PrijavaLanding
  },
  {
    path: '/prijava', // Ruta za prijavu
    name: 'Prijava',
    component: Prijava
  },
  {
    path: '/registracija', // Ruta za registraciju
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