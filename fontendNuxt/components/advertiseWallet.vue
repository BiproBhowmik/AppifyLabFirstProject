<template>
    <div>
        <div class="_1main_content">
            <div class="_advertise_layout">
                <!-- <div class="_mar_b20">
                    <Alert show-icon>
                        <strong>Info:</strong>You can use the following PayPal account for upgrading:
                        <template slot="desc">
                            Email: sb-hysua1133883@personal.example.com<br/>
                            Password: 123456789
                        </template>
                    </Alert>
                </div> -->

                <div class="_advertise_row">
                    <!-- Left section -->
                    <div class="_advertise_left">
                        <div class="_advertise_left_card _mar_b20">
                            <div class="_advertise_left_card_top">
                                <p class="_advertise_left_card_title">Current Balance</p>
                                <p class="_advertise_left_card_amm">$106.70</p>
                            </div>

                            <ul class="_advertise_left_list">
                                <li>
                                    <router-link to="/advertise">
                                        <i class="fas fa-bullhorn"></i> Campaigns
                                    </router-link>
                                </li>
                                <li class="_active">
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

                    <!-- Left section -->
                    <div class="_advertise_right">
                        <div class="_advertise_card _mar_b20">
                            <h2 class="_advertise_title _1title"><i class="fas fa-wallet"></i> Wallet & Credits</h2>

                            <p class="_advertise_Sub_title _3title">Current balance</p>

                            <div class="_advertise_wall_main">
                                <div class="row align-items-center">
                                    <div class="col-12 col-md col-lg">
                                        <h1 class="_advertise_wall_price">$106.70</h1>
                                    </div>

                                    <div class="col-12 col-md-auto col-lg-auto">
                                        <div class="_advertise_wall_buttons">
                                            <button class="_3btn _pre_icon"><i class="fas fa-paper-plane"></i> Send money</button>
                                            <button class="_1btn _mar_l10 _pre_icon"><i class="fas fa-wallet"></i> Add Funds</button>
                                        </div>
                                    </div>
                                </div>

                                <div class="_advertise_wall_form">
                                    <p class="_advertise_wall_form_title">Replenish my balance</p>
                                    <div class="_advertise_wall_input_main">
                                        <div class="_advertise_wall_input_icon">$</div>
                                        <div class="_advertise_wall_input">
                                            <input class="_advertise_wall_int" placeholder="0.00" type="">
                                        </div>
                                    </div>
                                    <div class="_advertise_wall_button">
                                        <button class="_1btn _pre_icon" type="button"><i class="fas fa-check-double"></i> Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="_advertise_card _mar_b20">
                            <p class="_advertise_Sub_title _3title">Transactions</p>

                            <div class="_advertise_wall_all">
                                <!-- Title -->
                                <div class="_advertise_wall">
                                    <div class="_advertise_wall_one">
                                        <p class="_advertise_wall_title">Type</p>
                                    </div>
                                    <div class="_advertise_wall_two">
                                        <p class="_advertise_wall_title">Status</p>
                                    </div>
                                    <div class="_advertise_wall_three">
                                        <p class="_advertise_wall_title">Date</p>
                                    </div>
                                    <div class="_advertise_wall_four">
                                        <p class="_advertise_wall_title">Amount</p>
                                    </div>
                                </div>
                                <!-- Title -->

                                <!-- Items -->
                                <div class="_advertise_wall" v-for="(item,index) in 9" :key="index">
                                    <div class="_advertise_wall_one">
                                        <p class="_advertise_wall_text">WALLET</p>
                                    </div>
                                    <div class="_advertise_wall_two">
                                        <p class="_advertise_wall_text">PayPal</p>
                                    </div>
                                    <div class="_advertise_wall_three">
                                        <p class="_advertise_wall_text">2020-08-30 11:03:32</p>
                                    </div>
                                    <div class="_advertise_wall_four">
                                        <p class="_advertise_wall_text">$100.00</p>
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