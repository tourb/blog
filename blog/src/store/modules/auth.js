import auth from '@/api/auth.js'
const state = {
  user: null,
  isLogin: false
}
const getters = {
  user: state => state.user,
  isLogin: state => state.isLogin
}
const mutations = {
  setUser (state, paylod) {
    state.user = paylod.user
  },
  setLogin (state, paylod) {
    state.isLogin = paylod.isLogin
  }
}
const actions = {
  login ({ commit }, { username, password }) {
    return auth.login({ username, password }).then(res => {
      commit('setUser', { user: res.data })
      commit('setLogin', { isLogin: true })
    })
  },
  async register ({ commit }, { username, password }) {
    let res = await auth.register({ username, password })
    commit('setUser', { user: res.data })
    commit('setLogin', { isLogin: true })
    return res.data
  },
  async logout ({ commit }) {
    await auth.logout()
    commit('setUser', { user: null })
    commit('setLogin', { isLogin: false })
    localStorage.token = ''
  },
  async checkLogin ({ commit, state }) {
    if (state.isLogin) return true
    let res = await auth.getInfo()
    commit('setLogin', { isLogin: res.isLogin })
    if (!res.isLogin) return false
    commit('setUser', { user: res.data })
    return true
  }

}
export default {
  state,
  getters,
  mutations,
  actions
}
