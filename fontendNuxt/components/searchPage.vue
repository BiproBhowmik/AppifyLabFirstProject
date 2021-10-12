<template>
    <div>
        <div class="_1main_content">
            <div class="_layout">
                <div class="_layout_row">
                    <!-- Saved page main content -->
                    <div class="_layout_col">
                        <div class="_inner_layout">
                            <div class="_searchPage">
                                <!-- Search box -->
                                <div class="_searchPage_top _mar_b20">
                                    <div class="_searchPage_top_main">
                                        <input type="" placeholder="Search">
                                        <button class="_1btn _pre_icon" type="button">
                                            <i class="fas fa-search"></i>
                                            Search
                                        </button>
                                    </div>
                                </div>
                                <!-- Search box -->

                                <!-- Filter -->
                                <div class="_searchPage_filter _mar_b20">
                                    <ul class="_searchPage_filter_list">
                                        <li :class="tab == 'feed' ? '_active' : ''">
                                            <p @click="selectTab('feed')" class="_searchPage_filter_list_text"><i class="fas fa-newspaper"></i> Posts</p>
                                        </li>
                                        <li :class="tab == 'people' ? '_active' : ''">
                                            <p @click="selectTab('people')" class="_searchPage_filter_list_text"><i class="fas fa-user"></i> People</p>
                                        </li>
                                        <li :class="tab == 'group' ? '_active' : ''">
                                            <p @click="selectTab('group')" class="_searchPage_filter_list_text"><i class="fas fa-users"></i> Groups</p>
                                        </li>
                                        <li :class="tab == 'page' ? '_active' : ''">
                                            <p @click="selectTab('page')" class="_searchPage_filter_list_text"><i class="fas fa-flag"></i> Pages</p>
                                        </li>
                                        <li :class="tab == 'event' ? '_active' : ''">
                                            <p @click="selectTab('event')" class="_searchPage_filter_list_text"><i class="fas fa-calendar-alt"></i> Events</p>
                                        </li>
                                    </ul>
                                </div>
                                <!-- Filter -->

                                <!-- Post -->
                                <Feed v-if="tab == 'feed'"/>
                                <!-- Post -->

                                <!-- People -->
                                <div v-if="tab == 'people'" class="">
                                    <div class="row">
                                        <!-- Card -->
                                        <div class="col-12 col-md-6 col-lg-6 _mar_b30" v-for="(items, index) in 6" :key="index">
                                            <div class="_list_cards">
                                                <div class="_listPeo_cards_pic">
                                                    <img class="_listPeo_cards_img" src="/static/img/male.jpg" alt="" title="">
                                                </div>

                                                <div class="_list_cards_details">
                                                    <h2 class="_list_cards_title">Teal Swan Official</h2>

                                                    <p class="_list_cards_text _2text_overflow">Sduis porttito nulla maurisve cras cusut porta dapibus. Dis netus aenean arcu mauris varius temporse laoree</p>

                                                    <p class="_list_cards_follow">121,862 followers</p>

                                                    <div class="_list_cards_button">
                                                        <router-link to="/profile"><button class="_2btn _btn_long" type="button">View Profile</button></router-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Card -->
                                    </div>
                                </div>
                                <!-- People -->

                                <!-- Groups -->
                                <div v-if="tab == 'group'" class="">
                                    <div class="row">
                                        <!-- Card -->
                                        <div class="col-12 col-md-6 col-lg-6 _mar_b30" v-for="(items, index) in 4" :key="index">
                                            <div class="_list_cards">
                                                <div class="_list_cards_pic">
                                                    <img class="_list_cards_img" src="/static/img/placeholder.png" alt="" title="">
                                                </div>

                                                <div class="_list_cards_details">
                                                    <h2 class="_list_cards_title">The Spiritual Mind</h2>

                                                    <p class="_list_cards_text _2text_overflow">Sduis porttito nulla maurisve cras cusut porta dapibus. Dis netus aenean arcu mauris varius temporse laoree</p>

                                                    <p class="_list_cards_follow">21,862 members</p>

                                                    <div class="_list_cards_button">
                                                        <router-link to="/group"><button class="_2btn _btn_long" type="button">View Group</button></router-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Card -->
                                        <!-- Card -->
                                        <div class="col-12 col-md-6 col-lg-6 _mar_b30"  v-for="(items, index) in 4" :key="index">
                                            <div class="_list_cards">
                                                <div class="_list_cards_pic">
                                                    <img class="_list_cards_img" src="/static/img/placeholder.png" alt="" title="">
                                                </div>

                                                <h2 class="_list_cards_title">Web Developing Community</h2>

                                                <div class="_list_cards_details">
                                                    <p class="_list_cards_text _2text_overflow">Sduis porttito nulla maurisve massa.</p>

                                                    <p class="_list_cards_follow">1,862 members</p>

                                                    <div class="_list_cards_button">
                                                        <router-link to="/group"><button class="_2btn _btn_long" type="button">View Group</button></router-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Card -->
                                    </div>
                                </div>
                                <!-- Groups -->

                                <!-- Pages -->
                                <div v-if="tab == 'page'" class="">
                                    <div class="row">
                                        <!-- Card -->
                                        <div class="col-12 col-md-6 col-lg-6 _mar_b30" v-for="(items, index) in 4" :key="index">
                                            <div class="_list_cards">
                                                <div class="_list_cards_pic">
                                                    <img class="_list_cards_img" src="/static/img/image_1608022143454.jpeg" alt="" title="">
                                                </div>

                                                <div class="_list_cards_pro">
                                                    <img class="_list_cards_pro_img" src="/static/img/file_1608029627953.jpg" alt="" title="">
                                                </div>

                                                <div class="_list_cards_details">
                                                    <h2 class="_list_cards_title">Teal Swan Official</h2>

                                                    <p class="_list_cards_text _2text_overflow">Sduis porttito nulla maurisve cras cusut porta dapibus. Dis netus aenean arcu mauris varius temporse laoree</p>

                                                    <p class="_list_cards_follow">121,862 followers</p>

                                                    <div class="_list_cards_button">
                                                        <router-link to="/page"><button class="_2btn _btn_long" type="button">View Page</button></router-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Card -->
                                        <!-- Card -->
                                        <div class="col-12 col-md-6 col-lg-6 _mar_b30"  v-for="(items, index) in 4" :key="index">
                                            <div class="_list_cards">
                                                <div class="_list_cards_pic">
                                                    <img class="_list_cards_img" src="/static/img/file_1608029627953.jpg" alt="" title="">
                                                </div>

                                                <div class="_list_cards_pro">
                                                    <img class="_list_cards_pro_img" src="/static/img/male.jpg" alt="" title="">
                                                </div>

                                                <h2 class="_list_cards_title">Teal Swan Official</h2>

                                                <div class="_list_cards_details">
                                                    <p class="_list_cards_text _2text_overflow">Sduis porttito nulla maurisve massa.</p>

                                                    <p class="_list_cards_follow">121,862 followers</p>

                                                    <div class="_list_cards_button">
                                                        <router-link to="/page"><button class="_2btn _btn_long" type="button">View Page</button></router-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Card -->
                                    </div>
                                </div>
                                <!-- Pages -->

                                <!-- Events -->
                                <div v-if="tab == 'event'" class="">
                                    <div class="row">
                                        <!-- Card -->
                                        <div class="col-12 col-md-6 col-lg-6 _mar_b30" v-for="(items, index) in 2" :key="index">
                                            <div class="_list_cards">
                                                <div class="_list_cards_pic">
                                                    <img class="_list_cards_img" src="/static/img/file_1608029627953.jpg" alt="" title="">
                                                </div>

                                                <div class="_list_cards_date">
                                                    <p class="_list_cards_date_text">1 Sept</p>
                                                </div>

                                                <div class="_list_cards_details">
                                                    <h2 class="_list_cards_title">Eckhart Tolle Summer gathring</h2>

                                                    <p class="_list_cards_text _2text_overflow">Sduis porttito nulla maurisve cras cusut porta dapibus. Dis netus aenean arcu mauris varius temporse laoree</p>

                                                    <p class="_list_cards_follow">862 people going</p>

                                                    <div class="_list_cards_button">
                                                        <router-link to="/event"><button class="_2btn _btn_long" type="button">View Event</button></router-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Card -->
                                        <!-- Card -->
                                        <div class="col-12 col-md-6 col-lg-6 _mar_b30"  v-for="(items, index) in 4" :key="index">
                                            <div class="_list_cards">
                                                <div class="_list_cards_pic">
                                                    <img class="_list_cards_img" src="/static/img/image_1608226845923.jpeg" alt="" title="">
                                                </div>

                                                <div class="_list_cards_date">
                                                    <p class="_list_cards_date_text">3 Aug</p>
                                                </div>

                                                <h2 class="_list_cards_title">Yoga class Online Metting</h2>

                                                <div class="_list_cards_details">
                                                    <p class="_list_cards_text _2text_overflow">Sduis porttito nulla maurisve massa.</p>

                                                    <p class="_list_cards_follow">35 people going</p>

                                                    <div class="_list_cards_button">
                                                        <router-link to="/event"><button class="_2btn _btn_long" type="button">View Event</button></router-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Card -->
                                    </div>
                                </div>
                                <!-- Events -->
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
import Feed from './feed.vue'

export default {
  components: {
    Feed
  },

  data(){
    return{
      tab: 'feed'
    }
  },

  methods:{
    selectTab(tab) {
      if (
        tab != "overview" &&
        tab != "work" &&
        tab != "places" &&
        tab != "contact"
      ) {
        this.tab = "feed";
      }
      return (this.tab = tab);
    },
  },
  
  created() {
    
  }
}
</script>