<template>
  <footer>
    <p>
      © {{ year }} <strong>Helen Wijaya.</strong> <br />All Rights Reserved.
    </p>
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

<style lang="scss" scoped>
footer {
  padding-bottom: 0;
  padding-bottom: 0;
  margin-bottom: 0;
  position: relative;
  bottom: 10px;
}
</style>
