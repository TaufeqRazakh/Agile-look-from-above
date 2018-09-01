<template>
	<div>
        {{ squad.name }} <br>
        <chapter-selection-box v-for="chapter in chapters" :key="chapter.id" 
        :value="chapter" :squad-id="squadIdRef" @selectedChapter="addChapterId"
        @deSelectedChapter="removeChapterId"></chapter-selection-box>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ChapterSelectionBox from './ChapterSelectionBox.vue';
export default Vue.extend({
    props: {
        squad: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            chapters: this.$store.state.chapters,
            squadIdRef: this.squad.id,
        }
    },
    components: {
        ChapterSelectionBox
    },
    methods: {
        addChapterId: function(event: number) {
            console.log("going to add "+event + " in parent "+ this.squad.name);
            this.$store.commit('addChapterToSquad', {squadId: this.squad.id, chapterId: event});
        },
        removeChapterId: function(event: number) {
            this.$store.commit('removeChapterFromSquad', { squadId: this.squad.id, chapterId: event });
            console.log("going to remove "+event +" in "+this.squad.name);
        }
    },
    computed: {
        checkIfChapterSelected: function() {

        }
    }
});
</script>


