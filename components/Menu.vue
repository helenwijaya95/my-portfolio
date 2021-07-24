<template>
  <header>
    <cross-cursor />

    <a class="menu-btn" @click.prevent="toggleMenu">Menu</a>
    <transition name="fade" mode="out-in">
      <div v-show="isShow" class="menu-wrapper">
        <ul class="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Me</a></li>
          <li><a href="#">My Journey</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      isShow: false,
    }
  },

  methods: {
    toggleMenu() {
      this.isShow = !this.isShow
    },
  },
}
</script>

<style lang="scss" scoped>
.menu-btn {
  position: fixed;
  right: 0;
  top: 0;
  padding: 20px;
  z-index: 2;
  color: black;
  cursor: pointer;
}

.menu-wrapper {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  right: 0;
  top: 0;
  background-color: $primary-red;
}

.menu {
  list-style: none;
  font-size: 3.2rem;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  line-height: 5rem;
}

.menu li a {
  color: black;
  text-decoration: none;
}

/* fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
