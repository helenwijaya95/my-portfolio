<template>
  <section class="wrapper">
    <p>Connect with me:</p>
    <div class="social-link">
      <a href="#">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>
      <a href="#">
        <font-awesome-icon :icon="['fab', 'facebook']" />
      </a>
      <a href="#">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SocialMedia',
}
</script>

<style scoped>
.social-link a {
  font-size: 3.2rem;
}
</style>
