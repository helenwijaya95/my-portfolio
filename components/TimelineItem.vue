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
          <div class="timeline-box js-scroll fade-in-bottom">
            <div class="timeline-icon">
              <span>{{ exp.startYear }}</span>
            </div>
            <div class="timeline-content">
              <!-- <text-distortion :text="exp.position" /> -->
              <h2>
                <span>{{ exp.position }}</span>
                <a
                  v-if="exp.company"
                  class="action-link"
                  :href="exp.companySite"
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
         
        </div>
      </div>
    </div> -->
  </section>
</template>

<script>
import AnimateOnScrollMixin from '../mixins/AnimateOnScroll.js'
export default {
  name: 'TimelineItem',
  mixins: [AnimateOnScrollMixin],
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
section {
  z-index: 1;
  position: relative;
}
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
</style>
