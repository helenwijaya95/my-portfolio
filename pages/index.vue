<template>
  <div>
    <client-only>
      <div>
        <!-- <img src="~/static/img/marble.jpg" /> -->
        <!-- homepage -->
        <div class="container">
          <!-- <falling-leaves />
          <cross-cursor /> -->

          <text-distortion text="Hello,I'm Helen" />
          <h2 class="subtitle">I code to build web pages</h2>
          <social-media />
        </div>
      </div>
      <template slot="placeholder">
        <loading-bar />
      </template>
    </client-only>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LoadingBar from '~/components/LoadingBar.vue'

export default Vue.extend({
  components: { LoadingBar },
})
</script>

<style lang="scss" scoped>
body {
  overflow-x: hidden;
}
.container {
  margin: 0 auto;
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
  font-family: $base-font;
}

.links {
  padding-top: 15px;
}
</style>
