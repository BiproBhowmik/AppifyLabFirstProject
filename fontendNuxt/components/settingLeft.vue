<template>
    <div class="_advertise_left_card _mar_b20">
        <!-- <div class="_advertise_left_card_top">
            <p class="_advertise_left_card_title">Current Balance</p>
            <p class="_advertise_left_card_amm">$106.70</p>
        </div> -->

        <ul class="_setting_menu">
            <li :class="$route.path == '/settingNew'? '_active' : ''" class="_setting_menu_items">
                <router-link class="_setting_menu_items_link" to="/settingNew"><i class="fas fa-cog"></i> Account Settings</router-link>
            </li>
            <li class="_setting_menu_items">
                <p @click="setSideBar1" class="_setting_menu_items_link">
                    <i class="fas fa-user"></i> Edit Profile <span class="_setting_menu_down"><i class="fas fa-chevron-down"></i></span>
                </p>

                <ul v-if="$store.getters.getSideBar1" class="_setting_menu_sub">
                    <li :class="$route.path == '/settingBasic'? '_active' : ''">
                        <router-link to="/settingBasic">Basic</router-link>
                    </li>
                    <li :class="$route.path == '/settingWork'? '_active' : ''">
                        <router-link to="/settingWork">Work</router-link>
                    </li>
                    <li :class="$route.path == '/settingLoc'? '_active' : ''">
                        <router-link to="/settingLoc">Location</router-link>
                    </li>
                    <li :class="$route.path == '/settingSocial'? '_active' : ''">
                        <router-link to="/settingSocial">Social Links</router-link>
                    </li>
                </ul>
            </li>
            <li class="_setting_menu_items">
                <p @click="setSideBar2" class="_setting_menu_items_link">
                    <i class="fas fa-shield-alt"></i> Security Settings <span class="_setting_menu_down"><i class="fas fa-chevron-down"></i></span>
                </p>

                <ul v-if="$store.getters.getSideBar2" class="_setting_menu_sub">
                    <li :class="$route.path == '/settingPass'? '_active' : ''">
                        <router-link to="/settingPass">Password</router-link>
                    </li>
                    <li :class="$route.path == '/settingSession'? '_active' : ''">
                        <router-link to="/settingSession">Manage Sessions</router-link>
                    </li>
                </ul>
            </li>
            <li :class="$route.path == '/settingNewsfeed'? '_active' : ''" class="_setting_menu_items">
                <router-link class="_setting_menu_items_link" to="/settingNewsfeed"><i class="fas fa-stream"></i> Newsfeed</router-link>
            </li>
            <li :class="$route.path == '/settingPrivacy'? '_active' : ''" class="_setting_menu_items">
                <router-link class="_setting_menu_items_link" to="/settingPrivacy"><i class="fas fa-user-secret"></i> Privacy</router-link>
            </li>
            <li :class="$route.path == '/settingNoti'? '_active' : ''" class="_setting_menu_items">
                <router-link class="_setting_menu_items_link" to="/settingNoti"><i class="fas fa-bell"></i> Notifications</router-link>
            </li>
            <li :class="$route.path == '/settingBlocking'? '_active' : ''" class="_setting_menu_items">
                <router-link class="_setting_menu_items_link" to="/settingBlocking"><i class="fas fa-minus-circle"></i> Blocking</router-link>
            </li>
            <li :class="$route.path == '/settingInformation'? '_active' : ''" class="_setting_menu_items">
                <router-link class="_setting_menu_items_link" to="/settingInformation"><i class="fas fa-file-invoice"></i> Your Information</router-link>
            </li>
            <li :class="$route.path == '/settingDelete'? '_active' : ''" class="_setting_menu_items">
                <router-link class="_setting_menu_items_link" to="/settingDelete"><i class="fas fa-trash"></i> Delete Account</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  components: {
      
  },

  data(){
    return{
      edit_Profile: true,
      isSecurity: false
    }
  },

  methods:{
    setSideBar1(){
        let a = this.$store.getters.getSideBar1
        console.log(a)
        this.$store.commit('setSideBar1', !a)
    },
    setSideBar2(){
        let a = this.$store.getters.getSideBar2
        console.log(a)
        this.$store.commit('setSideBar2', !a)
    },
  },
  
  created(){
    
  }
}
</script>