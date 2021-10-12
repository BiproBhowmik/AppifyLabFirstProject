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
                            <p class="_advertise_Sub_title _3title"><i class="fa fa-shield-alt"></i> Change Password</p>

                            <div class="_advertise_step_form">
                                <div class="_mar_b20">
                                    <Alert show-icon>
                                        Changing password will log you out from all other sessions
                                    </Alert>
                                </div>

                                <div class="row">
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="_1input_group">
                                            <p class="_1label">Confirm Current Password</p>

                                            <Input placeholder="Confirm Current Password"/>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="_1input_group">
                                            <p class="_1label">Your New Password</p>

                                            <Input placeholder="Your New Password" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="_1input_group">
                                            <p class="_1label">Confirm New Password</p>

                                            <Input placeholder="Confirm New Password" />
                                        </div>
                                    </div>
                                    
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="_advertise_step_button">
                                            <button @click="current = 1" class="_1btn _btn_150">Save Changes</button>
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