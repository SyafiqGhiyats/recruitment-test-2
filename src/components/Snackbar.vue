<template>
  <transition name="slide">
    <div class="snackbar glass" :class="{ danger }" v-if="isActive">
      <span>
        <slot></slot>
      </span>
      <svg
        @click="isActive = false"
        xmlns="http://www.w3.org/2000/svg"
        width="35px"
        style="cursor: pointer"
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
    </div>
  </transition>
</template>

<script>
export default {
  model: { prop: "value", event: "input" },

  props: {
    value: { required: false },
    danger: Boolean,
  },

  data() {
    return {
      isActive: !!this.value,
    };
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
.snackbar {
  position: fixed;
  display: flex;
  align-items: center;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  min-width: 310px;
  max-width: 400px;
  padding: 0.5rem;
  &.danger {
    background: rgba(#ef4444, 0.4);
  }
  & span {
    width: 95%;
  }
}
</style>