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
                <h1 class="_4banner_title">Support</h1>
                <p class="_4banner_text">How to get in touch with us and ask for help</p>
            </div>
        </div>
        <!-- Banner -->

        <!-- Content -->
        <div class="_log_form_main">
            <p class="_support_text">
                For any inquiry please contact us by writing to 
                <a href="">Constantin Florin</a> 
                in the chat, or by sending an email at support[at]connectiver.com.
            </p>

            <p class="_support_text">
                Please keep in mind that our support team is small for now, but we will try to answer each inquiry as soon as possible.
            </p>
        </div>
        <!-- Content -->
    </div>
</template>