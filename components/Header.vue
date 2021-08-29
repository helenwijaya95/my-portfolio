<template>
  <header>
    <div class="logo">
      <NuxtLink to="/">
        <img src="~static/img/Personal Logo_v3.png" />
      </NuxtLink>
    </div>
    <div class="menu-btn-wrapper">
      <a
        class="menu-btn"
        :class="{ active: isMenuActive }"
        @click.prevent="toggleMenu"
        >{{ isMenuActive ? 'Close' : 'Menu' }}</a
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
              to="/about"
              class="action-link"
              @click.native="toggleMenu"
            >
              About Me
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/experience"
              class="action-link"
              @click.native="toggleMenu"
              >Experience
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/work" class="action-link" @click.native="toggleMenu"
              >Work
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
.menu a.nuxt-link-exact-active {
  @include styled-underline;
  color: $base-font-color;
}
header {
  position: relative;
  z-index: 10;
  padding: 20px;
  width: 100%;
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
    cursor: pointer;
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
    &::before {
      display: none;
    }
  }
}
.logo {
  width: 120px;

  img {
    width: 100%;
  }
}
</style>
