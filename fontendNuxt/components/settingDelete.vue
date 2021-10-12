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
                            <p class="_advertise_Sub_title _3title"><i class="fas fa-trash"></i> Delete Account</p>

                            <div class="_advertise_step_form">
                                <div class="_mar_b20">
                                    <Alert show-icon>
                                        	Once you delete your account you will no longer can access it again
                                    </Alert>
                                </div>

                                <div class="row">
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="_advertise_step_button">
                                            <button class="_2btn _btn_150">Delete My Account</button>
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
import settingLeft from './settingLeft.vue'

export default {
  components: {
      settingLeft
  },

  data(){
    return{
      edit_Profile: false,
      isSecurity: false
    }
  },

  methods:{
    
  },
  
  created(){
    
  }
}
</script>