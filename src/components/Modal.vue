<template>
  <div class="modal center" @click="clickOutside" v-if="isActive">
    <div class="modal-wrapper glass" ref="wrapper">
      <span class="modal-close" @click="isActive = false">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  model: { prop: "value", event: "input" },

  props: {
    value: { required: false },
  },

  data() {
    return {
      isActive: !!this.value,
    };
  },
  methods: {
    clickOutside(e) {
      const wrapper = this.$refs.wrapper;
      if (wrapper && !(wrapper == e.target || wrapper.contains(e.target))) {
        this.isActive = false;
      }
    },
  },
  watch: {
    value(val) {
      this.isActive = !!val;
    },
    isActive(val) {
      !!val !== this.value && this.$emit("input", val);
    },
  },
};
</script>

<style lang="scss">
.modal {
  position: fixed;
  inset: 0;
  //   pointer-events: none;
  //   background: rgba(black, 0.4);
  &-wrapper {
    pointer-events: visible;
    position: relative;
    text-align: center;
    padding: 1rem;
  }
  &-close {
    position: absolute;
    top: -10px;
    right: -10px;
    display: block;
    width: 25px;
    height: 25px;
    cursor: pointer;
    & svg {
      //   margin: -5px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(5px);
      padding: 5px;
    }
  }
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%,-50%);
}
</style>