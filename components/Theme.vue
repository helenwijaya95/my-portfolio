<template>
  <div>
    <client-only>
      <mq-layout :mq="['md', 'sm']">
        <mobile-toggle
          :toggle-theme="toggleThemeSwitcher"
          :show-theme="showTheme"
        />
      </mq-layout>
    </client-only>
    <theme-switcher
      :theme-list="themeList"
      :selected-theme="selectedTheme"
      :change-theme="changeTheme"
      :show="showTheme"
      :toggle-theme="toggleThemeSwitcher"
    ></theme-switcher>
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
import Vue from 'vue'
import VueMq from 'vue-mq'

export default {
  name: 'Theme',
  data() {
    return {
      h: window.innerHeight,
      w: window.innerWidth,
      selectedTheme: '',
      themeList: [
        {
          key: 'summer',
          value: 'Summer',
        },
        {
          key: 'spring',
          value: 'Spring',
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
      showTheme: true,
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
      this.selectedTheme = val
      const classes = document
        .getElementsByClassName('main-layout')[0]
        .className.split(' ')
        .filter((c) => !c.includes('-theme'))
      classes.push(`${this.selectedTheme}-theme`)
      document.getElementsByClassName('main-layout')[0].className =
        classes.join(' ')
      this.initAnimation()
    },
    toggleThemeSwitcher() {
      this.showTheme = !this.showTheme
    },
  },
}

Vue.use(VueMq, {
  breakpoints: {
    // default breakpoints - customize this
    sm: 780,
    md: 1035,
    lg: Infinity,
  },
})
</script>
