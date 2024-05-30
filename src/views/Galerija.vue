<template>
  <div class="gallery">
    <button class="btn-create-exhibit" @click="kreirajIzlozbu">Kreiraj svoju izložbu</button>
    <div v-if="isGuest">
      <p>Dobrodošli, gost! Nemate mogućnost dodavanja slika ili komentiranja.</p>
      <div class="image-grid">
        <div v-for="slika in slike" :key="slika.id" class="image-item" @click="otvoriSliku(slika)">
          <img :src="require(`@/assets/${slika.url}`)" :alt="slika.opis">
        </div>
      </div>
    </div>
    <div v-else>
      <div class="exhibit-description">
        <input type="text" v-model="opisIzlozbe" placeholder="Moja prva virtualna izložba. Tehnika: suhi pastel. Autor: M.B.npm">
      </div>
      <div class="image-grid">
        <div v-for="slika in slike" :key="slika.id" class="image-item" @click="otvoriSliku(slika)">
          <img :src="require(`@/assets/${slika.url}`)" :alt="slika.opis">
          <textarea v-model="slika.komentar" placeholder="Unesite komentar"></textarea>
        </div>
      </div>
    </div>
    <div v-if="prikazanaSlika" class="modal" @click="zatvoriSliku">
      <div class="modal-content" @click.stop>
        <img :src="require(`@/assets/${prikazanaSlika.url}`)" :alt="prikazanaSlika.opis">
        <p>{{ prikazanaSlika.opis }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isGuest: false,
      slike: [
        { id: 1, url: 'ruke.jpg', opis: 'Opis slike 1', komentar: '' },
        { id: 2, url: 'zena.jpg', opis: 'Opis slike 2', komentar: '' },
        { id: 3, url: 'deda.jpg', opis: 'Opis slike 3', komentar: '' },
        { id: 4, url: 'beba.jpg', opis: 'Opis slike 4', komentar: '' },
        { id: 5, url: 'curica.jpg', opis: 'Opis slike 5', komentar: '' },
        { id: 6, url: 'zatvor.jpg', opis: 'Opis slike 6', komentar: '' },
        { id: 7, url: 'baka.jpg', opis: 'Opis slike 7', komentar: '' },
        { id: 8, url: 'cudenje.jpg', opis: 'Opis slike 8', komentar: '' }
      ],
      opisIzlozbe: '',
      prikazanaSlika: null
    }
  },
  created() {
    if (this.$route.name === 'Guest') {
      this.isGuest = true;
    }
  },
  methods: {
    kreirajIzlozbu() {
      this.$router.push({ name: 'KreirajIzlozbu' });
    },
    otvoriSliku(slika) {
      this.prikazanaSlika = slika;
    },
    zatvoriSliku() {
      this.prikazanaSlika = null;
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

.exhibit-description {
  background-color: #ff6996; 
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 15px;
}

.exhibit-description input[type="text"] {
  width: 70%;
  padding: 10px;
  border-radius: 5px;
  border: none;
}

.image-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start; /* Poravnavanje slika prema početku kontejnera */
  gap: 10px;
}

.image-item {
  width: calc(25% - 10px); /* Četvrtina širine s razmakom od 10px */
  margin-bottom: 10px;
}

.image-item img {
  width: 100%;
  max-height: 200px; /* Ograničavanje visine slika */
  object-fit: cover;
  border-radius: 5px;
}

textarea {
  width: 100%;
  padding: 8px;
  border-radius: 0 0 5px 5px;
  border: none;
  background-color: #ff6996; 
  color: black;
  margin-top: 0;
  resize: none; /* Onemogućava promjenu veličine textarea */
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: rgb(255, 255, 255);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
}

.modal-content img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
}
</style>