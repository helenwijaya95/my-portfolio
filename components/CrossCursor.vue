<template>
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
</template>

<script>
import Cursor from '../classes/cursorClass.js'

export default {
  name: 'CrossCursor',
  mounted() {
    if (document) {
      this.addMouseEffect()
    }
  },
  methods: {
    addMouseEffect() {
      const cursor = new Cursor(document.querySelector('.cursor'))
      // mouse effects on all links
      ;[...document.querySelectorAll('a')].forEach((link) => {
        link.addEventListener('mouseenter', () => cursor.enter())
        link.addEventListener('mouseleave', () => cursor.leave())
      })
    },
  },
  destroy() {
    window.removeEventListener('mouseenter', () => cursor.enter())
    window.removeEventListener('mouseleave', () => cursor.enter())
  },
}
</script>

<style lang="scss" scoped>

 /* Large devices (desktops, 992px and up) */
@media (min-width: $max-small-desktop), (any-pointer: fine){
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

@media (max-width: $max-small-desktop), (any-pointer: none) {
  .cursor{
    display:none;
  }
}

</style>
