<template>
  <div id="falling-animation">
    <select
      id="theme-toggler"
      v-model="selectedTheme"
      name="theme"
      @change="changeTheme"
    >
      <option v-for="theme in themeList" :key="theme.key" :value="theme.key">
        {{ theme.value }}
      </option>
    </select>
  </div>
</template>

<script>
/*
Credits:
a Pen by DIACO : twitter.com/Diaco_ml  ||  codepen.io/MAW
powered by GSAP : https://www.greensock.com/
*/
import gsap from 'gsap'

import '../assets/scss/falling-animation.scss'
export default {
  name: 'FallingAnimation',
  data() {
    return {
      h: window.innerHeight,
      w: window.innerWidth,
      selectedTheme: '',
      themeList: [
        {
          key: 'spring',
          value: 'Spring',
        },
        {
          key: 'summer',
          value: 'Summer',
        },
        {
          key: 'fall',
          value: 'Fall',
        },
        {
          key: 'winter',
          value: 'Winter',
        },
      ],
    }
  },
  mounted() {
    this.selectedTheme = 'fall'
    this.initAnimation()
  },
  methods: {
    animate(elm) {
      gsap.to(elm, {
        duration: this.R(6, 15),
        y: this.h + 100,
        ease: 'linear',
        repeat: -1,
        delay: -15,
      })
      gsap.to(elm, {
        duration: this.R(4, 8),
        x: '+=100',
        rotationZ: this.R(0, 180),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inout',
      })
      gsap.to(elm, {
        duration: this.R(2, 8),
        rotationX: this.R(0, 360),
        rotationY: this.R(0, 360),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inout',
        delay: -5,
      })
    },
    changeTheme(val) {
      this.selectedTheme = val.target.value
      this.initAnimation()
    },
    R(min, max) {
      return min + Math.random() * (max - min)
    },
    initAnimation() {
      gsap.set('#falling-animation', { perspective: 600 })

      const total = 7
      console.log(document.getElementsByClassName('fallen-obj'))

      const _fallenObj = document.getElementsByClassName('fallen-obj')[0]
      if (_fallenObj) {
        console.log('fallen ')
        _fallenObj.parentNode.removeChild(_fallenObj)
      }
      const warp = document.getElementById('falling-animation')
      let i
      for (i = 0; i < total; i++) {
        const Div = document.createElement('div')
        gsap.set(Div, {
          attr: { class: `${this.selectedTheme} fallen-obj` },
          x: this.R(0, this.w),
          y: this.R(-200, -150),
          z: this.R(-200, 200),
        })
        warp.appendChild(Div)
        this.animate(Div)
      }
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
#falling-animation {
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
