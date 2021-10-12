<template>
    <div>
        <div class="_1main_content">
            <!-- Banner -->
            <groupBanner/>
            <!-- Banner -->

            <!-- Group main content -->
            <div class="_group_layout">
                <div class="_group_row">
                    <div class="_groupAbout">
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
                                        <div class="_proRight_shimmer_items_text _shim_animate _shim_w90"></div>
                                    </div>
                                </div>

                                <div class="_proRight_shimmer_items">
                                    <div class="_proRight_shimmer_items_img _shim_animate"></div>
                                    <div class="_proRight_shimmer_items_details">
                                        <div class="_proRight_shimmer_items_title _shim_animate _shim_w60"></div>
                                        <div class="_proRight_shimmer_items_text _shim_animate _shim_w80"></div>
                                    </div>
                                </div>

                                <div class="_proRight_shimmer_items">
                                    <div class="_proRight_shimmer_items_img _shim_animate"></div>
                                    <div class="_proRight_shimmer_items_details">
                                        <div class="_proRight_shimmer_items_title _shim_animate _shim_w50"></div>
                                        <div class="_proRight_shimmer_items_text _shim_animate _shim_w70"></div>
                                    </div>
                                </div>

                                <div class="_proRight_shimmer_items">
                                    <div class="_proRight_shimmer_items_img _shim_animate"></div>
                                    <div class="_proRight_shimmer_items_details">
                                        <div class="_proRight_shimmer_items_title _shim_animate _shim_w40"></div>
                                        <div class="_proRight_shimmer_items_text _shim_animate _shim_w80"></div>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <!-- shimmer -->

                        <template v-if="isloaded">
                            <div class="_groupAbout_card _mar_b20">
                                <h2 class="_about_card_title">About</h2>

                                <p class="_about_des">Welcome to Castaway On The Moon,
                                A fortress of solitude for all things art and for creative enthusiasts.
                                Got some hobbies you're passionate about?
                                Made something beautiful with your very own creative mind?
                                Want to share these?
                                Want to learn and collaborate with 100k others about those similar interests?
                                You came to the right place.
                                And most importantly, be nice to everyone around here because if you're not then you might want to remember the quote 
                                "Here Be Dragons." <span class="_about_des_more">See more</span></p>

                                <div class="_about_card_info">
                                    <p class="_about_card_info_icon"><i class="fas fa-globe-europe"></i></p>
                                    <div class="_about_card_info_details">
                                        <p class="_about_card_info_title">Public</p>

                                        <p class="_about_card_info_text">Anyone can see who's in the group and what they post.</p>
                                    </div>
                                </div>

                                <div class="_about_card_info">
                                    <p class="_about_card_info_icon"><i class="fas fa-eye"></i></p>
                                    <div class="_about_card_info_details">
                                        <p class="_about_card_info_title">Visible</p>

                                        <p class="_about_card_info_text">Anyone can find this group.</p>
                                    </div>
                                </div>

                                <div class="_about_card_info">
                                    <p class="_about_card_info_icon"><i class="fas fa-map-marker-alt"></i></p>
                                    <div class="_about_card_info_details">
                                        <p class="_about_card_info_title">Dhaka, Bangladesh</p>
                                    </div>
                                </div>

                                <div class="_about_card_info">
                                    <p class="_about_card_info_icon"><i class="fas fa-users"></i></p>
                                    <div class="_about_card_info_details">
                                        <p class="_about_card_info_title">General Group</p>
                                    </div>
                                </div>

                                <!-- General -->
                                <div class="_groupAbout_info _padd_t25">
                                    <h2 class="_groupAbout_title _3title">GENERAL</h2> 
                                    
                                    <div class="_groupAbout_info_items">
                                        <div class="_groupAbout_info_icon">
                                            <i class="fas fa-thumbs-up"></i>
                                        </div> 
                                        <div class="_groupAbout_info_details">
                                            <p class="_groupAbout_info_text">2,601,470 people like this including 72 of your friends</p>
                                        </div>
                                    </div> 
                                    
                                    <div class="_groupAbout_info_items">
                                        <div class="_groupAbout_info_icon">
                                            <i class="fas fa-blog"></i>
                                        </div> 
                                        <div class="_groupAbout_info_details">
                                            <p class="_groupAbout_info_text">2,615,197 people follow this</p>
                                        </div>
                                    </div> 
                                    
                                    <div class="_groupAbout_info_items">
                                        <div class="_groupAbout_info_icon">
                                            <i class="fas fa-user-check"></i>
                                        </div> 
                                        <div class="_groupAbout_info_details">
                                            <p class="_groupAbout_info_text">448 people checked in here</p>
                                        </div>
                                    </div> 
                                    
                                    <div class="_groupAbout_info_items">
                                        <div class="_groupAbout_info_icon">
                                            <i class="fas fa-money-check"></i>
                                        </div> 
                                        <div class="_groupAbout_info_details">
                                            <a href="" class="_groupAbout_info_link">Mobile Phone Shop</a>
                                        </div>
                                    </div>
                                </div>
                                <!-- General -->
                            </div>
                        </template>
                    </div>
                </div>
            </div>
            <!-- Group main content -->
        </div>
    </div>
</template>

<script>
import groupBanner from './groupBanner.vue'

export default {
  components: {
    groupBanner
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