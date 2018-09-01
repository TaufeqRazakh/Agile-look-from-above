<template>
    <div class="segmentable"> 
        <div id="title">{{value.name}}</div>   
        <br>
        <sift-chapters v-for="chapter in chapters" v-bind:key="chapter.id" :squad-chapters="value.chapters" 
        :actual-chapter="chapter"></sift-chapters>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SiftChapters from './SiftChapters.vue';
export default Vue.extend({
    props: {
        value: {
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
        SiftChapters
    }
});
</script>

<style>
.title {
    line-height: 0px;
    text-align: center;
    font-weight: bold;
    font-size: x-large;
}
.segmentable {
  margin: auto; 
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
}
</style>



