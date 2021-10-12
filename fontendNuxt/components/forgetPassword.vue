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
                <h1 class="_4banner_title">Connectiver</h1>
                <p class="_4banner_text">Creating a conscious and safe community where human<br/> connection and new ideas can thrive</p>
            </div>
        </div>
        <!-- Banner -->

        <!-- Form -->
        <div class="_log_form_main">
            <h2 class="_log_form_title">Recover Password</h2>

            <div class="_log_form">
                <p class="_log_form_text">
                    Please enter the email address you used at signup and we'll send you a password reset email:
                </p>
                <div class="_log_input_group">
                    <input class="_log_input" placeholder="Email address" type="text">
                </div>
                <div class="_log_button">
                    <button class="_log_btn _btn_long">Send Email</button>
                </div>
            </div>
        </div>
        <!-- Form -->
    </div>
</template>