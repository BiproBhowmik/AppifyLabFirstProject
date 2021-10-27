<template>
    <div>
        <div class="_2main_content">
            <!-- Left -->
            <div class="_list_left">
                <leftSidebar/>
            </div>
            <!-- Left -->

            <!-- Main content -->
            <div class="_list_content">
                <div class="_list_main">
                    <!-- Shimmer -->
                    <template v-if="isHide">
                        <div class="_listPage_shimmer">
                            <div class="_listPage_shimmer_title _2shim_animate"></div>
                        </div>

                        <ul class="_listPage_shimmer_menu">
                            <li class="_2shim_animate"></li>
                            <li class="_2shim_animate"></li>
                            <li class="_2shim_animate"></li>
                        </ul>

                        <div class="row">
                            <!-- Items -->
                            <div class="col-12 col-md-4 col-lg-4">
                                <div class="_listPage_shimmer_card">
                                    <div class="_listPeo_shimmer_card_cover _shim_animate"></div>
                                    <div class="_listPage_shimmer_card_details">
                                        <div class="_listPage_shimmer_card_title _shim_w60 _shim_animate"></div>
                                        <div class="_listPage_shimmer_card_text _shim_w90 _shim_animate"></div>
                                        <div class="_listPage_shimmer_card_text _shim_w70 _shim_animate"></div>
                                        <div class="_listPage_shimmer_card_follow _shim_animate"></div>
                                        <div class="_listPage_shimmer_card_button _shim_animate"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- Items -->
                            <!-- Items -->
                            <div class="col-12 col-md-4 col-lg-4">
                                <div class="_listPage_shimmer_card">
                                    <div class="_listPeo_shimmer_card_cover _shim_animate"></div>
                                    <div class="_listPage_shimmer_card_details">
                                        <div class="_listPage_shimmer_card_title _shim_w40 _shim_animate"></div>
                                        <div class="_listPage_shimmer_card_text _shim_w80 _shim_animate"></div>
                                        <div class="_listPage_shimmer_card_text _shim_w50 _shim_animate"></div>
                                        <div class="_listPage_shimmer_card_follow _shim_animate"></div>
                                        <div class="_listPage_shimmer_card_button _shim_animate"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- Items -->
                            <!-- Items -->
                            <div class="col-12 col-md-4 col-lg-4">
                                <div class="_listPage_shimmer_card">
                                    <div class="_listPeo_shimmer_card_cover _shim_animate"></div>
                                    <div class="_listPage_shimmer_card_details">
                                        <div class="_listPage_shimmer_card_title _shim_w50 _shim_animate"></div>
                                        <div class="_listPage_shimmer_card_text _shim_w50 _shim_animate"></div>
                                        <div class="_listPage_shimmer_card_text _shim_w80 _shim_animate"></div>
                                        <div class="_listPage_shimmer_card_follow _shim_animate"></div>
                                        <div class="_listPage_shimmer_card_button _shim_animate"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- Items -->
                        </div>
                    </template>
                    <!-- Shimmer -->

                    <template v-if="isloaded">
                        <div class="_list_top">
                            <div class="_list_top_left">
                                <h2 class="_1title _list_top_title">People</h2>
                            </div>
                        </div>

                        <!-- Menu -->
                        <ul class="_list_menu">
                            <li class="_active">All Peoples</li>
                            <li>Discover</li>
                        </ul>
                        <!-- Menu -->

                        <div class="_list_cards_all">
                            <div class="row">
                                <!-- Card -->
                                <div class="col-12 col-md-6 col-lg-4 _mar_b30" v-for="(items, index) in allPeoples" :key="index">
                                    
                                    <div class="_list_cards">
                                        <div class="_listPeo_cards_pic">
                                            <img class="_listPeo_cards_img" :src="'http://localhost:3333/uploads/' + items.profile_picture " alt="" title="">
                                        </div>

                                        <div class="_list_cards_details">
                                            <h2 class="_list_cards_title"> {{ items.first_name }} {{ items.last_name }} </h2>

                                            <!-- <p class="_list_cards_text _2text_overflow">Sduis porttito nulla maurisve cras cusut porta dapibus. Dis netus aenean arcu mauris varius temporse laoree</p> -->

                                            <p class="_list_cards_follow">{{ items.user_name }}</p>

                                            <div v-if="items.id == $store.state.authUser.id" class="_list_cards_button">
                                                <router-link to="/profile"><button class="_2btn _btn_long" type="button">View Profile</button></router-link>
                                            </div>
                                            
                                            <div v-else class="_list_cards_button">
                                                <button @click="goToOtherProfile(items)" class="_2btn _btn_long" type="button">View Profile</button>
                                                <!-- <nuxt-link :to="{ name: 'profileOther', params: items}">
                                                    <button class="_2btn _btn_long" type="button">View Profile</button></nuxt-link> -->
                                                
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <!-- Card -->
                            </div>
                        </div>
                    </template>
                </div>
            </div>
            <!-- Main content -->
        </div>
    </div>
</template>


<script>
import leftSidebar from './leftSidebar.vue'
const axios = require("axios");
export default {
  components: {
    leftSidebar,
  },

  data(){
    return{
      isloaded: false,
      isHide: true,
      allPeoples: []
    }
  },

  methods:{
    async goToOtherProfile(specificUserInfo){
        const res = await this.callApi(
          "post",
          "http://localhost:3333/createSession",
          specificUserInfo
        );
        
        const resg = await this.callApi(
          "get",
          "http://localhost:3333/getSession"
        );

        console.log(resg);
        
       
        // this.$store.commit("setUsrProfileInfo", specificUserInfo);
        this.$router.push("/profileOther");
    }
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
  },
  beforeCreate(){
      axios
      .get("http://localhost:3333/showAllUsers")
      .then(response => {

        this.allPeoples = response.data

        //console.log(response);
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }
}
</script>