<template>
    <div>
        <div class="_1banner _mar_b20">
            <div class="_1banner_main">
                <!-- Shimmer -->
                <template v-if="isHide">
                    <div class="_pro_shimmer">
                        <div class="_pro_shimmer_cover _shim_animate"></div>
                        <div class="_page_shimmer_proPic _shim_animate"></div>
                        <div class="_page_shimmer_title _shim_animate"></div>
                        <div class="_page_shimmer_pre _shim_animate"></div>
                        
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
                        <img class="_1banner_img" src="/static/img/image_1608226845923.jpeg" alt="" title="">
                    </div>

                    <div class="_1banner_bottom">
                        <div class="_1banner_details _3banner_details">
                            <div class="_1banner_details_left _3banner_details_left">
                                <div class="_3banner_pro_pic">
                                    <img class="_3banner_pro_img" src="/static/img/file_1607448700853.jpg" alt="" title="">
                                </div>

                                <div class="_1banner_details_left_main">
                                    <h2 class="_1banner_title">Gadget & Gear</h2>

                                    <p class="_1banner_follow">@GadgetnGear  · Mobile Phone Shop</p>
                                </div>
                            </div>

                            <!-- <div class="_1banner_details_right">
                                <button class="_2btn _pre_icon" type="button"><Icon type="md-add" /> Invite</button>
                            </div> -->
                        </div>

                        <div class="_1banner_menu">
                            <ul class="_1banner_menu_list">
                                <li :class="$route.path == '/page' ? '_active' : ''">
                                    <router-link to="/page">Newsfeed</router-link>
                                </li>
                                <li :class="$route.path == '/pageMedia' ? '_active' : ''">
                                    <router-link to="/pageMedia">Media</router-link>
                                </li>
                                <li :class="$route.path == '/profile' ? '_active' : ''">
                                    <a href="">Website</a>
                                </li>
                                <li :class="$route.path == '/pageAbout' ? '_active' : ''">
                                    <router-link to="/pageAbout">About</router-link>
                                </li>
                            </ul>

                            <ul class="_1banner_menu_options">
                                <li class="_1banner_menu_options_items">
                                    <button class="_2btn _pre_img" type="button">
                                        <svg  class="_btn_img" style="width:16px;enable-background:new 0 0 512 512" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" x="0" y="0" viewBox="0 0 512 512" xml:space="preserve"><g><path xmlns="http://www.w3.org/2000/svg" d="m76 512c41.351562 0 75-34.648438 75-76s-33.648438-76-75-76-76 34.648438-76 76 34.648438 76 76 76zm0 0" fill="#ffffff" data-original="#000000" style="" class=""/><path xmlns="http://www.w3.org/2000/svg" d="m242 497c0 5.0625-.429688 10.019531-.761719 15h90c.238281-5.007812.761719-9.9375.761719-15 0-173.6875-143.3125-317-317-317-5.0625 0-9.992188.523438-15 .761719v90c4.980469-.332031 9.9375-.761719 15-.761719 124.070312 0 227 102.929688 227 227zm0 0" fill="#ffffff" data-original="#000000" style="" class=""/><path xmlns="http://www.w3.org/2000/svg" d="m15 0c-5.066406 0-9.972656.609375-15 .757812v90.003907c5.019531-.1875 9.9375-.761719 15-.761719 223.316406 0 407 183.683594 407 407 0 5.0625-.574219 9.980469-.761719 15h90.003907c.148437-5.027344.757812-9.933594.757812-15 0-273.382812-223.621094-497-497-497zm0 0" fill="#ffffff" data-original="#000000" style="" class=""/></g></svg>
                                        Follow
                                    </button>
                                </li>
                                <li class="_1banner_menu_options_items">
                                    <button class="_3btn">
                                        <svg class="_btn_img" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" x="0" y="0" viewBox="0 0 135.46666 135.46667" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><g xmlns="http://www.w3.org/2000/svg" id="layer1"><path id="rect1437" d="m11.698046 20.664689c-6.4813896 0-11.69804983 5.21762-11.69804983 11.69843v.3843l58.39118183 40.80741c2.589688 1.80889 5.967679 2.70969 9.347488 2.7095 3.37798 0 6.755961-.900219 9.34565-2.7095l58.382344-40.79838v-.39294c0-6.48091-5.21666-11.69844-11.69815-11.69844zm-11.69804983 21.85919v60.579661c0 6.48091 5.21666023 11.69843 11.69804983 11.69843h112.070464c6.48149 0 11.69815-5.21752 11.69815-11.69843v-60.570441l-58.382344 40.798279c-2.589689 1.808991-5.96767 2.709501-9.34565 2.709501-3.379809 0-6.7578-.900219-9.347488-2.709501z" paint-order="fill markers stroke" fill="#0392f8" data-original="#000000" style="" class=""/></g></g></svg>
                                    </button>
                                </li>
                                <li class="_1banner_menu_options_items">
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