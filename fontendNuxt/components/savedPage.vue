<template>
    <div>
        <div class="_1main_content">
            <div class="_layout">
                <div class="_layout_row">
                    <!-- Sidebar -->
                    <div class="_layout_auto _layout_sidebar_left">
                        <div class="_sidebar_main">
                            <leftSidebar/>
                        </div>
                    </div>
                    <!-- Sidebar -->
                    
                    <!-- Feed -->
                    <div class="_layout_col">
                        <!-- Feed -->
                        <div class="_feed_main">
                            <div class="_singlePage_top _saved_top">
                                <h2 class="_singlePage_top_title _1title _saved_title">Saved posts</h2>

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


                            <Feed/>
                        </div>
                        <!-- Feed -->
                    </div>
                    <!-- Feed -->
                    
                    <!-- Right section -->
                    <div class="_layout_auto _layout_chatList_right">
                        <div class="_rightSec_main">
                            <rightSection/>
                        </div>
                    </div>
                    <!-- Right section -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import leftSidebar from './leftSidebar.vue'
import statusBox from './statusBox.vue'
import Feed from './feed.vue'
import rightSection from './rightSection.vue'

export default {
  components: {
    leftSidebar,
    Feed,
    rightSection,
    statusBox
  },

  data(){
    return{
      
    }
  },

  methods:{
    
  },
  
  created(){
    
  }
}
</script>