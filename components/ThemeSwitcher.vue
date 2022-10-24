<template>
  <div class="theme-switcher">
    <ul class="theme-list">
      <li
        v-for="theme in themeList"
        :key="theme.key"
        :data-value="theme.key"
        class="theme-item"
        :class="selectedTheme == theme.key ? 'active' : ''"
        @click="changeTheme(theme.key, $event)"
      >
        <span class="text"> {{ theme.value }}</span>
      </li>
    </ul>
    <div class="temp-indicator"><div class="line"></div></div>
  </div>
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
  watch: {
    selectedTheme() {
      this.setTheme()
    },
  },
  mounted() {
    this.setTheme()
  },
  methods: {
    nodeIndex(_el) {
      let i = 0
      while (_el.previousElementSibling) {
        _el = _el.previousElementSibling
        i++
      }
      return i
    },
    setTheme() {
      const _active = document.querySelector(
        '[data-value="' + this.selectedTheme + '"]'
      )
      const _themeList = document.querySelector('.theme-list')
      const _indicatorLine = document.querySelector('.temp-indicator .line')
      let idx = 0
      if (_active) {
        idx = this.nodeIndex(_active)
      }
      const height = _themeList.offsetHeight
      const indicatorHeight = height - (idx / 4) * height - 10
      _indicatorLine.style.height = indicatorHeight + 'px'
    },
  },
}
</script>

<style lang="scss" scoped>
.theme-switcher {
  position: fixed;
  bottom: 25px;
  z-index: 3;
  width: 105px;
  height: 250px;
  right: 15px;
}

.temp-indicator {
  display: block;
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: -12px;
  background-color: $primary-red;
  border-radius: 50%;
  left: 17px;

  .line {
    display: block;
    bottom: 20px;
    left: 8px;
    position: absolute;
    width: 3px;
    height: 20px;
    background-color: $primary-red;
    transition: height 0.15s ease-in;
  }
}
.theme-item {
  line-height: 50px;
  position: relative;
  cursor: pointer;
  color: $primary-red;

  .text {
    font-size: 18px;
    transition: font-weight 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
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
    opacity: 0;
    transition: 0.3s opacity ease-in;
    left: -1px;
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
    opacity: 0.2;
  }

  &.active {
    &::before {
      opacity: 1;
    }
    .text {
      font-weight: bold;
    }
  }
}
</style>
