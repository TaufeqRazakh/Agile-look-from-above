<template>
    <div class="test">
        {{matchingChapterName}}
        <div v-if="ok" class ="chapter">{{chapter}}</div>
    </div>  
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
data() {
    return {
        chapter:'',
        ok: false,
    }
},  
computed: {
    matchingChapterName: function() {
        if(this.squadChapters.includes(this.actualChapter.id)){
            this.chapter = this.actualChapter.name;
            this.ok = true;
            // return this.actualChapter.name;
        }
    }
}
});
</script>

<style>
.test {
    flex:1;
    display:flex;
    /* flex-basis: auto; */
    flex-shrink: 1;
    min-height: 0px;
    /* background-color: brown; */
    margin: 2px;
}
.chapter {
    flex: 1;
    background-color: rgb(55, 118, 143);
    font-size: medium;
    color:rgb(172, 241, 230);
    margin-top: 1pt;
    min-width: 0px;
    min-height: 0px;
    /* flex-shrink: 1; */
}
</style>
