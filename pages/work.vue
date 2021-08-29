<template>
  <div class="inner-container">
    <client-only>
      <!-- <cross-cursor /> -->

      <div class="page-title">
        <text-distortion text="Work" :is-small="true" />
      </div>

      <template slot="placeholder">
        <div style="height: 52px" />
      </template>
    </client-only>
    <section>
      <h2>Featured Project</h2>
      <div class="project-wrapper">
        <div class="project-preview">
          <a
            href="http://hegarmanahjaya.com/en/"
            target="_blank"
            class="project-link"
          >
            <img src="~static/img/work1-hegarmanahjaya.JPG" />
          </a>
        </div>
        <div class="project-description">
          <h3>
            <a href="http://hegarmanahjaya.com/en/" class="action-link"
              >Company Profile: Hegarmanahjaya</a
            >
          </h3>

          <div class="text">
            <p>
              A responsive portfolio website of a manufacture company. It was
              built on Wordpress mixed with customized CSS
            </p>
          </div>
          <div class="tag-list">
            <ul>
              <li>Wordpress</li>
              <li>CSS</li>
              <li>jQuery</li>
              <li>Web Design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Work',
}
</script>

<style lang="scss" scoped>
.project-wrapper {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  width: 100%;

  .project-preview {
    width: 50%;
    padding: 0 5px;

    .project-link {
      display: block;
      position: relative;

      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        background: $primary-red;
        opacity: 0.3;
        max-width: 100%;
        transition: 0.3s all cubic-bezier(0.39, 0.575, 0.565, 1);
      }

      &:hover {
        &::after {
          opacity: 0;
          max-width: 0;
        }
      }
    }
  }

  .project-description {
    width: 50%;
    padding: 0 5px;
    width: 50%;
    transform: translate(-75px, 38px);

    .text {
      background: $primary-red;
      padding: 20px;
      color: $primary-grey;
      text-align: right;
      position: relative;

      @include red-rect-border-right;
    }

    .tag-list {
      display: flex;
      width: 100%;
    }
  }

  .action-link {
    text-align: right;

    &::before {
      width: 27px;
      height: 23px;
    }
  }
  h3 {
    text-align: right;
  }
  p {
    margin-bottom: 0;
  }

  ul {
    list-style: none;
    color: $primary-red;
    position: relative;
    margin-left: auto;
    display: flex;
    li {
      margin-right: 20px;
      &::before {
        display: none;
      }
    }
  }
}
</style>
