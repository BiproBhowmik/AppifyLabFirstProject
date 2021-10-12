<template>
    <div>
        <div class="_1main_content">
            <div class="_layout">
                <div class="_layout_row">
                    <!-- Saved page main content -->
                    <div class="_layout_col">
                        <div class="_singlePage_layout">
                            <div class="_singlePage _mar_b20">
                                <!-- Shimmer -->
                                <template v-if="isHide">
                                    <div class="_saved_shimmer_title _shim_animate"></div>

                                    <!-- Card -->
                                    <div class="_saved_shimmer_card">
                                        <div class="_saved_shimmer_card_pic _shim_animate"></div>
                                        
                                        <div class="_saved_shimmer_card_details">
                                            <div class="_saved_shimmer_card_title _shim_w60 _shim_animate"></div>
                                            <div class="_saved_shimmer_card_post _shim_w90 _shim_animate"></div>
                                            <div class="_saved_shimmer_card_saved _shim_w70 _shim_animate"></div>
                                            <ul class="_saved_shimmer_card_button">
                                                <li class="_shim_animate"></li>
                                                <li class="_shim_animate"></li>
                                                <li class="_shim_animate"></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <!-- Card -->
                                    <!-- Card -->
                                    <div class="_saved_shimmer_card">
                                        <div class="_saved_shimmer_card_pic _shim_animate"></div>
                                        
                                        <div class="_saved_shimmer_card_details">
                                            <div class="_saved_shimmer_card_title _shim_w60 _shim_animate"></div>
                                            <div class="_saved_shimmer_card_post _shim_w90 _shim_animate"></div>
                                            <div class="_saved_shimmer_card_saved _shim_w70 _shim_animate"></div>
                                            <ul class="_saved_shimmer_card_button">
                                                <li class="_shim_animate"></li>
                                                <li class="_shim_animate"></li>
                                                <li class="_shim_animate"></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <!-- Card -->
                                    <!-- Card -->
                                    <div class="_saved_shimmer_card">
                                        <div class="_saved_shimmer_card_pic _shim_animate"></div>
                                        
                                        <div class="_saved_shimmer_card_details">
                                            <div class="_saved_shimmer_card_title _shim_w60 _shim_animate"></div>
                                            <div class="_saved_shimmer_card_post _shim_w90 _shim_animate"></div>
                                            <div class="_saved_shimmer_card_saved _shim_w70 _shim_animate"></div>
                                            <ul class="_saved_shimmer_card_button">
                                                <li class="_shim_animate"></li>
                                                <li class="_shim_animate"></li>
                                                <li class="_shim_animate"></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <!-- Card -->
                                    <!-- Card -->
                                    <div class="_saved_shimmer_card">
                                        <div class="_saved_shimmer_card_pic _shim_animate"></div>
                                        
                                        <div class="_saved_shimmer_card_details">
                                            <div class="_saved_shimmer_card_title _shim_w60 _shim_animate"></div>
                                            <div class="_saved_shimmer_card_post _shim_w90 _shim_animate"></div>
                                            <div class="_saved_shimmer_card_saved _shim_w70 _shim_animate"></div>
                                            <ul class="_saved_shimmer_card_button">
                                                <li class="_shim_animate"></li>
                                                <li class="_shim_animate"></li>
                                                <li class="_shim_animate"></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <!-- Card -->
                                </template>
                                <!-- Shimmer -->

                                <template v-if="isloaded">
                                    <div class="_singlePage_top">
                                        <h2 class="_singlePage_top_title _1title">All</h2>

                                        <div class="_singlePage_top_right">
                                            <Dropdown trigger="click" placement="bottom-end">
                                                <button class="_3btn" type="button"><i class="fas fa-sliders-h"></i></button>
                                                <DropdownMenu slot="list">
                                                    <DropdownItem>All</DropdownItem>
                                                    <DropdownItem>Links</DropdownItem>
                                                    <DropdownItem>Videos</DropdownItem>
                                                    <DropdownItem>Photos</DropdownItem>
                                                    <DropdownItem>Places</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>
                                    </div>

                                    <div class="_singlePage_main">
                                            <!-- Card -->
                                            <div class="_saved_card">
                                                <a class="_saved_card_pic" href="">
                                                    <img class="_saved_card_img" src="/static/img/image_1608022143454.jpeg" alt="" title="">
                                                </a>

                                                <div class="_saved_card_details">
                                                    <div class="_saved_card_details_top">
                                                        <h2 class="_2text_overflow"><a class="_saved_card_title _2title" href="">Top 50 South Indian Romantic Movies. 1. 96 -Tamil. Dubbing ✅ 2. Ennu Ninte Moideen -Malayalam. Dubbing ❎ 3. Love Mocktail -Kannada. Dubbing ❎ 4. Dia -Kannada. Dubbing ❎ 5.Three -Tamil. Dubbing ✅ 6. Kirky Party -Kannada. Dubbing</a></h2>
                                                        <p class="_saved_card_post">Post • Saved to <span>For Later</span></p>
                                                    </div>

                                                    <div class="_saved_card_from">
                                                        <div class="_saved_card_from_pic">
                                                            <img class="_saved_card_from_img" src="/static/img/male.jpg" alt="" title="">
                                                        </div>

                                                        <p class="_saved_card_from_text">Saved from <a class="_saved_card_from_link" href="">Kazi Naeem's post</a></p>
                                                    </div>

                                                    <ul class="_saved_card_options">
                                                        <li class="_saved_card_options_items">
                                                            <button class="_3btn" type="button">Add to Collect</button>
                                                        </li>
                                                        <li class="_saved_card_options_items">
                                                            <button class="_3btn" type="button"><i class="fas fa-share"></i></button>
                                                        </li>
                                                        <li class="_saved_card_options_items">
                                                            <Dropdown trigger="click" placement="bottom-end">
                                                                <button class="_3btn" type="button"><i class="fas fa-ellipsis-h"></i></button>
                                                                <DropdownMenu slot="list">
                                                                    <DropdownItem>All</DropdownItem>
                                                                    <DropdownItem>Links</DropdownItem>
                                                                    <DropdownItem>Videos</DropdownItem>
                                                                    <DropdownItem>Photos</DropdownItem>
                                                                    <DropdownItem>Places</DropdownItem>
                                                                </DropdownMenu>
                                                            </Dropdown>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <!-- Card -->

                                            <!-- Card -->
                                            <div class="_saved_card">
                                                <a class="_saved_card_pic" href="">
                                                    <img class="_saved_card_img" src="/static/img/placeholder.png" alt="" title="">
                                                    <p class="_saved_card_play"><i class="far fa-play-circle"></i></p>
                                                </a>

                                                <div class="_saved_card_details">
                                                    <div class="_saved_card_details_top">
                                                        <h2 class="_2text_overflow"><a class="_saved_card_title _2title" href="">Top 50 South Indian Kirky Party -Kannada. Dubbing</a></h2>
                                                        <p class="_saved_card_post">Post • Saved to <span>For Later</span></p>
                                                    </div>

                                                    <div class="_saved_card_from">
                                                        <div class="_saved_card_from_pic">
                                                            <img class="_saved_card_from_img" src="/static/img/male.jpg" alt="" title="">
                                                        </div>

                                                        <p class="_saved_card_from_text">Saved from <a class="_saved_card_from_link" href="">Kazi Naeem's post</a></p>
                                                    </div>

                                                    <ul class="_saved_card_options">
                                                        <li class="_saved_card_options_items">
                                                            <button class="_3btn" type="button">Add to Collect</button>
                                                        </li>
                                                        <li class="_saved_card_options_items">
                                                            <button class="_3btn" type="button"><i class="fas fa-share"></i></button>
                                                        </li>
                                                        <li class="_saved_card_options_items">
                                                            <Dropdown trigger="click" placement="bottom-end">
                                                                <button class="_3btn" type="button"><i class="fas fa-ellipsis-h"></i></button>
                                                                <DropdownMenu slot="list">
                                                                    <DropdownItem>All</DropdownItem>
                                                                    <DropdownItem>Links</DropdownItem>
                                                                    <DropdownItem>Videos</DropdownItem>
                                                                    <DropdownItem>Photos</DropdownItem>
                                                                    <DropdownItem>Places</DropdownItem>
                                                                </DropdownMenu>
                                                            </Dropdown>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <!-- Card -->

                                            <!-- Card -->
                                            <div class="_saved_card">
                                                <a class="_saved_card_pic" href="">
                                                    <img class="_saved_card_img" src="/static/img/file_1608029627953.jpg" alt="" title="">
                                                </a>

                                                <div class="_saved_card_details">
                                                    <div class="_saved_card_details_top">
                                                        <h2 class="_2text_overflow"><a class="_saved_card_title _2title" href="">Malayalam. Dubbing ❎ 3. Love Mocktail -Kannada. Dubbing ❎ 4. Dia -Kannada. Dubbing ❎ 5.Three -Tamil. Dubbing ✅ 6. Kirky Party -Kannada. Dubbing</a></h2>
                                                        <p class="_saved_card_post">Post • Saved to <span>For Later</span></p>
                                                    </div>

                                                    <div class="_saved_card_from">
                                                        <div class="_saved_card_from_pic">
                                                            <img class="_saved_card_from_img" src="/static/img/male.jpg" alt="" title="">
                                                        </div>

                                                        <p class="_saved_card_from_text">Saved from <a class="_saved_card_from_link" href="">Kazi Naeem's post</a></p>
                                                    </div>

                                                    <ul class="_saved_card_options">
                                                        <li class="_saved_card_options_items">
                                                            <button class="_3btn" type="button">Add to Collect</button>
                                                        </li>
                                                        <li class="_saved_card_options_items">
                                                            <button class="_3btn" type="button"><i class="fas fa-share"></i></button>
                                                        </li>
                                                        <li class="_saved_card_options_items">
                                                            <Dropdown trigger="click" placement="bottom-end">
                                                                <button class="_3btn" type="button"><i class="fas fa-ellipsis-h"></i></button>
                                                                <DropdownMenu slot="list">
                                                                    <DropdownItem>All</DropdownItem>
                                                                    <DropdownItem>Links</DropdownItem>
                                                                    <DropdownItem>Videos</DropdownItem>
                                                                    <DropdownItem>Photos</DropdownItem>
                                                                    <DropdownItem>Places</DropdownItem>
                                                                </DropdownMenu>
                                                            </Dropdown>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <!-- Card -->

                                            <!-- Card -->
                                            <div class="_saved_card">
                                                <a class="_saved_card_pic" href="">
                                                    <img class="_saved_card_img" src="/static/img/image_1608226845923.jpeg" alt="" title="">
                                                    <p class="_saved_card_play"><i class="far fa-play-circle"></i></p>
                                                </a>

                                                <div class="_saved_card_details">
                                                    <div class="_saved_card_details_top">
                                                        <h2 class="_2text_overflow"><a class="_saved_card_title _2title" href="">Top 50 South Indian Romantic Movies. 1. 96 -Tamil. Dubbing ✅ 2. Ennu Ninte Moideen -Malayalam. Dubbing ❎ 3. Love Mocktail -Kannada. Dubbing ❎ 4. Dia -Kannada. Dubbing ❎ 5.Three -Tamil. Dubbing ✅ 6. Kirky Party -Kannada. Dubbing</a></h2>
                                                        <p class="_saved_card_post">Post • Saved to <span>For Later</span></p>
                                                    </div>

                                                    <div class="_saved_card_from">
                                                        <div class="_saved_card_from_pic">
                                                            <img class="_saved_card_from_img" src="/static/img/male.jpg" alt="" title="">
                                                        </div>

                                                        <p class="_saved_card_from_text">Saved from <a class="_saved_card_from_link" href="">Kazi Naeem's post</a></p>
                                                    </div>

                                                    <ul class="_saved_card_options">
                                                        <li class="_saved_card_options_items">
                                                            <button class="_3btn" type="button">Add to Collect</button>
                                                        </li>
                                                        <li class="_saved_card_options_items">
                                                            <button class="_3btn" type="button"><i class="fas fa-share"></i></button>
                                                        </li>
                                                        <li class="_saved_card_options_items">
                                                            <Dropdown trigger="click" placement="bottom-end">
                                                                <button class="_3btn" type="button"><i class="fas fa-ellipsis-h"></i></button>
                                                                <DropdownMenu slot="list">
                                                                    <DropdownItem>All</DropdownItem>
                                                                    <DropdownItem>Links</DropdownItem>
                                                                    <DropdownItem>Videos</DropdownItem>
                                                                    <DropdownItem>Photos</DropdownItem>
                                                                    <DropdownItem>Places</DropdownItem>
                                                                </DropdownMenu>
                                                            </Dropdown>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <!-- Card -->

                                            <!-- Card -->
                                            <div class="_saved_card">
                                                <a class="_saved_card_pic" href="">
                                                    <img class="_saved_card_img" src="/static/img/placeholder.png" alt="" title="">
                                                    <p class="_saved_card_play"><i class="far fa-play-circle"></i></p>
                                                </a>

                                                <div class="_saved_card_details">
                                                    <div class="_saved_card_details_top">
                                                        <h2 class="_2text_overflow"><a class="_saved_card_title _2title" href="">Top 50 South Indian Kirky Party -Kannada. Dubbing</a></h2>
                                                        <p class="_saved_card_post">Post • Saved to <span>For Later</span></p>
                                                    </div>

                                                    <div class="_saved_card_from">
                                                        <div class="_saved_card_from_pic">
                                                            <img class="_saved_card_from_img" src="/static/img/male.jpg" alt="" title="">
                                                        </div>

                                                        <p class="_saved_card_from_text">Saved from <a class="_saved_card_from_link" href="">Kazi Naeem's post</a></p>
                                                    </div>

                                                    <ul class="_saved_card_options">
                                                        <li class="_saved_card_options_items">
                                                            <button class="_3btn" type="button">Add to Collect</button>
                                                        </li>
                                                        <li class="_saved_card_options_items">
                                                            <button class="_3btn" type="button"><i class="fas fa-share"></i></button>
                                                        </li>
                                                        <li class="_saved_card_options_items">
                                                            <Dropdown trigger="click" placement="bottom-end">
                                                                <button class="_3btn" type="button"><i class="fas fa-ellipsis-h"></i></button>
                                                                <DropdownMenu slot="list">
                                                                    <DropdownItem>All</DropdownItem>
                                                                    <DropdownItem>Links</DropdownItem>
                                                                    <DropdownItem>Videos</DropdownItem>
                                                                    <DropdownItem>Photos</DropdownItem>
                                                                    <DropdownItem>Places</DropdownItem>
                                                                </DropdownMenu>
                                                            </Dropdown>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <!-- Card -->

                                            <!-- Card -->
                                            <div class="_saved_card">
                                                <a class="_saved_card_pic" href="">
                                                    <img class="_saved_card_img" src="/static/img/file_1608029627953.jpg" alt="" title="">
                                                </a>

                                                <div class="_saved_card_details">
                                                    <div class="_saved_card_details_top">
                                                        <h2 class="_2text_overflow"><a class="_saved_card_title _2title" href="">Malayalam. Dubbing ❎ 3. Love Mocktail -Kannada. Dubbing ❎ 4. Dia -Kannada. Dubbing ❎ 5.Three -Tamil. Dubbing ✅ 6. Kirky Party -Kannada. Dubbing</a></h2>
                                                        <p class="_saved_card_post">Post • Saved to <span>For Later</span></p>
                                                    </div>

                                                    <div class="_saved_card_from">
                                                        <div class="_saved_card_from_pic">
                                                            <img class="_saved_card_from_img" src="/static/img/male.jpg" alt="" title="">
                                                        </div>

                                                        <p class="_saved_card_from_text">Saved from <a class="_saved_card_from_link" href="">Kazi Naeem's post</a></p>
                                                    </div>

                                                    <ul class="_saved_card_options">
                                                        <li class="_saved_card_options_items">
                                                            <button class="_3btn" type="button">Add to Collect</button>
                                                        </li>
                                                        <li class="_saved_card_options_items">
                                                            <button class="_3btn" type="button"><i class="fas fa-share"></i></button>
                                                        </li>
                                                        <li class="_saved_card_options_items">
                                                            <Dropdown trigger="click" placement="bottom-end">
                                                                <button class="_3btn" type="button"><i class="fas fa-ellipsis-h"></i></button>
                                                                <DropdownMenu slot="list">
                                                                    <DropdownItem>All</DropdownItem>
                                                                    <DropdownItem>Links</DropdownItem>
                                                                    <DropdownItem>Videos</DropdownItem>
                                                                    <DropdownItem>Photos</DropdownItem>
                                                                    <DropdownItem>Places</DropdownItem>
                                                                </DropdownMenu>
                                                            </Dropdown>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <!-- Card -->

                                            <!-- Card -->
                                            <div class="_saved_card">
                                                <a class="_saved_card_pic" href="">
                                                    <img class="_saved_card_img" src="/static/img/image_1608226845923.jpeg" alt="" title="">
                                                    <p class="_saved_card_play"><i class="far fa-play-circle"></i></p>
                                                </a>

                                                <div class="_saved_card_details">
                                                    <div class="_saved_card_details_top">
                                                        <h2 class="_2text_overflow"><a class="_saved_card_title _2title" href="">Top 50 South Indian Romantic Movies. 1. 96 -Tamil. Dubbing ✅ 2. Ennu Ninte Moideen -Malayalam. Dubbing ❎ 3. Love Mocktail -Kannada. Dubbing ❎ 4. Dia -Kannada. Dubbing ❎ 5.Three -Tamil. Dubbing ✅ 6. Kirky Party -Kannada. Dubbing</a></h2>
                                                        <p class="_saved_card_post">Post • Saved to <span>For Later</span></p>
                                                    </div>

                                                    <div class="_saved_card_from">
                                                        <div class="_saved_card_from_pic">
                                                            <img class="_saved_card_from_img" src="/static/img/male.jpg" alt="" title="">
                                                        </div>

                                                        <p class="_saved_card_from_text">Saved from <a class="_saved_card_from_link" href="">Kazi Naeem's post</a></p>
                                                    </div>

                                                    <ul class="_saved_card_options">
                                                        <li class="_saved_card_options_items">
                                                            <button class="_3btn" type="button">Add to Collect</button>
                                                        </li>
                                                        <li class="_saved_card_options_items">
                                                            <button class="_3btn" type="button"><i class="fas fa-share"></i></button>
                                                        </li>
                                                        <li class="_saved_card_options_items">
                                                            <Dropdown trigger="click" placement="bottom-end">
                                                                <button class="_3btn" type="button"><i class="fas fa-ellipsis-h"></i></button>
                                                                <DropdownMenu slot="list">
                                                                    <DropdownItem>All</DropdownItem>
                                                                    <DropdownItem>Links</DropdownItem>
                                                                    <DropdownItem>Videos</DropdownItem>
                                                                    <DropdownItem>Photos</DropdownItem>
                                                                    <DropdownItem>Places</DropdownItem>
                                                                </DropdownMenu>
                                                            </Dropdown>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <!-- Card -->

                                            <!-- Pagination -->
                                            <div class="_pagination _mar_t30">
                                                <Page :total="100" />
                                            </div>
                                            <!-- Pagination -->
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                    <!-- Saved page main content -->
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
      isloaded: false,
      isHide: true
    }
  },

  methods:{
    
  },
  
  created(){
    var self = this;
      var self2 = this;
      setTimeout(function() {
        self.$nextTick(function() {
          self.isloaded = true;
        })
        self2.$nextTick(function() {
          self2.isHide = false;
        })
    }, 1500);
  }
}
</script>