const state = {
  counter: 0,
  multiple: 1,
};

const getters = {
  doubleCounter: state => {
    return state.counter * 2
  },
  stringCounter: state => {
    return state.counter + ' Clicks'
  },
  multipleCounter: state => {
    return state.counter * state.multiple
  },
};

const mutations = {
  increment: (state, payload) => {
    state.counter += payload;
  },
  decrement: state => {
    state.counter--
  },
};

const actions = {
  increment: ({ commit }, payload) => {
    commit('increment', payload);
  },
  //or you can destructure
  decrement: ({ commit }) => {
    commit('decrement')
  },
  asyncIncrement: ({ commit }, payload) => {
    setTimeout(() => {
      commit('increment', payload.by);
    }, payload.duration);
  },
};

export default {
  state,
  getters,
  mutations,
  actions
}
