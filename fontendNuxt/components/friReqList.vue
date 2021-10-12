<template>
    <div>
        <div class="_1main_content">
            <div class="_layout">
                <div class="_layout_row">
                    <!-- Saved page main content -->
                    <div class="_layout_col">
                        <div class="_inner_layout">
                            <div class="_singlePage _mar_b20">
                                <!-- Shimmer -->
                                <template v-if="isHide">
                                    <div class="_singlePage_shimmer_all">
                                        <div class="_singlePage_shimmer_title _shim_animate"></div>
                                        <div class="_singlePage_shimmer">
                                            <div class="_singlePage_shimmer_profilePic _shim_animate"></div>
                                            <div class="_singlePage_shimmer_details">
                                                <div class="_singlePage_shimmer_name _shim_w50 _shim_animate"></div>
                                                <div class="_singlePage_shimmer_text _shim_animate"></div>
                                            </div>
                                        </div>

                                        <div class="_singlePage_shimmer">
                                            <div class="_singlePage_shimmer_profilePic _shim_animate"></div>
                                            <div class="_singlePage_shimmer_details">
                                                <div class="_singlePage_shimmer_name _shim_w40 _shim_animate"></div>
                                                <div class="_singlePage_shimmer_text _shim_animate"></div>
                                            </div>
                                        </div>

                                        <div class="_singlePage_shimmer">
                                            <div class="_singlePage_shimmer_profilePic _shim_animate"></div>
                                            <div class="_singlePage_shimmer_details">
                                                <div class="_singlePage_shimmer_name _shim_w60 _shim_animate"></div>
                                                <div class="_singlePage_shimmer_text _shim_animate"></div>
                                            </div>
                                        </div>

                                        <div class="_singlePage_shimmer">
                                            <div class="_singlePage_shimmer_profilePic _shim_animate"></div>
                                            <div class="_singlePage_shimmer_details">
                                                <div class="_singlePage_shimmer_name _shim_w70 _shim_animate"></div>
                                                <div class="_singlePage_shimmer_text _shim_animate"></div>
                                            </div>
                                        </div>

                                        <div class="_singlePage_shimmer">
                                            <div class="_singlePage_shimmer_profilePic _shim_animate"></div>
                                            <div class="_singlePage_shimmer_details">
                                                <div class="_singlePage_shimmer_name _shim_w50 _shim_animate"></div>
                                                <div class="_singlePage_shimmer_text _shim_animate"></div>
                                            </div>
                                        </div>

                                        <div class="_singlePage_shimmer">
                                            <div class="_singlePage_shimmer_profilePic _shim_animate"></div>
                                            <div class="_singlePage_shimmer_details">
                                                <div class="_singlePage_shimmer_name _shim_w40 _shim_animate"></div>
                                                <div class="_singlePage_shimmer_text _shim_animate"></div>
                                            </div>
                                        </div>

                                        <div class="_singlePage_shimmer">
                                            <div class="_singlePage_shimmer_profilePic _shim_animate"></div>
                                            <div class="_singlePage_shimmer_details">
                                                <div class="_singlePage_shimmer_name _shim_w60 _shim_animate"></div>
                                                <div class="_singlePage_shimmer_text _shim_animate"></div>
                                            </div>
                                        </div>

                                        <div class="_singlePage_shimmer">
                                            <div class="_singlePage_shimmer_profilePic _shim_animate"></div>
                                            <div class="_singlePage_shimmer_details">
                                                <div class="_singlePage_shimmer_name _shim_w50 _shim_animate"></div>
                                                <div class="_singlePage_shimmer_text _shim_animate"></div>
                                            </div>
                                        </div>

                                        <div class="_singlePage_shimmer">
                                            <div class="_singlePage_shimmer_profilePic _shim_animate"></div>
                                            <div class="_singlePage_shimmer_details">
                                                <div class="_singlePage_shimmer_name _shim_w40 _shim_animate"></div>
                                                <div class="_singlePage_shimmer_text _shim_animate"></div>
                                            </div>
                                        </div>

                                        <div class="_singlePage_shimmer">
                                            <div class="_singlePage_shimmer_profilePic _shim_animate"></div>
                                            <div class="_singlePage_shimmer_details">
                                                <div class="_singlePage_shimmer_name _shim_w60 _shim_animate"></div>
                                                <div class="_singlePage_shimmer_text _shim_animate"></div>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                                <!-- Shimmer -->

                                <template v-if="isloaded">
                                    <div class="_singlePage_top">
                                        <h2 class="_singlePage_top_title _1title">All Friend Request</h2>

                                        <div class="_singlePage_top_right">
                                            <Dropdown trigger="click" placement="bottom-end">
                                                <button class="_3btn" type="button"><i class="fas fa-sliders-h"></i></button>
                                                <DropdownMenu slot="list">
                                                    <DropdownItem>All</DropdownItem>
                                                    <DropdownItem>Links</DropdownItem>
                                                    <DropdownItem>Videos</DropdownItem>
                                                    <DropdownItem>Photos</DropdownItem>
                                                    <DropdownItem>Places</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>
                                    </div>

                                    <div class="_singlePage_main">
                                        <!-- Friend request items -->
                                        <div class="_friDrop_items _friRequest" v-for="(items, index) in 10" :key="index">
                                            <a href="/friReqList" class="_friDrop_main router-link-exact-active router-link-active">
                                                <div class="_friDrop_pic">
                                                    <img src="/static/img/pic.jpg" alt="" title="" class="_friDrop_img">
                                                </div> 
                                                <div class="_friDrop_details">
                                                    <div class="_friDrop_name_time">
                                                        <p class="_friDrop_details_title"><strong>Mr. 00.09</strong></p> 
                                                        <p class="_friDrop_time">10 minutes ago</p>
                                                    </div>
                                                </div>
                                            </a> 
                                            <div class="_friDrop_button">
                                                <button type="button" class="_1btn">Accect</button> 
                                                <button type="button" class="_3btn">Delete</button>
                                            </div>
                                        </div>
                                        <!-- Friend request items -->

                                        <!-- Pagination -->
                                        <div class="_pagination _mar_t30">
                                            <Page :total="100" />
                                        </div>
                                        <!-- Pagination -->
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                    <!-- Saved page main content -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  components: {
      
  },

  data(){
    return{
      isloaded: false,
      isHide: true
    }
  },

  methods:{
    
  },
  
  created(){
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