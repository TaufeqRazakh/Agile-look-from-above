<template>
	<div>
        {{ squad.name }} <br>
        <chapter-selection-box v-for="chapter in chapters" :key="chapter.id" 
        :value="chapter" @toggleSelection="putChapter"></chapter-selection-box>
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
        }
    },
    components: {
        ChapterSelectionBox
    },
    methods: {
        putChapter: function(event: any) {
            console.log(event);

        }
    }
})
</script>


