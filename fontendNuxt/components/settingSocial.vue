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

                    <!-- Right section -->
                    <div class="_advertise_right">
                        <div class="_advertise_card _mar_b20">
                            <!-- Step one -->
                            <p class="_advertise_Sub_title _3title"><i class="fas fa-user"></i> Social Links</p>

                            <div class="_advertise_step_form">
                                <div class="row">
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="_1input_group">
                                            <p class="_1label">Facebook Profile URL</p>
                                            <Input placeholder="Facebook Profile URL">
                                                <Icon type="logo-facebook" slot="prefix" style="color: #3B579D" />
                                            </Input>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="_1input_group">
                                            <p class="_1label">Twitter Profile URL</p>
                                            <Input placeholder="Twitter Profile URL">
                                                <Icon type="logo-twitter" slot="prefix" style="color: #55ACEE"/>
                                            </Input>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="_1input_group">
                                            <p class="_1label">YouTube Profile URL</p>
                                            <Input placeholder="YouTube Profile URL">
                                                <Icon type="logo-youtube" slot="prefix" style="color: #E62117"/>
                                            </Input>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="_1input_group">
                                            <p class="_1label">Instagram Profile URL</p>
                                            <Input placeholder="Instagram Profile URL">
                                                <Icon type="logo-instagram" slot="prefix" style="color: #3f729b"/>
                                            </Input>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="_1input_group">
                                            <p class="_1label">Linkedin Profile URL</p>
                                            <Input placeholder="Linkedin Profile URL">
                                                <Icon type="logo-facebook" slot="prefix" style="color: #1A84BC"/>
                                            </Input>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="_1input_group">
                                            <p class="_1label">Vkontakte Profile URL</p>
                                            <Input placeholder="Vkontakte Profile URL">
                                                <i class="fab fa-vk fa-lg"  slot="prefix" style="color: #527498"></i>
                                            </Input>
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
                    <!-- Right section -->
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