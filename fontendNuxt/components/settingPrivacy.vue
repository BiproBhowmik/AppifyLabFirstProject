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
                            <p class="_advertise_Sub_title _3title"><i class="fa fa-user-secret"></i> Privacy</p>

                            <div class="_advertise_step_form">
                                <div class="row">
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="_1chechGroup">
                                            <div class="_1chechGroup_icon">
                                                <i class="fas fa-comments"></i>
                                            </div>
                                            <div class="_1chechGroup_details">
                                                <p class="_1chechGroup_title">Chat Enabled</p>
                                                <p class="_1chechGroup_text">If chat disabled you will appear offline and will no see who is online too</p>
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
                                                <i class="fas fa-envelope"></i>
                                            </div>
                                            <div class="_1chechGroup_details">
                                                <p class="_1chechGroup_title">Email you with our newsletter</p>
                                                <p class="_1chechGroup_text">From time to time we send newsletter email to all of our members</p>
                                            </div>
                                            <div class="_1chechGroup_checkbox">
                                                <i-switch>
                                                    <span slot="open"></span>
                                                    <span slot="close"></span>
                                                </i-switch>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="_1input_group">
                                            <p class="_1label">Who can see your birthdate</p>

                                            <Select>
                                                <Option>Everyone</Option>
                                                <Option>Friend</Option>
                                                <Option>Only me</Option>
                                            </Select>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="_1input_group">
                                            <p class="_1label">Who can see your basic info</p>

                                            <Select>
                                                <Option>Everyone</Option>
                                                <Option>Friend</Option>
                                                <Option>Only me</Option>
                                            </Select>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="_1input_group">
                                            <p class="_1label">Who can see your work info</p>

                                            <Select>
                                                <Option>Everyone</Option>
                                                <Option>Friend</Option>
                                                <Option>Only me</Option>
                                            </Select>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="_1input_group">
                                            <p class="_1label">Who can see your location info</p>

                                            <Select>
                                                <Option>Everyone</Option>
                                                <Option>Friend</Option>
                                                <Option>Only me</Option>
                                            </Select>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="_1input_group">
                                            <p class="_1label">Who can see your other info</p>

                                            <Select>
                                                <Option>Everyone</Option>
                                                <Option>Friend</Option>
                                                <Option>Only me</Option>
                                            </Select>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="_1input_group">
                                            <p class="_1label">Who can see your friends</p>

                                            <Select>
                                                <Option>Everyone</Option>
                                                <Option>Friend</Option>
                                                <Option>Only me</Option>
                                            </Select>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="_1input_group">
                                            <p class="_1label">Who can see your photos</p>

                                            <Select>
                                                <Option>Everyone</Option>
                                                <Option>Friend</Option>
                                                <Option>Only me</Option>
                                            </Select>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="_1input_group">
                                            <p class="_1label">Who can see your liked pages</p>

                                            <Select>
                                                <Option>Everyone</Option>
                                                <Option>Friend</Option>
                                                <Option>Only me</Option>
                                            </Select>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="_1input_group">
                                            <p class="_1label">Who can see your joined groups</p>

                                            <Select>
                                                <Option>Everyone</Option>
                                                <Option>Friend</Option>
                                                <Option>Only me</Option>
                                            </Select>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="_1input_group">
                                            <p class="_1label">Who can see your joined events</p>

                                            <Select>
                                                <Option>Everyone</Option>
                                                <Option>Friend</Option>
                                                <Option>Only me</Option>
                                            </Select>
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