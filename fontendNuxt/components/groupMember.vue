<template>
    <div>
        <div class="_1main_content">
            <!-- Banner -->
            <groupBanner/>
            <!-- Banner -->

            <!-- Group main content -->
            <div class="_group_layout">
                <div class="_group_row">
                    <div class="_groupAbout">
                        <div class="_member_card _mar_b20">
                            <div class="_member_card_top">
                                <p class="_member_card_num">Members  <span>·  249,528</span></p>
                                <p class="_member_card_val">New people and Pages who join this group will appear here. </p>

                                <div class="_member_card_search">
                                    <Input prefix="ios-search" placeholder="Enter name" style="width: 100%" />
                                </div>
                            </div>

                            <!-- Admin Lists -->
                            <div class="_member_card_main">
                                <h2 class="_member_card_main_title">Admins & Moderators <span>·  2</span></h2>

                                <!-- Cards -->
                                <div class="_member_list_card" v-for="(items, index) in 3" :key="index">
                                    <a href="" class="_member_list_card_pic">
                                        <img class="_member_list_card_img" src="/static/img/male.jpg" alt="" title="">
                                    </a>

                                    <div class="_member_list_card_details">
                                        <p class="_member_list_card_name_main">
                                            <a class="_member_list_card_name" href="">Konstaintions Oikonomou</a>
                                        </p>
                                        <p class="_member_list_card_info">Chief marketing officer at Super Maniacs</p>
                                    </div>

                                    <div class="_member_list_card_button">
                                        <button class="_2btn"><i class="fas fa-plus-circle"></i> Add Friend</button>
                                    </div>
                                </div>
                                <!-- Cards -->
                            </div>
                            <!-- Admin Lists -->

                            <!-- Members List -->
                            <div class="_member_card_main">
                                <h2 class="_member_card_main_title">All Members <span>·  249,528</span></h2>

                                <!-- Cards -->
                                <div class="_member_list_card" v-for="(items, index) in 7" :key="index">
                                    <a href="" class="_member_list_card_pic">
                                        <img class="_member_list_card_img" src="/static/img/male.jpg" alt="" title="">
                                    </a>

                                    <div class="_member_list_card_details">
                                        <p class="_member_list_card_name_main">
                                            <a class="_member_list_card_name" href="">Konstaintions Oikonomou</a>
                                        </p>
                                        <p class="_member_list_card_info">Chief marketing officer at Super Maniacs</p>
                                    </div>

                                    <div class="_member_list_card_button">
                                        <button class="_2btn"><i class="fas fa-plus-circle"></i> Add Friend</button>
                                    </div>
                                </div>
                                <!-- Cards -->
                                
                                <!-- See more -->
                                <div class="_member_list_more">
                                    <a class="_member_list_more_text" href="">See more</a>
                                </div>
                                <!-- See more -->
                            </div>
                            <!-- Members Lists -->

                            <!-- Members Near to You -->
                            <div class="_member_card_main">
                                <h2 class="_member_card_main_title">Members Near to You <span>·  248</span></h2>

                                <!-- Cards -->
                                <div class="_member_list_card" v-for="(items, index) in 3" :key="index">
                                    <a href="" class="_member_list_card_pic">
                                        <img class="_member_list_card_img" src="/static/img/male.jpg" alt="" title="">
                                    </a>

                                    <div class="_member_list_card_details">
                                        <p class="_member_list_card_name_main">
                                            <a class="_member_list_card_name" href="">Konstaintions Oikonomou</a>
                                        </p>
                                        <p class="_member_list_card_info">Chief marketing officer at Super Maniacs</p>
                                    </div>

                                    <div class="_member_list_card_button">
                                        <button class="_2btn"><i class="fas fa-plus-circle"></i> Add Friend</button>
                                    </div>
                                </div>
                                <!-- Cards -->

                                <!-- See more -->
                                <div class="_member_list_more">
                                    <a class="_member_list_more_text" href="">See more</a>
                                </div>
                                <!-- See more -->
                            </div>
                            <!-- Members Near to You -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- Group main content -->
        </div>
    </div>
</template>

<script>
import groupBanner from './groupBanner.vue'

export default {
  components: {
    groupBanner
  },

  data(){
    return{
      
    }
  },

  methods:{
    
  },
  
  created(){
    
  }
}
</script>