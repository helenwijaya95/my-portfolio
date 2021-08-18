<template>
  <div>
    <!-- <div>
      <span data-splitting class="menu__item-title">{{ text }}</span>
    </div> -->
    <div class="distortion">
      <a href="content-1" class="distortion-link">
        <span
          data-splitting
          class="distortion-text"
          :class="isSmall ? 'is-small' : 'is-large'"
          >{{ text }}</span
        >
      </a>
    </div>
  </div>
</template>

<script>
import Splitting from 'splitting'
import MenuItem from '../classes/menuItemClass.js'
import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
export default {
  name: 'TextDistortion',

  props: {
    text: {
      type: String,
      required: true,
    },
    isSmall: {
      type: Boolean,
      required: false,
      defautl: false,
    },
  },
  mounted() {
    // Track the mouse position and update it on mouse move

    // initialize Splitting
    Splitting()

    if (document) {
      // Menu Items
      ;[...document.querySelectorAll('.distortion > a')].forEach(
        (el) => new MenuItem(el)
      )

      this.addElementForChar()
    }
  },

  methods: {
    addElementForChar() {
      const elNum = document.querySelectorAll(
        '.distortion-text .word .char'
      ).length
      const _el = (idx) => {
        return document.querySelectorAll('.distortion-text .word .char')[idx]
      }

      const tag = document.createElement('div')
      tag.classList.add('leaf-bg', 'left')
      _el(1).appendChild(tag)

      const tag2 = document.createElement('div')
      tag2.classList.add('leaf-bg', 'right')
      _el(elNum - 1).appendChild(tag2)

      const tag3 = document.createElement('div')
      tag3.classList.add('leaf-bg', 'center')
      _el(Math.floor((elNum - 1) / 2)).appendChild(tag3)

      // const tag2 = document.createElement('div')
      // tag2.classList.add('leaf-bg', 'right')
      // el2.appendChild(tag2)

      // ;[...document.querySelectorAll('.menu__item .word .char')].forEach(
      //   (el) => {
      //     const tag = document.createElement('div')
      //     tag.classList.add('leaf-bg')
      //     el.appendChild(tag)
      //   }
      // )
    },
  },
}
</script>

<style lang="scss" scoped>
.distortion {
  margin: 10px;
}
.distortion-text {
  font-family: $base-font-title;
  letter-spacing: -1px;
  color: $base-font-color;
  font-size: 45px;

  &.is-small {
    font-size: 35px;
  }
}
</style>
