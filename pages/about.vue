<template>
  <!-- about me section -->
  <div class="inner-container">
    <client-only>
      <!-- <falling-leaves /> -->
      <!-- <cross-cursor /> -->
      <TextDistortion text="About Me" :is-small="true" />
    </client-only>
    <p>I write code to build website.</p>
    <p>The technology that I have been using are:</p>
    <ul>
      <li>javascript</li>
      <li>Vue.js</li>
      <li>jQuery</li>
    </ul>
    <p>I have been exploring React.js lately.</p>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style></style>
