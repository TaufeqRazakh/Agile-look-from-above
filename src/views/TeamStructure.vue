<template>
    <div>
        <p>In the team structure section </p>
        <span>{{name1}}</span>
        <span>{{name2}}</span>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AgileCoach from '../components/AgileCoach.vue';
import TribeLead from '../components/TribeLead.vue';
export default Vue.extend({
    data() {
        return {
            name1: '',
            name2: '',
        }
    },
    components: {
        AgileCoach, TribeLead
    }   
})
</script>
