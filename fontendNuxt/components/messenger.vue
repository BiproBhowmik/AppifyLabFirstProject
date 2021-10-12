<template>
    <div>
        <div class="_2main_content">
            <div class="_1messenger_all">
                <div class="_1messenger">
                    <!-- Left -->
                    <div class="_1messenger_left">
                        <!-- Search -->
                        <div class="_1messenger_search_header">
                            <div class="_1messenger_search_all">
                                <div class="_1messenger_search">
                                    <i class="ivu-icon ivu-icon-ios-search-outline"></i> 
                                    <input type="text" placeholder="Search.." value="">
                                    <div class="outline"></div>
                                </div>
                            </div>

                            <ul class="_1messenger_left_option">
                                <li><i class="fas fa-user-check"></i></li>
                                <li><i class="fas fa-user-plus"></i></li>
                            </ul>
                        </div>
                        <!-- Search -->

                        <!-- Chat List -->
                        <div class="_1messenger_chat_list_all _1scrollbar">
                            <!-- Items -->
                            <div class="_1messenger_chat_list" v-for="(item, index) in 3" :key="index">
                                <div class="_1messenger_chat_pic">
                                    <img src="https://api.hombolttech.net/img/profile.png" alt="" title="" class="_1messenger_chat_img">
                                </div>
                                <div class="_1messenger_chat_details">
                                    <p class="_1messenger_chat_name">Administrator who </p>
                                    <p class="_1messenger_chat_text">Hay! What's up?</p>
                                </div>
                                <div class="_1messenger_chat_time">
                                    <p class="_1messenger_chat_time_text">12:00PM</p>
                                    <p class="_1messenger_chat_time_panding">33</p>
                                    <p class="_1messenger_chat_seen_icon">
                                        <i class="fas fa-check"></i>
                                    </p>
                                </div>
                            </div>
                            <!-- Items -->

                            <!-- Items -->
                            <div class="_1messenger_chat_list active_list">
                                <div class="_1messenger_chat_pic">
                                    <img src="https://api.hombolttech.net/img/profile.png" alt="" title="" class="_1messenger_chat_img">
                                </div>
                                <div class="_1messenger_chat_details">
                                    <p class="_1messenger_chat_name">Administrator who </p>
                                    <p class="_1messenger_chat_text">You : How are you?</p>
                                </div>
                                <div class="_1messenger_chat_time">
                                    <p class="_1messenger_chat_time_text">12:00PM</p>
                                    <p class="_1messenger_chat_time_panding">33</p>
                                    <p class="_1messenger_chat_seen_icon">
                                        <i class="fas fa-check"></i>
                                    </p>
                                </div>
                            </div>
                            <!-- Items -->

                            <!-- Items -->
                            <div class="_1messenger_chat_list _unseen">
                                <div class="_1messenger_chat_pic">
                                    <img src="https://api.hombolttech.net/img/profile.png" alt="" title="" class="_1messenger_chat_img">
                                </div>
                                <div class="_1messenger_chat_details">
                                    <p class="_1messenger_chat_name">Administrator who </p>
                                    <p class="_1messenger_chat_text">Hay! What's up?</p>
                                </div>
                                <div class="_1messenger_chat_time">
                                    <p class="_1messenger_chat_time_text">12:00PM</p>
                                    <p class="_1messenger_chat_time_panding">33</p>
                                </div>
                            </div>
                            <!-- Items -->

                            <!-- Items -->
                            <div class="_1messenger_chat_list" v-for="(item, index) in 5" :key="index">
                                <div class="_1messenger_chat_pic">
                                    <img src="https://api.hombolttech.net/img/profile.png" alt="" title="" class="_1messenger_chat_img">
                                </div>
                                <div class="_1messenger_chat_details">
                                    <p class="_1messenger_chat_name">Administrator who </p>
                                    <p class="_1messenger_chat_text">Hay! What's up?</p>
                                </div>
                                <div class="_1messenger_chat_time">
                                    <p class="_1messenger_chat_time_text">12:00PM</p>
                                    <p class="_1messenger_chat_time_panding">33</p>
                                    <p class="_1messenger_chat_seen_icon">
                                        <i class="fas fa-check"></i>
                                    </p>
                                </div>
                            </div>
                            <!-- Items -->
                        </div>
                        <!-- Chat List -->
                    </div>
                    <!-- Left -->

                    <!-- Right -->
                    <div class="_1messenger_right">
                        <!-- Header -->
                        <div class="_1messenger_right_header">
                            <div class="_1messenger_right_header_left _active">
                                <a href="" class="_1messenger_right_pic">
                                    <img src="https://api.hombolttech.net/img/profile.png" alt="" title="" class="_1messenger_right_img">
                                </a>
                                <div class="_1messenger_right_heder_details">
                                    <a href="" class="_1messenger_right_name _1text_overflow"> Administratordfgh who</a>
                                </div>
                            </div>
                            <div class="_1messenger_right_header_right">
                                <ul class="_1messenger_right_list">
                                    <li><i class="fas fa-video"></i></li>
                                    <li><i class="fas fa-phone"></i></li>
                                </ul>
                            </div>
                        </div>
                        <!-- Header -->

                        <!-- Chat box -->
                        <div class="_1messenger_right_chat">
                            <div class="_1chat_all _1scrollbar">
                                <template v-if="isEmpty">
                                    <div class="_no_con">
                                        <img src="/static/img/notFound.png" alt="" title="" class="_no_con_img">
                                    </div>
                                </template>

                                <template v-else>
                                    <p class="_see_pre"><span>See previous messages</span></p>

                                    <p class="_1mess_date">2020-12-06</p>

                                    <!-- Friend message -->
                                    <div class="_1fri_mess">
                                        <div class="_1fri_mess_main">
                                            <div class="_1fri_mess_mess">
                                                <p class="_1fri_mess_text">beauty</p>
                                                <p class="_1fri_mess_time">11:24 am</p>
                                            </div>

                                            <div class="_chatBox_mess_drop">
                                                <Dropdown trigger="click">
                                                    <a class="_chatBox_mess_drop_text" href="javascript:void(0)">
                                                        <i class="fas fa-ellipsis-h"></i>
                                                    </a>
                                                    <DropdownMenu slot="list">
                                                        <DropdownItem><p class="_drop_text _drop_pre_icon">Edit</p></DropdownItem>
                                                        <DropdownItem><p class="_drop_text _drop_pre_icon">Remove</p></DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                        <div class="_1fri_pic">
                                            <img src="https://api.hombolttech.net/img/profile.png" alt="" title="" class="_1fri_img">
                                        </div>
                                    </div>
                                    <!-- Friend message -->

                                    <!-- Friend single image message -->
                                    <div class="_1fri_mess">
                                        <div class="_1fri_mess_main">
                                            <div class="_1fri_mess_img_all">
                                                <div class="_1fri_mess_pic">
                                                    <img src="http://mobile.hombolttech.net/uploads/file_1610281913634.jpg" alt="image" title="" class="_1fri_mess_img">
                                                </div>
                                            </div>

                                            <div class="_chatBox_mess_drop">
                                                <Dropdown trigger="click">
                                                    <a class="_chatBox_mess_drop_text" href="javascript:void(0)">
                                                        <i class="fas fa-ellipsis-h"></i>
                                                    </a>
                                                    <DropdownMenu slot="list">
                                                        <DropdownItem><p class="_drop_text _drop_pre_icon">Edit</p></DropdownItem>
                                                        <DropdownItem><p class="_drop_text _drop_pre_icon">Remove</p></DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                        <div class="_1fri_pic">
                                            <img src="https://api.hombolttech.net/img/profile.png" alt="" title="" class="_1fri_img">
                                        </div>
                                    </div>
                                    <!-- Friend single image message -->

                                    <!-- Friend multiple image message -->
                                    <div class="_1fri_mess">
                                        <div class="_1fri_mess_main">
                                            <div class="_1fri_mess_img_all">
                                                <!-- Items -->
                                                <div class="_1fri_mess_pic">
                                                    <img src="http://mobile.hombolttech.net/uploads/file_1610281913634.jpg" alt="image" title="" class="_1fri_mess_img">
                                                </div>
                                                <!-- Items -->
                                                <!-- Items -->
                                                <div class="_1fri_mess_pic">
                                                    <img src="http://mobile.hombolttech.net/uploads/file_1610281913634.jpg" alt="image" title="" class="_1fri_mess_img">
                                                </div>
                                                <!-- Items -->
                                                <!-- Items -->
                                                <div class="_1fri_mess_pic">
                                                    <img src="http://mobile.hombolttech.net/uploads/file_1610281913634.jpg" alt="image" title="" class="_1fri_mess_img">
                                                </div>
                                                <!-- Items -->
                                                <!-- Items -->
                                                <div class="_1fri_mess_pic">
                                                    <img src="http://mobile.hombolttech.net/uploads/file_1610281913634.jpg" alt="image" title="" class="_1fri_mess_img">
                                                </div>
                                                <!-- Items -->
                                            </div>

                                            <div class="_chatBox_mess_drop">
                                                <Dropdown trigger="click">
                                                    <a class="_chatBox_mess_drop_text" href="javascript:void(0)">
                                                        <i class="fas fa-ellipsis-h"></i>
                                                    </a>
                                                    <DropdownMenu slot="list">
                                                        <DropdownItem><p class="_drop_text _drop_pre_icon">Edit</p></DropdownItem>
                                                        <DropdownItem><p class="_drop_text _drop_pre_icon">Remove</p></DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                        <div class="_1fri_pic">
                                            <img src="https://api.hombolttech.net/img/profile.png" alt="" title="" class="_1fri_img">
                                        </div>
                                    </div>
                                    <!-- Friend multiple image message -->

                                    <p class="_1mess_date">2020-12-06</p>

                                    <!-- Own single image message -->
                                    <div class="_1own_mess">
                                        <div class="_1own_mess_main">
                                            <div class="_chatBox_mess_drop">
                                                <Dropdown trigger="click">
                                                    <a class="_chatBox_mess_drop_text" href="javascript:void(0)">
                                                        <i class="fas fa-ellipsis-h"></i>
                                                    </a>
                                                    <DropdownMenu slot="list">
                                                        <DropdownItem><p class="_drop_text _drop_pre_icon">Edit</p></DropdownItem>
                                                        <DropdownItem><p class="_drop_text _drop_pre_icon">Remove</p></DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </div>

                                            <div class="_1fri_mess_img_all _1own_mess_img_all">
                                                <div class="_1fri_mess_pic">
                                                    <img src="http://mobile.hombolttech.net/uploads/file_1610281913634.jpg" alt="image" title="" class="_1fri_mess_img">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Own single image message -->

                                    <p class="_1mess_date">2020-12-06</p>

                                    <!-- Friend file message -->
                                    <div class="_1fri_mess">
                                        <div class="_1fri_mess_main">
                                            <div class="_1fri_files_main">
                                                <div class="_1fri_files">
                                                    <div class="_1fri_files_icon"><i class="ivu-icon ivu-icon-md-document"></i></div>
                                                    <div class="_1fri_files_details">
                                                        <p class="_1fri_files_name _1text_overflow">file_1607276489335.pdf</p>
                                                        <p class="_1fri_files_num">12kb</p>
                                                    </div>
                                                    <div class="_1fri_files_download_main">
                                                        <div class="_1fri_files_download">
                                                            <a href="">
                                                                <i class="ivu-icon ivu-icon-md-download"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="_chatBox_mess_drop">
                                                <Dropdown trigger="click">
                                                    <a class="_chatBox_mess_drop_text" href="javascript:void(0)">
                                                        <i class="fas fa-ellipsis-h"></i>
                                                    </a>
                                                    <DropdownMenu slot="list">
                                                        <DropdownItem><p class="_drop_text _drop_pre_icon">Edit</p></DropdownItem>
                                                        <DropdownItem><p class="_drop_text _drop_pre_icon">Remove</p></DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                        
                                        <div class="_1fri_pic">
                                            <img src="https://api.hombolttech.net/img/profile.png" alt="" title="" class="_1fri_img">
                                        </div>
                                    </div>
                                    <!-- Friend file message -->

                                    <!-- Own file message -->
                                    <div class="_1own_mess">
                                        <div class="_1own_mess_main">
                                            <div class="_chatBox_mess_drop">
                                                <Dropdown trigger="click">
                                                    <a class="_chatBox_mess_drop_text" href="javascript:void(0)">
                                                        <i class="fas fa-ellipsis-h"></i>
                                                    </a>
                                                    <DropdownMenu slot="list">
                                                        <DropdownItem><p class="_drop_text _drop_pre_icon">Edit</p></DropdownItem>
                                                        <DropdownItem><p class="_drop_text _drop_pre_icon">Remove</p></DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </div>

                                            <div class="_1fri_files_main _1own_files _1own_files">
                                                <div class="_1fri_files">
                                                    <div class="_1fri_files_icon"><i class="ivu-icon ivu-icon-md-document"></i></div>
                                                    <div class="_1fri_files_details">
                                                        <p class="_1fri_files_name _1text_overflow">file_1607276489335.pdf</p>
                                                        <p class="_1fri_files_num">12kb</p>
                                                    </div>
                                                    <div class="_1fri_files_download_main">
                                                        <div class="_1fri_files_download">
                                                            <a href="">
                                                                <i class="ivu-icon ivu-icon-md-download"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Own file message -->

                                    <!-- Own multiple image message -->
                                    <div class="_1own_mess">
                                        <div class="_1own_mess_main">
                                            <div class="_chatBox_mess_drop">
                                                <Dropdown trigger="click">
                                                    <a class="_chatBox_mess_drop_text" href="javascript:void(0)">
                                                        <i class="fas fa-ellipsis-h"></i>
                                                    </a>
                                                    <DropdownMenu slot="list">
                                                        <DropdownItem><p class="_drop_text _drop_pre_icon">Edit</p></DropdownItem>
                                                        <DropdownItem><p class="_drop_text _drop_pre_icon">Remove</p></DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </div>

                                            <div class="_1fri_mess_img_all _1own_mess_img_all">
                                                <!-- Items -->
                                                <div class="_1fri_mess_pic">
                                                    <img src="http://mobile.hombolttech.net/uploads/file_1610281913634.jpg" alt="image" title="" class="_1fri_mess_img">
                                                </div>
                                                <!-- Items -->
                                                <!-- Items -->
                                                <div class="_1fri_mess_pic">
                                                    <img src="http://mobile.hombolttech.net/uploads/file_1610281913634.jpg" alt="image" title="" class="_1fri_mess_img">
                                                </div>
                                                <!-- Items -->
                                                <!-- Items -->
                                                <div class="_1fri_mess_pic">
                                                    <img src="http://mobile.hombolttech.net/uploads/file_1610281913634.jpg" alt="image" title="" class="_1fri_mess_img">
                                                </div>
                                                <!-- Items -->
                                                <!-- Items -->
                                                <div class="_1fri_mess_pic">
                                                    <img src="http://mobile.hombolttech.net/uploads/file_1610281913634.jpg" alt="image" title="" class="_1fri_mess_img">
                                                </div>
                                                <!-- Items -->
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Own multiple image message -->

                                    <p class="_1mess_date">2020-12-06</p>

                                    <!-- Own message -->
                                    <div class="_1own_mess">
                                        <div class="_1own_mess_main">
                                            <div class="_chatBox_mess_drop">
                                                <Dropdown trigger="click">
                                                    <a class="_chatBox_mess_drop_text" href="javascript:void(0)">
                                                        <i class="fas fa-ellipsis-h"></i>
                                                    </a>
                                                    <DropdownMenu slot="list">
                                                        <DropdownItem><p class="_drop_text _drop_pre_icon">Edit</p></DropdownItem>
                                                        <DropdownItem><p class="_drop_text _drop_pre_icon">Remove</p></DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </div>
                                            
                                            <div class="_1own_mess_mess">
                                                <p class="_1own_mess_text">yes how are you
                                                </p>
                                                <p class="_1own_mess_time">09:04 pm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Own message -->
                                </template>
                            </div>

                            <!-- Status Box -->
                            <div class="_1mess_textarea">
                                <div class="_1mess_textarea_top">
                                    <ul class="_1mess_textarea_options">
                                        <li><i class="fas fa-smile"></i></li>
                                        <li><i class="fas fa-image"></i></li>
                                        <li><i class="fas fa-microphone"></i></li>
                                        <li>
                                            <svg style="enable-background:new 0 0 512 512;width:22px;height:auto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" xml:space="preserve"><g><path xmlns="http://www.w3.org/2000/svg" d="m368 0h-309.332031c-32.363281 0-58.667969 26.304688-58.667969 58.667969v394.664062c0 32.363281 26.304688 58.667969 58.667969 58.667969h309.332031c32.363281 0 58.667969-26.304688 58.667969-58.667969v-394.664062c0-32.363281-26.304688-58.667969-58.667969-58.667969zm-266.667969 394.667969h16v-6.253907c-6.226562-2.195312-10.664062-8.125-10.664062-15.082031 0-8.832031 7.167969-16 16-16h10.664062c8.832031 0 16 7.167969 16 16v37.335938c0 8.832031-7.167969 16-16 16h-32c-20.585937 0-37.332031-16.746094-37.332031-37.335938v-53.332031c0-20.585938 16.746094-37.332031 37.332031-37.332031h32c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16h-32c-2.941406 0-5.332031 2.386719-5.332031 5.332031v53.332031c0 2.945313 2.390625 5.335938 5.332031 5.335938zm117.335938 16c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-96c0-8.832031 7.167969-16 16-16s16 7.167969 16 16zm106.664062-58.667969c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16h-42.664062v26.667969c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-74.667969c0-20.585938 16.746093-37.332031 37.332031-37.332031h37.332031c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16h-37.332031c-2.945312 0-5.332031 2.386719-5.332031 5.332031v16zm0 0" fill="#0392f7" data-original="#000000"/></g><i xmlns="http://www.w3.org/1999/xhtml" class="fas fa-paperclip"></i></svg>
                                        </li>
                                        <li><i class="fas fa-paperclip"></i></li>
                                    </ul>
                                </div>
                                <div class="_1mess_textarea_main">
                                    <div class="_1mess_textarea_input">
                                        <div class="ivu-input-wrapper ivu-input-wrapper-default ivu-input-type"><textarea wrap="soft" autocomplete="off" spellcheck="false" placeholder="Write a message..." rows="2" class="ivu-input" style="height: 34px; min-height: 34px; max-height: 130px; overflow-y: hidden;"></textarea></div>
                                    </div>
                                    <div class="_1mess_textarea_send"><i class="fas fa-paper-plane"></i></div>
                                </div>
                            </div>
                            <!-- Status Box -->
                        </div>
                        <!-- Chat box -->
                    </div>
                    <!-- Right -->

                    <!-- Profile -->
                    <div class="_1mess_pro _1scrollbar">
                        <!-- <p class="_1mess_pro_close"><i class="ivu-icon ivu-icon-md-close"></i></p>  -->
                        <a href="" class="_1mess_pro_pic">
                            <img src="https://api.hombolttech.net/img/profile.png" alt="" title="" class="_1mess_pro_img">
                        </a> 
                        <a href="" class="_1mess_pro_name">Administratordfgh who</a>
                        <p class="_1mess_pro_pro">Admin</p>
                        <ul class="_1mess_pro_list">
                            <li>9699835765733 </li>
                            <li><a href="">admin@hombolttech.com</a></li>
                            <li>Sreemangal, Sylhet, Bangladesh</li>
                        </ul>

                        <div class="_1mess_pro_drop">
                            <Dropdown style="width:222px" trigger="click" placement="bottom-start">
                                <a class="_1mess_pro_drop_text" href="javascript:void(0)">
                                    <span>Options</span>
                                    <i class="fas fa-angle-down"></i>
                                </a>
                                <DropdownMenu slot="list">
                                    <DropdownItem><p class="_drop_text _drop_pre_icon"><i class="fas fa-bookmark"></i> Save Post</p></DropdownItem>
                                    <DropdownItem><p class="_drop_text _drop_pre_icon"><i class="fas fa-flag"></i> Report Post</p></DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>
                    <!-- Profile -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      isEmpty: false
    }
  },

  methods:{
    
  },
  
  created(){
    
  }
}
</script>