<template>
    <div class="_right_sec">
        <div class="_right_sec_main">
            <div class="_right_sec_top">
                <!-- Friend Suggestions -->
                <div class="_right_card _mar_b20">
                    <div class="_right_card_top">
                       <p class="_right_card_title">Friend Suggestions</p>

                       <a class="_right_card_see" href="">See All</a>
                    </div>

                    <div class="_right_card_body">
                        <!-- Items -->
                        <div class="_right_card_items" v-for="(item, index) in 4" :key="index">
                            <div class="_right_card_items_pic">
                                <img class="_right_card_items_img" src="/static/img/pic.jpg" alt="" title="">
                            </div>

                            <div class="_right_card_items_details">
                                <span class="_right_card_items_name_main"><a href="" class="_right_card_items_name">Konstaintions Oikonomou</a></span>
                                <p class="_right_card_items_val">1 mutual friends</p>
                            </div>

                            <div class="_right_card_items_button">
                                <button class="_2btn _pre_icon _btn_sm"><i class="fas fa-user-plus"></i> Add</button>
                            </div>
                        </div>
                        <!-- Items -->
                    </div>
                </div>
                <!-- Friend Suggestions -->

                <!-- Chat list -->
                <div class="_right_card _mar_b20">
                    <div class="_right_card_top">
                       <p class="_right_card_title">Chat</p>

                       <ul class="_right_card_icons">
                           <li>
                               <i class="fas fa-users"></i>
                           </li>
                           <li>
                               <i class="fas fa-edit"></i>
                           </li>
                           <li>
                               <i class="fas fa-cog"></i>
                           </li>
                       </ul>
                    </div>

                    <div class="_right_card_body">
                        <!-- Items -->
                        <div class="_chat_list_card" v-for="(items, index) in 20" :key="index">
                            <div class="_chat_list_card_pic">
                                <img class="_chat_list_card_img" src="/static/img/pic.jpg" alt="" title="">
                            </div>

                            <div class="_chat_list_card_details">
                                <span class="_chat_list_card_name_main"><a href="" class="_chat_list_card_name">Konstaintions Oikonomou</a></span>
                                <p class="_chat_list_card_val">1 mutual friends</p>
                            </div>

                            <div class="_right_card_items_button">
                                <!-- <button class="_2btn _pre_icon _btn_sm"><i class="fas fa-user-plus"></i> Add</button> -->
                            </div>
                        </div>
                        <!-- Items -->
                    </div>
                </div>
                <!-- Chat list --> 
            </div>
        </div>
    </div>
</template>