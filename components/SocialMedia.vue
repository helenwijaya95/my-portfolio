<template>
  <section class="wrapper">
    <p style="font-size: 20px">Get in Touch</p>
    <div class="social-link">
      <a href="https://www.linkedin.com/in/helen-wijaya/">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>
      <a href="https://github.com/helenwijaya95/">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
      <a href="mailto:helen.wijaya95@gmail.com">
        <font-awesome-icon :icon="['fas', 'envelope']" />
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
  font-size: 40px;
  margin: 5px;
}
</style>
