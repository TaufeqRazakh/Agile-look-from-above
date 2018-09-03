<template>
    <div class="segmentable">
        <div id="title">{{squad.name}}</div>  {{refresh}} 
        <sift-chapters v-for="chapter in chapters" :key="chapter" :squad-chapter="chapter" 
        :actual-chapter="chapter"></sift-chapters>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SiftChapters from './SiftChapters.vue';
export default Vue.extend({
    props: {
        value: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            squad: this.$store.state.squads[this.value-1],
            chapters: this.$store.state.squads[this.value-1].chapters,
        };
    },
    components: {
        SiftChapters
    },
    computed: {
        refresh: function(){
            this.squad = this.$store.state.squads[this.value-1],
            this.chapters = this.$store.state.squads[this.value-1].chapters,
            console.log("I'm at siftSquads and the squad id passed is "+this.value+" I have "+this.chapters);
        }
    }
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



