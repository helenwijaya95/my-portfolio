<template>
  <div>
    <h1>Timeline</h1>

    <vue-timeline-update
      :date="new Date('2017-02-26')"
      title="v2.2.0 - Initial D"
      description="Today I am thrilled to announce the release of Vue.js 2.2.0."
      thumbnail="/img/shiba-head.jpg"
      category="announcement"
      icon="code"
      color="red"
    />
  </div>
</template>

<script>
export default {
  name: 'Timeline',
}
</script>

<style></style>
