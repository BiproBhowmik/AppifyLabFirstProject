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
                    <h2 class="_1title _createCard_title"><i class="fas fa-users"></i> Create New Event</h2>

                    <div class="_createCard_form">
                        <div class="_1input_group">
                            <p class="_1label">Title</p>

                            <Input placeholder="Title"/>
                        </div>
                        <div class="_1input_group">
                            <p class="_1label">Location</p>

                            <Input placeholder="Location or online"/>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-12 col-lg-12">
                                <div class="_1input_group">
                                    <p class="_1label">Event start</p>
                                    <DatePicker type="datetime" placeholder="Select date and time" style="width: 100%"></DatePicker>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-12 col-lg-12">
                                <div class="_1input_group">
                                    <p class="_1label">Event end</p>
                                    <DatePicker type="datetime" placeholder="Select date and time" style="width: 100%"></DatePicker>
                                </div>
                            </div>
                        </div>

                        <div class="_1input_group">
                            <p class="_1label">Description</p>

                            <Input type="textarea" :rows="6" placeholder="Description"/>
                        </div>

                        <div class="_1input_group">
                            <p class="_1label">Cover picture</p>

                            <Upload
                                multiple
                                type="drag"
                                action="//jsonplaceholder.typicode.com/posts/">
                                <div style="padding: 50px 0">
                                    <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                                    <p>Choose image</p>
                                </div>
                            </Upload>
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