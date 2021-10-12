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
                            <p class="_advertise_Sub_title _3title"><i class="fas fa-bell"></i> Notifications</p>

                            <div class="_advertise_step_form">
                                <div class="row">
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <p class="_advertise_sub_title">SYSTEM NOTIFICATIONS</p>
                                    </div>
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="_1chechGroup">
                                            <div class="_1chechGroup_icon">
                                               <i class="fas fa-bell"></i>
                                            </div>
                                            <div class="_1chechGroup_details">
                                                <p class="_1chechGroup_title">Chat Message Sound</p>
                                                <p class="_1chechGroup_text">A sound will be played each time you receive a new message on an inactive chat window</p>
                                            </div>
                                            <div class="_1chechGroup_checkbox">
                                                <i-switch>
                                                    <span slot="open"></span>
                                                    <span slot="close"></span>
                                                </i-switch>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="_1chechGroup">
                                            <div class="_1chechGroup_icon">
                                                <i class="fas fa-bell"></i>
                                            </div>
                                            <div class="_1chechGroup_details">
                                                <p class="_1chechGroup_title">Notifications Sound</p>
                                                <p class="_1chechGroup_text">A sound will be played each time you receive a new activity notification</p>
                                            </div>
                                            <div class="_1chechGroup_checkbox">
                                                <i-switch>
                                                    <span slot="open"></span>
                                                    <span slot="close"></span>
                                                </i-switch>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-12 col-lg-12">
                                        <p class="_advertise_sub_title">EMAIL NOTIFICATIONS</p>
                                    </div>

                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="_1input_group">
                                            <p class="_1label">Email Me When</p>

                                            <div class="_mar_b10">
                                                <Checkbox>Someone commented on my post</Checkbox>
                                            </div>
                                            <div>
                                                <Checkbox>Someone mentioned me</Checkbox>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="_advertise_step_button">
                                            <button class="_1btn _btn_150">Save Changes</button>
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