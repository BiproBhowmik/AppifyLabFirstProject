<template>
    <profilePhoto/>
</template>

<script>
import profilePhoto from '~/components/profilePhoto.vue'
export default ({
    middleware: "authTestUser",
    components: {
      profilePhoto
  },
})
</script>