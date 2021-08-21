<template>
  <!-- about me section -->
  <div class="inner-container">
    <client-only>
      <falling-leaves />
      <!-- <cross-cursor /> -->
      <TextDistortion text="About Me" :is-small="true" />
    </client-only>
    <section>
      <div class="background">
        <div class="browser">
          <div class="menu-bar">
            <div class="action-menu">
              <div class="btn"></div>
              <div class="btn"></div>
              <div class="btn"></div>
            </div>
          </div>
          <div class="body">
            <div class="toolbar">
              <div class="btn-icon">
                <font-awesome-icon :icon="['fas', 'file-code']" />
              </div>
              <div class="btn-icon">
                <font-awesome-icon :icon="['fas', 'code-branch']" />
              </div>
              <div class="btn-icon">
                <font-awesome-icon :icon="['fas', 'search']" />
              </div>
              <div class="btn-icon">
                <font-awesome-icon :icon="['fas', 'wrench']" />
              </div>
            </div>
            <div class="sidebar">
              <div class="line-wrapper">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
              </div>
            </div>
            <div class="content">
              <div class="text-wrapper">
                <h2>Hi, my name is Helen Wijaya.</h2>
                <h3>I'm a frontend developer.</h3>
                <p>
                  I'm <strong>passionate</strong> when it comes to
                  <strong>making design alive</strong> through code.
                </p>
                <p>
                  <strong>Four years experiences </strong> in a digital agency,
                  I've been exposed to many aspects of website development, such
                  as:
                </p>
                <ul>
                  <li>Consuming API</li>
                  <li>Website accessibility, performance, and security</li>
                  <li>TDD</li>
                  <li>SEO</li>
                </ul>
                <p>The technologies that I've been working with recently:</p>
                <ul>
                  <li>JavaScript (ES6)</li>
                  <li>Vue.js</li>
                  <li>jQuery</li>
                  <li>Wordpress</li>
                  <li>Nuxt.js</li>
                  <li>React.js</li>
                </ul>
                <p>
                  Occasionally I took part in React.js project. It's on top of
                  my things-to-learn list.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="symbol">
      <span class="code">&#60;/&#62;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style lang="scss" scoped>
section {
  height: calc(100vh - 190px);
}
.background {
  max-width: 800px;
  height: 100%;
  display: block;
  position: relative;
  margin: auto;
}
.browser {
  border: 3px solid $primary-red;
  border-radius: 7px;
  box-shadow: -8px 4px 0 rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  animation: fade-in-bottom 1s ease-in-out both;

  .menu-bar {
    border-bottom: 3px solid $primary-red;
    position: relative;
    width: 100%;
    height: 45px;
    .action-menu {
      position: absolute;
      right: 15px;
      top: 10px;
      width: 120px;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .body {
    display: flex;
    flex-direction: row;
    opacity: 0.8;
    height: calc(100% - 45px);
  }

  .toolbar {
    width: 35px;
    height: 100%;
    border-right: 1px solid $primary-red;
    padding: 20px 3px;
  }

  .sidebar {
    width: 115px;
    background: $primary-red;
    height: 100%;

    .line {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      height: 3px;
      background: $primary-grey;
      border-radius: 10px;
      width: 70%;
      margin: 50px 0 0;

      &::before {
        content: '>';
        width: 20px;
        height: 20px;
        display: block;
        position: absolute;
        left: -12px;
        color: #f0f0f0;
        top: -20px;
        font-size: 20px;
        font-weight: 700;
      }
    }
  }

  .content {
    width: calc(100% - 150px);
    position: relative;
  }
}
.text-wrapper {
  padding: 10px 25px;
  z-index: 1;
  position: relative;
  height: 100%;
  overflow-y: scroll;
  background: #0a0a0a;
}
section {
  position: relative;
  z-index: 1;
}
ul {
  column-count: 2;
}

.symbol {
  position: absolute;
  right: 20px;
  bottom: 10px;
  .code {
    line-height: 150px;
    font-size: 150px;
    display: block;
    color: #d0cfcf;
  }
}
ul,
p,
h2,
h3 {
  color: $primary-grey;
}
.btn {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: $primary-red;

  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.1);
}
.btn-icon {
  left: 3px;
  width: 25px;
  height: 25px;
  border-radius: 2px;
  margin-bottom: 25px;
  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 25px;
}
[class^='btn-'],
.btn {
  transition: 0.05s box-shadow ease-in;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 0 rgba(0, 0, 0, 0.1);
  }
}

// responsive
@media (max-width: $max-phone) {
  .browser {
    .sidebar {
      display: none;
    }
    .content {
      width: calc(100% - 35px);
    }
  }
}
</style>
