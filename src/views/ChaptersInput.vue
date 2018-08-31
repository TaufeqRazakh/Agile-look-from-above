<template>
	<div>
		<div id="input">
			<h2>Type in all the Chapters in the team</h2>
			<p v-if="noWarning && noCopies">(hint: This refers to the capabilites or skills in your team, say, cartoonists, machinists, copy writers)</p>
			<p v-else-if="!noCopies">I sense you already mentioned that chapter</p>
			<p v-else-if="!noWarning">Lets bundle up all skills in 10 chapters for now</p>
			<input type="text" v-model="newChapter" @keyup.enter="UpdateChapter" @input="CheckExisting">
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
		chapterRef: this.$store.state.chapters,
		noWarning: true,
		noCopies: true,
  	}
  },
  components: {
  	ItemWithRemoveButton
  },
  methods: {
  	UpdateChapter: function(event: any) {
  		if(this.$store.state.chapters.length < 10 && this.noCopies) {
			this.$store.commit('addChapter', this.newChapter);
			this.newChapter = '';
			this.noWarning = true;
		}
		else if(this.$store.state.chapters.length >=10 ) {
			this.noWarning = false;
		}
  	},
  	RemoveChapter: function(event: number) {
		  // going to update the list by accessing store here
		this.$store.commit('fixChapterId', event);
		this.chapterRef = this.$store.state.chapters;  
	  },
	CheckExisting: function(event: any) {
		for(var i = 0; i< this.chapterRef.length; i++) {
			if(this.chapterRef[i].name === event.target.value) {
				this.noCopies = false;
				break;
			}
			else 
				this.noCopies = true;
		}
	}  
  }
});
</script>