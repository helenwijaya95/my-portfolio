const AnimateOnScrollMixin = {
  methods: {
    handleScrollAnimation() {
      const scrollElements = document.querySelectorAll('.js-scroll')

      const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top

        return (
          elementTop <=
          (window.innerHeight || document.documentElement.clientHeight) /
            dividend
        )
      }

      const elementOutofView = (el) => {
        const elementTop = el.getBoundingClientRect().top

        return (
          elementTop >
          (window.innerHeight || document.documentElement.clientHeight)
        )
      }

      const displayScrollElement = (element) => {
        element.classList.add('scrolled')
      }

      const hideScrollElement = (element) => {
        element.classList.remove('scrolled')
      }

      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el)
        } else if (elementOutofView(el)) {
          hideScrollElement(el)
        }
      })
    },
  },
  mounted() {
    // on init
    this.handleScrollAnimation()
    window.addEventListener('scroll', () => {
      this.handleScrollAnimation()
    })
  },

  destroy() {
    window.removeEventListener('scroll', () => {
      this.handleScrollAnimation()
    })
  },
}

export default AnimateOnScrollMixin
