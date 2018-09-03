<template>
	<div>
		<div id="input">
			<h2 id="greeting">Type in all the Chapters in the team</h2>
			<p v-if="noWarning && noCopies">(hint: This refers to the capabilites or skills in your team, say, cartoonists, machinists, copy writers)</p>
			<p v-else-if="!noCopies">I sense you already mentioned that chapter</p>
			<p v-else-if="!noWarning">Lets bundle up all skills in 10 chapters for now</p>
			<input type="text" placeholder="audit, design,..." v-model="newChapter" @keyup.enter="UpdateChapter" @input="CheckExisting">
		</div>
		<div id = "list">{{refresh}}
			<item-with-remove-button v-for="chapter in chapterRef" :key="chapter.id"
			:list-item="chapter" @removeItem="RemoveChapter"></item-with-remove-button>	
		</div>
    <team-structure/>	
		<div id = "nav">
			<router-link to="/InputStage1">Go Back</router-link> | 
            <router-link to="/InputStage3">Keep Specifying</router-link>
        </div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import ItemWithRemoveButton from '../components/ItemWithRemoveButton.vue';
import TeamStructure from '../components/TeamStructure.vue';
export default Vue.extend ({
  data() {
    return {
    newChapter: '',
    chapterRef: this.$store.state.chapters,
    noWarning: true,
    noCopies: true,
    };
  },
  components: {
    ItemWithRemoveButton, TeamStructure
  },
  methods: {
    UpdateChapter(event: any) {
      if (this.$store.state.chapters.length < 10 && this.noCopies) {
      this.$store.commit('addChapter', this.newChapter);
      this.newChapter = '';
      this.noWarning = true;
    } else if (this.$store.state.chapters.length >= 10 ) {
      this.noWarning = false;
    }
    },
    RemoveChapter(event: number) {
    this.$store.commit('removeChapter', event);
    this.chapterRef = this.$store.state.chapters;
    },
    CheckExisting(event: any) {
      for (let i = 0; i < this.chapterRef.length; i++) {
        if (this.chapterRef[i].name === event.target.value) {
          this.noCopies = false;
          break;
        } else {
          this.noCopies = true;
        }
      }
    },
  },
  computed: {
    refresh: function() { 
      this.chapterRef = this.$store.state.chapters;
    }
  }
});
</script>
<style>
#greeting {
	padding-block-start: 30px;
}
#input {
  font-family: 'Avenir', Helvetica, Arial, sans-serif; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#list {
  font-family: 'Avenir', Helvetica, Arial, sans-serif; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;	
}
#input h2{
	color: #42b983;
}
#nav {
	padding: 20px
}
#nav a {			
  color:#42b983;
}
</style>
