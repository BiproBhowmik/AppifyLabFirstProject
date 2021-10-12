<template>
    <div>
        <div class="_1main_content">
            <div class="_layout">
                <div class="_layout_row">
                    <!-- Setting page main content -->
                    <div class="_layout_col">
                        <div class="_singlePage_layout">
                            <div class="_singlePage _mar_b20">
                                <div class="_singlePage_top">
                                    <h2 class="_singlePage_top_title _1title"><i class="fas fa-cog"></i> Settings</h2>
                                </div>

                                <div class="_setting">
                                    <!-- Left Menu -->
                                    <div class="_setting_left">
                                        <ul class="_setting_left_list">
                                            <li @click="clickGeneral" :class="isGeneral? '_active':''">General</li> 
                                            <li @click="clickSignin" :class="isSign? '_active':''">Sign in & Security</li> 
                                            <li @click="clickVisibility" :class="isVisibility? '':''">Visibility</li> 
                                            <li class="">Communications</li>
                                            <li class="">Data privacy</li>
                                            <li class="">Advertising data</li>
                                        </ul>
                                    </div>
                                    <!-- Left Menu -->

                                    <!-- Setting Main -->
                                    <!-- General -->
                                    <div v-if="isGeneral" class="_setting_main">
                                        <div class="_setting_items">
                                            <div class="_setting_items_top">
                                                <h2 class="_setting_main_title _2title">Profile information</h2>
                                                <p class="_setting_main_text">Settings to help you keep your account secure</p>
                                            </div>

                                            <!-- Items -->
                                            <div class="_setting_card">
                                                <div class="_setting_card_left">
                                                    <p class="_setting_card_title">Name</p>
                                                    <p class="_setting_card_text">Choose how your name</p>
                                                </div>
                                                <div class="_setting_card_right">
                                                    <p @click="selectTab('name')" class="_setting_card_edit">Change</p>
                                                </div>

                                                <!-- Form -->
                                                <div v-if="tab == 'name'" class="_setting_card_form">
                                                    <div class="row">
                                                        <div class="col-12 col-md-6 col-lg-6">
                                                            <div class="_1input_group">
                                                                <p class="_1label">First Name</p>
                                                                <Input placeholder="First Name" />
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-md-6 col-lg-6">
                                                            <div class="_1input_group">
                                                                <p class="_1label">Last Name</p>
                                                                <Input placeholder="Last Name" />
                                                            </div>
                                                        </div>

                                                        <div class="col-12 col-md-12 col-lg-12">
                                                            <div class="_from_data_buttons justify-content-center align-items-center">
                                                                <button type="button" class="_1btn">Save</button> 
                                                                <button @click="tab =''" type="button" class="_3btn">Cencel</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Form -->
                                            </div>
                                            <!-- Items -->
                                            <!-- Items -->
                                            <div class="_setting_card">
                                                <div class="_setting_card_left">
                                                    <p class="_setting_card_title">Location and Industry</p>
                                                    <p class="_setting_card_text">Choose how your Location and Industry and profile fields appear to other members</p>
                                                </div>
                                                <div class="_setting_card_right">
                                                    <p @click="selectTab('location')" class="_setting_card_edit">Change</p>
                                                </div>

                                                <!-- Form -->
                                                <div v-if="tab == 'location'" class="_setting_card_form">
                                                    <div class="row">
                                                        <div class="col-12 col-md-6 col-lg-6">
                                                            <div class="_1input_group">
                                                                <p class="_1label">Location</p>
                                                                <Input placeholder="Location" />
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-md-6 col-lg-6">
                                                            <div class="_1input_group">
                                                                <p class="_1label">Industry</p>
                                                                <Input placeholder="Industry" />
                                                            </div>
                                                        </div>

                                                        <div class="col-12 col-md-12 col-lg-12">
                                                            <div class="_from_data_buttons justify-content-center align-items-center">
                                                                <button type="button" class="_1btn">Save</button> 
                                                                <button @click="tab =''" type="button" class="_3btn">Cencel</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Form -->
                                            </div>
                                            <!-- Items -->
                                        </div>

                                        <div class="_setting_items">
                                            <h2 class="_setting_main_title _2title">Site preferences</h2>

                                            <!-- Items -->
                                            <div class="_setting_card">
                                                <div class="_setting_card_left">
                                                    <p class="_setting_card_title">Language</p>
                                                    <p class="_setting_card_text">Select the language you use on Connectiver</p>
                                                </div>
                                                <div class="_setting_card_right">
                                                    <p class="_setting_card_edit">Change</p>
                                                    <p class="_setting_card_val">English</p>
                                                </div>
                                            </div>
                                            <!-- Items -->
                                            <!-- Items -->
                                            <div class="_setting_card">
                                                <div class="_setting_card_left">
                                                    <p class="_setting_card_title">Contact Language</p>
                                                    <p class="_setting_card_text">Select a language for translation</p>
                                                </div>
                                                <div class="_setting_card_right">
                                                    <p class="_setting_card_edit">Change</p>
                                                </div>
                                            </div>
                                            <!-- Items -->
                                            <!-- Items -->
                                            <div class="_setting_card">
                                                <div class="_setting_card_left">
                                                    <p class="_setting_card_title">Autoplay videos</p>
                                                    <p class="_setting_card_text">Choose to autoplay videos in your browser</p>
                                                </div>
                                                <div class="_setting_card_right">
                                                    <p class="_setting_card_edit">Change</p>
                                                    <p class="_setting_card_val">Yes</p>
                                                </div>
                                            </div>
                                            <!-- Items -->
                                            <!-- Items -->
                                            <div class="_setting_card">
                                                <div class="_setting_card_left">
                                                    <p class="_setting_card_title">Feed preferences</p>
                                                    <p class="_setting_card_text">Customize your feed</p>
                                                </div>
                                                <div class="_setting_card_right">
                                                    <p class="_setting_card_edit">Change</p>
                                                </div>
                                            </div>
                                            <!-- Items -->
                                            <!-- Items -->
                                            <div class="_setting_card">
                                                <div class="_setting_card_left">
                                                    <p class="_setting_card_title">People also viewed</p>
                                                    <p class="_setting_card_text">Choose if this feature appears on your profile</p>
                                                </div>
                                                <div class="_setting_card_right">
                                                    <p class="_setting_card_edit">Change</p>
                                                    <p class="_setting_card_val">Yes</p>
                                                </div>
                                            </div>
                                            <!-- Items -->
                                            <!-- Items -->
                                            <div class="_setting_card">
                                                <div class="_setting_card_left">
                                                    <p class="_setting_card_title">Unfollowed</p>
                                                    <p class="_setting_card_text">See who you have unfollowed and resume following if you'd like</p>
                                                </div>
                                                <div class="_setting_card_right">
                                                    <p class="_setting_card_edit">Change</p>
                                                </div>
                                            </div>
                                            <!-- Items -->
                                        </div>
                                    </div>
                                    <!-- General -->

                                    <!-- Sign in & Security -->
                                    <div v-if="isSign" class="_setting_main">
                                        <div class="_setting_items">
                                            <div class="_setting_items_top">
                                                <h2 class="_setting_main_title">Account access</h2>
                                                <p class="_setting_main_text">Settings to help you keep your account secure</p>
                                            </div>

                                            <!-- Items -->
                                            <div class="_setting_card">
                                                <div class="_setting_card_left">
                                                    <p class="_setting_card_title">Email addresses</p>
                                                    <p class="_setting_card_text">Add or remove email addresses on your account</p>
                                                </div>
                                                <div class="_setting_card_right">
                                                    <p class="_setting_card_edit">Change</p>
                                                    <p class="_setting_card_val">1 email address</p>
                                                </div>
                                            </div>
                                            <!-- Items -->
                                            <!-- Items -->
                                            <div class="_setting_card">
                                                <div class="_setting_card_left">
                                                    <p class="_setting_card_title">Phone numbers</p>
                                                    <p class="_setting_card_text">Add a phone number in case you have trouble signing in</p>
                                                </div>
                                                <div class="_setting_card_right">
                                                    <p class="_setting_card_edit">Change</p>
                                                    <p class="_setting_card_val">0 phone numbers</p>
                                                </div>
                                            </div>
                                            <!-- Items -->
                                            <!-- Items -->
                                            <div class="_setting_card">
                                                <div class="_setting_card_left">
                                                    <p class="_setting_card_title">Change password</p>
                                                    <p class="_setting_card_text">Choose a unique password to protect your account</p>
                                                </div>
                                                <div class="_setting_card_right">
                                                    <p class="_setting_card_edit">Change</p>
                                                    <p class="_setting_card_val">Last changed: September 6, 2020</p>
                                                </div>
                                            </div>
                                            <!-- Items -->
                                            <!-- Items -->
                                            <div class="_setting_card">
                                                <div class="_setting_card_left">
                                                    <p class="_setting_card_title">Where you’re signed in</p>
                                                    <p class="_setting_card_text">See your active sessions, and sign out if you’d like</p>
                                                </div>
                                                <div class="_setting_card_right">
                                                    <p class="_setting_card_edit">Change</p>
                                                    <p class="_setting_card_val">2 active sessions</p>
                                                </div>
                                            </div>
                                            <!-- Items -->
                                            <!-- Items -->
                                            <div class="_setting_card">
                                                <div class="_setting_card_left">
                                                    <p class="_setting_card_title">Devices that remember your password</p>
                                                    <p class="_setting_card_text">Review and control the devices that remember your password</p>
                                                </div>
                                                <div class="_setting_card_right">
                                                    <p class="_setting_card_edit">Change</p>
                                                    <p class="_setting_card_val">0 devices</p>
                                                </div>
                                            </div>
                                            <!-- Items -->
                                            <!-- Items -->
                                            <div class="_setting_card">
                                                <div class="_setting_card_left">
                                                    <p class="_setting_card_title">Two-step verification</p>
                                                    <p class="_setting_card_text">Activate this feature for enhanced account security</p>
                                                </div>
                                                <div class="_setting_card_right">
                                                    <p class="_setting_card_edit">Change</p>
                                                    <p class="_setting_card_val">off</p>
                                                </div>
                                            </div>
                                            <!-- Items -->
                                        </div>
                                    </div>
                                    <!-- Sign in & Security -->

                                    <!-- Visibility -->
                                    <div v-if="isVisibility" class="_setting_main">
                                        <div class="_setting_items">
                                            <div class="_setting_items_top">
                                                <h2 class="_setting_main_title">Visibility of your profile & network</h2>
                                                <p class="_setting_main_text">Make your profile and contact info only visible to those you choose</p>
                                            </div>

                                            <!-- Items -->
                                            <div class="_setting_card">
                                                <div class="_setting_card_left">
                                                    <p class="_setting_card_title">Profile viewing options</p>
                                                    <p class="_setting_card_text">Choose whether you’re visible or viewing in private mode</p>
                                                </div>
                                                <div class="_setting_card_right">
                                                    <p class="_setting_card_edit">Change</p>
                                                    <p class="_setting_card_val">Full profile</p>
                                                </div>
                                            </div>
                                            <!-- Items -->
                                            <!-- Items -->
                                            <div class="_setting_card">
                                                <div class="_setting_card_left">
                                                    <p class="_setting_card_title">Story viewing options</p>
                                                    <p class="_setting_card_text">Choose whether you’re visible or viewing in private mode</p>
                                                </div>
                                                <div class="_setting_card_right">
                                                    <p class="_setting_card_edit">Change</p>
                                                </div>
                                            </div>
                                            <!-- Items -->
                                            <!-- Items -->
                                            <div class="_setting_card">
                                                <div class="_setting_card_left">
                                                    <p class="_setting_card_title">Edit your public profile</p>
                                                    <p class="_setting_card_text">Choose how your profile appears to non-logged in members via search</p>
                                                </div>
                                                <div class="_setting_card_right">
                                                    <p class="_setting_card_edit">Change</p>
                                                </div>  
                                            </div>
                                            <!-- Items -->
                                            <!-- Items -->
                                            <div class="_setting_card">
                                                <div class="_setting_card_left">
                                                    <p class="_setting_card_title">Who can see or download your email address</p>
                                                    <p class="_setting_card_text">Choose who can see your email address on your profile and in approved apps or download it in their data export</p>
                                                </div>
                                                <div class="_setting_card_right">
                                                    <p class="_setting_card_edit">Change</p>
                                                </div>
                                            </div>
                                            <!-- Items -->
                                            <!-- Items -->
                                            <div class="_setting_card">
                                                <div class="_setting_card_left">
                                                    <p class="_setting_card_title">Who can see your connections</p>
                                                    <p class="_setting_card_text">Choose who can see your list of connections</p>
                                                </div>
                                                <div class="_setting_card_right">
                                                    <p class="_setting_card_edit">Change</p>
                                                    <p class="_setting_card_val">Connentions</p>
                                                </div>
                                            </div>
                                            <!-- Items -->
                                            <!-- Items -->
                                            <div class="_setting_card">
                                                <div class="_setting_card_left">
                                                    <p class="_setting_card_title">Who can see your last name</p>
                                                    <p class="_setting_card_text">Choose how you want your name to appear</p>
                                                </div>
                                                <div class="_setting_card_right">
                                                    <p class="_setting_card_edit">Change</p>
                                                    <p class="_setting_card_val">Full</p>
                                                </div>
                                            </div>
                                            <!-- Items -->
                                            <!-- Items -->
                                            <div class="_setting_card">
                                                <div class="_setting_card_left">
                                                    <p class="_setting_card_title">Representing your organization and interests</p>
                                                    <p class="_setting_card_text">Show your name and/or profile information with other content shown on LinkedIn?</p>
                                                </div>
                                                <div class="_setting_card_right">
                                                    <p class="_setting_card_edit">Change</p>
                                                    <p class="_setting_card_val">Full</p>
                                                </div>
                                            </div>
                                            <!-- Items -->
                                        </div>
                                    </div>
                                    <!-- Visibility -->
                                    <!-- Setting Main -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Setting page main content -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  components: {
    
  },

  data(){
    return{
      isGeneral: true,
      isSign: false,
      isVisibility: false,
      tab: 'name'
    }
  },

  methods:{
    clickGeneral(){
        this.isGeneral = true
        this.isSign = false
        this.isVisibility = false
    },

    clickSignin(){
        this.isGeneral = false
        this.isSign = true
        this.isVisibility = false
    },

    clickVisibility(){
        this.isGeneral = false
        this.isSign = false
        this.isVisibility = true
    },

    selectTab(tab) {
      if (
        tab != "name" &&
        tab != "location"
      ) {
        this.tab = "name";
      }
      return (this.tab = tab);
    },
  },
  
  created(){
    
  }
}
</script>