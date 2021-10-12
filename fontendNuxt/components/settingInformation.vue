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
                            <p class="_advertise_Sub_title _3title"><i class="fas fa-file-invoice"></i> Download Your Information</p>

                            <div class="_advertise_step_form">
                                <div class="_mar_b20">
                                    <Alert type="success" show-icon>
                                        	Download Your Information
                                        <span slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </span>
                                    </Alert>
                                </div>

                                <h2 class="_advertise_select">Select which information you would like to download</h2>

                                <ul class="_infoList">
                                    <li class="_active">
                                        <div class="_infoList_icon"><i class="fas fa-info"></i></div>
                                        <p class="_infoListTitle">Info</p>
                                    </li>
                                    <li>
                                        <div class="_infoList_icon"><i class="fas fa-user-friends"></i></div>
                                        <p class="_infoListTitle">Friends</p>
                                    </li>
                                    <li>
                                        <div class="_infoList_icon"><i class="fas fa-user-plus"></i></div>
                                        <p class="_infoListTitle">Following</p>
                                    </li>
                                    <li>
                                        <div class="_infoList_icon"><i class="fas fa-user-plus"></i></div>
                                        <p class="_infoListTitle">Followers</p>
                                    </li>
                                    <li>
                                        <div class="_infoList_icon"><i class="fas fa-flag"></i></div>
                                        <p class="_infoListTitle">Pages</p>
                                    </li>
                                    <li>
                                        <div class="_infoList_icon"><i class="fas fa-users"></i></div>
                                        <p class="_infoListTitle">Groups</p>
                                    </li>
                                    <li>
                                        <div class="_infoList_icon"><i class="fas fa-calendar-alt"></i></div>
                                        <p class="_infoListTitle">Events</p>
                                    </li>
                                    <li>
                                        <div class="_infoList_icon"><i class="fas fa-newspaper"></i></div>
                                        <p class="_infoListTitle">Posts</p>
                                    </li>
                                </ul>
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