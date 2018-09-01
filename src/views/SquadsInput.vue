<template>
	<div>
		<div id="input">
			<h2>Now lets set the squads in our tribe</h2>
			<p v-if="noWarning && noCopies">(hint: Squads are divisions of value addition channels in your tribe. 
				<br>Each squad contibutes to the final product with a level of autonomy)</p>
			<p v-else-if="!noCopies">That Squad was already assigned</p>
			<p v-else-if="!noWarning">Lets try to get this work done in 10 squads for now</p>
			<p v-else>Lets see if you can finish the project with fewer squads for now</p>
			
			<input type="text" v-model="newSquad" @keyup.enter="UpdateSquad" @input="CheckExisting">
		</div>
		<div id = "list">
			<squad-box v-for="squad in squadRef" :key="squad.id" :squad="squad" @removeSquad="removeSquad"></squad-box>	
		</div>	
		<div id = "nav">
            <router-link to="/Team">Team Structure</router-link> | 
            <router-link to="/InputStage2">Go Back</router-link>
        </div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import SquadBox from '../components/SquadBox.vue';
export default Vue.extend ({
  data() {
  	return {
		newSquad: '',
		squadRef: this.$store.state.squads,
		chapterRef: [{id: 0, name: '', listed:false}],
		noWarning: true,
		noCopies: true,
  	}
  },
  components: {
  	SquadBox
  },
  methods: {
  	UpdateSquad: function(event: any) {
  		if(this.$store.state.squads.length < 10 && this.noCopies) {
			  this.$store.commit('addSquad', event.target.value);
			  this.newSquad = '';
			  this.noWarning = true;
		}
		else {
			this.noWarning = false;
		}
	},
	CheckExisting: function(event: any) {
		for(var i = 0; i< this.squadRef.length; i++) {
			if(this.squadRef[i].name === event.target.value) {
				this.noCopies = false;
				break;
			}
			else 
				this.noCopies = true;
		}
	},
	removeSquad: function(event: number) {
		this.$store.commit('removeSquad', event);
		this.squadRef= this.$store.state.squads;	
	}  
  }
});
</script>