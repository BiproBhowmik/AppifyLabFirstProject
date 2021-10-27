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
        <p class="_4banner_text">
          Creating a conscious and safe community where human<br />
          connection and new ideas can thrive
        </p>
      </div>
    </div>
    <!-- Banner -->

    <!-- Form -->
    <div class="_log_form_main">
      <h2 class="_log_form_title">Sign Up</h2>

      <div class="_log_form">
        <VueFileAgent
          ref="vueFileAgent"
          :theme="'list'"
          :multiple="false"
          :deletable="true"
          :meta="true"
          :accept="'image/*'"
          :maxSize="'10MB'"
          :maxFiles="14"
          :helpText="'Choose profile image'"
          :errorText="{
            type: 'Invalid file type. Only images or zip Allowed',
            size: 'Files should not exceed 10MB in size'
          }"
          @select="filesSelected($event)"
          @beforedelete="onBeforeDelete($event)"
          @delete="fileDeleted($event)"
          v-model="fileRecords"
        ></VueFileAgent>
        <!-- <button :disabled="!fileRecordsForUpload.length" @click="uploadFiles()">
    Upload {{ fileRecordsForUpload.length }} files
  </button> -->
        <div class="_log_input_group">
          <input
            v-model.trim="signUpObj.first_name"
            class="_log_input"
            placeholder="First name"
            type="text"
          />
        </div>
        <div class="_log_input_group">
          <input
            v-model.trim="signUpObj.last_name"
            class="_log_input"
            placeholder="Last name"
            type="text"
          />
        </div>
        <div class="_log_input_group">
          <input
            v-model.trim="signUpObj.user_name"
            class="_log_input"
            placeholder="User name"
            type="text"
          />
        </div>
        <div class="_log_input_group">
          <input
            v-model.trim="signUpObj.email"
            class="_log_input"
            placeholder="Email address"
            type="email"
          />
        </div>
        <div class="_log_input_group">
          <input
            v-model.trim="signUpObj.password"
            class="_log_input"
            placeholder="Password"
            type="password"
          />
        </div>
        <div class="_log_input_group">
          <input
            v-model.trim="signUpObj.confirm_password"
            class="_log_input"
            placeholder="Confirm password"
            type="password"
          />
        </div>

        <div class="_log_input_group">
          <select v-model="signUpObj.gender" class="_1select">
            <option selected="true" disabled>Gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div class="_log_input_group">
          <div class="_log_checkBox">
            <input
              v-model="signUpObj.TPcondition"
              value="true"
              role=""
              type="checkbox"
              id="html"
            />
            <label for="html"
              >I agree with the <a href="">Terms</a> &
              <a href="">Privacy</a></label
            >
          </div>
        </div>
        <div class="_log_button">
          <button @click="signUp" class="_log_btn _btn_long">Sign Up</button>
        </div>
      </div>
    </div>
    <!-- Form -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueFileAgent from "vue-file-agent";
import VueFileAgentStyles from "vue-file-agent/dist/vue-file-agent.css";

Vue.use(VueFileAgent);

const axios = require("axios");

export default Vue.extend({
  data() {
    return {
      signUpObj: {
        first_name: "",
        last_name: "",
        user_name: "",
        email: "",
        password: "",
        confirm_password: "",
        gender: "",
        TPcondition: false
      },
      fileRecords: [],
      uploadUrl: "http://localhost:3333/storeUser",
      uploadHeaders: { "X-Test-Header": "vue-file-agent" },
      fileRecordsForUpload: []
    };
  },
  methods: {
    uploadFiles: function() {
      //   return console.log(this.fileRecordsForUpload[0].file);
      // Using the default uploader. You may use another uploader instead.
      this.$refs.vueFileAgent.upload(
        this.uploadUrl,
        this.uploadHeaders,
        this.fileRecordsForUpload
      );

      this.fileRecordsForUpload = [];
    },
    deleteUploadedFile: function(fileRecord) {
      // Using the default uploader. You may use another uploader instead.
      this.$refs.vueFileAgent.deleteUpload(
        this.uploadUrl,
        this.uploadHeaders,
        fileRecord
      );
    },
    filesSelected: function(fileRecordsNewlySelected) {
      var validFileRecords = fileRecordsNewlySelected.filter(
        fileRecord => !fileRecord.error
      );
      this.fileRecordsForUpload = this.fileRecordsForUpload.concat(
        validFileRecords
      );
    },
    onBeforeDelete: function(fileRecord) {
      var i = this.fileRecordsForUpload.indexOf(fileRecord);
      if (i !== -1) {
        this.fileRecordsForUpload.splice(i, 1);
      } else {
        if (confirm("Are you sure you want to delete?")) {
          this.$refs.vueFileAgent.deleteFileRecord(fileRecord); // will trigger 'delete' event
        }
      }
    },
    fileDeleted: function(fileRecord) {
      var i = this.fileRecordsForUpload.indexOf(fileRecord);
      if (i !== -1) {
        this.fileRecordsForUpload.splice(i, 1);
      } else {
        this.deleteUploadedFile(fileRecord);
      }
    },

    async signUp() {
      if (this.signUpObj.TPcondition) {
        if (
          this.signUpObj.first_name != "" &&
          this.signUpObj.last_name != "" &&
          this.signUpObj.user_name != "" &&
          this.signUpObj.email != "" &&
          this.signUpObj.password != "" &&
          this.signUpObj.confirm_password != ""
        ) {
          if (this.signUpObj.password == this.signUpObj.confirm_password) {
            this.fileRecords.forEach((file, index) => {
              //create a form data
              let formData = new FormData();
              //add input file and append the file object ( file.file )
              formData.append("files", file.file);
              formData.append("first_name", this.signUpObj.first_name);
              formData.append("last_name", this.signUpObj.last_name);
              formData.append("user_name", this.signUpObj.user_name);
              formData.append("email", this.signUpObj.email);
              formData.append("password", this.signUpObj.password);
              formData.append("gender", this.signUpObj.gender);
              //post form to your endpoint adding the content type headers
              //   const res = await this.callApi('post',uploadUrl, this.form)
              axios
                .post(this.uploadUrl, formData, {
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                })
                .then(response => {
                  //remove entry from the array
                  this.fileRecords.splice(index, 1);
                  this.fileRecordsForUpload = [];
                  this.$router.push("/logIn");
                  //  console.log ( response )
                });
            });

            // const res = await this.callApi(
            //   "post",
            //   "http://localhost:3333/storeUser",
            //   this.signUpObj
            // );
            // if (res.status == 200) {
            //   // this.$router.push("/logIn")
            //   console.log(res);
            // }
          }
        }
      }
    }
  }
});
</script>
