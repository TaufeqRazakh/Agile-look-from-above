<template>
	<div>
		<div id="input">
			<h2>Type in all the Chapters in the team</h2>
			<p v-if="noWarning">(hint: This refers to the capabilites or skills in your team, say, cartoonists, machinists, copy writers)</p>
			<p v-else>Lets see if you can bundle up listing your chapters in a better way</p>
			<input type="text" v-model="newChapter" @keyup.enter="UpdateChapter">
			<p>dev:Value that went in {{showValue}}, was supposed to be {{newChapter}}</p>
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
		newChapter: '',
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
			  this.newChapter = '';
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