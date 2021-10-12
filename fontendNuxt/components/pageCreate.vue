<template>
    <div>
        <div class="_2main_content">
            <!-- Left -->
            <div class="_list_left">
                <leftSidebar/>
            </div>
            <!-- Left -->

            <!-- Main content -->
            <div class="_create_content">
                <div class="_createCard _mar_b20">
                    <h2 class="_1title _createCard_title"><i class="fas fa-flag"></i> Create New Page</h2>

                    <div class="_createCard_form">
                        <div class="_1input_group">
                            <p class="_1label">Page name</p>

                            <Input placeholder="Page name"/>
                        </div>
                        <div class="_1input_group">
                            <p class="_1label">Page Category</p>

                            <Select style="width:100%">
                                <Option>Cars and Vehicles</Option>
                                <Option>Only me</Option>
                            </Select>
                        </div>
                        <div class="_1input_group">
                            <p class="_1label">Page description</p>

                            <Input type="textarea" :rows="6" placeholder="Page description"/>
                        </div>

                        <div class="_1input_button _text_center">
                            <button class="_1btn _btn_150">Create</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Main content -->
        </div>
    </div>
</template>


<script>
import leftSidebar from './leftSidebar.vue'

export default {
  components: {
    leftSidebar,
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