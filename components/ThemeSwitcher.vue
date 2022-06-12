<template>
  <ul class="theme-switcher">
    <li
      v-for="theme in themeList"
      :key="theme.key"
      class="theme-item"
      :class="selectedTheme == theme.key ? 'active' : ''"
      @click="changeTheme(theme.key, $event)"
    >
      <span class="text"> {{ theme.value }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    selectedTheme: {
      type: String,
      required: true,
    },
    themeList: {
      type: Array,
      required: true,
    },
    changeTheme: {
      type: Function,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.theme-switcher {
  position: absolute;
  bottom: 50px;
  right: 50px;
  z-index: 1;
}

.theme-item {
  line-height: 40px;
  position: relative;
  cursor: pointer;
  color: $primary-red;

  .text {
    font-size: 12px;
  }

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: block;
    background-color: $primary-red;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: size 0.5;
  }

  &::after {
    content: '';
    width: 3px;
    height: 100%;
    background-color: $primary-red;
    display: block;
    position: absolute;
    top: 50%;
    left: -13px;
    transform: translate(-50%);
  }

  &.active {
    &::before {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
