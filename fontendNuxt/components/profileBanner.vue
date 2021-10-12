<template>
    <div>
        <div class="_2banner _mar_b20">
            <div class="_2banner_layout">
                <div class="_2banner_main">
                    <!-- Shimmer -->
                    <template v-if="isHide">
                        <div class="_pro_shimmer">
                            <div class="_pro_shimmer_cover _shim_animate"></div>
                            <div class="_pro_shimmer_proPic _shim_animate"></div>
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
                        <div class="_2banner_top">
                            <div class="_2banner_pic">
                                <img class="_2banner_img" src="/static/img/image_1608022151387.jpeg" alt="" title="">
                            </div>

                            <div class="_2banner_pro">
                                <div class="_2banner_pro_pic _active">
                                    <img class="_2banner_pro_img" src="/static/img/file_1607448700853.jpg" alt="" title="">

                                    <p class="_2banner_pro_edit">
                                        <i class="fas fa-camera"></i>
                                    </p>
                                </div>

                                <p class="_2banner_pro_name">John Audrey Williams</p>
                            </div>
                        </div>

                        <div class="_2banner_menu">
                            <div class="_2banner_menu_list">
                                <ul class="_2banner_menu_list_ul">
                                    <li :class="$route.path == '/profile' ? '_active' : ''">
                                        <router-link to="/profile">Newsfeed</router-link>
                                    </li>
                                    <li :class="$route.path == '/profileAbout' ? '_active' : ''">
                                        <router-link to="/profileAbout">About</router-link>
                                    </li>
                                    <li :class="$route.path == '/profileFriend' ? '_active' : ''">
                                        <router-link to="/profileFriend">Friends</router-link>
                                    </li>
                                    <li :class="$route.path == '/profilePhoto' ? '_active' : ''">
                                        <router-link to="/profilePhoto">Photos</router-link>
                                    </li>
                                    <li :class="$route.path == '/profileVideo' ? '_active' : ''">
                                        <router-link to="/profileVideo">Videos</router-link>
                                    </li>
                                </ul>
                            </div>

                            <div class="_2banner_options">
                                <ul class="_2banner_options_list">
                                    <li class="_2banner_options_items">
                                        <button class="_2btn _pre_img" type="button">
                                            <svg class="_btn_img" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><path xmlns="http://www.w3.org/2000/svg" d="m272 384a96 96 0 1 0 96-96 96.108 96.108 0 0 0 -96 96zm40-8h48v-48a8 8 0 0 1 16 0v48h48a8 8 0 0 1 0 16h-48v48a8 8 0 0 1 -16 0v-48h-48a8 8 0 0 1 0-16z" fill="#ffffff" data-original="#000000" style="" class=""/><path xmlns="http://www.w3.org/2000/svg" d="m272.6 442.613a111.947 111.947 0 0 1 71.217-167.976c-31.117-42.497-77.107-66.637-127.817-66.637-45.522 0-87.578 19.485-118.42 54.865-31.063 35.633-48.567 85.3-49.538 140.291 18.365 9.261 93.77 44.844 167.958 44.844a312.1 312.1 0 0 0 56.6-5.387z" fill="#ffffff" data-original="#000000" style="" class=""/><circle xmlns="http://www.w3.org/2000/svg" cx="216" cy="112" r="80" fill="#ffffff" data-original="#000000" style="" class=""/></g></svg>
                                            Add Friend
                                        </button>
                                    </li>
                                    <li class="_2banner_options_items">
                                        <button class="_3btn" type="button">
                                            <svg class="_btn_img" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" x="0" y="0" viewBox="0 0 135.46666 135.46667" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><g xmlns="http://www.w3.org/2000/svg" id="layer1"><path id="rect1437" d="m11.698046 20.664689c-6.4813896 0-11.69804983 5.21762-11.69804983 11.69843v.3843l58.39118183 40.80741c2.589688 1.80889 5.967679 2.70969 9.347488 2.7095 3.37798 0 6.755961-.900219 9.34565-2.7095l58.382344-40.79838v-.39294c0-6.48091-5.21666-11.69844-11.69815-11.69844zm-11.69804983 21.85919v60.579661c0 6.48091 5.21666023 11.69843 11.69804983 11.69843h112.070464c6.48149 0 11.69815-5.21752 11.69815-11.69843v-60.570441l-58.382344 40.798279c-2.589689 1.808991-5.96767 2.709501-9.34565 2.709501-3.379809 0-6.7578-.900219-9.347488-2.709501z" paint-order="fill markers stroke" fill="#0392f8" data-original="#000000" style="" class=""/></g></g></svg>
                                            <!-- <img class="_btn_img" src="/static/img/message-blue.svg" alt="" title=""> -->
                                        </button>
                                    </li>
                                    <li class="_2banner_options_items">
                                        <button @click="isSearch = !isSearch" class="_3btn _pre_icon" type="button"><i class="fas fa-search"></i></button>

                                        <!-- Search -->
                                        <div :class="isSearch ? '_2search _2search_open':'_2search'">
                                            <div class="_2search_box">
                                                <input class="_2search_input" alt="" placeholder="Search.." title="">
                                                <button class="_2search_btn"><i class="fas fa-search"></i></button>
                                            </div>
                                        </div>
                                        <!-- Search -->
                                    </li>
                                    <li class="_2banner_options_items">
                                        <Dropdown trigger="click" placement="bottom-end">
                                            <button class="_3btn _pre_icon" type="button"><i class="fas fa-ellipsis-h"></i></button>

                                            <DropdownMenu slot="list">
                                                <DropdownItem><p class="_drop_text _drop_pre_icon"><i class="fas fa-flag"></i> Report</p></DropdownItem>
                                                <DropdownItem><p class="_drop_text _drop_pre_icon"><i class="fas fa-minus-circle"></i> Block</p></DropdownItem>
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