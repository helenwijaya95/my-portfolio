<template>
  <div>
    <cross-cursor />
    <!-- <div>
      <span data-splitting class="menu__item-title">{{ text }}</span>
    </div> -->
    <div class="menu">
      <a href="#content-1" class="menu__item">
        <span data-splitting class="menu__item-title">{{ text }}</span>
      </a>
    </div>
  </div>
</template>

<script>
import Splitting from 'splitting'
import MenuItem from '../classes/menuItemClass.js'
import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
import '../assets/css/text-distortion.css'
export default {
  name: 'TextDistortion',

  props: {
    text: {
      type: String,
      required: true,
    },
  },
  mounted() {
    // Track the mouse position and update it on mouse move

    // initialize Splitting
    Splitting()

    if (document) {
      // Menu Items
      ;[...document.querySelectorAll('.menu > a')].forEach(
        (el) => new MenuItem(el)
      )

      this.addElementForChar()
    }
  },

  methods: {
    addElementForChar() {
      const elNum = document.querySelectorAll('.menu__item .word .char').length
      const el1 = document.querySelectorAll('.menu__item .word .char')[1]

      const el2 = document.querySelectorAll('.menu__item .word .char')[
        elNum - 1
      ]

      const tag = document.createElement('div')
      tag.classList.add('leaf-bg', 'left')
      el1.appendChild(tag)

      const tag2 = document.createElement('div')
      tag2.classList.add('leaf-bg', 'right')
      el2.appendChild(tag2)

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
