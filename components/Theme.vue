<template>
  <div>
    <select
      id="theme-toggler"
      v-model="selectedTheme"
      name="theme"
      style="z-index: 6; position: relative"
      @change="changeTheme"
    >
      <option v-for="theme in themeList" :key="theme.key" :value="theme.key">
        {{ theme.value }}
      </option>
    </select>
    <div>
      <div id="falling-animation"></div>
    </div>
  </div>
</template>

<script>
/*
Credits:
a Pen by DIACO : twitter.com/Diaco_ml  ||  codepen.io/MAW
powered by GSAP : https://www.greensock.com/
*/
import gsap from 'gsap'
import '../assets/scss/theme.scss'

export default {
  name: 'Theme',
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
    document
      .getElementsByClassName('main-layout')[0]
      .classList.add(`${this.selectedTheme}-theme`)
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

    R(min, max) {
      return min + Math.random() * (max - min)
    },
    initAnimation() {
      gsap.set('#falling-animation', { perspective: 600 })

      const total = 7
      const _fallenObj = document.getElementsByClassName('fallen-obj')[0]

      // clear fallen object
      if (_fallenObj) {
        _fallenObj.parentNode.innerHTML = ''
      }
      const warp = document.getElementById('falling-animation')
      let i
      for (i = 0; i < total; i++) {
        const Div = document.createElement('div')
        gsap.set(Div, {
          attr: { class: 'fallen-obj' },
          x: this.R(0, this.w),
          y: this.R(-200, -150),
          z: this.R(-200, 200),
        })
        warp.appendChild(Div)
        this.animate(Div)
      }
    },
    changeTheme(val) {
      this.selectedTheme = val.target.value
      const classes = document
        .getElementsByClassName('main-layout')[0]
        .className.split(' ')
        .filter((c) => !c.includes('-theme'))
      classes.push(`${this.selectedTheme}-theme`)
      document.getElementsByClassName('main-layout')[0].className =
        classes.join(' ')
      this.initAnimation()
    },
  },
}
</script>
