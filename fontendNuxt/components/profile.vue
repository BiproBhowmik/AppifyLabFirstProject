<template>
    <div>
        <div class="_1main_content">
            <!-- Banner -->
            <ProfileBanner/>
            <!-- Banner -->

            <!-- Profile main content -->
            <div class="_profile_layout">
                <div class="_profile_row">
                    <!-- Left Section -->
                    <div class="_profile_left">
                        <!-- Statusbox -->
                        <div class="_profile_statusBox">
                            <statusBox/>
                        </div>
                        <!-- Statusbox -->

                        <!-- Feed -->
                        <div class="_profile_feed">
                            <Feed/>
                        </div>
                        <!-- Feed -->
                    </div>
                    <!-- Left Section -->

                    <!-- Right Section -->
                    <div class="_profile_right">
                        <!-- shimmer -->
                        <template v-if="isHide">
                            <div class="_proRight_shimmer _mar_b20">
                                <div class="_proRight_shimmer_title _shim_animate"></div>

                                <div class="_proRight_shimmer_des _shim_animate _shim_w90"></div>
                                <div class="_proRight_shimmer_des _shim_animate _shim_w80"></div>
                                <div class="_proRight_shimmer_des _shim_animate _shim_w40"></div>

                                <div class="_proRight_shimmer_items">
                                    <div class="_proRight_shimmer_items_img _shim_animate"></div>
                                    <div class="_proRight_shimmer_items_details">
                                        <div class="_proRight_shimmer_items_title _shim_animate _shim_w50"></div>
                                    </div>
                                </div>

                                <div class="_proRight_shimmer_items">
                                    <div class="_proRight_shimmer_items_img _shim_animate"></div>
                                    <div class="_proRight_shimmer_items_details">
                                        <div class="_proRight_shimmer_items_title _shim_animate _shim_w60"></div>
                                    </div>
                                </div>

                                <div class="_proRight_shimmer_items">
                                    <div class="_proRight_shimmer_items_img _shim_animate"></div>
                                    <div class="_proRight_shimmer_items_details">
                                        <div class="_proRight_shimmer_items_title _shim_animate _shim_w50"></div>
                                    </div>
                                </div>

                                <div class="_proRight_shimmer_items">
                                    <div class="_proRight_shimmer_items_img _shim_animate"></div>
                                    <div class="_proRight_shimmer_items_details">
                                        <div class="_proRight_shimmer_items_title _shim_animate _shim_w40"></div>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <!-- shimmer -->

                        <template v-if="isloaded">
                            <div class="_proAbout_card _mar_b20">
                                <!-- <h2 class="_proAbout_card_title _1title">About</h2> -->

                                <h2 class="_about_card_title">About</h2>

                                <p class="_about_des _mar_b20">Welcome to Castaway On The Moon,
                                A fortress of solitude for all things art and for creative enthusiasts.
                                Got some hobbies you're passionate about?</p>

                                <div class="_proAbout_card_info">
                                    <p class="_proAbout_card_info_icons">
                                        <i class="fas fa-suitcase"></i>
                                    </p>

                                    <div class="_proAbout_card_info_details">
                                        <p class="_proAbout_card_info_val">Web Developer at <strong>AppifyLab</strong></p>
                                    </div>
                                </div>

                                <div class="_proAbout_card_info">
                                    <p class="_proAbout_card_info_icons">
                                        <i class="fas fa-link"></i>
                                    </p>

                                    <div class="_proAbout_card_info_details">
                                        <p class="_proAbout_card_info_val">www.appifylab.com</p>
                                    </div>
                                </div>

                                <div class="_proAbout_card_info">
                                    <p class="_proAbout_card_info_icons">
                                        <i class="fas fa-home"></i>
                                    </p>

                                    <div class="_proAbout_card_info_details">
                                        <p class="_proAbout_card_info_val">Live in <strong>Cairo, Eygept</strong></p>
                                    </div>
                                </div>

                                <div class="_proAbout_card_info">
                                    <p class="_proAbout_card_info_icons">
                                        <i class="fas fa-globe"></i>
                                    </p>

                                    <div class="_proAbout_card_info_details">
                                        <p class="_proAbout_card_info_val">From <strong>Aden, Yemen</strong></p>
                                    </div>
                                </div>
                            </div>

                            <div class="_proAbout_card _mar_b20">
                                <h2 class="_about_card_title">Photos</h2>
                                <div class="_proAbout_card_image">
                                    <!-- Items -->
                                    <div class="_proAbout_card_pic_main" v-for="(items, index) in 6" :key="index">
                                        <div class="_proAbout_card_pic">
                                            <img class="_proAbout_card_img" src="/static/img/file_1607448700853.jpg" alt="" title="">
                                        </div>
                                    </div>
                                    <!-- Items -->
                                </div>
                            </div>
                        </template>
                    </div>
                    <!-- Right Section -->
                </div>
            </div>
            <!-- Profile main content -->
        </div>
    </div>
</template>

<script>
import leftSidebar from './leftSidebar.vue'
import statusBox from './statusBox.vue'
import Feed from './feed.vue'
import rightSection from './rightSection.vue'
import ProfileBanner from './profileBanner.vue'

export default {
  components: {
    leftSidebar,
    Feed,
    rightSection,
    statusBox,
    ProfileBanner
  },

  data(){
    return{
      isHide: true,
      isloaded: false
    }
  },

  methods:{
    
  },
  
  created() {
    var self = this;
      var self2 = this;
      setTimeout(function() {
        self.$nextTick(function() {
          self.isloaded = true;
        })
        self2.$nextTick(function() {
          self2.isHide = false;
        })
    }, 1500);
  }
}
</script>