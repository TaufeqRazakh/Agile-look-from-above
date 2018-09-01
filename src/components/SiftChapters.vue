<template>
    <div id="chapter">{{matchingChapterName}}</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
props: {
    squadChapters: {
        type: Array,
        required: true,
    },
    actualChapter: {
        type: Object,
        required: true,
    }
},  
computed: {
    matchingChapterName: function() {
        if(this.squadChapters.includes(this.actualChapter.id)){
            return this.actualChapter.name;
        }
    }
}
});
</script>

<style>
.chapter {
    width: auto;
    height: auto;
    background-color: lightsalmon;
    text-justify: auto;
    font-size: small;
}
</style>

