<template>
    <div>
        <div class="_1main_content">
            <div class="_advertise_layout">
                <div class="_advertise_row">
                    <!-- Left section -->
                    <div class="_advertise_left">
                        <settingLeft/>
                    </div>
                    <!-- Left section -->

                    <!-- Left section -->
                    <div class="_advertise_right _overflow_hidden">
                        <div class="_advertise_card _mar_b20">
                            <div class="_advertise_card_main">
                                <p class="_advertise_Sub_title _3title"><i class="fa fa-shield-alt"></i> Manage Sessions</p>
                                <button class="_3btn _pre_icon _btn_sm" type="button"><i class="fas fa-sign-out-alt"></i> Log Out Of All Sessions</button>
                            </div>

                            <div class="_advertise_step_form">
                                <Table stripe :columns="columns1" :data="data1">
                                    <template slot="Browser">
                                        <p class="_active_sess">Chrome <span>Active Session</span></p>
                                    </template>
                                    <template slot="Actions">
                                        <Button type="error" shape="circle" icon="md-trash"></Button>
                                    </template>
                                </Table>
                            </div>
                        </div>
                    </div>
                    <!-- Left section -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import settingLeft from './settingLeft.vue'

export default {
  components: {
      settingLeft
  },

  data(){
    return{
      edit_Profile: false,
      isSecurity: false,
      columns1: [
            {
                title: 'ID',
                key: 'ID',
                width: 50
            },
            {
                title: 'Browser',
                slot: 'Browser',
                width: 220
            },
            {
                title: 'OS',
                key: 'OS',
                width: 120
            },
            {
                title: 'Date',
                key: 'Date',
                width: 170
            },
            {
                title: 'IP',
                key: 'IP',
                width: 170
            },
            {
                title: 'Actions',
                slot: 'Actions',
                width: 100
            },
        ],
        data1: [
            {
                ID: '1',
                OS: 'OS',
                Date: '2months ago',
                IP: '85.72.88.75',
            },
            {
                ID: '2',
                OS: 'OS',
                Date: '2months ago',
                IP: '85.72.88.75',
            },
            {
                ID: '3',
                OS: 'OS',
                Date: '2months ago',
                IP: '85.72.88.75',
            },
            {
                ID: '4',
                OS: 'OS',
                Date: '2months ago',
                IP: '85.72.88.75',
            },
            {
                ID: '5',
                OS: 'OS',
                Date: '2months ago',
                IP: '85.72.88.75',
            },
            {
                ID: '6',
                OS: 'OS',
                Date: '2months ago',
                IP: '85.72.88.75',
            },
            {
                ID: '7',
                OS: 'OS',
                Date: '2months ago',
                IP: '85.72.88.75',
            },
            {
                ID: '8',
                OS: 'OS',
                Date: '2months ago',
                IP: '85.72.88.75',
            },
        ]
    }
  },

  methods:{
    
  },
  
  created(){
    
  }
}
</script>