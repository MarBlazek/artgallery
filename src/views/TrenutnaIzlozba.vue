<template>
    <div class="exhibit">
      <h2>{{ exhibit.description }}</h2>
      <div class="image-grid">
        <div v-for="image in exhibitImages" :key="image.url" class="image-item">
          <img :src="image.url" :alt="image.name">
          <div class="comments-section">
            <div v-for="comment in image.comments" :key="comment.id" class="comment">
              {{ comment.text }}
            </div>
            <input v-if="currentUser" v-model="newComments[image.name]" @keyup.enter="addComment(image.name)" placeholder="Add a comment...">
            <p v-else>Morate biti prijavljeni da biste dodali komentar.</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { db } from '@/firebase';
  import { doc, getDoc, collection, getDocs, addDoc } from 'firebase/firestore';
  import store from '@/store';
  
  export default {
    data() {
      return {
        exhibit: {},
        exhibitImages: [],
        newComments: {},
        currentUser: null
      };
    },
    async created() {
      const exhibitId = this.$route.params.id;
      await this.fetchExhibit(exhibitId);
      this.currentUser = store.currentUser;
    },
    methods: {
      async fetchExhibit(exhibitId) {
        const exhibitDoc = await getDoc(doc(db, 'exhibits', exhibitId));
        if (exhibitDoc.exists()) {
          this.exhibit = exhibitDoc.data();
          this.exhibitImages = this.exhibit.images;
          for (let image of this.exhibitImages) {
            image.comments = await this.fetchComments(image.name);
          }
        } else {
          console.error('No such document!');
        }
      },
      async fetchComments(imageName) {
        const comments = [];
        const commentsSnapshot = await getDocs(collection(db, 'comments', imageName, 'imageComments'));
        commentsSnapshot.forEach(doc => {
          comments.push({ id: doc.id, ...doc.data() });
        });
        return comments;
      },
      async addComment(imageName) {
        if (!this.currentUser) {
          alert('Morate biti prijavljeni da biste dodali komentar.');
          return;
        }
        const newComment = this.newComments[imageName];
        if (newComment) {
          await addDoc(collection(db, 'comments', imageName, 'imageComments'), { text: newComment, userId: this.currentUser });
          this.newComments[imageName] = '';
          const image = this.exhibitImages.find(img => img.name === imageName);
          if (image) {
            image.comments = await this.fetchComments(imageName);
          }
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
  .comments-section {
    margin-top: 10px;
  }
  .comment {
    background-color: white;
    color: black;
    padding: 5px;
    border-radius: 5px;
    margin-bottom: 5px;
  }
  input {
    width: 100%;
    padding: 5px;
    border: none;
    border-radius: 5px;
  }
  p {
    color: gray;
    margin-top: 10px;
  }
  </style>