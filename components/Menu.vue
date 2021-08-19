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
            <NuxtLink to="/" class="action-link" @click.native="toggleMenu">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/About"
              class="action-link"
              @click.native="toggleMenu"
            >
              About Me
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/Experience"
              class="action-link"
              @click.native="toggleMenu"
              >Experience
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/" class="action-link" @click.native="toggleMenu">
              Blog
            </NuxtLink>
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
header {
  margin-bottom: 50px;
}
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
  z-index: 6;
  color: black;

  .menu-btn {
    position: relative;
    text-decoration: none;
    font-size: 26px;
  }
}

.menu-wrapper {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 5;
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
  padding: 0;
  margin: 0;

  li {
    a {
      color: $primary-red;
      text-decoration: none;
    }
    &::before {
      display: none;
    }
  }
}

.menu li a {
}
</style>
