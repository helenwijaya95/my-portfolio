<template>
  <header>
    <cross-cursor />
    <div class="menu-btn-wrapper">
      <a
        class="menu-btn"
        :class="{ active: isMenuActive }"
        @click.prevent="toggleMenu"
        >Menu</a
      >
    </div>
    <transition name="fade" mode="out-in">
      <div v-show="isMenuActive" class="menu-wrapper">
        <ul class="menu">
          <li>
            <a href="#" class="action-link">Home</a>
          </li>
          <li>
            <a href="#" class="action-link">About Me</a>
          </li>
          <li>
            <a href="#" class="action-link">My Journey</a>
          </li>
          <li>
            <a href="#" class="action-link">Blog</a>
          </li>
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
      isMenuActive: false,
    }
  },

  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive
    },
  },
}
</script>

<style lang="scss" scoped>
.active {
  @include styled-underline;
  &::before {
    height: 20px;
    width: 22px;
  }
}
.menu-btn-wrapper {
  position: fixed;
  right: 0;
  top: 0;
  padding: 20px;
  z-index: 2;
  color: black;
  cursor: pointer;

  .menu-btn {
    position: relative;
    text-decoration: none;
  }
}

.menu-wrapper {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  right: 0;
  top: 0;
  background-color: $primary-grey;
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
