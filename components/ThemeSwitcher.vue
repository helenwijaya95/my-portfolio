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
        <div class="short-line-1"></div>
        <div class="short-line-2"></div>
        <div class="short-line-3"></div>
      </li>
    </ul>
    <div class="thermometer">
      <div class="inner">
        <div class="inner-line"></div>
      </div>
      <div class="outer">
        <div class="outer-line"></div>
      </div>
    </div>

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
  bottom: 35px;
  z-index: 3;
  width: 105px;
  height: 250px;
  right: 15px;
}

.thermometer {
  position: absolute;
  bottom: 0;
}
.inner {
  width: 33px;
  height: 33px;
  background-color: white;
  display: block;
  position: absolute;
  bottom: -19px;
  border-radius: 50%;
  left: 11px;
  z-index: 2;

  .inner-line {
    display: block;
    left: 10px;
    height: 220px;
    width: 14px;
    background-color: white;
    position: absolute;
    bottom: 28px;
    border-radius: 5px;
  }
}
.outer {
  width: 45px;
  height: 45px;
  background-color: #c4c3c3;
  display: block;
  position: absolute;
  bottom: -25px;
  border-radius: 50%;
  left: 5px;
  z-index: 1;

  .outer-line {
    display: block;
    left: 10px;
    height: 225px;
    width: 25px;
    background-color: #c4c3c3;
    position: absolute;
    bottom: 28px;
    border-radius: 5px;
  }
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
  z-index: 3;

  .line {
    display: block;
    bottom: 20px;
    left: 9px;
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
  z-index: 3;

  .text {
    font-size: 18px;
    padding-left: 7px;
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
    transition: 0.15s opacity ease-in;
    left: 1px;
  }

  &::after {
    content: '';
    width: 3px;
    height: 100%;
    background-color: $primary-red;
    display: block;
    position: absolute;
    top: 18%;
    left: -12px;
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

  div[class*='short-line'] {
    position: absolute;
    width: 4px;
    height: 1px;
    background-color: $primary-red;
    left: -10px;
    display: block;
    z-index: 3;
  }

  div.short-line-1 {
    bottom: calc(30% - 22px);
  }
  div.short-line-2 {
    bottom: calc(60% - 22px);
  }
  div.short-line-3 {
    bottom: calc(90% - 22px);
    width: 10px;
    left: -17px;
  }
}
</style>
