<template>
  <div class="gallery">
    <div v-if="isGuest">
      <p>Dobrodošli, gost! Nemate mogućnost dodavanja slika ili komentiranja.</p>
      <div class="image-grid">
        <div v-for="slika in slike" :key="slika.id" class="image-item">
          <img :src="require(`@/assets/${slika.url}`)" :alt="slika.opis">
        </div>
      </div>
    </div>
    <div v-else>
      <div class="image-grid">
        <div v-for="slika in slike" :key="slika.id" class="image-item">
          <img :src="require(`@/assets/${slika.url}`)" :alt="slika.opis">
          <textarea v-model="slika.komentar" placeholder="Unesite komentar"></textarea>
        </div>
      </div>
      <div class="add-image-form">
        <input type="file" @change="dodajSliku" ref="fileInput">
        <input type="text" v-model="novaSlikaOpis" placeholder="Opis slike">
        <button @click="dodajNovuSliku" class="btn-submit">Dodaj sliku</button>
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
        { id: 1, url: 'slika1.jpg', opis: 'Opis slike 1', komentar: '' },
        { id: 2, url: 'slika2.jpg', opis: 'Opis slike 2', komentar: '' },
        { id: 3, url: 'slika3.jpg', opis: 'Opis slike 3', komentar: '' },
        { id: 4, url: 'slika4.jpg', opis: 'Opis slike 4', komentar: '' },
        { id: 5, url: 'slika5.jpg', opis: 'Opis slike 5', komentar: '' },
        { id: 6, url: 'slika6.jpg', opis: 'Opis slike 6', komentar: '' },
        { id: 7, url: 'slika7.jpg', opis: 'Opis slike 7', komentar: '' },
        { id: 8, url: 'slika8.jpg', opis: 'Opis slike 8', komentar: '' }
      ],
      novaSlikaUrl: '',
      novaSlikaOpis: ''
    }
  },
  created() {
    if (this.$route.name === 'Guest') {
      this.isGuest = true;
    }
  },
  methods: {
    dodajSliku(event) {
      const file = event.target.files[0];
      this.novaSlikaUrl = URL.createObjectURL(file);
    },
    dodajNovuSliku() {
      if (this.novaSlikaUrl && this.novaSlikaOpis) {
        const novaSlika = {
          id: this.slike.length + 1,
          url: this.novaSlikaUrl,
          opis: this.novaSlikaOpis,
          komentar: ''
        };
        this.slike.push(novaSlika);
        this.novaSlikaUrl = '';
        this.novaSlikaOpis = '';
        this.$refs.fileInput.value = null;
      } else {
        alert('Molimo unesite sve podatke.');
      }
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
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.image-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-item img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

textarea {
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: none;
  background-color: #ff6996; /* Rozo/narančasta boja */
  color: black;
  margin-top: 10px;
  resize: none; /* Onemogućava promjenu veličine textarea */
}

.add-image-form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.add-image-form input[type="file"] {
  margin-bottom: 10px;
}

.add-image-form input[type="text"] {
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
}

.btn-submit {
  background-color: #ff6996;
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

.btn-submit:hover {
  background-color: #ff4f81;
}
</style>
