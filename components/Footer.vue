<template>
  <footer>
    © {{ year }} <strong>Helen Wijaya.</strong> All Rights Reserved.
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      year: '',
    }
  },

  mounted() {
    this.year = new Date().getUTCFullYear()
  },
}
</script>
