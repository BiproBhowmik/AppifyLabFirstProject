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
                                    <img class="_2banner_pro_img" :src="
                    'http://localhost:3333/uploads/' +
                      $store.state.authUser.profile_picture
                  " alt="" title="">

                                    <p class="_2banner_pro_edit">
                                        <i class="fas fa-camera"></i>
                                    </p>
                                </div>

                                <p class="_2banner_pro_name"> {{$store.state.authUser.first_name}} {{$store.state.authUser.last_name}} </p>
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