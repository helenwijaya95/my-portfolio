<template>
  <div class="container">
    <div class="sp-loadbar"></div>
  </div>
</template>

<script>
export default {
  name: 'LoadingBar',
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>

<style lang="scss" scoped>
// Credits:
// a Pen by dorozd : codepen.io/dorozd

/* Spinner LoadBar */
.sp-loadbar {
  width: 50px;
  height: 18px;
  border: 1px var(--primaryColor) solid;
  border-radius: 4px;
  background: linear-gradient(
    -60deg,
    transparent 0%,
    transparent 50%,
    var(--primaryColor) 50%,
    var(--primaryColor) 75%,
    transparent 75%,
    transparent
  );
  background-size: 20px 30px;
  background-position: 0px 0px;
  animation: spLoadBar 0.8s infinite linear;
}
@-webkit-keyframes spLoadBar {
  from {
    background-position: 0px 0px;
  }
  to {
    background-position: -20px 0px;
  }
}
@keyframes spLoadBar {
  from {
    background-position: 0px 0px;
  }
  to {
    background-position: -20px 0px;
  }
}
</style>
