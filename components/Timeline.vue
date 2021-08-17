<template>
  <div>
    <cross-cursor />
    <client-only>
      <falling-leaves />
    </client-only>

    <TimelineBox :experiences="experiences" />
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
          jobdesc: [
            'Managed & led a team of 4',
            'Code review',
            'Unit testing using Jest & Vue Test Utils',
          ],
        },
        {
          position: 'Frontend Developer Associate Team Leader',
          company: 'Xtremax',
          companySite: 'https://www.xtremax.com/',
          jobdesc: [
            'Managed & led a team of 4',
            'Code review',
            'Unit testing using Jest & Vue Test Utils',
          ],
        },
        {
          position: 'Frontend Developer Associate Team Leader',
          company: 'Xtremax',
          companySite: 'https://www.xtremax.com/',
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
