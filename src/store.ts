//use camelCase here 
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    agileCoachName : 'Foo',
    tribeLeadName : 'Bar',
    chapters: [{id: 1, name: 'mechanic', listed: true},
               {id: 2, name: 'web developer', listed: true},
               {id: 3, name: 'molecular biologist', listed: true}],
  },
  mutations: {
    addAgileCoachName(state, name) {
      state.agileCoachName = name;
    },
    addTribeLeadName(state, name) {
      state.tribeLeadName = name;
    },
    addChapter(state, name: string) {
      state.chapters.push({id: (state.chapters.length)++, name: name, listed: true});
    }
  },
  actions: {

  },
});
