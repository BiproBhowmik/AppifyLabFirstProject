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
                                <li>
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
                                <li class="_advertise_new _active">
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
                        <!-- Steps -->
                        <div class="_advertise_steps _mar_b20">
                            <Steps :current="current" size="small">
                                <Step title="Details"></Step>
                                <Step title="Media"></Step>
                                <Step title="Audience"></Step>
                            </Steps>
                        </div>
                        <!-- Steps -->

                        
                        <div class="_advertise_card _mar_b20">
                            <!-- Step one -->
                            <template v-if="current == 0">
                                <p class="_advertise_Sub_title _3title"><i class="fas fa-info-circle"></i> Details</p>

                                <div class="_advertise_step_form">
                                    <div class="row">
                                        <div class="col-12 col-md-12 col-lg-12">
                                            <div class="_1input_group">
                                                <p class="_1label">Campaign name</p>

                                                <Input placeholder="Campaign name" />
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-12 col-lg-12">
                                            <div class="_1input_group">
                                                <p class="_1label">Budget</p>

                                                <Input placeholder="Maximum Budget" />
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-12 col-lg-12">
                                            <div class="_1input_group">
                                                <p class="_1label">Pay for</p>

                                                <Select placeholder="Clicks or Views">
                                                    <Option>Clicks (0.20$/click)</Option>
                                                    <Option>Views (3.50$/1000 views)</Option>
                                                </Select>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6 col-lg-6">
                                            <div class="_1input_group">
                                                <p class="_1label">Start date</p>

                                                <DatePicker type="date" placeholder="Select start date" style="width: 100%"></DatePicker>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6 col-lg-6">
                                            <div class="_1input_group">
                                                <p class="_1label">End date</p>

                                                <DatePicker type="date" placeholder="Select end date" style="width: 100%"></DatePicker>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-12 col-lg-12">
                                            <div class="_1input_group">
                                                <p class="_1label">Destination URL</p>

                                                <Input placeholder="Destination URL link" />
                                            </div>
                                        </div>

                                        <div class="col-12 col-md-12 col-lg-12">
                                            <div class="_1input_group _text_center">
                                                <Checkbox></Checkbox>
                                                I agree with the <a href="">Advertising Policies</a>
                                            </div>
                                        </div>
                                        
                                        <div class="col-12 col-md-12 col-lg-12">
                                            <div class="_advertise_step_button">
                                                <button @click="current = 1" class="_1btn _btn_150">Next</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <!-- Step one -->

                            <!-- Step two -->
                            <template v-if="current == 1">
                                <p class="_advertise_Sub_title _3title"><i class="fas fa-images"></i> Media</p>

                                <div class="_advertise_step_form">
                                    <div class="row">
                                        <div class="col-12 col-md-12 col-lg-12">
                                            <div class="_1input_group">
                                                <p class="_1label">Text</p>

                                                <Input type="textarea" :rows="8" placeholder="Write a text that will appear above the image" />
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-12 col-lg-12">
                                            <div class="_1input_group">
                                                <p class="_1label">Image</p>

                                                <Upload
                                                    multiple
                                                    type="drag"
                                                >
                                                    <div style="padding: 60px 0">
                                                        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                                                        <p>Drag and drop an image here or clcik to browse</p>
                                                    </div>
                                                </Upload>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-12 col-lg-12">
                                            <div class="_1input_group">
                                                <p class="_1label">Text</p>

                                                <Input placeholder="Title" />
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-12 col-lg-12">
                                            <div class="_1input_group">
                                                <p class="_1label">Short description</p>

                                                <Input placeholder="Short description" />
                                            </div>
                                        </div>
                                        
                                        <div class="col-12 col-md-12 col-lg-12">
                                            <div class="_advertise_step_button">
                                                <button @click="current = 0" class="_4btn _pre_icon"><i class="fas fa-long-arrow-alt-left"></i> Go back</button>
                                                <button @click="current = 2" class="_1btn _btn_150">Next</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <!-- Step two -->

                            <!-- Step three -->
                            <template v-if="current == 2">
                                <p class="_advertise_Sub_title _3title"><i class="fas fa-users"></i> Audience</p>
                                
                                <div class="_advertise_step_form">
                                    <div class="row">
                                        <div class="col-12 col-md-12 col-lg-12">
                                            <div class="_1input_group">
                                                <p class="_1label">Location</p>

                                                <Select>
                                                    <Option>Bangladesh</Option>
                                                    <Option>Canada</Option>
                                                    <Option>United States</Option>
                                                    <Option>United Kingdom</Option>
                                                </Select>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-12 col-lg-12">
                                            <div class="_1input_group">
                                                <p class="_1label">Gender</p>

                                                <Select>
                                                    <Option>Male</Option>
                                                    <Option>Female</Option>
                                                    <Option>Other</Option>
                                                </Select>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-12 col-lg-12">
                                            <div class="_1input_group">
                                                <p class="_1label">Age</p>

                                                <Select>
                                                    <Option>16</Option>
                                                    <Option>17</Option>
                                                    <Option>18</Option>
                                                    <Option>19</Option>
                                                    <Option>20</Option>
                                                </Select>
                                            </div>
                                        </div>

                                        <div class="col-12 col-md-12 col-lg-12">
                                            <div class="_1input_group">
                                                <p class="_advertise_step_reach">Potential reach : <span>53.832 people</span></p>
                                            </div>
                                        </div>
                                        
                                        <div class="col-12 col-md-12 col-lg-12">
                                            <div class="_advertise_step_button">
                                                <button  @click="current = 1" class="_4btn _pre_icon"><i class="fas fa-long-arrow-alt-left"></i> Go back</button>
                                                <button class="_1btn _btn_150">Post Ad</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <!-- Step three -->
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
      current: 0
    }
  },

  methods:{
    
  },
  
  created(){
    
  }
}
</script>