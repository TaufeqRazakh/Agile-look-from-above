<template>
	<div id = "container">
        {{ squad.name }} <button @click="$emit('removeSquad',squad.id)">x</button>  <br> 
        <chapter-selection-box v-for="chapter in chapters" :key="chapter.id" 
        :value="chapter" :squad-chapter-indexes="squad.chapters" @selectedChapter="addChapterId"
        @deSelectedChapter="removeChapterId" class="selectionList"></chapter-selection-box> {{refresh}}
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ChapterSelectionBox from './ChapterSelectionBox.vue';
export default Vue.extend({
    props: {
        squad: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            chapters: this.$store.state.chapters,
            squadIdRef: this.squad.id,
        };
    },
    components: {
        ChapterSelectionBox,
    },
    methods: {
        addChapterId(event: number) {
            // console.log("going to add "+event + " in parent "+ this.squad.name);
            this.$store.commit('addChapterToSquad', {squadId: this.squad.id, chapterId: event});
            // this.$emit('squadModified'); //didn't have to use this for browser
        },
        removeChapterId(event: number) {
            this.$store.commit('removeChapterFromSquad', { squadId: this.squad.id, chapterId: event });
            // this.$emit('squadModified'); //didn't have to use this for browser
            // console.log("going to remove "+event +" in "+this.squad.name);
        }
    },
    computed: {
        refresh: function() {
            this.chapters= this.$store.state.chapters;
            this.squadIdRef= this.squad.id;
            // console.log("came into SquadBox and refreshed");
        }
    }
});
</script>

<style>
.selectionList {
    display: inline-flex;
    display: -webkit-flex;
    display: -webkit-inline-flex;

}
</style>


