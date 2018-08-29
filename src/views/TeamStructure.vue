<template>
    <div id = "structure">
        <p>So this is what <span>{{Coach}}</span>'s team looks like</p>
        <br>
        <div class="container">
            <div class = "tribe">{{Tribe}}</div>
            <div class= "coach">{{Coach}}</div>
        </div>
        <div id = "nav">
            <router-link to="/InputStage1">Go back</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data() {
        return {
            name1: '',
            name2: '',
        }
    },
    computed: {
        Tribe: function () {
            return this.$store.state.tribeLeadName;
        },
        Coach: function () {
            return this.$store.state.agileCoachName;
        },

    }
})
</script>

<style scoped>
.container {
    margin: auto;
    list-style: none;
    display: flex;    
    justify-content: center;
    flex-direction: row;
    background-color:lavenderblush;
}
.coach {
    background: tomato;
    width: auto;
    height: 400px;
    margin-top: 0px;
    
    line-height:400px;
    color: white;
    font-weight: bold;
    font-size: 3em;
    text-align: center;
}
.tribe {
    background-color:powderblue;
    width: auto;
    height: 400px;
    margin-top: 0px;
    
    line-height:400px;
    color: white;
    font-weight: bold;
    font-size: 3em;
    text-align: center;
}
#structure {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-block-start: 30px;
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

