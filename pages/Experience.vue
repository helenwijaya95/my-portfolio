<template>
  <!-- about me section -->
  <div class="inner-container">
    <cross-cursor />
    <client-only>
      <falling-leaves />
      <!-- <cross-cursor /> -->
      <TextDistortion text="Experience" :is-small="true" />
    </client-only>
    <Timeline />
  </div>
</template>

<script>
export default {
  name: 'Experience',
}
</script>

<style></style>
