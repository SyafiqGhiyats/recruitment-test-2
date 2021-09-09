<template>
  <div class="min-h-screen root">
    <div v-for="i in 20" :key="i" class="random-glass__wrapper">
      <div
        class="glass absolute"
        :style="{
          left: `${genNumber(40, 1440)}px`,
          top: `${genNumber(20, 1107)}px`,
          width: `${genNumber(70, 200)}px`,
          height: `${genNumber(70, 200)}px`,
          transform: `rotate(${genNumber(0, 360)}deg)`,
          opacity: `${genNumber(10, 70)}%`,
        }"
      ></div>
    </div>
    <div class="max-width min-h-screen">
      <router-view></router-view>
    </div>
    <Snackbar v-model="snackbar.show" :danger="snackbar.danger">
      {{ snackbar.message }}
    </Snackbar>
  </div>
</template>
<script>
import Snackbar from "./components/Snackbar.vue";
export default {
  components: { Snackbar },
  data() {
    return {
      snackbar: {
        show: false,
        message: "",
        danger: false,
      },
    };
  },
  watch: {
    snackbar() {
      setTimeout(() => (this.snackbar.show = false), 4000);
    },
  },
  methods: {
    genNumber(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
  mounted() {
    this.bus.$on("snackbar", (opt) => (this.snackbar = opt));
  },
};
</script>

<style lang="scss">
.root {
  background-image: linear-gradient(to top left, #cc208e 0%, #6713d2 100%);
}
.random-glass__wrapper {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  // z-index: ;
  & .glass {
    z-index: -1;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  }
}
</style>