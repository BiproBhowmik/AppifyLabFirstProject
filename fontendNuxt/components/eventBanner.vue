<template>
    <div>
        <div class="_1banner _mar_b20">
            <div class="_1banner_main">
                <!-- Shimmer -->
                <template v-if="isHide">
                    <div class="_pro_shimmer">
                        <div class="_pro_shimmer_cover _shim_animate"></div>
                        <!-- <div class="_pro_shimmer_proPic _shim_animate"></div> -->
                        <div class="_group_shimmer_title _shim_animate"></div>
                        <div class="_group_shimmer_pre _shim_animate"></div>
                        <div class="_group_shimmer_pre _shim_animate"></div>
                        <div class="_group_shimmer_pre _shim_animate"></div>
                        
                        <ul class="_pro_shimmer_menu">
                            <li class="_shim_animate"></li>
                            <li class="_shim_animate"></li>
                            <li class="_shim_animate"></li>
                            <li class="_shim_animate"></li>
                            <li class="_shim_animate"></li>
                        </ul>
                    </div>
                </template>
                <!-- Shimmer -->

                <template v-if="isloaded">
                    <div class="_1banner_pic">
                        <img class="_1banner_img" src="/static/img/file_1608029627953.jpg" alt="" title="">
                    </div>

                    <div class="_1banner_bottom _4banner_bottom">
                        <div class="_1banner_details">
                            <div class="_4banner_cal">
                                <div class="_4banner_cal_date">
                                    <p class="_4banner_cal_day">
                                        19
                                    </p>
                                    <p class="_4banner_cal_mo">
                                        Jan
                                    </p> 
                                </div>
                            </div>

                            <div class="_1banner_details_left">
                                <h2 class="_1banner_title">Castaway On The Moon (COTM)</h2>

                                <p class="_1banner_follow"><i class="fas fa-globe-europe"></i> Public group · 242.8K members</p>

                                <p class="_1banner_follow">
                                    <i class="far fa-clock _padd_r4"></i>
                                    Jan 19 at 12:15 AM -
                                    Jan 19 at 03:15 AM
                                </p>

                                <p class="_1banner_follow">Finished</p>
                            </div>
                        </div>

                        <div class="_1banner_menu">
                            <ul class="_1banner_menu_list">
                                <li :class="$route.path == '/event' ? '_active' : ''">
                                    <router-link to="/event">Newsfeed</router-link>
                                </li>
                                <li :class="$route.path == '/eventAbout' ? '_active' : ''">
                                    <router-link to="/eventAbout">About</router-link>
                                </li>
                                <li :class="$route.path == '/eventMedia' ? '_active' : ''">
                                    <router-link to="/eventMedia">Media</router-link>
                                </li>
                                <!-- <li :class="$route.path == '/' ? '_active' : ''">
                                    <router-link to="">Photos</router-link>
                                </li>
                                <li :class="$route.path == '/' ? '_active' : ''">
                                    <router-link to="">Videos</router-link>
                                </li> -->
                            </ul>

                            <ul class="_1banner_menu_options">
                                <li class="_1banner_menu_options_items">
                                    <button class="_2btn _pre_icon" type="button"><i class="far fa-check-circle"></i> Going</button>
                                </li>
                                <li class="_1banner_menu_options_items">
                                    <button class="_3btn _pre_icon"><i class="far fa-star"></i> Interested</button>
                                </li>
                                <li class="_1banner_menu_options_items">
                                    <button class="_3btn _pre_icon" type="button"><i class="fas fa-envelope"></i> Invite</button>
                                </li>
                                <li class="_1banner_menu_options_items">
                                    <button class="_3btn" type="button"><i class="fas fa-share"></i></button>
                                </li>
                                <li class="_1banner_menu_options_items">
                                    <Dropdown trigger="click" placement="bottom-end">
                                        <!-- <Button type="primary"> -->
                                            <button class="_3btn" type="button"><i class="fas fa-ellipsis-h"></i></button>
                                        <!-- </Button> -->
                                        <DropdownMenu slot="list">
                                            <DropdownItem>Share</DropdownItem>
                                            <DropdownItem>Pin group</DropdownItem>
                                            <DropdownItem>Report group</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </li>
                            </ul>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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