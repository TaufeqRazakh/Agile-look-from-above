//use camelCase here 
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    agileCoachName : 'Foo',
    tribeLeadName : 'Bar',    
  },
  mutations: {
    addAgileCoachName(state, name) {
      state.agileCoachName = name;
    },
    addTribeLeadName(state, name) {
      state.tribeLeadName = name;
    },
  },
  actions: {

  },
});
