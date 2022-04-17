<template>
  <div>
    <TimelineItem :experiences="experiences" />
    <div class="bg-wrapper">
      <div class="branch top">
        <!-- <img src="~static/img/Branch.png" /> -->
      </div>
      <div class="branch center">
        <!-- <img src="~static/img/Branch.png" /> -->
      </div>
      <div class="branch bottom">
        <!-- <img src="~static/img/Branch.png" /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timeline',
  data() {
    return {
      experiences: [
        {
          position: 'Frontend Developer',
          company: 'Hogarth Worldwide',
          companySite: 'https://www.hogarth.com/',
          startYear: '2022-Present',
        },
        {
          position: 'Frontend Developer Associate Team Leader',
          company: 'Xtremax',
          companySite: 'https://www.xtremax.com/',
          startYear: '2020-2021',
          jobdesc: [
            'Managed & led a team of 4',
            'Optimized website performance',
            'Project resource planning',
            'Micro Frontend using Vue.js and Qiankun',
          ],
        },
        {
          position: 'Web Developer',
          company: 'Xtremax',
          companySite: 'https://www.xtremax.com/',
          startYear: '2019',
          jobdesc: [
            'Supported knowledge transfer from a partner agency using React.js',
            'Assisted in technical meetings',
          ],
        },
        {
          position: 'Frontend Developer',
          company: 'Xtremax',
          companySite: 'https://www.xtremax.com/',
          startYear: '2017-2019',
          jobdesc: [
            'Built HTML Email',
            'Converted design into web pages using jQuery, CSS, HTML, Vue.js',
            'Created unit testing using Jest & Vue Test Utils',
          ],
        },
        {
          position: 'Intern',
          company: 'PT LAPI Divusi',
          companySite: 'http://divusi.co.id/',
          startYear: '2016',
          jobdesc: ['Designed CI/CD workflow on Bamboo and Jenkins'],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.bg-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  content: '';
  width: 100%;
  height: 100%;
}
.branch {
  position: absolute;
  transform: rotate(-5deg) !important;
  opacity: 0.2;
  display: block;
  background-repeat: no-repeat;

  &.top {
    background-size: 90% 90%;
    background-position: 95px -5px;
    width: 746px;
    height: 314px;
    top: 10vh;
    left: -360px;
  }
  &.center {
    background-size: 100% 100%;
    background-position: 10px -5px;
    top: 60vh;
    left: auto;
    right: -159px;
    width: 398px;
    height: 175px;
    transform: rotate(-159deg) !important;
  }
  &.bottom {
    background-size: 90% 90%;
    background-position: 35px -5px;
    top: 79vh;
    left: -369px;
    width: 526px;
    height: 211px;
    transform: rotate(3deg) !important;
  }
}

@media (max-width: $max-tablet) {
  .branch.center {
    top: 79vh;
    left: auto;
    right: -400px;
    width: 100%;
  }
}

@media (max-width: $max-phone) {
  .branch.top {
    background-position: -11px -5px;
    background-size: 70% 70%;
  }

  .branch.bottom {
    background-size: 70% 70%;
    background-position: 58px -5px;
  }
}
</style>
