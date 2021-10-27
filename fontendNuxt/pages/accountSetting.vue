<template>
    <settingNew/>
</template>

<script>
import settingNew from '~/components/settingNew.vue'
export default ({
    middleware: "authTestUser",
    components: {
      settingNew
  },
})
</script>