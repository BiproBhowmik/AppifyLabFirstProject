<template>
    <div>
        <div class="_list_left_top">
            <div class="_list_left_title_top">
                <h2 class="_2title _list_left_title">Groups</h2>
            </div>

            <div class="_list_left_search">
                <input type="" placeholder="Serach">
                <i class="fas fa-search"></i>
            </div>

            <ul class="_list_left_menu">
                <li>
                    <a href=""><i class="fas fa-newspaper"></i> Your Feed</a>
                </li>
                <li>
                    <a href=""><i class="far fa-gem"></i> Discover</a>
                </li>
                <li>
                    <a href=""><i class="fas fa-bell"></i> Your Notifications</a>
                </li>
            </ul>

            <div class="_list_left_button">
                <button class="_3btn _btn_long _pre_icon" type="button"><i class="fas fa-plus"></i> Create New Group</button>
            </div>
        </div>
        
        <div class="_list_own_group _1scrollbar">
            <h3 class="_3title _list_own_group_title">Your Groups</h3>

            <!-- Card -->
            <a href="" class="_list_own_group_card">
                <div class="_list_own_group_card_pic">
                    <img class="_list_own_group_card_img" src="/static/img/image_1608226845923.jpeg" alt="" title="">
                </div>

                <div class="_list_own_group_card_details">
                    <p class="_list_own_group_card_title">Castaway On The (COTM)</p>
                    <p class="_list_own_group_card_time">Last actie 4 hours ago</p>
                </div>
            </a>
            <!-- Card -->

            <!-- Card -->
            <a href="" class="_list_own_group_card" v-for="(items , index) in 10" :key="index">
                <div class="_list_own_group_card_pic">
                    <img class="_list_own_group_card_img" src="/static/img/logo.jpeg" alt="" title="">
                </div>

                <div class="_list_own_group_card_details">
                    <p class="_list_own_group_card_title">Castaway On The Moon (COTM) Castaway On The Moon (COTM)Castaway On The Moon (COTM)</p>
                    <p class="_list_own_group_card_time">Last actie 4 hours ago</p>
                </div>
            </a>
            <!-- Card -->
        </div>
    </div>
</template>