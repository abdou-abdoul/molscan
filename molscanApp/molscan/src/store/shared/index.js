export default {
  state: {
    databases: [
      { id: 'pubchem', name: 'Pubchem database', isSelected: true },
      { id: 'chembl', name: 'Chembl database', isSelected: false }
    ],
    loading: null,
    error: null,
    searchStats: {
      pubchem: { count: null, time: null },
      chembl: { count: null, time: null }
    }
  },
  mutations: {
    setLoading: (state, payload) => {
      state.loading = payload
    },
    setError: (state, payload) => {
      state.error = payload
    },
    clearError: (state) => {
      state.error = null
    },
    setSearchStats: (state, payload) => {
      state.searchStats[payload.agent] = { count: payload.count, time: payload.time }
    }
  },
  actions: {
    clearError: ({ commit }) => {
      commit('clearError')
    },
    setLoading: ({ commit }, payload) => {
      commit('setLoading', payload)
    },
    setError: ({ commit }, payload) => {
      commit('setError', payload)
    },
    setSearchStats: ({ commit }, payload) => {
      commit('setSearchStats', payload)
    }
  },
  getters: {
    loading: state => state.loading,
    error: state => state.error,
    databases: state => state.databases,
    dbSelected: state => state.databases.filter(db => db.isSelected),
    searchStats: state => state.searchStats
  }
}
