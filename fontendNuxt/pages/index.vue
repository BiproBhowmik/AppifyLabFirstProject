<template>
  <Index />
</template>

<script>
import SignUp from "~/components/signUp.vue";
import LogIn from "~/components/logIn.vue";
import Index from "~/components/index.vue";
export default {
  methods: {},
  middleware: "authTestUser",
  // async created(){
  //     const res = await this.callApi('get', 'myuser')
  //     console.log(res)
  // },
  components: {
    SignUp,
    LogIn,
    Index
  }
};
</script>

<style></style>
