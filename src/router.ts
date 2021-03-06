import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/Ready.vue'),
    },
    {
      path: '/InputStage1',
      name: 'CoachAndLeader',
      component: () => import('./views/CoachAndLead.vue'),
    },
    // {
    //   path: '/Team',
    //   name: 'LiveTeamStructure',
    //   component: () => import('./views/TeamStructure.vue'),
    // },
    {
      path: '/InputStage2',
      name: 'Chapters',
      component: () => import ('./views/ChaptersInput.vue'),
    },
    {
      path: '/InputStage3',
      name: 'Squads',
      component: () => import('./views/SquadsInput.vue'),
    },
  ]
});
