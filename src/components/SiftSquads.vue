<template>
    <div class="segmentable"> 
        <div id="title">{{value.name}}</div>   
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
#title {
    width: auto;
    min-height: 50px;
}
.segmentable {
  flex:1;
  display: flex; 
  flex-direction: column;

  font-weight: bold;
  font-size: large;
  color: rgb(84, 150, 194);
  flex-direction: column;
}

</style>



