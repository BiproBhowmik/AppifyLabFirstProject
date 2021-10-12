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
                            <i class="fas fa-info-circle"></i>
                            About
                        </h2>

                        <!-- About -->
                        <div class="_about_main">
                            <!-- Left Menu -->
                            <div class="_about_menu">
                                <ul class="_about_menu_list">
                                    <li @click="selectTab('overview')" :class="tab == 'overview' ? '_active' : ''">
                                        Overview
                                    </li>
                                    <li @click="selectTab('contact')" :class="tab == 'contact' ? '_active' : ''">
                                        Contact and Basic Info
                                    </li>
                                    <li @click="selectTab('work')" :class="tab == 'work' ? '_active' : ''">
                                        Work and Education
                                    </li>
                                    <li @click="selectTab('places')" :class="tab == 'places' ? '_active' : ''">
                                        Places You've Lived
                                    </li>
                                </ul>
                            </div>
                            <!-- Left Menu -->

                            <!-- Right Details -->
                            <div class="_about_details">
                                <!-- Overview -->
                                <div v-if="tab == 'overview'" class="_overview">
                                    <p class="_overview_title _mar_b15">Overview</p>
                                    
                                    <div class="_overview_card">
                                        <div class="_overview_card_pic"><i class="fas fa-graduation-cap"></i></div>
                                        <div class="_overview_card_details">
                                            <p class="_overview_card_title">
                                                Study at
                                                <strong>Blue Bird School and College</strong>
                                            </p>

                                            <p class="_overview_card_pre">
                                                <span class="_padd_r5">Police Line ,</span> 
                                                <span class="_padd_r5">Sylhet ,</span> 
                                                <span>Sylhet</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div class="_overview_card">
                                        <div class="_overview_card_pic"><i class="fas fa-graduation-cap"></i></div>
                                        <div class="_overview_card_details">
                                            <p class="_overview_card_title">
                                                Study at
                                                <strong>Border Guard Public School and College</strong>
                                            </p>

                                            <p class="_overview_card_pre">
                                                <span class="_padd_r5">Akhalia ,</span> 
                                                <span class="_padd_r5">Modina Market ,</span> 
                                                <span>Sylhet</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div class="_overview_card">
                                        <div class="_overview_card_pic"><i class="fas fa-briefcase"></i></div>
                                        <div class="_overview_card_details">
                                            <p class="_overview_card_title">
                                                Software Engineer at
                                                <strong>Appifylab</strong>
                                            </p>

                                            <p class="_overview_card_pre">
                                                <span class="_padd_r5">Bronx ,</span> 
                                                <span class="_padd_r5">New York ,</span> 
                                                <span>United States</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div class="_overview_card">
                                        <div class="_overview_card_pic"><i class="fas fa-home"></i></div>
                                        <div class="_overview_card_details">
                                            <p class="_overview_card_title">Live in <strong>Cairo, Eygept</strong></p>
                                        </div>
                                    </div>

                                    <div class="_overview_card">
                                        <div class="_overview_card_pic"><i class="fas fa-globe"></i></div>
                                        <div class="_overview_card_details">
                                            <p class="_overview_card_title">From <strong>Aden, Yemen</strong></p>
                                        </div>
                                    </div>

                                    <div class="_overview_card">
                                        <div class="_overview_card_pic"><i class="fas fa-heart"></i></div>
                                        <div class="_overview_card_details">
                                            <p class="_overview_card_title">In a <strong>Relationship</strong></p>
                                        </div>
                                    </div>

                                    <div class="_overview_card">
                                        <div class="_overview_card_pic"><i class="fas fa-wifi"></i></div>
                                        <div class="_overview_card_details">
                                            <p class="_overview_card_title">Followed By <strong>3,240 People</strong></p>
                                        </div>
                                    </div>

                                    <div class="_overview_card">
                                        <div class="_overview_card_pic"><i class="fas fa-birthday-cake"></i></div>
                                        <div class="_overview_card_details">
                                            <p class="_overview_card_title"><strong>12 Oct 1994</strong></p>
                                        </div>
                                    </div>
                                </div>
                                <!-- Overview -->

                                <!-- Contact -->
                                <div v-if="tab == 'contact'" class="_overview">
                                    <p class="_overview_title">Contact and Basic Info</p>
                                    <div>
                                        <h2 class="_about_sub_title">Name</h2>
                                        <div class="_intro_card">
                                            <div class="_intro_card_icon"><i class="fas fa-user"></i></div>
                                            <div class="_intro_card_details">
                                                <p class="_intro_card_details_text">Hussain Shipu</p> 
                                                <span @click="isChangeName = true" class="_1add_text _mar_t10"><i class="fas fa-edit"></i> Change Name</span>
                                            </div>
                                        </div>

                                        <!-- Change Name -->
                                        <div v-if="isChangeName" class="_from_data">
                                            <div class="row">
                                                <div class="col-12 col-md-6 col-lg-6">
                                                    <div class="_1input_group">
                                                        <p class="_1label">First Name</p>
                                                        <Input v-model="value" placeholder="First Name"/>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 col-lg-6">
                                                    <div class="_1input_group">
                                                        <p class="_1label">Last Name</p>
                                                        <Input v-model="value" placeholder="Last Name"/>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-12 col-lg-12">
                                                    <div class="_from_data_buttons justify-content-center align-items-center">
                                                        <button class="_1btn" type="button">Save</button>
                                                        <button @click="isChangeName = false" class="_3btn" type="button">Cencel</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Change Name -->
                                        
                                        <h2 class="_about_sub_title">Nickname</h2>
                                        <div class="_intro_card">
                                            <div class="_intro_card_details">
                                                <p class="_intro_card_details_text">Shipu</p> 
                                                <span @click="isNickname = true" class="_1add_text _mar_t10"><i class="fas fa-pen"></i> Add / Edit Nickname</span>
                                            </div>
                                        </div>

                                        <!-- Add Nickname -->
                                        <div v-if="isNickname" class="_from_data">
                                            <div class="row">
                                                <div class="col-12 col-md-12 col-lg-12">
                                                    <div class="_1input_group">
                                                        <p class="_1label">Add Nickname</p>
                                                        <Input v-model="value" placeholder="Nickname"/>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-12 col-lg-12">
                                                    <div class="_from_data_buttons justify-content-center align-items-center">
                                                        <button class="_1btn" type="button">Save</button>
                                                        <button @click="isNickname = false" class="_3btn" type="button">Cencel</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Add Nickname -->
                                        
                                        <h2 class="_about_sub_title">Birthday</h2>
                                        <div class="_intro_card">
                                            <div class="_intro_card_icon"><i class="fas fa-birthday-cake"></i></div>
                                            <div class="_intro_card_details">
                                                <p class="_intro_card_details_text">12 Oct 1994</p>
                                            </div>
                                        </div>

                                        <p class="_about_sub_title">Contacts And Email</p>

                                        <div class="_intro_card">
                                            <div class="_intro_card_icon"><i class="fas fa-at"></i></div>
                                            <div class="_intro_card_details">
                                                <p class="_intro_card_details_text">kollol@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Contact -->

                                <!-- Work -->
                                <div v-if="tab == 'work'" class="_overview">
                                    <p class="_overview_title _mar_b20">Work and Education</p>

                                    <div class="_mar_b35">
                                        <p class="_work_title">WORK</p>
                                        <div>
                                            <div class="_1add">
                                                <span class="_1add_text"><i class="fas fa-plus"></i> Add a work place</span>
                                            </div>

                                            <div class="_overview_card">
                                                <div class="_overview_card_pic"><i class="fas fa-briefcase"></i></div>
                                                <div class="_overview_card_details">
                                                    <p class="_intro_card_details_text">
                                                        Software Engineer at
                                                        <strong>Appifylab</strong></p>
                                                </div>
                                                <div class="_overview_more">
                                                    <Dropdown trigger="click" placement="bottom-end">
                                                        <a href="javascript:void(0)" class="_more"><i class="fas fa-ellipsis-h"></i></a>
                                                        <DropdownMenu slot="list">
                                                            <DropdownItem>Edit</DropdownItem>
                                                            <DropdownItem>Delete</DropdownItem>
                                                        </DropdownMenu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Add work place -->
                                        <div class="_from_data">
                                            <div class="row">
                                                <div class="col-12 col-md-6 col-lg-6">
                                                    <div class="_1input_group">
                                                        <p class="_1label">Company</p>
                                                        <Input placeholder="Company"/>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 col-lg-6">
                                                    <div class="_1input_group">
                                                        <p class="_1label">Position</p>
                                                        <Input placeholder="Position"/>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 col-lg-6">
                                                    <div class="_1input_group">
                                                        <p class="_1label">Country</p>
                                                        <Select>
                                                            <Option>Bangladesh</Option>
                                                            <Option>UK</Option>
                                                            <Option>US</Option>
                                                            <Option>Bangladesh</Option>
                                                            <Option>UK</Option>
                                                            <Option>US</Option>
                                                            <Option>Bangladesh</Option>
                                                            <Option>UK</Option>
                                                            <Option>US</Option>
                                                            <Option>Bangladesh</Option>
                                                            <Option>UK</Option>
                                                            <Option>US</Option>
                                                        </Select>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 col-lg-6">
                                                    <div class="_1input_group">
                                                        <p class="_1label">State</p>
                                                        <Select>
                                                            <Option>Bangladesh</Option>
                                                            <Option>UK</Option>
                                                            <Option>US</Option>
                                                            <Option>Bangladesh</Option>
                                                            <Option>UK</Option>
                                                            <Option>US</Option>
                                                            <Option>Bangladesh</Option>
                                                            <Option>UK</Option>
                                                            <Option>US</Option>
                                                            <Option>Bangladesh</Option>
                                                            <Option>UK</Option>
                                                            <Option>US</Option>
                                                        </Select>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 col-lg-6">
                                                    <div class="_1input_group">
                                                        <p class="_1label">City</p>
                                                        <Select>
                                                            <Option>Bangladesh</Option>
                                                            <Option>UK</Option>
                                                            <Option>US</Option>
                                                            <Option>Bangladesh</Option>
                                                            <Option>UK</Option>
                                                            <Option>US</Option>
                                                            <Option>Bangladesh</Option>
                                                            <Option>UK</Option>
                                                            <Option>US</Option>
                                                            <Option>Bangladesh</Option>
                                                            <Option>UK</Option>
                                                            <Option>US</Option>
                                                        </Select>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 col-lg-6">
                                                    <div class="_1input_group">
                                                        <p class="_1label">Start Date</p>
                                                        <DatePicker type="date" placeholder="Select date" style="width: 100%"></DatePicker>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-12 col-lg-12">
                                                    <div class="_1input_group">
                                                        <Checkbox>I am currently working here</Checkbox>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-12 col-lg-12">
                                                    <div class="_1input_group">
                                                        <p class="_1label">End Date</p>
                                                        <DatePicker type="date" placeholder="Select date" style="width: 100%"></DatePicker>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-12 col-lg-12">
                                                    <div class="_1input_group">
                                                        <p class="_1label">Description</p>
                                                        <Input type="textarea" :rows="6" placeholder="Description"/>
                                                    </div>
                                                </div>

                                                <div class="col-12 col-md-12 col-lg-12">
                                                    <div class="_from_data_buttons justify-content-center align-items-center">
                                                        <button type="button" class="_1btn">Save</button> 
                                                        <button type="button" class="_3btn">Cencel</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Add work place -->
                                    </div>

                                    <p class="_work_title">PROFESSIONAL SKILLS</p>
                                    <div class="_mar_b35">
                                        <div class="">
                                            <div class="_1add"><span class="_1add_text"><i class="fas fa-plus"></i> 
                                        Add a professional skill
                                        </span></div>
                                            <div class="_profess">
                                                <ul class="_profess_list">
                                                    <li class="_profess_list_li">
                                                        Nothing

                                                        <div class="_profess_more">
                                                            <Dropdown trigger="click" placement="bottom-end">
                                                                <a href="javascript:void(0)" class="_more"><i class="fas fa-ellipsis-h"></i></a>
                                                                <DropdownMenu slot="list">
                                                                    <DropdownItem>Edit</DropdownItem>
                                                                    <DropdownItem>Delete</DropdownItem>
                                                                </DropdownMenu>
                                                            </Dropdown>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <p class="_work_title">COLLEGE</p>
                                    <div class="_mar_b35">
                                        <div class="_mar_b15">
                                            <div class="_1add"><span class="_1add_text"><i class="fas fa-plus"></i> Add a college
                                        </span></div>
                                            <div class="_overview_card">
                                                <div class="_overview_card_pic"><i class="fas fa-graduation-cap"></i></div>
                                                <div class="_overview_card_details _mar_t10">
                                                    <p class="_intro_card_details_text">
                                                        Studied Science at
                                                        <strong>Bule Birds School and College</strong></p>
                                                    <p class="_overview_card_pre"><span class="_padd_r5">Aleutians East Borough ,</span> <span class="_padd_r5">Alaska ,</span> <span>United States</span></p>
                                                </div>
                                                <div class="_overview_more">
                                                    <Dropdown trigger="click" placement="bottom-end">
                                                        <a href="javascript:void(0)" class="_more"><i class="fas fa-ellipsis-h"></i></a>
                                                        <DropdownMenu slot="list">
                                                            <DropdownItem>Edit</DropdownItem>
                                                            <DropdownItem>Delete</DropdownItem>
                                                        </DropdownMenu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <p class="_work_title">HIGH SCHOOL</p>
                                    <div>
                                        <div class="_mar_b15">
                                            <div class="_1add"><span class="_1add_text"><i class="fas fa-plus"></i> Add a high school
                                        </span></div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Work -->

                                <!-- Places -->
                                <div v-if="tab == 'places'" class="_overview">
                                    <div class="_mar_b20">
                                        <p class="_overview_title _mar_b20">YOU'VE LIVED</p>
                                    </div>
                                    <p class="_work_title">CURRENT CITY</p>
                                    <div class="_mar_b35">
                                        <div class="_mar_b15">
                                            <div class="_1add _mar_b10"><span class="_1add_text"><i class="fas fa-plus"></i>
                                        Add your current city
                                        </span></div>
                                            <div class="_overview_card">
                                                <div class="_overview_card_pic"><i class="fas fa-map-marker-alt"></i></div>
                                                <div class="_overview_card_details">
                                                    <p class="_overview_card_title"><strong>Bronx</strong></p>
                                                    <p class="_overview_card_pre"><span class="_padd_r5">
                                                New York ,
                                            </span> <span>
                                                United States
                                            </span></p>
                                                </div>
                                                <div class="_overview_card_more">
                                                    <Dropdown trigger="click" placement="bottom-end">
                                                        <a href="javascript:void(0)" class="_more"><i class="fas fa-ellipsis-h"></i></a>
                                                        <DropdownMenu slot="list">
                                                            <DropdownItem>Edit</DropdownItem>
                                                            <DropdownItem>Delete</DropdownItem>
                                                        </DropdownMenu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                        </div>
                                        <!---->
                                    </div>
                                    <p class="_work_title">HOME TOWN</p>
                                    <div class="_mar_b35">
                                        <div class="_mar_b15">
                                            <div class="_1add _mar_b10"><span class="_1add_text"><i class="fas fa-plus"></i>
                                        Add home town
                                        </span></div>
                                            <!---->
                                        </div>
                                        <!---->
                                    </div>
                                    <p class="_work_title">OTHER PLACES LIVED</p>
                                    <div class="_mar_b35">
                                        <div class="_mar_b10">
                                            <div class="_1add _mar_b10"><span class="_1add_text"><i class="fas fa-plus"></i> Add other places you have lived
                                        </span></div>
                                            <!---->
                                        </div>
                                        <!---->
                                    </div>
                                </div>
                                <!-- Places -->
                            </div>
                            <!-- Right Details -->
                        </div>
                        <!-- About -->
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
      isChangeName: true,
      isNickname: false,
      tab: 'overview'
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
        this.tab = "overview";
      }
      return (this.tab = tab);
    },
  },
  
  created(){
    
  }
}
</script>