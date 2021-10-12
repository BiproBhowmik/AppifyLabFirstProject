<template>
    <div>
        <div class="_1main_content">
            <!-- Banner -->
            <ProfileBanner/>
            <!-- Banner -->

            <!-- Profile main content -->
            <div class="_profile_layout">
                <div class="">
                    <div class="_proPages_col _mar_b20">
                        <!-- Shimmer -->
                        <template v-if="isHide">
                            <div class="_pro_inner_shimmer">
                                <div class="_pro_inner_shimmer_title_main">
                                    <div class="_pro_inner_shimmer_title_icon _shim_animate"></div>
                                    <div class="_pro_inner_shimmer_title _shim_animate"></div>
                                </div>
                                <div class="_pro_inner_shimmer_resu _shim_animate"></div>
                                
                                <div class="_pro_fri_shimmer_card_all">
                                    <div class="row">
                                        <!-- Items -->
                                        <div v-for="item in 10" :key="item" class="col-12 col-md-6 col-lg-6">
                                            <div class="_pro_fri_shimmer_card">
                                                <div class="_pro_fri_shimmer_card_img _shim_animate"></div>
                                                <div class="_pro_fri_shimmer_card_name _shim_animate"></div>
                                            </div>
                                        </div>
                                        <!-- Items -->
                                    </div>
                                </div>
                            </div>
                        </template>
                        <!-- Shimmer -->

                        <template v-if="isloaded">
                            <h2 class="_1frient_title _mar_b20 _1title">
                                <i class="fas fa-users"></i>
                                All Friends
                            </h2>

                            <!-- Friend list -->
                            <div class="_friend_main">
                                <div class="_friend_search_num">
                                    <p class="_friend_num">All Friends<span>4</span></p>
                                </div>

                                <div class="_friend_main_all">
                                    <div class="row">
                                        <!-- Items -->
                                        <div class="col-12 col-md-6 col-lg-6 _friend_card_main" v-for="(items, index) in 10" :key="index">
                                            <div class="_friend_card">
                                                <div class="_friend_card_pic _load_div">
                                                    <a href="" class="_friend_card_pic_link">
                                                        <img alt="" title="" class="_friend_card_img" src="https://joincarevan.com//female.jpg">
                                                    </a>
                                                </div> 
                                                <div class="_friend_card_details">
                                                    <a href="" class="_friend_card_name _1text_overflow">Hussain Shipu</a>
                                                </div> 
                                                
                                                <div class="_1reqest_buttons">
                                                    <button class="_3btn" type="button">View</button>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Items -->
                                    </div>
                                </div>
                            </div>
                            <!-- Friend list -->
                        </template>
                    </div>
                </div>
            </div>
            <!-- Profile main content -->
        </div>
    </div>
</template>

<script>
import ProfileBanner from './profileBanner.vue'

export default {
  components: {
    ProfileBanner
  },

  data(){
    return{
      isloaded: false,
      isHide: true,
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