<template>
    <div>
        <span>{{statePhase}}</span>
        <input type="checkbox" id="chapter-option" @input="inputListener" v-model="status">
        <label for="chapter-option">{{ value.name }}</label>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        value: {
            type: Object,
            required: true,
        },
        squadId: Number,
    },
    data() {
        return {
            status: false
        }
    },
    methods: {
        inputListener: function() {
            //yes the status is a bit twisted if you check the console so check for negation if selected
            if(this.status != true) {
                this.$emit("selectedChapter", this.value.id);
                // console.log(this.value.id+" is what you selected");
            }
            else {
                this.$emit("deSelectedChapter", this.value.id);
                // console.log(this.value.id+" is what you deselected");
            }
        }
    },
    computed: {
        statePhase: function() {
            if(this.$store.state.squads[this.squadId-1].chapters.includes(this.value.id)) {
                this.status = true;
            }
        }
    }
});
</script>

