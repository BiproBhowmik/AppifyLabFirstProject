<template>
    <div>
        <div class="_1main_content">
            <div class="_advertise_layout">
                <div class="_advertise_row">
                    <!-- Left section -->
                    <div class="_advertise_left">
                        <div class="_advertise_left_card _mar_b20">
                            <div class="_advertise_left_card_top">
                                <p class="_advertise_left_card_title">Current Balance</p>
                                <p class="_advertise_left_card_amm">$106.70</p>
                            </div>

                            <ul class="_advertise_left_list">
                                <li class="_active">
                                    <router-link to="/advertise">
                                        <i class="fas fa-bullhorn"></i> Campaigns
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/advertiseWallet">
                                        <i class="fas fa-wallet"></i> Wallet
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/advertisingPolicies">
                                        <i class="fas fa-newspaper"></i> Advertising Policies
                                    </router-link>
                                </li>
                                <li class="_advertise_new">
                                    <router-link to="/advertiseNewCampaign">
                                        <i class="fas fa-plus-circle"></i> New Campaign
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- Left section -->

                    <!-- Right section -->
                    <div class="_advertise_right">
                        <div class="_advertise_card _mar_b20">
                            <h2 class="_advertise_title _1title"><i class="fas fa-bullhorn"></i> Campaigns</h2>

                            <div class="_advertise_main">
                                <!-- Title -->
                                <div class="_advertise_items">
                                    <div class="_advertise_items_one">
                                        <p class="_advertise_items_title">ID</p>
                                    </div>
                                    <div class="_advertise_items_two">
                                        <p class="_advertise_items_title">Company</p>
                                    </div>
                                    <div class="_advertise_items_three">
                                        <p class="_advertise_items_title">Bidding</p>
                                    </div>
                                    <div class="_advertise_items_four">
                                        <p class="_advertise_items_title">Clicks</p>
                                    </div>
                                    <div class="_advertise_items_five">
                                        <p class="_advertise_items_title">Views</p>
                                    </div>
                                    <div class="_advertise_items_six">
                                        <p class="_advertise_items_title">Status</p>
                                    </div>
                                    <div class="_advertise_items_seven"></div>
                                </div>
                                <!-- Title -->

                                <!-- Items -->
                                <div class="_advertise_items" v-for="(item,index) in 9" :key="index">
                                    <div class="_advertise_items_one">
                                        <p class="_advertise_items_text">{{ index + 1}}</p>
                                    </div>
                                    <div class="_advertise_items_two">
                                        <p class="_advertise_items_text">Hussain Shipu</p>
                                    </div>
                                    <div class="_advertise_items_three">
                                        <p class="_advertise_items_text">Clicks</p>
                                    </div>
                                    <div class="_advertise_items_four">0</div>
                                    <div class="_advertise_items_five">0</div>
                                    <div class="_advertise_items_six">
                                        <p class="_active_btn">Active</p>
                                    </div>
                                    <div class="_advertise_items_seven">
                                        <Dropdown trigger="click" placement="bottom-end">
                                            <a class="_2more" href="javascript:void(0)">
                                                <i class="fas fa-ellipsis-h"></i>
                                            </a>

                                            <DropdownMenu slot="list">
                                                <DropdownItem><p>Edit</p></DropdownItem>
                                                <DropdownItem><p>Delete</p></DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                </div>
                                <!-- Items -->

                                <!-- Items -->
                                <div class="_advertise_items">
                                    <div class="_advertise_items_one">
                                        <p class="_advertise_items_text">10</p>
                                    </div>
                                    <div class="_advertise_items_two">
                                        <p class="_advertise_items_text">Hussain Shipu</p>
                                    </div>
                                    <div class="_advertise_items_three">
                                        <p class="_advertise_items_text">Clicks</p>
                                    </div>
                                    <div class="_advertise_items_four">0</div>
                                    <div class="_advertise_items_five">0</div>
                                    <div class="_advertise_items_six">
                                        <p class="_inactive_btn">Inactive</p>
                                    </div>
                                    <div class="_advertise_items_seven">
                                        <Dropdown trigger="click" placement="bottom-end">
                                            <a class="_2more" href="javascript:void(0)">
                                                <i class="fas fa-ellipsis-h"></i>
                                            </a>

                                            <DropdownMenu slot="list">
                                                <DropdownItem><p>Edit</p></DropdownItem>
                                                <DropdownItem><p>Delete</p></DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                </div>
                                <!-- Items -->
                            </div>

                            <!-- Pagination -->
                            <div class="_pagination _mar_t20">
                                <Page :total="100" />
                            </div>
                            <!-- Pagination -->
                        </div>
                    </div>
                    <!-- Left section -->
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
      
    }
  },

  methods:{
    
  },
  
  created(){
    
  }
}
</script>