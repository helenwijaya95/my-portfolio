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
    // const date = new Date();
    this.year = new Date().getUTCFullYear()
  },
}
</script>
