<template>
  <div class="mobile-toggle" @click="toggleTheme">
    <div v-if="!showTheme">customize <br />theme</div>
    <div v-else class="close">close</div>
    <div class="triangle triangle-top-left"></div>
  </div>
</template>

<script>
export default {
  props: {
    toggleTheme: {
      type: Function,
      default: () => {},
    },
    showTheme: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.mobile-toggle {
  background-color: white;
  text-align: center;
  cursor: pointer;
  z-index: 5;
  width: 80px;
  height: 80px;
  position: fixed;
  bottom: -25px;
  right: -21px;
  transform: rotate(-45deg);
  font-size: 18px;
  border-radius: 6px;
  color: $primary-red;
  box-shadow: 0px -3px 0px 1px rgba(136, 136, 136, 0.31);

  .triangle {
    width: 0;
    height: 0;
    position: absolute;
    bottom: 26px;
    right: 30px;
    transform: rotate(225deg);
    animation: MoveArrow 0.5s cubic-bezier(0.6, -0.28, 0.735, 0.045) infinite;
    animation-delay: 1s;
    &.triangle-top-left {
      border-top: 15px solid $primary-red;
      border-right: 15px solid transparent;
    }
  }

  .close {
    padding-top: 8px;
    color: $base-font-color;
  }
}
</style>
