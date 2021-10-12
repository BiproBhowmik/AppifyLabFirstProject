<template>
    <div>
        <div class="_1main_content">
            <!-- Banner -->
            <pageBanner/>
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

                        <template  v-if="isloaded">
                            <div class="_groupAbout_card _mar_b20">
                                <!-- General -->
                                <div class="_groupAbout_info _padd_b20">
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

                                <!-- Additional Contact Info -->
                                <div class="_groupAbout_info _padd_b20">
                                    <h2 class="_groupAbout_title _3title">ADDITIONAL CONTACT INFO</h2>

                                    <div class="_groupAbout_info_items">
                                        <div class="_groupAbout_info_icon">
                                            <i class="fas fa-globe"></i>
                                        </div>

                                        <div class="_groupAbout_info_details">
                                            <a class="_groupAbout_info_link" href="">https://gadgetandgear.com/</a>
                                        </div>
                                    </div>
                                    
                                    <div class="_groupAbout_info_items">
                                        <div class="_groupAbout_info_icon">
                                            <i class="fas fa-phone"></i>
                                        </div>

                                        <div class="_groupAbout_info_details">
                                            <p class="_groupAbout_info_text">01790302229</p>
                                        </div>
                                    </div>

                                    <div class="_groupAbout_info_items">
                                        <div class="_groupAbout_info_icon">
                                            <i class="fas fa-envelope"></i>
                                        </div>

                                        <div class="_groupAbout_info_details">
                                            <a href="" class="_groupAbout_info_link">info@CONNECTIVER.com</a>
                                        </div>
                                    </div>
                                </div>
                                <!-- Additional Contact Info -->

                                <!-- More info -->
                                <div class="_groupAbout_info">
                                    <h2 class="_groupAbout_title _3title">MORE INFO</h2>

                                    <div class="_groupAbout_info_items">
                                        <div class="_groupAbout_info_icon">
                                            <i class="fas fa-info-circle"></i>
                                        </div>

                                        <div class="_groupAbout_info_details">
                                            <p class="_groupAbout_info_title _mar_b15">About</p>
                                            <p class="_groupAbout_info_text">
                                                G&G is the only multi branded retail chain outlets of Smartphones, Premium Accessories and also Apple Authorized Re-seller having 17 outlets in Dhaka City.
                                                You can find us for online shopping on www.gadgetandgear.com
                                            </p>
                                        </div>
                                    </div>

                                    <div class="_groupAbout_info_items">
                                        <div class="_groupAbout_info_icon">
                                            <i class="fas fa-info-circle"></i>
                                        </div>

                                        <div class="_groupAbout_info_details">
                                            <p class="_groupAbout_info_title _mar_b15">Additional Information</p>
                                            <p class="_groupAbout_info_text">
                                                Outlets Locations https://www.gadgetandgear.com/shop-address Premium Accessories and also Apple Authorized Re-seller having 17 outlets in Dhaka City.
                                                You can find us for online shopping on www.gadgetandgear.com
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div class="_groupAbout_info_items">
                                        <div class="_groupAbout_info_icon">
                                            <i class="fab fa-instagram"></i>
                                        </div>

                                        <div class="_groupAbout_info_details">
                                            <a href="" class="_groupAbout_info_link">CONNECTIVER</a>
                                        </div>
                                    </div>
                                </div>
                                <!-- More info -->
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
import pageBanner from './pageBanner.vue'

export default {
  components: {
    pageBanner
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