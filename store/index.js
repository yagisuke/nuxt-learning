import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
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
        return this.$axios.$post(`/posts.json`, createdPost)
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

        return this.$axios.$put(`/posts/${post.id}.json`, editedPost)
        .then(() => {
          vuexContext.commit('editPost', post)
        })
        .catch(e => console.log(e))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
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
