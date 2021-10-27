<template>
    <peopleList/>
</template>

<script>
import peopleList from '~/components/peopleList.vue'
export default ({
    middleware: "authTestUser",
    components: {
      peopleList
  },
})
</script>