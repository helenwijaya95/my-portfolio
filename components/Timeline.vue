<template>
  <div>
    <cross-cursor />
    <client-only>
      <!-- <falling-leaves /> -->
      <cross-cursor />
    </client-only>

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
          startYear: '2019',
          jobdesc: [
            'Managed & led a team of 4',
            'Code review',
            'Unit testing using Jest & Vue Test Utils',
          ],
        },
        {
          position: 'Frontend Developer Associate Team Leader2',
          company: 'Xtremax',
          companySite: 'https://www.xtremax.com/',
          startYear: '2019',
          jobdesc: [
            'Managed & led a team of 4',
            'Code review',
            'Unit testing using Jest & Vue Test Utils',
          ],
        },
        {
          position: 'Frontend Developer Associate Team Leader3',
          company: 'Xtremax',
          companySite: 'https://www.xtremax.com/',
          startYear: '2019',
          jobdesc: [
            'Managed & led a team of 4',
            'Code review',
            'Unit testing using Jest & Vue Test Utils',
          ],
        },
        {
          position: 'Frontend Developer Associate Team Leader4',
          company: 'Xtremax',
          companySite: 'https://www.xtremax.com/',
          startYear: '2019',
          jobdesc: [
            'Managed & led a team of 4',
            'Code review',
            'Unit testing using Jest & Vue Test Utils',
          ],
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
