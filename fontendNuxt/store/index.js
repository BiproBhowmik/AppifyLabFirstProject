//import Vuex from 'vuex'
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const strict = false;

export const state = () => ({
  userInfo: {},
  allPosts: [],
  authUser: false
});

// common getters
export const getters = {
  getUserInfo(state) {
    return state.userInfo;
  },
  getAllPosts(state) {
    return state.allPosts;
  },
  getAuthUser(state) {
    return state.authUser;
  }
};

//mutations for changing data from action
export const mutations = {
  setUserInfo(state, data) {
    state.userInfo = data;
  },
  setAllPosts(state, data) {
    state.allPosts = data;
  },
  setAuthUser(state, data) {
    state.authUser = data;
  }
};

// actionns for commiting mutations
export const actions = {
  async nuxtServerInit({ commit }, { $axios }) {
    try {
      // get the initial data
      let { data } = await $axios.get("http://localhost:3333/getUser");
      if (data) {
        commit("setAuthUser", data);
      }

      // console.log(data.msgCount)
    } catch (e) {
      console.log("an error occured in nuxt init", e);
    }
  }
};
