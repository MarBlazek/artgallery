<template>
  <div class="login-container">
    <div class="form-container">
      <h2 class="login-title">PRIJAVA</h2>
      <form @submit.prevent="handleSubmit" class="login-form">
        <div class="form-group">
          <label for="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            v-model="form.email" 
            required>
        </div>
        <div class="form-group">
          <label for="lozinka">Lozinka:</label>
          <input 
            type="password" 
            id="lozinka" 
            v-model="form.lozinka" 
            required>
        </div>
        <button type="submit" class="btn-submit">POTVRDI</button>
      </form>
    </div>
    <div class="image-container">
      <img src="@/assets/maska.png" alt="Descriptive Alt Text" class="side-image" />
    </div>
  </div>
</template>

<script>
import { auth } from '@/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default {
  name: 'PrijavaPrijava',
  data() {
    return {
      form: {
        email: '',
        lozinka: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      console.log('Pokušaj prijave s:', this.form.email, this.form.lozinka);
      
      signInWithEmailAndPassword(auth, this.form.email, this.form.lozinka)
        .then((result) => {
          console.log('Uspješna prijava', result);
          this.$router.replace({name: 'ArtGallery'});

        })
        .catch((error) => {
          console.error('Greška pri prijavi:', error.message);
          alert(`Greška pri prijavi: ${error.message}`);
        });
    },
  },
};
</script>

<style lang="scss">
.login-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
  padding: 0 20px;
  margin-top: -30px; /* Prilagodite vrijednost prema potrebi */
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 15%; /* Postavljamo gornji rub form-container-a na 25% visine roditeljskog kontejnera */
  left: 50%;
  transform: translateX(-50%);
}

.login-title {
  margin-bottom: 20px;
  padding: 10px;
  font-size: 24px;
  font-weight: bold;
  background-color: #ff6996;
  color: black;
  border-radius: 5px;
  text-align: center;
}

.login-form {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.form-group {
  margin-bottom: 15px;
  display: flex; /* Dodajemo flex da bismo stavke poravnali u istom redu */
  align-items: center; /* Poravnaj oznaku i polje za unos */
}

label {
  display: inline-block;
  width: 160px; /* Povećavamo širinu oznake */
  color: white;
  margin-right: 10px; /* Razmak između oznake i polja za unos */
}

input {
  flex: 1; /* Koristite fleksibilan rast za polje unosa */
  padding: 8px;
  border-radius: 5px;
  border: none;
  background-color: #ff6996;
  color: black;
}

.btn-submit {
  background-color: #ff6996;
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  font-weight: bold;
  align-self: center; /* Centriranje gumba */
}

.btn-submit:hover {
  background-color: #ff4f81;
}

.image-container {
  position: absolute;
  right: 0; /* Pomak slike desno */
  top: 40%; /* Podizanje/spuštanje slike */
  transform: translateY(-50%);
  overflow: hidden; /* Kako bi pseudo-element bio vidljiv samo unutar kontejnera */
}

.side-image {
  max-width: 80%; /* Veličina slike */
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 30px 30px black; /* Prijelaz s crnom bojom */
}

.image-container::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: radial-gradient(circle at center, transparent, black 65%);
  pointer-events: none; /* Kako bi klikovi prolazili kroz pseudo-element */
}
</style>