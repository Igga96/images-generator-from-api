import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state: {
    images: [],
  },
  mutations: {
    setImages(state, images) {
      state.images = images;
    },
  },
  actions: {
    async fetchImages({ commit }) {
      try {
        const apiKey = "42257328-e0dae8f60f79b43af6fa90917";
        const apiUrl = `https://pixabay.com/api/?key=${apiKey}&per_page=20`;

        const response = await axios.get(apiUrl);
        commit('setImages', response.data.hits);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    },
  },
});

export default store;
