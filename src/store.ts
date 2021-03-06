// use camelCase here
import Vue from 'vue';
import Vuex from 'vuex';
import { SquadInteraction } from './types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    agileCoachName : 'Coach',
    tribeLeadName : 'Project Lead',
    chapters: [{id: 1, name: 'Application Engineer', listed: true},
               {id: 2, name: 'Inside Sales', listed: true},
               {id: 3, name: 'Service Engineer', listed: true}],
    squads: [ {id: 1, name: 'Cement Industry', lead: 'Vlad', chapters: [1, 2]},
              {id: 2, name: 'Pulp and Paper Industry', lead: 'yuri', chapters: [1, 2, 3]} ],
  },
  mutations: {
    addAgileCoachName(state, name) {
      state.agileCoachName = name;
    },
    addTribeLeadName(state, name) {
      state.tribeLeadName = name;
    },
    addChapter(state, name: string) {
      state.chapters.push({id: (state.chapters.length) + 1, name, listed: true});
    },
    removeChapter(state, id: number) {
      state.chapters = state.chapters.filter((chapter) => chapter.id !== id);
      // console.log(id);
      //to fix the chapter id number in the chapter object after removing one
      for (let _i: number = id - 1; _i < state.chapters.length; _i++) {
        state.chapters[_i].id = _i + 1; 
        // console.log("from store "+_i+" "+state.chapters[_i].id+" "+state.chapters[_i].name);
      }
      //to fix the chapter array in the squad after removing a chapter
      for (let _i: number = 0; _i < state.squads.length; _i++) {
        state.squads[_i].chapters = state.squads[_i].chapters.filter((chapterRef) => chapterRef !== id);
        for(let _j: number = 0; _j < state.squads[_i].chapters.length; _j++) {
          if(state.squads[_i].chapters[_j]>id) {
            state.squads[_i].chapters[_j]=state.squads[_i].chapters[_j]-1;
          }
        }
        // console.log("from store after modifying squad"+state.squads[_i].chapters);
      }
    },
    addSquad(state, name: string) {
      state.squads.push({id: (state.squads.length) + 1, name, lead: '', chapters: []});
    },
    removeSquad(state, id: number) {
      state.squads = state.squads.filter((squad) => squad.id !== id);
    },
    addChapterToSquad(state, payload: SquadInteraction) {
        if(state.squads[payload.squadId - 1].chapters.indexOf(payload.chapterId)>=0) { }
        else {  state.squads[payload.squadId - 1].chapters.push(payload.chapterId);
          state.squads[payload.squadId - 1].chapters.sort();
          // console.log("adding chapter"+state.squads[payload.squadId - 1].chapters);
      // console.log(state.squads[payload.squadId-1].chapters+" "+state.squads[payload.squadId-1].name);
        }
    },
    removeChapterFromSquad(state, payload: SquadInteraction) {
      state.squads[payload.squadId - 1].chapters = state.squads[payload.squadId - 1].chapters.filter((chapterRef) => chapterRef !== payload.chapterId);
      // console.log(state.squads[payload.squadId-1].chapters+" "+state.squads[payload.squadId-1].name);
    },
  },
  actions: {

  },
});
