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
                            <p class="_advertise_Sub_title _3title"><i class="fas fa-stream"></i> Newsfeed</p>

                            <div class="_advertise_step_form">
                                <div class="row">
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="_1input_group">
                                            <p class="_1label">Choose your default newsfeed :</p>

                                            <RadioGroup vertical>
                                                <Radio label="Personal Newsfeed">
                                                    <span class="_newfeed_radio_radio"><strong>Personal Newsfeed </strong><span>(you only get the news that you subscribed to)</span></span>
                                                </Radio>
                                                <Radio label="Personal Newsfeed">
                                                    <span class="_newfeed_radio_radio"><strong>World Newsfeed </strong><span>(you get news from everybody)</span></span>
                                                </Radio>
                                            </RadioGroup>
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
      
    }
  },

  methods:{
    
  },
  
  created(){
    
  }
}
</script>