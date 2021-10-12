<template>
    <div>
        <div class="_2menu">
            <div class="_2menu_con">
                <div class="row align-items-center">
                    <div class="col">
                        <router-link to="/">
                            <h3 class="_menu_logo_text">
                                <span class="_menu_logo_symbol">C</span>
                                <span class="_menu_logo_text_main">CONNECTIVER</span>
                            </h3>
                        </router-link>
                    </div>

                    <div class="col-auto">
                        <router-link to="/logIn">
                            <button class="_log_btn _2menu_long" type="button">Login</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <!-- Banner -->
        <div class="_4banner">
            <div class="_4banner_main">
                <h1 class="_4banner_title">Donate</h1>
                <p class="_4banner_text">Support our platform so we can keep it up and running</p>
            </div>
        </div>
        <!-- Banner -->

        <!-- Content -->
        <div class="_log_form_main">
            <p class="_support_text">
                Connectiver is a complex social platform that needs a lot of care and resources. We appreciate all your donations!
            </p>
            <img class="_support_img" src="/static/img/btn_donateCC_LG.webp" alt="" title="">
        </div>
        <!-- Content -->
    </div>
</template>