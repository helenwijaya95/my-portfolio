export default {
    transition: {
        name: 'custom',
        appear: true, // for initial render page
        css: false,
        beforeEnter(el) {
            gsap.set(el.children, {
                scale: 0.5,
                opacity: 0
            })
        },
        enter(el) {
            gsap.to(el.shildren, {
                duration: 1.5,
                scale: 1,
                opacity: 1,
                ease: 'elastic',
                stagger: 0.2, // element appear in sequence
            })
        }
    }
}