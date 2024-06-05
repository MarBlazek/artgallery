<template>
  <div class="art-gallery-card">
    <div class="exhibit-info">
      <h3>{{ exhibit.description }}</h3>
      <p class="user-info">{{ exhibit.user.displayName }}</p>
    </div>
    <div class="exhibit-images">
      <img v-for="image in exhibit.images" :key="image.url" :src="image.url" :alt="image.name" class="exhibit-image"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    exhibit: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.art-gallery-card {
  background-color: #333;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;
  color: white;
}

.art-gallery-card:hover {
  background-color: #444;
}

.exhibit-info {
  margin-bottom: 10px;
}

.user-info {
  font-size: 0.9em;
  color: #ccc;
}

.exhibit-images {
  display: flex;
  justify-content: center;
  gap: 5px;
}

.exhibit-image {
  max-width: 100px;
  max-height: 100px;
  object-fit: cover;
  border-radius: 5px;
}
</style>