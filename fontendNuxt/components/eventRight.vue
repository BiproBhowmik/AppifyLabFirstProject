<template>
    <div>
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
            <div class="_event_right">
                <div class="_member_right_card _mar_b15">
                    <p class="_member_right_title">People going</p>

                    <div class="_mar_t15 _mar_b15">
                        <Input prefix="md-add" placeholder="Enter name" style="width: 100%" />
                    </div>

                    <p class="_member_right_subTitile">Friends</p>

                    <!-- Card -->
                    <div class="_fri_card">
                        <a class="_fri_card_pic _load_div">
                            <img alt="" title="" class="_fri_card_img" src="https://joincarevan.com//female.jpg">
                        </a> 
                            
                        <div class="_fri_card_details">
                            <p class="_1text_overflow">
                                <a class="_fri_card_name">Sumona Deb</a>
                            </p>
                        </div> 
                    </div>
                    <!-- Card -->

                    <!-- Card -->
                    <div class="_fri_card">
                        <a class="_fri_card_pic _load_div">
                            <img alt="" title="" class="_fri_card_img" src="https://joincarevan.com//female.jpg">
                        </a> 
                            
                        <div class="_fri_card_details">
                            <p class="_1text_overflow">
                                <a class="_fri_card_name">Hussain Shipu</a>
                            </p>
                        </div>
                    </div>
                    <!-- Card -->

                    <!-- Card -->
                    <div class="_fri_card">
                        <a class="_fri_card_pic _load_div">
                            <img alt="" title="" class="_fri_card_img" src="https://joincarevan.com//female.jpg">
                        </a> 
                            
                        <div class="_fri_card_details">
                            <p class="_1text_overflow">
                                <a class="_fri_card_name">Sumona Deb</a>
                            </p>
                        </div> 
                    </div>
                    <!-- Card -->
                </div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
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