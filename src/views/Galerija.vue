<template>
  <div class="gallery">
    <h1>Galerija</h1>
    <div v-if="isGuest">
      <p>Dobrodošli, gost! Nemate mogućnost dodavanja slika ili komentiranja.</p>
      <!-- Prikaz slika za goste -->
    </div>
    <div v-else>
      <p>Ovdje su dodatne funkcionalnosti za prijavljene korisnike.</p>
      <!-- Funkcionalnosti za prijavljene korisnike -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isGuest: false // Ovdje možete provjeriti je li korisnik gost
    }
  },
  created() {
    // Provjera je li korisnik došao kao gost
    if (this.$route.name === 'Guest') {
      this.isGuest = true;
    }
  }
}
</script>

<style>
/* Stilovi za galeriju */
.gallery {
  color: white;
  padding: 20px;
}
</style>
