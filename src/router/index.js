import { createRouter, createWebHistory } from 'vue-router'
import ArtGallery from '../views/ArtGallery.vue'
import Galerija from '../views/Galerija.vue'
import PrijavaLanding from '../views/PrijavaLanding.vue' // Promijenjeno ime komponente
import Prijava from '../views/Prijava.vue'
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
    path: '/prijava-izbor', // Ruta za stranicu sa gumbima
    name: 'PrijavaLanding',
    component: PrijavaLanding
  },
  {
    path: '/prijava', // Ruta za stvarnu stranicu prijave
    name: 'Prijava',
    component: Prijava
  },
  {
    path: '/registracija',
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