<template>
  <section>
    <div class="container">
      <div id="timeline">
        <div
          v-for="(exp, idx) in experiences"
          :key="exp.position"
          class="timeline-item"
          :class="{ right: (idx + 1) % 2 === 0 }"
        >
          <div class="timeline-icon">
            <span>{{ exp.startYear }}</span>
          </div>
          <div class="timeline-content">
            <!-- <text-distortion :text="exp.position" /> -->
            <h2>
              <span>{{ exp.position }}</span>
              <a class="action-link" :href="exp.companySite"
                >@ {{ exp.company }}</a
              >
            </h2>
            <ul>
              <li v-for="jobdesc in exp.jobdesc" :key="jobdesc">
                {{ jobdesc }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="branch">
      <img src="~static/img/branch.png" />
    </div> -->
    <!-- <div class="box-wrapper">
      <div v-for="exp in experiences" :key="exp.position" class="timeline-row">
        <div class="timeline-box">
          <div class="header">
           
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
    </div> -->
  </section>
</template>

<script>
export default {
  name: 'TimelineItem',
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
.action-link {
  &::before {
    width: 20px;
    height: 20px;
    left: -18px;
    bottom: -9px;
  }
}
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

// h2 span,
// li {
//   font-size: 22px;
//   line-height: 1.5;
// }
// h2 span {
//   text-align: left;
//   display: block;
// }

ul {
  text-align: left;
  margin-top: 20px;
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
</style>
