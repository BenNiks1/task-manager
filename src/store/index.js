import { createStore } from "vuex"

export default createStore({
  state: {
    posts: [],
  },
  mutations: {
    posts(state, posts) {
      state.posts.unshift(posts)
    },
  },
})
