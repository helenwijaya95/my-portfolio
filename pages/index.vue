<template>
  <client-only>
    <div>
      <!-- <img src="~/static/img/marble.jpg" /> -->
      <!-- homepage -->
      <falling-leaves />
      <div class="container">
        <Menu />

        <social-media />
        <text-distortion text="Hello, I'm Helen" />
        <p class="underline">I'm a frontend developer</p>
      </div>

      <!-- about me section -->
      <div class="container">
        <h1>About me</h1>
        <p>I write code to build user-friendly web pages.</p>
        <p>The technology that I have been using for my works are:</p>
        <ul>
          <li>javascript(ES6)</li>
          <li>Vue.js</li>
          <li>jQuery</li>
        </ul>
        <p>I have been exploring React.js lately.</p>
      </div>

      <!-- my journey section -->
      <div class="container"></div>
    </div>
  </client-only>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
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
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
