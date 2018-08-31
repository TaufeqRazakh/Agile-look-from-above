<template>
	<div>
		<div id="input">
			<h2>Now lets set the squads in our tribe</h2>
			<p v-if="noWarning">(hint: Squads are divisions of value addition channels in your tribe. 
				<br>Each squad contibutes to the final product with a level of autonomy)</p>
			<p v-else>Lets see if you can finish the project with fewer squads for now</p>
			<input type="text" v-model="newSquad" @keyup.enter="UpdateChapter">
			<p>dev:Value that went in {{showValue}}, was supposed to be {{newSquad}}</p>
			<span>{{loadChaptersIntoRef}}</span>
		</div>
		<div id = "list">
			<item-with-remove-button v-for="chapter in chapterRef" :key="chapter.id"
			:list-item="chapter" @removeItem="RemoveChapter"></item-with-remove-button>	
		</div>	
		<div id = "nav">
            <router-link to="/Team">Team Structure</router-link> | 
            <router-link to="/InputStage3">Keep Specifying</router-link>
        </div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import ItemWithRemoveButton from '../components/ItemWithRemoveButton.vue';
export default Vue.extend ({
  data() {
  	return {
		newSquad: '',
		showValue: '',
		chapterRef: [{id: 0, name: '', listed:false}],
		noWarning: true,
  	}
  },
  components: {
  	ItemWithRemoveButton
  },
  methods: {
  	UpdateChapter: function(event: any) {
  		if(this.$store.state.chapters.length < 10) {
			  this.$store.commit('addChapter', event.target.value);
			  this.newSquad = '';
			  this.showValue = event.target.value;
			  this.noWarning = true;
		}
		else {
			this.noWarning = false;
		}
  	},
  	RemoveChapter: function(event: any) {
  		// going to update the list by accessing store here 
  		console.log("okay okay okay ");
  		this.noWarning = true;
  	}
  },
  computed: {
	  loadChaptersIntoRef: function() {
		  this.chapterRef = this.$store.state.chapters;
	  }
  }
});
</script>