<template>
    <div>
        <div class="_1main_content">
            <!-- Banner -->
            <ProfileBanner/>
            <!-- Banner -->

            <!-- Profile main content -->
            <div class="_profile_layout">
                <div class="">
                    <div class="_proPages_col _mar_b20">
                        <h2 class="_1frient_title _mar_b20 _1title">
                            <i class="fas fa-image"></i> 
                            Photos
                        </h2>

                        <div class="_photo_menu_top">
                            <div class="_photo_menu">
                                <ul class="_photo_menu_list">
                                    <li @click="clickAlbum" :class="album ? '_active': ''">Albums</li> 
                                    <li @click="clickPhoto" :class="photo ? '_active': ''">Photos</li>
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
                                        <img alt="" title="" class="_photo_albums_card_img" src="/static/img/file_1607448700853.jpg">
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
                                    <img alt="" title="" class="_photo_main_img" src="/static/img/image_1608226845923.jpeg">
                                </div>
                                <div class="_photo_main_delete">
                                    <i class="fa fa-trash"></i>
                                </div>
                            </div>
                            <!-- Items -->
                        </div>
                        <!-- Photos -->
                    </div>
                </div>
            </div>
            <!-- Profile main content -->
        </div>
    </div>
</template>

<script>
import ProfileBanner from './profileBanner.vue'

export default {
  components: {
    ProfileBanner
  },
  
  data(){
    return{
      album: true,
      photo: false
    }
  },

  methods:{
    clickAlbum(){
        this.album = true
        this.photo = false
    },

    clickPhoto(){
        this.album = false
        this.photo = true
    }
  },
  
  created(){
    
  }
}
</script>