<template>
  <div class="create-exhibit">
    <form @submit.prevent="submitExhibit">
      <div class="left-section">
        <div class="form-group">
          <label for="exhibit-description">Opis izložbe:</label>
          <textarea id="exhibit-description" v-model="exhibitDescription" required></textarea>
        </div>
        <div class="form-group">
          <label for="exhibit-images">Dodaj slike:</label>
          <input type="file" id="exhibit-images" @change="handleFileUpload" multiple required>
        </div>
        <croppa
          width="300"
          height="300"
          placeholder="Učitaj sliku..."
          v-model="imageReference"
          :output="{ width: 300, height: 300 }"
        ></croppa>
        <button type="submit" class="btn-submit">Kreiraj izložbu</button>
      </div>
      <div class="right-section">
        <div class="image-grid">
          <div v-for="image in exhibitImages" :key="image.id" class="image-item">
            <img :src="image.url" :alt="image.name">
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Croppa from 'vue-croppa';
import 'vue-croppa/dist/vue-croppa.css';
import { db, storage } from '@/firebase';

export default {
  components: {
    Croppa
  },
  data() {
    return {
      exhibitDescription: '',
      exhibitImages: [],
      imageReference: null // Za pohranu Croppa reference
    }
  },
  methods: {
    handleFileUpload(event) {
      const files = Array.from(event.target.files);
      this.exhibitImages = files.map((file, index) => ({
        id: index + 1,
        url: URL.createObjectURL(file),
        name: file.name
      }));
    },
    addCroppedImage() {
      if (this.imageReference) {
        this.imageReference.generateBlob(blob => {
          const url = URL.createObjectURL(blob);
          const newImage = {
            id: this.exhibitImages.length + 1,
            url: url,
            name: `croppa-image-${this.exhibitImages.length + 1}`
          };
          this.exhibitImages.push(newImage);

          // Spremi sliku u Firebase Storage
          storage
            .ref(newImage.name)
            .put(blob)
            .then(result => {
              result.ref.getDownloadURL().then(url => {
                console.log('Javni link', url);
                db.collection('posts')
                  .add({
                    url: url,
                    email: store.currentUser, // Ovaj dio trebaš provjeriti, jer se koristi store.currentUser, a vjerojatno je store dio neke globalne state biblioteke poput Vuex-a
                  })
                  .then((doc) => {
                    console.log('Spremljeno', doc);
                    this.getPosts(); // Ako ovo postoji u tvom kodu
                  })
                  .catch((e) => {
                    console.error(e);
                  });
              }).catch(e => {
                console.error(e);
              });
            }).catch(error => {
              console.error('Error uploading image:', error);
            });
        });
      }
    },
    submitExhibit() {
      // Ovdje dodaj logiku za obradu kreiranja izložbe
      console.log('Exhibit created:', {
        description: this.exhibitDescription,
        images: this.exhibitImages
      });
    }
  }
}
</script>

<style>
.create-exhibit {
  color: white;
  padding: 20px;
  background-color: black;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.left-section {
  width: 30%; /* Širina lijevog dijela */
  float: left;
}

.right-section {
  width: 70%; /* Širina desnog dijela */
  float: right;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group textarea,
.form-group input[type="file"] {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #ff6996; /* Rozo/narančasta boja */
  color: black;
  margin-top: 0;
}

.btn-submit {
  background-color: #ff6996;
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 20px;
}

.btn-submit:hover {
  background-color: #ff4f81;
}

/* Stilovi za galeriju slika */
.image-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.image-item {
  width: calc(25% - 10px); /* četvrtina širine sa razmakom od 10px */
  margin-bottom: 10px;
}

.image-item img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}
</style>