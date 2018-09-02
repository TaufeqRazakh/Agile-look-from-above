<template>
    <div class="chapter">{{matchingChapterName}}</div>
</template>

<script>
import Vue from 'vue';
import {Chapter} from '../types';
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
    background-color: lightsalmon;
    font-size: large;
    color:mediumpurple;
    margin-top: 1pt;
}
</style>

