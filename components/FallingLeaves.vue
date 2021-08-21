<template>
  <div id="falling-leaves"></div>
</template>

<script>
/*
Credits:
a Pen by DIACO : twitter.com/Diaco_ml  ||  codepen.io/MAW
powered by GSAP : https://www.greensock.com/
*/
import '../assets/scss/falling-leaves.scss'

export default {
  name: 'FallingLeaves',
  data() {
    return {
      h: window.innerHeight,
      w: window.innerWidth,
    }
  },
  mounted() {
    TweenLite.set('#falling-leaves', { perspective: 600 })
    TweenLite.set('img', { xPercent: '-50%', yPercent: '-100%' })

    const total = 7
    const warp = document.getElementById('falling-leaves')
    let i
    for (i = 0; i < total; i++) {
      const Div = document.createElement('div')
      TweenLite.set(Div, {
        attr: { class: 'dot' },
        x: this.R(0, this.w),
        y: this.R(-200, -150),
        z: this.R(-200, 200),
      })
      warp.appendChild(Div)
      this.animate(Div)
    }
  },
  methods: {
    animate(elm) {
      TweenMax.to(elm, this.R(6, 15), {
        y: this.h + 100,
        ease: Linear.easeNone,
        repeat: -1,
        delay: -15,
      })
      TweenMax.to(elm, this.R(4, 8), {
        x: '+=100',
        rotationZ: this.R(0, 180),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
      })
      TweenMax.to(elm, this.R(2, 8), {
        rotationX: this.R(0, 360),
        rotationY: this.R(0, 360),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
        delay: -5,
      })
    },
    R(min, max) {
      return min + Math.random() * (max - min)
    },
  },
}
</script>

<style scoped>
/* body {
  background-color: gray;
  font-family: Signika Negative, Asap, sans-serif;
  color: white;
  overflow: hidden;
}

html,
body,
#falling-leaves {
  width: 100%;
  height: 100%;
}
#logo {
  left: 50%;
  top: 50%;
  position: absolute;
  border-radius: 10px;
} */
</style>
