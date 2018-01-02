import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0,
    multiple: 1,
    value: 0,
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
    },
    value: state => {
      return state.value;
    }
  },
  mutations: {
    increment: (state, payload) => {
      state.counter += payload;
    },
    decrement: state => {
      state.counter--
    },
    updateValue: (state, payload) => {
      state.value = payload;
    }
  },
  // difference between actions and mutations are that you can make
  // asynchronous requests with actions
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
    },
    updateValue: ({ commit }, payload) => {
      commit('updateValue', payload);
    }
  }
});
