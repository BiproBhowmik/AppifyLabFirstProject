<template>
    <div>
        <div class="_1main_content">
            <!-- Banner -->
            <eventBanner/>
            <!-- Banner -->

            <!-- Group main content -->
            <div class="_group_layout">
                <div class="_group_row">
                    <!-- Left Section -->
                    <div class="_group_left">
                        <!-- Statusbox -->
                        <div class="_group_statusBox">
                            <statusBox/>
                        </div>
                        <!-- Statusbox -->

                        <!-- Feed -->
                        <div class="_group_feed">
                            <Feed/>
                        </div>
                        <!-- Feed -->
                    </div>
                    <!-- Left Section -->

                    <!-- Right Section -->
                    <div class="_group_right">
                        <eventRight/>
                    </div>
                    <!-- Right Section -->
                </div>
            </div>
            <!-- Group main content -->
        </div>
    </div>
</template>

<script>
import leftSidebar from './leftSidebar.vue'
import statusBox from './statusBox.vue'
import Feed from './feed.vue'
import eventRight from './eventRight.vue'
import eventBanner from './eventBanner.vue'

export default {
  components: {
    leftSidebar,
    Feed,
    eventRight,
    statusBox,
    eventBanner
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