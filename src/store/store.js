import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0,
    multiple: 1,
  },
  getters: {
    doubleCounter: state => {
      return state.counter * 2
    },
    stringCounter: state => {
      return state.counter + ' Clicks'
    },
    multipleCounter: state => {
      return state.counter * state.multiple
    }
  },
  mutations: {
    increment: (state, payload) => {
      state.counter += payload;
    },
    decrement: state => {
      state.counter--
    }
  },
  actions: {
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
    }
  }
});
