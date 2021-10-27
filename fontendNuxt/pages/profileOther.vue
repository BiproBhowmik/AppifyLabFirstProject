<template>
  <div>
    <div class="_1main_content">
      <!-- Banner -->
      <template>
        <!-- {{session.get('userProfileInfo')}} -->
        <div>
          <div class="_2banner _mar_b20">
            <div class="_2banner_layout">
              <div class="_2banner_main">
                <!-- Shimmer -->
                <template v-if="isHide">
                  <div class="_pro_shimmer">
                    <div class="_pro_shimmer_cover _shim_animate"></div>
                    <div class="_pro_shimmer_proPic _shim_animate"></div>
                    <ul class="_pro_shimmer_menu">
                      <li class="_shim_animate"></li>
                      <li class="_shim_animate"></li>
                      <li class="_shim_animate"></li>
                      <li class="_shim_animate"></li>
                      <li class="_shim_animate"></li>
                    </ul>
                  </div>
                </template>
                <!-- Shimmer -->

                <template v-if="isloaded">
                  <div class="_2banner_top">
                    <div class="_2banner_pic">
                      <img
                        class="_2banner_img"
                        src="/static/img/image_1608022151387.jpeg"
                        alt=""
                        title=""
                      />
                    </div>

                    <div class="_2banner_pro">
                      <div class="_2banner_pro_pic _active">
                        <img
                          class="_2banner_pro_img"
                          :src="
                            'http://localhost:3333/uploads/' +
                              thisProfileUser.profile_picture
                          "
                          alt=""
                          title=""
                        />

                        <p class="_2banner_pro_edit">
                          <i class="fas fa-camera"></i>
                        </p>
                      </div>

                      <p class="_2banner_pro_name">
                        {{ thisProfileUser.first_name }}
                        {{ thisProfileUser.last_name }}
                      </p>
                    </div>
                  </div>

                  <div class="_2banner_menu">
                    <div class="_2banner_menu_list">
                      <ul class="_2banner_menu_list_ul">
                        <li :class="$route.path == '/profile' ? '_active' : ''">
                          <router-link to="/profile">Newsfeed</router-link>
                        </li>
                        <li
                          :class="
                            $route.path == '/profileAbout' ? '_active' : ''
                          "
                        >
                          <router-link to="/profileAbout">About</router-link>
                        </li>
                        <li
                          :class="
                            $route.path == '/profileFriend' ? '_active' : ''
                          "
                        >
                          <router-link to="/profileFriend">Friends</router-link>
                        </li>
                        <li
                          :class="
                            $route.path == '/profilePhoto' ? '_active' : ''
                          "
                        >
                          <router-link to="/profilePhoto">Photos</router-link>
                        </li>
                        <li
                          :class="
                            $route.path == '/profileVideo' ? '_active' : ''
                          "
                        >
                          <router-link to="/profileVideo">Videos</router-link>
                        </li>
                      </ul>
                    </div>

                    <div class="_2banner_options">
                      <ul class="_2banner_options_list">
                        <li class="_2banner_options_items">
                          <button class="_2btn _pre_img" type="button">
                            <svg
                              class="_btn_img"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              xmlns:svgjs="http://svgjs.com/svgjs"
                              version="1.1"
                              x="0"
                              y="0"
                              viewBox="0 0 512 512"
                              style="enable-background:new 0 0 512 512"
                              xml:space="preserve"
                            >
                              <g>
                                <path
                                  xmlns="http://www.w3.org/2000/svg"
                                  d="m272 384a96 96 0 1 0 96-96 96.108 96.108 0 0 0 -96 96zm40-8h48v-48a8 8 0 0 1 16 0v48h48a8 8 0 0 1 0 16h-48v48a8 8 0 0 1 -16 0v-48h-48a8 8 0 0 1 0-16z"
                                  fill="#ffffff"
                                  data-original="#000000"
                                  style=""
                                  class=""
                                />
                                <path
                                  xmlns="http://www.w3.org/2000/svg"
                                  d="m272.6 442.613a111.947 111.947 0 0 1 71.217-167.976c-31.117-42.497-77.107-66.637-127.817-66.637-45.522 0-87.578 19.485-118.42 54.865-31.063 35.633-48.567 85.3-49.538 140.291 18.365 9.261 93.77 44.844 167.958 44.844a312.1 312.1 0 0 0 56.6-5.387z"
                                  fill="#ffffff"
                                  data-original="#000000"
                                  style=""
                                  class=""
                                />
                                <circle
                                  xmlns="http://www.w3.org/2000/svg"
                                  cx="216"
                                  cy="112"
                                  r="80"
                                  fill="#ffffff"
                                  data-original="#000000"
                                  style=""
                                  class=""
                                />
                              </g>
                            </svg>
                            Add Friend
                          </button>
                        </li>
                        <li class="_2banner_options_items">
                          <button class="_3btn" type="button">
                            <svg
                              class="_btn_img"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              xmlns:svgjs="http://svgjs.com/svgjs"
                              version="1.1"
                              x="0"
                              y="0"
                              viewBox="0 0 135.46666 135.46667"
                              style="enable-background:new 0 0 512 512"
                              xml:space="preserve"
                            >
                              <g>
                                <g
                                  xmlns="http://www.w3.org/2000/svg"
                                  id="layer1"
                                >
                                  <path
                                    id="rect1437"
                                    d="m11.698046 20.664689c-6.4813896 0-11.69804983 5.21762-11.69804983 11.69843v.3843l58.39118183 40.80741c2.589688 1.80889 5.967679 2.70969 9.347488 2.7095 3.37798 0 6.755961-.900219 9.34565-2.7095l58.382344-40.79838v-.39294c0-6.48091-5.21666-11.69844-11.69815-11.69844zm-11.69804983 21.85919v60.579661c0 6.48091 5.21666023 11.69843 11.69804983 11.69843h112.070464c6.48149 0 11.69815-5.21752 11.69815-11.69843v-60.570441l-58.382344 40.798279c-2.589689 1.808991-5.96767 2.709501-9.34565 2.709501-3.379809 0-6.7578-.900219-9.347488-2.709501z"
                                    paint-order="fill markers stroke"
                                    fill="#0392f8"
                                    data-original="#000000"
                                    style=""
                                    class=""
                                  />
                                </g>
                              </g>
                            </svg>
                            <!-- <img class="_btn_img" src="/static/img/message-blue.svg" alt="" title=""> -->
                          </button>
                        </li>
                        <li class="_2banner_options_items">
                          <button
                            @click="isSearch = !isSearch"
                            class="_3btn _pre_icon"
                            type="button"
                          >
                            <i class="fas fa-search"></i>
                          </button>

                          <!-- Search -->
                          <div
                            :class="
                              isSearch ? '_2search _2search_open' : '_2search'
                            "
                          >
                            <div class="_2search_box">
                              <input
                                class="_2search_input"
                                alt=""
                                placeholder="Search.."
                                title=""
                              />
                              <button class="_2search_btn">
                                <i class="fas fa-search"></i>
                              </button>
                            </div>
                          </div>
                          <!-- Search -->
                        </li>
                        <li class="_2banner_options_items">
                          <Dropdown trigger="click" placement="bottom-end">
                            <button class="_3btn _pre_icon" type="button">
                              <i class="fas fa-ellipsis-h"></i>
                            </button>

                            <DropdownMenu slot="list">
                              <DropdownItem
                                ><p class="_drop_text _drop_pre_icon">
                                  <i class="fas fa-flag"></i> Report
                                </p></DropdownItem
                              >
                              <DropdownItem
                                ><p class="_drop_text _drop_pre_icon">
                                  <i class="fas fa-minus-circle"></i> Block
                                </p></DropdownItem
                              >
                            </DropdownMenu>
                          </Dropdown>
                        </li>
                      </ul>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>

          <!-- Chat box -->
          <div v-if="isChatBox" class="_chatBox_all">
            <div :class="isMinimize ? '_chatBox _chatBox_mini' : '_chatBox'">
              <div class="_chatBox_top">
                <a href="" class="_chatBox_top_pro _active">
                  <div class="_chatBox_top_pro_pic">
                    <img
                      class="_chatBox_top_pro_img"
                      :src="
                            'http://localhost:3333/uploads/' +
                              thisProfileUser.profile_picture
                          "
                      alt=""
                      title=""
                    />
                  </div>

                  <div class="_chatBox_top_pro_details">
                    <p class="_chatBox_top_pro_name">
                      {{ thisProfileUser.first_name }}
                    </p>
                    <p class="_chatBox_top_pro_active">Active</p>
                  </div>
                </a>

                <ul class="_chatBox_icons_list">
                  <li><i class="fas fa-video"></i></li>
                  <li><i class="fas fa-phone"></i></li>
                  <li @click="isMinimize = !isMinimize">
                    <i class="fas fa-minus _mini"></i>
                    <i
                      style="transform: rotate(-45deg);"
                      class="fas fa-arrows-alt-h _unmini"
                    ></i>
                  </li>
                  <li>
                    <Icon
                      @click="isChatBox = false"
                      style="font-size: 24px;"
                      type="md-close"
                    />
                  </li>
                </ul>
              </div>

              <div
                class="_chatBox_main _1scrollbar"
                v-for="(item, index) in chatList"
                :key="index"
              >
                <!-- Own message -->
                <div
                  v-if="item.sender_id == $store.state.authUser.id"
                  class="_chatBox_mess_own"
                >
                  <div class="_chatBox_mess_drop">
                    <Dropdown trigger="click">
                      <a
                        class="_chatBox_mess_drop_text"
                        href="javascript:void(0)"
                      >
                        <i class="fas fa-ellipsis-h"></i>
                      </a>
                      <DropdownMenu slot="list">
                        <DropdownItem
                          ><p class="_drop_text _drop_pre_icon">
                            Edit
                          </p></DropdownItem
                        >
                        <DropdownItem
                          ><p class="_drop_text _drop_pre_icon">
                            Remove
                          </p></DropdownItem
                        >
                      </DropdownMenu>
                    </Dropdown>
                  </div>

                  <p class="_chatBox_mess_own_text">{{ item.chat_text }}</p>
                </div>
                <!-- Own message -->

                <!-- Friend message -->
                <div v-else class="_chatBox_mess_fri">
                  <div class="_chatBox_mess_fri_pic">
                    <img
                      class="_chatBox_mess_fri_img"
                      src="/static/img/pic.jpg"
                      alt=""
                      title=""
                    />
                  </div>

                  <div class="_chatBox_mess_fri_details">
                    <p class="_chatBox_mess_fri_text">{{ item.chat_text }}</p>

                    <div class="_chatBox_mess_drop">
                      <Dropdown trigger="click">
                        <a
                          class="_chatBox_mess_drop_text"
                          href="javascript:void(0)"
                        >
                          <i class="fas fa-ellipsis-h"></i>
                        </a>
                        <DropdownMenu slot="list">
                          <DropdownItem
                            ><p class="_drop_text _drop_pre_icon">
                              Edit
                            </p></DropdownItem
                          >
                          <DropdownItem
                            ><p class="_drop_text _drop_pre_icon">
                              Remove
                            </p></DropdownItem
                          >
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </div>
                </div>
                <!-- Friend message -->
              </div>

              <div class="_chatBox_textarea_all">
                <ul class="_chatBox_textarea_icons">
                  <li><i class="fas fa-smile"></i></li>
                  <li><i class="fas fa-image"></i></li>
                  <li><i class="fas fa-microphone"></i></li>
                  <li>
                    <svg
                      style="width: 18px; height: auto;"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns:svgjs="http://svgjs.com/svgjs"
                      version="1.1"
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      viewBox="0 0 512 512"
                      xml:space="preserve"
                    >
                      <g>
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          d="m368 0h-309.332031c-32.363281 0-58.667969 26.304688-58.667969 58.667969v394.664062c0 32.363281 26.304688 58.667969 58.667969 58.667969h309.332031c32.363281 0 58.667969-26.304688 58.667969-58.667969v-394.664062c0-32.363281-26.304688-58.667969-58.667969-58.667969zm-266.667969 394.667969h16v-6.253907c-6.226562-2.195312-10.664062-8.125-10.664062-15.082031 0-8.832031 7.167969-16 16-16h10.664062c8.832031 0 16 7.167969 16 16v37.335938c0 8.832031-7.167969 16-16 16h-32c-20.585937 0-37.332031-16.746094-37.332031-37.335938v-53.332031c0-20.585938 16.746094-37.332031 37.332031-37.332031h32c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16h-32c-2.941406 0-5.332031 2.386719-5.332031 5.332031v53.332031c0 2.945313 2.390625 5.335938 5.332031 5.335938zm117.335938 16c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-96c0-8.832031 7.167969-16 16-16s16 7.167969 16 16zm106.664062-58.667969c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16h-42.664062v26.667969c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-74.667969c0-20.585938 16.746093-37.332031 37.332031-37.332031h37.332031c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16h-37.332031c-2.945312 0-5.332031 2.386719-5.332031 5.332031v16zm0 0"
                          fill="#0392f7"
                          data-original="#000000"
                        ></path>
                      </g>
                      <i
                        xmlns="http://www.w3.org/1999/xhtml"
                        class="fas fa-paperclip"
                      ></i>
                    </svg>
                  </li>
                  <li><i class="fas fa-paperclip"></i></li>
                </ul>

                <div class="_chatBox_textarea">
                  <textarea
                  @keyup.enter="messageSend"
                    v-model="chat.chat_text"
                    class="_chatBox_textarea_textarea"
                    rows="1"
                    placeholder="Write a message..."
                  ></textarea>
                  <p @click="messageSend" class="_chatBox_send_icon">
                    <i class="fas fa-paper-plane"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- Chat box -->

          <!-- Chat box click -->
          <div @click="isChatBox = true" class="_chat_box_click">
            <i class="fas fa-comment-alt"></i>
          </div>
          <!-- Chat box click -->
        </div>
      </template>
      <!-- Banner -->

      <!-- Profile main content -->
      <div class="_profile_layout">
        <div class="_profile_row">
          <!-- Left Section -->
          <div class="_profile_left">
            <!-- Statusbox -->
            <div class="_profile_statusBox">
              <statusBox />
            </div>
            <!-- Statusbox -->

            <!-- Feed -->
            <div class="_profile_feed">
              <Feed />
            </div>
            <!-- Feed -->
          </div>
          <!-- Left Section -->

          <!-- Right Section -->
          <div class="_profile_right">
            <!-- shimmer -->
            <template v-if="isHide">
              <div class="_proRight_shimmer _mar_b20">
                <div class="_proRight_shimmer_title _shim_animate"></div>

                <div
                  class="_proRight_shimmer_des _shim_animate _shim_w90"
                ></div>
                <div
                  class="_proRight_shimmer_des _shim_animate _shim_w80"
                ></div>
                <div
                  class="_proRight_shimmer_des _shim_animate _shim_w40"
                ></div>

                <div class="_proRight_shimmer_items">
                  <div class="_proRight_shimmer_items_img _shim_animate"></div>
                  <div class="_proRight_shimmer_items_details">
                    <div
                      class="_proRight_shimmer_items_title _shim_animate _shim_w50"
                    ></div>
                  </div>
                </div>

                <div class="_proRight_shimmer_items">
                  <div class="_proRight_shimmer_items_img _shim_animate"></div>
                  <div class="_proRight_shimmer_items_details">
                    <div
                      class="_proRight_shimmer_items_title _shim_animate _shim_w60"
                    ></div>
                  </div>
                </div>

                <div class="_proRight_shimmer_items">
                  <div class="_proRight_shimmer_items_img _shim_animate"></div>
                  <div class="_proRight_shimmer_items_details">
                    <div
                      class="_proRight_shimmer_items_title _shim_animate _shim_w50"
                    ></div>
                  </div>
                </div>

                <div class="_proRight_shimmer_items">
                  <div class="_proRight_shimmer_items_img _shim_animate"></div>
                  <div class="_proRight_shimmer_items_details">
                    <div
                      class="_proRight_shimmer_items_title _shim_animate _shim_w40"
                    ></div>
                  </div>
                </div>
              </div>
            </template>
            <!-- shimmer -->

            <template v-if="isloaded">
              <div class="_proAbout_card _mar_b20">
                <!-- <h2 class="_proAbout_card_title _1title">About</h2> -->

                <h2 class="_about_card_title">About</h2>

                <p class="_about_des _mar_b20">
                  Welcome to Castaway On The Moon, A fortress of solitude for
                  all things art and for creative enthusiasts. Got some hobbies
                  you're passionate about?
                </p>

                <div class="_proAbout_card_info">
                  <p class="_proAbout_card_info_icons">
                    <i class="fas fa-suitcase"></i>
                  </p>

                  <div class="_proAbout_card_info_details">
                    <p class="_proAbout_card_info_val">
                      Web Developer at <strong>AppifyLab</strong>
                    </p>
                  </div>
                </div>

                <div class="_proAbout_card_info">
                  <p class="_proAbout_card_info_icons">
                    <i class="fas fa-link"></i>
                  </p>

                  <div class="_proAbout_card_info_details">
                    <p class="_proAbout_card_info_val">www.appifylab.com</p>
                  </div>
                </div>

                <div class="_proAbout_card_info">
                  <p class="_proAbout_card_info_icons">
                    <i class="fas fa-home"></i>
                  </p>

                  <div class="_proAbout_card_info_details">
                    <p class="_proAbout_card_info_val">
                      Live in <strong>Cairo, Eygept</strong>
                    </p>
                  </div>
                </div>

                <div class="_proAbout_card_info">
                  <p class="_proAbout_card_info_icons">
                    <i class="fas fa-globe"></i>
                  </p>

                  <div class="_proAbout_card_info_details">
                    <p class="_proAbout_card_info_val">
                      From <strong>Aden, Yemen</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div class="_proAbout_card _mar_b20">
                <h2 class="_about_card_title">Photos</h2>
                <div class="_proAbout_card_image">
                  <!-- Items -->
                  <div
                    class="_proAbout_card_pic_main"
                    v-for="(items, index) in 6"
                    :key="index"
                  >
                    <div class="_proAbout_card_pic">
                      <img
                        class="_proAbout_card_img"
                        src="/static/img/file_1607448700853.jpg"
                        alt=""
                        title=""
                      />
                    </div>
                  </div>
                  <!-- Items -->
                </div>
              </div>
            </template>
          </div>
          <!-- Right Section -->
        </div>
      </div>
      <!-- Profile main content -->
    </div>
  </div>
</template>

<script>
import leftSidebar from "~/components/leftSidebar.vue";
import statusBox from "~/components/statusBox.vue";
import Feed from "~/components/timeLine.vue";
import rightSection from "~/components/rightSection.vue";
import ProfileBanner from "~/components/profileBanner.vue";
const axios = require("axios");

export default {
  components: {
    leftSidebar,
    Feed,
    rightSection,
    statusBox,
    ProfileBanner
  },

  data() {
    return {
      isHide: true,
      isloaded: false,
      isChatBox: false,
      chat: {
        sender_id: this.$store.state.authUser.id,
        recever_id: false,
        chat_text: ""
      },
      chatList: [],
      thisProfileUser: false
    };
  },

  methods: {
    async messageSend() {
      const res = await this.callApi(
        "post",
        "http://localhost:3333/storeChat",
        this.chat
      );
      if (res.status == 200) {
        this.chat.chat_text = "";
        // console.log("RDone");
      }
    },
    async createdMethods() {
      const resg = await this.callApi(
        "get",
        "http://localhost:3333/getSession"
      );

      this.thisProfileUser = resg.data;

      this.chat.recever_id = resg.data.id;

      if (resg.status == 200) {
        axios
          .post("http://localhost:3333/showChat", this.chat)
          .then(response => {
            this.chatList = response.data;
            //console.log(response.data)
          });
      }

      // console.log(resg);
    }
  },

  created() {
    this.createdMethods();

    var self = this;
    var self2 = this;
    setTimeout(function() {
      self.$nextTick(function() {
        self.isloaded = true;
      });
      self2.$nextTick(function() {
        self2.isHide = false;
      });
    }, 1500);
  }
};
</script>
