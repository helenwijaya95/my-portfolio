<template>
  <section>
    <div class="box-wrapper">
      <div v-for="exp in experiences" :key="exp.position" class="timeline-row">
        <div class="timeline-box">
          <div class="header">
            <h2>
              <span>{{ exp.position }}</span>
              <span v-if="exp.company"
                >@
                <a :href="exp.companySite" target="_blank">{{
                  exp.company
                }}</a></span
              >
            </h2>
          </div>
          <div class="body">
            <ul>
              <li v-for="jobdesc in exp.jobdesc" :key="jobdesc">
                {{ jobdesc }}
              </li>
            </ul>
          </div>
          <div class="branch">
            <img src="~static/img/branch.png" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TimelineBox',
  props: {
    experiences: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.box-wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
}
.timeline-row {
  width: 100%;
  position: relative;

  &:nth-child(even) {
    &::before,
    &::after {
      content: '';
      display: block;
      width: 100%;
      clear: both;
    }
    .timeline-box {
      float: right;
    }
    .branch {
      transform: rotate(191deg) !important;
      left: -125px;
      bottom: -155px;
    }
  }
}
.timeline-box {
  width: 550px;
  position: relative;
  padding: 10px 20px;
  h2 span,
  li {
    font-size: 25px;
  }
  h2 span {
    display: block;
    text-align: left;
  }

  .header {
    position: relative;
    padding: 10px;

    &::before {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      display: block;
      content: '';
      opacity: 0.7;
    }
  }
  .body {
    padding: 15px 5px;
    ul {
      display: block;
      position: relative;
    }
    li {
      color: $primary-red;
    }
  }

  .branch {
    position: absolute;
    bottom: -70px;
    left: -30px;
    transform: rotate(-5deg) !important;
    width: 727px;
    opacity: 0.5;
    img {
      transform: none !important;
      width: 100%;
    }
  }
}
</style>
