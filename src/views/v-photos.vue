<template>
  <div class="images-container">
    <div v-for="image in images" :key="image.id" class="image-item">
      <img
        :src="image.largeImageURL"
        :alt="image.tags"
        @load="fadeInImage(image.id)"
      />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    images() {
      return this.$store.state.images;
    },
  },
  methods: {
    fadeInImage(imageId) {
      const img = new Image();
      img.src = this.images.find((img) => img.id === imageId).largeImageURL;
      img.onload = () => {
        const element = document.querySelector(`[src="${img.src}"]`);
        if (element) {
          element.style.opacity = 1;
        }
      };
    },
  },
  mounted() {
    this.$store.dispatch("fetchImages");
  },
};
</script>
<style lang="scss">
.images-container {
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  gap: 10px;

  .image-item {
    flex: 1 0 48%;
    margin: 0;
    position: relative;
    overflow: hidden;

    img {
      width: 100%;
      height: auto;
      display: block;
      transition: opacity 0.5s ease-in-out;
    }
  }
}
@media (max-width: 768px) {
  .image-item {
    flex: 1 0 100%;
  }
}
</style>