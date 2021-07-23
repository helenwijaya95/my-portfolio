<template>
  <div>
    <div class="menu">
      <a href="#content-1" class="menu__item">
        <span data-splitting class="menu__item-title">{{ text }}</span>
        <!-- <span data-splitting class="menu__item-sub">A Frontend Developer</span> -->
      </a>
    </div>
    <div class="cursor">
      <svg
        class="cursor__line cursor__line--horizontal"
        viewBox="0 0 200 20"
        preserveAspectRatio="none"
      >
        <defs>
          <filter
            id="filter-noise-x"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
            filterUnits="objectBoundingBox"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0"
              numOctaves="1"
              result="warp"
            />
            <feOffset dx="-30" result="warpOffset" />
            <feDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              scale="30"
              in="SourceGraphic"
              in2="warpOffset"
            />
          </filter>
        </defs>
        <line
          class="cursor__line-element"
          x1="0"
          y1="10"
          x2="200"
          y2="10"
          shape-rendering="crispEdges"
          vector-effect="non-scaling-stroke"
        ></line>
      </svg>
      <svg
        class="cursor__line cursor__line--vertical"
        viewBox="0 0 20 200"
        preserveAspectRatio="none"
      >
        <defs>
          <filter
            id="filter-noise-y"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
            filterUnits="objectBoundingBox"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0"
              numOctaves="1"
              result="warp"
            />
            <feOffset dy="-30" result="warpOffset" />
            <feDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              scale="30"
              in="SourceGraphic"
              in2="warpOffset"
            />
          </filter>
        </defs>
        <line
          class="cursor__line-element"
          x1="10"
          y1="0"
          x2="10"
          y2="200"
          shape-rendering="crispEdges"
          vector-effect="non-scaling-stroke"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import Splitting from 'splitting'
import Cursor from '../classes/cursorClass.js'
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

    // initialize custom cursor
    if (document) {
      const cursor = new Cursor(document.querySelector('.cursor'))

      // Menu Items
      ;[...document.querySelectorAll('.menu > a')].forEach(
        (el) => new MenuItem(el)
      )

      // mouse effects on all links
      ;[...document.querySelectorAll('a')].forEach((link) => {
        link.addEventListener('mouseenter', () => cursor.enter())
        link.addEventListener('mouseleave', () => cursor.leave())
      })
    }
  },
}
</script>

<style scoped>
.cursor {
  display: block;
}

@media (any-pointer: fine) {
  .cursor {
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    pointer-events: none;
    z-index: 1001;
  }

  .no-js .cursor {
    display: none;
  }

  .cursor__line {
    position: fixed;
    display: block;
    will-change: transform, opacity;
  }

  .cursor__line--horizontal {
    top: -10px;
    left: -10%;
    width: 120%;
    height: 20px;
  }

  .cursor__line--vertical {
    left: -10px;
    top: -10%;
    height: 120%;
    width: 20px;
  }

  .cursor__line-element {
    fill: none;
    stroke: var(--cursor-stroke);
    stroke-width: var(--cursor-stroke-width);
  }
}
</style>
