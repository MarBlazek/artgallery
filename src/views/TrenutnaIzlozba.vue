<template>
    <div class="exhibit">
      <h2>{{ exhibit.description }}</h2>
      <div class="image-grid">
        <div v-for="image in exhibitImages" :key="image.url" class="image-item">
          <img :src="image.url" :alt="image.name">
        </div>
      </div>
    </div>
  </template>

  <script>
  import { db } from '@/firebase';
  import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
  
  export default {
    data() {
      return {
        exhibit: {},
        exhibitImages: []
      };
    },
    async created() {
      const exhibitId = this.$route.params.id;
      await this.fetchExhibit(exhibitId);
    },
    methods: {
      async fetchExhibit(exhibitId) {
        const exhibitDoc = await getDoc(doc(db, 'exhibits', exhibitId));
        if (exhibitDoc.exists()) {
          this.exhibit = exhibitDoc.data();
          this.exhibitImages = this.exhibit.images;
        } else {
          console.error('No such document!');
        }
      }
    }
  };
  </script>

  <style scoped>
  .exhibit {
    color: white;
    padding: 20px;
    background-color: black;
    min-height: 100vh;
    position: relative;
}
.image-grid {
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: flex-start;
gap: 10px;
}
.image-item {
width: calc(25% - 10px);
margin-bottom: 10px;
}
.image-item img {
width: 100%;
max-height: 200px;
object-fit: cover;
border-radius: 5px;
}
</style>