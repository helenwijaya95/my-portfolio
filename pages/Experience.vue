<template>
  <!-- about me section -->
  <div class="inner-container">
    <client-only>
      <cross-cursor />

      <div class="page-title">
        <text-distortion text="Experience" :is-small="true" />
      </div>

      <template slot="placeholder">
        <div style="height: 52px" />
      </template>
    </client-only>
    <Timeline />
  </div>
</template>

<script>
import CrossCursor from '../components/CrossCursor.vue'

export default {
  name: 'Experience',
  components: {
    CrossCursor,
    TextDistortion: () => {
      if (process.client) {
        return import('../components/TextDistortion.vue')
      }
    },
  },
}
</script>

<style></style>
