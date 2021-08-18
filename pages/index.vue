<template>
  <client-only>
    <div>
      <!-- <img src="~/static/img/marble.jpg" /> -->
      <!-- homepage -->
      <!-- <falling-leaves /> -->
      <div class="container">
        <text-distortion text="Hello,I'm Helen" />
        <h2 class="subtitle">I'm a Frontend Developer.</h2>
        <social-media />
      </div>
    </div>
  </client-only>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
body {
  overflow-x: hidden;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  word-spacing: 5px;
  padding-bottom: 15px;
  font-family: $base-font;
}

.links {
  padding-top: 15px;
}
</style>
