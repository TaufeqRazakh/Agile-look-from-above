<template>
    <div id = "structure">
        <p id="greeting">So this is what <span>{{Coach}}</span>'s team looks like</p>
        <br>
        <div class="container">
            <div class = "squad" v-for="squad in Squads" :key="squad.id">
                <sift-squads :value="squad"></sift-squads>
            </div>
            <div class = "tribe">{{Tribe}}</div>
            <div class= "coach">{{Coach}}</div>
        </div>
        <div id = "nav">
            <router-link to="/InputStage3">Go back</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SiftSquads from '../components/SiftSquads.vue';
export default Vue.extend({
    data() {
        return {
            Coach: this.$store.state.agileCoachName,
            Tribe: this.$store.state.tribeLeadName,
            Squads: this.$store.state.squads,
        }
    },
    components: {
        SiftSquads
    }
});
</script>

<style>
#greeting {
    padding-block-start: 30px;
}
.container {
    margin: auto;
    list-style: none;
    display: flex;    
    justify-content: center;
    flex-direction: row;
    background-color:lavenderblush;
}
.coach {
    background:green;
    width: auto;
    max-width: 200px;
    height: 400px;
    margin-top: 0px;
    margin-left: 4px;
    line-height:400px;
    color: aliceblue;
    font-weight: bolder;
    font-size: xx-large;
    text-align: center;
}
.tribe {
    background-color:lightseagreen;
    width: auto;
    max-width: 200px;
    height: 400px;
    margin-top: 0px;
    margin-left: 4px;
    line-height:400px;
    color: aliceblue;
    font-weight: bolder;
    font-size: xx-large;
    text-align: center;
}
.squad {
    background-color:powderblue;
    width: auto;
    max-width: 150px;
    height: 400px;
    margin-top: 0px;
    margin-left: 4px;
    /* line-height:0px; */
    /* color: white; */
    font-weight: bold;
    font-size: xx-large;
    text-align: center;
}
#structure {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#structure a {
  font-weight: bold;
  color: #42b983;
}
#structure span{
    font-weight: bold;
    color:tomato;
}
#nav {
    padding: 30px;
}
</style>

