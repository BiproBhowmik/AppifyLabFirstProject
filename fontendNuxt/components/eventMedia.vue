<template>
    <div>
        <div class="_1main_content">
            <!-- Banner -->
            <pageBanner/>
            <!-- Banner -->

            <!-- Profile main content -->
            <div class="_profile_layout">
                <div class="">
                    <div class="_proPages_col _mar_b20">
                        <h2 class="_1frient_title _mar_b20 _1title">
                            <i class="fas fa-image"></i> 
                            Media
                        </h2>

                        <div class="_photo_menu_top">
                            <div class="_photo_menu">
                                <ul class="_photo_menu_list">
                                    <li @click="clickAlbum" :class="album ? '_active': ''">Albums</li> 
                                    <li @click="clickPhoto" :class="photo ? '_active': ''">Photos</li>
                                    <li @click="clickVideo" :class="video ? '_active': ''">Video</li>
                                </ul>
                            </div> 
                            <div class="_photo_menu_button">
                                <button class="_3btn _pre_icon" type="button"><i class="fas fa-plus"></i> Create Album</button>
                            </div>
                        </div>

                        <!-- Albums -->
                        <div v-if="album" class="_photo_albums_all">
                            <!-- Items -->
                            <div class="_photo_albums_card" v-for="(items, index) in 15" :key="index">
                                <div class="_photo_albums_card_pic _load_div">
                                    <a href="" class="_photo_albums_card_pic_link">
                                        <img alt="" title="" class="_photo_albums_card_img" src="/static/img/biriyani.jpg">
                                    </a>
                                </div>
                                <div class="_photo_main_delete"><i class="fa fa-trash"></i></div>
                                <div class="_photo_albums_card_details">
                                    <p class="_photo_albums_card_title"><a href="" class="_photo_albums_name _1text_overflow">Goriber Album</a></p>
                                    <p class="_photo_albums_card_num">
                                        1 photos
                                    </p>
                                </div>
                            </div>
                            <!-- Items -->
                        </div>
                        <!-- Albums -->

                        <!-- Photos -->
                        <div v-if="photo" class="_photo_main_all">
                            <!-- Items -->
                            <div class="_photo_main" v-for="(items, index) in 15" :key="index">
                                <div class="_photo_main_pic _load_div">
                                    <img alt="" title="" class="_photo_main_img" src="/static/img/logo.jpeg">
                                </div>
                                <div class="_photo_main_delete">
                                    <i class="fa fa-trash"></i>
                                </div>
                            </div>
                            <!-- Items -->
                        </div>
                        <!-- Photos -->
                        
                        <!-- Video -->
                        <div v-if="video" class="_photo_albums_all">
                            <!-- Items -->
                            <div class="_photo_albums_card" v-for="(items, index) in 15" :key="index">
                                <div class="_photo_albums_card_pic _load_div">
                                    <a href="" class="_photo_albums_card_pic_link">
                                        <img alt="" title="" class="_photo_albums_card_img" src="/static/img/pic.jpg">
                                    </a>
                                </div>
                                <div class="_photo_main_delete"><i class="fa fa-trash"></i></div>
                                <div class="_photo_albums_card_details">
                                    <p class="_photo_albums_card_title"><a href="" class="_photo_albums_name _1text_overflow">Hemi cephalous</a></p>
                                    <p class="_photo_albums_card_num">
                                        3 photos
                                    </p>
                                </div>
                            </div>
                            <!-- Items -->
                        </div>
                        <!-- Video -->
                    </div>
                </div>
            </div>
            <!-- Profile main content -->
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
      album: true,
      photo: false,
      video: false
    }
  },

  methods:{
    clickAlbum(){
        this.album = true
        this.photo = false
        this.video = false
    },

    clickPhoto(){
        this.album = false
        this.photo = true
        this.video = false
    },

    clickVideo(){
        this.album = false
        this.photo = false
        this.video = true
    }
  },
  
  created(){
    
  }
}
</script>