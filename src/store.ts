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
    squads: [ {id:1, name: 'DNA Sampling', lead: 'Vlad', chapters:[1,2]},
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
      state.squads.push({id: (state.squads.length)+1, name: name, lead:'', chapters:[]});
    },
    addChapterToSquad(state, payload: object) {
      state.squads[payload.squadId-1].chapters.push(payload.chapterId);
      state.squads[payload.squadId-1].chapters.sort();
      console.log(state.squads[payload.squadId-1].chapters+" "+state.squads[payload.squadId-1].name);
    },
    removeChapterFromSquad(state, payload: object) {
      state.squads[payload.squadId-1].chapters = state.squads[payload.squadId-1].chapters.filter(chapterRef => chapterRef !== payload.chapterId);
      console.log(state.squads[payload.squadId-1].chapters+" "+state.squads[payload.squadId-1].name);
    }
  },
  actions: {

  },
});
