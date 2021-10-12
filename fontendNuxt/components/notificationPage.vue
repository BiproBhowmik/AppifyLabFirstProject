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
                                        <h2 class="_singlePage_top_title _1title">Notifications</h2>

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
                                        <!-- Noti items -->
                                        <a href="" class="_noti_card" v-for="(items , index) in 10" :key="index">
                                            <div class="_noti_card_pic">
                                                <img class="_noti_card_img" src="/static/img/image_1608226845923.jpeg" alt="" title="">
                                            </div>

                                            <div class="_noti_card_details">
                                                <p class="_noti_card_title">
                                                    <strong class="_noti_card_title_name">Kollol Chakraborty</strong>
                                                    comment in your post.
                                                </p>

                                                <p class="_noti_card_time">10min ago</p>
                                            </div>

                                            <div class="_noti_card_more">
                                                <Dropdown trigger="click" placement="bottom-end">
                                                    <a class="_2more" href="javascript:void(0)">
                                                        <i class="fas fa-ellipsis-h"></i>
                                                    </a>
                                                    <DropdownMenu slot="list">
                                                        <DropdownItem><span>Mark as read</span></DropdownItem>
                                                        <DropdownItem><span>Delete</span></DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </div>
                                        </a>
                                        <!-- Noti items -->

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