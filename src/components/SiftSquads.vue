<template>
    <div class="segmentable"> 
        <div>{{value.name}}</div>   
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
        },
    },
    data() {
        return {
            chapters: this.$store.state.chapters,
        };
    },
    components: {
        SiftChapters,
    },
});
</script>

<style>
.segmentable {
  height: 200px;
  margin: auto; 
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: large;
  color: aliceblue;
}
</style>



