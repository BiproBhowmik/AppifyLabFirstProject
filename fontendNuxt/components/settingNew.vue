<template>
    <div>
        <div class="_1main_content">
            <div class="_advertise_layout">
                <div class="_advertise_row">
                    <!-- Left section -->
                    <div class="_advertise_left">
                        <settingLeft/>
                    </div>
                    <!-- Left section -->

                    <!-- Left section -->
                    <div class="_advertise_right">
                        <div class="_advertise_card _mar_b20">
                            <!-- Step one -->
                            <p class="_advertise_Sub_title _3title"><i class="fas fa-cog"></i> Account Setting</p>

                            <div class="_advertise_step_form">
                                <div class="row">
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="_1input_group">
                                            <p class="_1label">Email Address</p>

                                            <Input type="email" placeholder="Email Address"
                                            v-model="emailUsername.email" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="_1input_group">
                                            <p class="_1label">User Name</p>

                                            <Input 
                                            v-model="emailUsername.user_name" placeholder="User Name" />
                                        </div>
                                    </div>
                                    
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="_advertise_step_button">
                                            <button @click="changeEmailUserName" class="_1btn _btn_150">Save Changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Step one -->
                        </div>
                    </div>
                    <!-- Left section -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import settingLeft from '~/components/settingLeft.vue'

export default {
  components: {
      settingLeft
  },

  data(){
    return{
      edit_Profile: false,
      isSecurity: false,

      emailUsername: {
          email: this.$store.state.authUser.email,
          user_name: this.$store.state.authUser.user_name,
          id: this.$store.state.authUser.id
      }
    }
  },

  methods:{
    async changeEmailUserName(){
        
        if (this.emailUsername.user_name != "" &&
          this.emailUsername.email != "") {
            const res = await this.callApi(
              "post",
              "http://localhost:3333/updateEmailUsername",
              this.emailUsername
            );
            if (res.status == 200) {
              // this.$router.push("/logIn")
              console.log(res);
            }
        }
    }
  },
  
  created(){
    
  }
}
</script>