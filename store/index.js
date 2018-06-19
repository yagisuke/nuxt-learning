import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      addPost(state, post) {
        state.loadedPosts.push(post)
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          post => post.id === editedPost.id
        )
        state.loadedPosts[postIndex] = editedPost
      },
      setToken(state, token) {
        state.token = token
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios.$get(`/posts.json`)
          .then(data => {
            const postsArray = []
            for (const key in data) {
              postsArray.push({ ...data[key], id: key })
            }
            vuexContext.commit('setPosts', postsArray)
          })
          .catch(e => context.error(e))
      },
      addPost(vuexContext, post) {
        const createdPost = {
          ...post,
          updatedDate: new Date()
        }
        return this.$axios.$post(`/posts.json?auth=${vuexContext.state.token}`, createdPost)
          .then(data => {
            vuexContext.commit('addPost', {
              ...createdPost,
              id: data.name
            })
          })
          .catch(e => console.log(e))
      },
      editPost(vuexContext, post) {
        const editedPost = {
          updatedDate: new Date()
        }

        for (let key in post) {
          if (key !== 'id') {
            editedPost[key] = post[key]
          }
        }

        return this.$axios.$put(`/posts/${post.id}.json?auth=${vuexContext.state.token}`, editedPost)
        .then(() => {
          vuexContext.commit('editPost', post)
        })
        .catch(e => console.log(e))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },
      authenticateUser(vuexContext, { isLogin, email, password }) {
        const SIGNIN_URL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${process.env.fbAPIKey}`
        const SIGNUP_URL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${process.env.fbAPIKey}`
        const authUrl = isLogin ? SIGNIN_URL : SIGNUP_URL

        return this.$axios.$post(authUrl, {
            email: email,
            password: password,
            returnSecureToken: true
          })
          .then(result => {
            vuexContext.commit('setToken', result.idToken)
          })
          .catch(e => console.log(e))
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore
