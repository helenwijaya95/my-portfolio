<template>
  <div>
    <TimelineItem :experiences="experiences" />
  </div>
</template>

<script>
export default {
  name: 'Timeline',
  data() {
    return {
      experiences: [
        {
          position: 'Frontend Developer Associate Team Leader',
          company: 'Xtremax',
          companySite: 'https://www.xtremax.com/',
          startYear: '2020-Present',
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
          jobdesc: ['Designed CI/CD workflow'],
        },
      ],
    }
  },
}
</script>

<style>
.line {
  height: 50px;
  width: 2px;
  background: black;
}
</style>
