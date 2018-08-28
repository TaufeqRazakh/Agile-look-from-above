<template>    
    <div id="inputs">
        <h2>Who is the Agile coach?</h2>
        <p>(hint: This is someone who is responsible for creating your team)</p>
        <input v-model="AgileCoachName">
        <agile-coach :agile-coach-name = "AgileCoachName"></agile-coach>
        <p>{{AgileCoachName}}</p>
        <h2>Who is the tribe leader?</h2>
        <p>(hint: This is someone who is responsible for the value your team creates)</p>   
        <input v-model="TribeLeadName"> 
        <tribe-lead :tribe-lead-name="TribeLeadName"></tribe-lead>
        <p>{{TribeLeadName}}</p>
        <div id = "nav">
            <router-link to="/Team">Team Structure</router-link> | 
            <router-link to="/Specifications">Specify More</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'; 
import TribeLead from '../components/TribeLead.vue';
import AgileCoach from '../components/AgileCoach.vue';
export default Vue.extend({
    components: {
        'tribe-lead': TribeLead,
        'agile-coach': AgileCoach,
    },
    data () {
        return {
            AgileCoachName: 'Foo',
            TribeLeadName: 'Bar',
            Dummy: 'dumbdumb',
        }
    }
})
</script>

<style scoped> 
#inputs {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -mozs-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-block-start: 30px;
}
#inputs h2{
	color: #42b983;
}
#inputs a {
  font-weight: bold;
  color: #42b983
}

</style>



