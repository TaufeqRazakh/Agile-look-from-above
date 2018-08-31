//use camelCase here 
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    agileCoachName : 'Foo',
    tribeLeadName : 'Bar',
    chapters: [{id: 1, name: 'chemist', listed: true},
               {id: 2, name: 'web developer', listed: true},
               {id: 3, name: 'molecular biologist', listed: true}],
    Squads: [ {id:1, name: 'DNA Sampling', lead: 'Vlad', chapters:[1,2]},
              {id:2, name: 'Protien Substitute', lead:'yuri', chapters:[1,2,3]} ]
  },
  mutations: {
    addAgileCoachName(state, name) {
      state.agileCoachName = name;
    },
    addTribeLeadName(state, name) {
      state.tribeLeadName = name;
    },
    addChapter(state, name: string) {
      state.chapters.push({id: (state.chapters.length)+1, name: name, listed: true});
    },
    fixChapterId(state, id:number) {
      state.chapters = state.chapters.filter(chapter => chapter.id !== id);
      for(var _i:number = id-1; _i<state.chapters.length; _i++) {
        state.chapters[_i].id = _i+1;
      }
    },
    addSquad(state, name: string) {
      state.Squads.push({id: (state.Squads.length)+1, name: name, lead:'', chapters:[]});
    },
  },
  actions: {

  },
});
