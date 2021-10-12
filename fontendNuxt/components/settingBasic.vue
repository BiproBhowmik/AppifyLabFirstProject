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
                            <p class="_advertise_Sub_title _3title"><i class="fas fa-user"></i> Basic</p>

                            <div class="_advertise_step_form">
                                <div class="row">
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="_1input_group">
                                            <p class="_1label">First Name</p>

                                            <Input placeholder="First Name" value="Marian" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="_1input_group">
                                            <p class="_1label">Last Name</p>

                                            <Input placeholder="Last Name" value="Alex" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="_1input_group">
                                            <p class="_1label">I am</p>

                                            <Select style="width:100%">
                                                <Option>Male</Option>
                                                <Option>Female</Option>
                                                <Option>Other</Option>
                                            </Select>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="_1input_group">
                                            <p class="_1label">Website</p>

                                            <Input placeholder="Website link must start with http:// or https://"/>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="_1input_group">
                                            <p class="_1label">Country</p>

                                            <Select style="width:100%" value="Romania">
                                                <Option>Bangladesh</Option>
                                                <Option>USA</Option>
                                                <Option>Other</Option>
                                            </Select>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <p class="_1label">Birth date</p>

                                        <div class="row">
                                            <div class="col-12 col-md-4 col-lg-4">
                                                <div class="_1input_group">
                                                    <Select style="width:100%" placeholder="Select Month">
                                                        <Option>Jan</Option>
                                                        <Option>Feb</Option>
                                                        <Option>April</Option>
                                                    </Select>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-4 col-lg-4">
                                                <div class="_1input_group">
                                                    <Select style="width:100%" placeholder="Select Day">
                                                        <Option>Jan</Option>
                                                        <Option>Feb</Option>
                                                        <Option>April</Option>
                                                    </Select>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-4 col-lg-4">
                                                <div class="_1input_group">
                                                    <Select style="width:100%" placeholder="Select Year">
                                                        <Option>Jan</Option>
                                                        <Option>Feb</Option>
                                                        <Option>April</Option>
                                                    </Select>
                                                </div>
                                            </div>
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
      
    }
  },

  methods:{
    
  },
  
  created(){
    
  }
}
</script>