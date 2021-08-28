<template>
  <!-- about me section -->
  <div class="inner-container">
    <client-only>
      <div class="page-title">
        <TextDistortion text="Experience" :is-small="true" />
      </div>

      <template slot="placeholder">
        <div style="height: 52px" />
      </template>
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
