<template>
  <div class="registration-container">
    <div class="form-container">
      <h2 class="registration-title">REGISTRACIJA</h2>
      <form @submit.prevent="handleSubmit" class="registration-form">
        <div class="form-group">
          <label for="ime">Ime:</label>
          <input 
            type="text" 
            id="ime" 
            v-model="form.ime" required>
        </div>
        <div class="form-group">
          <label for="korisnicko-ime">Korisničko ime:</label>
          <input 
            type="text" 
            id="korisnicko-ime" 
            v-model="form.korisnickoIme" required>
        </div>
        <div class="form-group">
          <label for="email">E-mail:</label>
          <input 
            type="email" 
            id="email" 
            v-model="form.email" required>
        </div>
        <div class="form-group">
          <label for="lozinka">Lozinka:</label>
          <input 
            type="password" 
            id="lozinka" 
            v-model="form.lozinka" required>
        </div>
        <button type="submit" class="btn-submit">POTVRDI</button>
        <p v-if="registracijaUspjesna" class="success-message">Registracija je uspješna!</p>
      </form>
    </div>
    <div class="image-container">
      <img src="@/assets/maska.png" alt="Descriptive Alt Text" class="side-image" />
    </div>
  </div>
</template>

<script>
import { auth } from '@/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default {
  name: 'Registracija',
  data() {
    return {
      form: {
        ime: '',
        korisnickoIme: '',
        email: '',
        lozinka: ''
      },
      registracijaUspjesna: false
    }
  },
  methods: {
    handleSubmit() {
      console.log('Registracija button clicked');
      console.log('Form data:', this.form);
      createUserWithEmailAndPassword(auth, this.form.email, this.form.lozinka)
        .then(() => {
          console.log('Uspješna registracija');
          this.registracijaUspjesna = true;
        })
        .catch((error) => {
          console.error("Došlo je do greške", error);
        });
      console.log('Nastavak');
    },
  },
};
</script>

<style scoped>
.success-message {
  color: green;
}
</style>

<style lang="scss">
.registration-container {
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

.registration-title {
  margin-bottom: 20px;
  padding: 10px;
  font-size: 24px;
  font-weight: bold;
  background-color: #ff6996;
  color: black;
  border-radius: 5px;
  text-align: center;
}

.registration-form {
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
  