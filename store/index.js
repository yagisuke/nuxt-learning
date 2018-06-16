import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
              {
                id: '1',
                title: '1st post',
                previewText: 'this is our first post',
                thumbnail: 'http://marimek-prod.item.photo/product/52_1_5263009231/52_1_5263009231_main.jpg'
              },
              {
                id: '2',
                title: '2nd post',
                previewText: 'this is our first post',
                thumbnail: 'http://marimek-prod.item.photo/product/52_1_5263009231/52_1_5263009231_main.jpg'
              },
              {
                id: '3',
                title: '3rd post',
                previewText: 'this is our first post',
                thumbnail: 'http://marimek-prod.item.photo/product/52_1_5263009231/52_1_5263009231_main.jpg'
              }
            ])
            resolve()
          }, 1000)
        })
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
