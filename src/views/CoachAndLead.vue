<template>    
    <div id="inputs">
        <h2 id="greeting">Who is the Agile coach?</h2>
        <p v-if="AgileCoachName === 'Foo' || AgileCoachName === ''">(hint: This is someone who is responsible for creating your team)</p>
        <p v-else>{{AgileCoachName}}</p>
        <input v-model.trim="AgileCoachName" @input="InputCoachName">
        <h2>Who is the tribe leader?</h2>
        <p v-if="TribeLeadName === 'Bar' || TribeLeadName === ''">(hint: This is someone who is responsible for the value your team creates)</p>
        <p v-else>{{TribeLeadName}}</p>
        <input v-model.trim="TribeLeadName" @input="InputLeadName"> 
        <div id = "nav">
            <router-link to="/">Go Back</router-link> | 
            <router-link to="/Team">Team Structure</router-link> | 
            <router-link to="/InputStage2">Specify More</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data() {
        return {
            AgileCoachName: this.$store.state.agileCoachName,
            TribeLeadName: this.$store.state.tribeLeadName,
            Dummy: 'dumbdumb',
        };
    },
    methods: {
        InputCoachName(event: any) {
            this.$store.commit('addAgileCoachName', event.target.value);
        },
        InputLeadName(event: any) {
            this.$store.commit('addTribeLeadName', event.target.value);
        },

    },
});
</script>

<style scoped> 
#greeting{
    padding-block-start: 30px;
}
#inputs {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -mozs-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#inputs h2{
	color: #42b983;
}
#inputs a {
  font-weight: bold;
  color: #42b983
}


</style>



