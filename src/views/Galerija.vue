<template>
  <div class="gallery">
    <button class="btn-create-exhibit" @click="kreirajIzlozbu">Kreiraj svoju izložbu</button>
    <div v-if="isGuest">
      <p>Dobrodošli, gost! Nemate mogućnost dodavanja slika ili komentiranja.</p>
      <div class="image-grid">
        <div v-for="exhibit in exhibits" :key="exhibit.id" class="exhibit-card" @click="otvoriIzlozbu(exhibit.id)">
          <p>{{ exhibit.description }}</p>
          <!-- Dodajte prikaz slika izložbe -->
          <div v-for="image in exhibit.images" :key="image.id" class="image-item">
            <img :src="image.url" :alt="image.name">
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="image-grid">
        <div v-for="exhibit in exhibits" :key="exhibit.id" class="exhibit-card" @click="otvoriIzlozbu(exhibit.id)">
          <p>{{ exhibit.description }}</p>
          <!-- Dodajte prikaz slika izložbe -->
          <div v-for="image in exhibit.images" :key="image.id" class="image-item">
            <img :src="image.url" :alt="image.name">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default {
  data() {
    return {
      isGuest: false,
      exhibits: []
    }
  },
  created() {
    if (this.$route.name === 'Guest') {
      this.isGuest = true;
    }
    this.fetchExhibits();
  },
  methods: {
    kreirajIzlozbu() {
      this.$router.push({ name: 'KreirajIzlozbu' });
    },
    async fetchExhibits() {
      const querySnapshot = await getDocs(collection(db, 'exhibits'));
      this.exhibits = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    },
    otvoriIzlozbu(exhibitId) {
      this.$router.push({ name: 'Exhibit', params: { id: exhibitId } });
    }
  }
}
</script>

<style>
.gallery {
  color: white;
  padding: 20px;
  background-color: black;
  min-height: 100vh;
  position: relative;
}

.btn-create-exhibit {
  background-color: #ff6996;
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  position: absolute;
  top: 20px;
  right: 20px;
}

.btn-create-exhibit:hover {
  background-color: #ff4f81;
}

.exhibit-card {
  background-color: #333;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;
}

.exhibit-card:hover {
  background-color: #444;
}

.exhibit-thumbnail {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 5px;
}

.image-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
}
</style>