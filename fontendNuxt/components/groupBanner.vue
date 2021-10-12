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

                    <div class="_1banner_bottom">
                        <div class="_1banner_details">
                            <div class="_1banner_details_left">
                                <h2 class="_1banner_title">Castaway On The Moon (COTM)</h2>

                                <p class="_1banner_follow"><i class="fas fa-globe-europe"></i> Public group · 242.8K members</p>
                            </div>

                            <div class="_1banner_details_right">
                                <button class="_2btn _pre_img" type="button">
                                    <svg class="_btn_img" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><path xmlns="http://www.w3.org/2000/svg" d="m272 384a96 96 0 1 0 96-96 96.108 96.108 0 0 0 -96 96zm40-8h48v-48a8 8 0 0 1 16 0v48h48a8 8 0 0 1 0 16h-48v48a8 8 0 0 1 -16 0v-48h-48a8 8 0 0 1 0-16z" fill="#ffffff" data-original="#000000" style="" class=""/><path xmlns="http://www.w3.org/2000/svg" d="m272.6 442.613a111.947 111.947 0 0 1 71.217-167.976c-31.117-42.497-77.107-66.637-127.817-66.637-45.522 0-87.578 19.485-118.42 54.865-31.063 35.633-48.567 85.3-49.538 140.291 18.365 9.261 93.77 44.844 167.958 44.844a312.1 312.1 0 0 0 56.6-5.387z" fill="#ffffff" data-original="#000000" style="" class=""/><circle xmlns="http://www.w3.org/2000/svg" cx="216" cy="112" r="80" fill="#ffffff" data-original="#000000" style="" class=""/></g></svg>
                                    Joined
                                </button>
                            </div>
                        </div>

                        <div class="_1banner_menu">
                            <ul class="_1banner_menu_list">
                                <li :class="$route.path == '/group' ? '_active' : ''">
                                    <router-link to="/group">Newsfeed</router-link>
                                </li>
                                <li :class="$route.path == '/groupMedia' ? '_active' : ''">
                                    <router-link to="/groupMedia">Media</router-link>
                                </li>
                                <li :class="$route.path == '/groupMember' ? '_active' : ''">
                                    <router-link to="/groupMember">Members</router-link>
                                </li>
                                <li :class="$route.path == '/groupAbout' ? '_active' : ''">
                                    <router-link to="/groupAbout">About</router-link>
                                </li>
                            </ul>

                            <ul class="_1banner_menu_options">
                                <li class="_1banner_menu_options_items">
                                    <Dropdown trigger="click">
                                        <button class="_3btn _pre_icon"><Icon type="md-add" /> Invite</button>

                                        <DropdownMenu slot="list">
                                            <DropdownItem><i class="fas fa-user-plus"></i> Manage notification</DropdownItem>
                                            <DropdownItem>Unfollow group</DropdownItem>
                                            <DropdownItem>Leave group</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </li>
                                <li class="_1banner_menu_options_items">
                                    <button @click="isSearch = !isSearch" class="_3btn" type="button"><i class="fas fa-search"></i></button>

                                    <!-- Search -->
                                    <div :class="isSearch ? '_2search _2search_open':'_2search'">
                                        <div class="_2search_box">
                                            <input class="_2search_input" alt="" placeholder="Search.." title="">
                                            <button class="_2search_btn"><i class="fas fa-search"></i></button>
                                        </div>
                                    </div>
                                    <!-- Search -->
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
      isSearch: false
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