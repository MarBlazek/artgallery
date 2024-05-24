<template>
    <div class="create-exhibit">
      <h1>Kreiraj svoju izložbu</h1>
      <form @submit.prevent="submitExhibit">
        <div class="form-group">
          <label for="exhibit-name">Naziv izložbe:</label>
          <input type="text" id="exhibit-name" v-model="exhibitName" required>
        </div>
        <div class="form-group">
          <label for="exhibit-description">Opis izložbe:</label>
          <textarea id="exhibit-description" v-model="exhibitDescription" required></textarea>
        </div>
        <div class="form-group">
          <label for="exhibit-images">Dodaj slike:</label>
          <input type="file" id="exhibit-images" @change="handleFileUpload" multiple required>
        </div>
        <button type="submit" class="btn-submit">Kreiraj izložbu</button>
      </form>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      exhibitName: '',
      exhibitDescription: '',
      exhibitImages: []
    }
  },
  methods: {
    handleFileUpload(event) {
      this.exhibitImages = Array.from(event.target.files);
    },
    submitExhibit() {
      // Handle exhibit creation logic here, such as uploading images and saving exhibit details
      console.log('Exhibit created:', {
        name: this.exhibitName,
        description: this.exhibitDescription,
        images: this.exhibitImages
      });
      // Redirect or show a success message after creation
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
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input[type="text"],
.form-group textarea,
.form-group input[type="file"] {
  width: 100%;
  padding: 10px;
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
  font-weight: bold;
}

.btn-submit:hover {
  background-color: #ff4f81;
}
</style>