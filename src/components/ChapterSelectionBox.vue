<template>
    <div>
        <span>{{statePhase}}</span>
        <input type="checkbox" id="chapter-option" v-model="status">
        <label for="chapter-option">{{ value.name }}</label>
    </div>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
    props: {
        value: {
            type: Object,
            required: true,
        },
        squadChapterIndexes: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            status: false,
        }
    },
    watch: {
        status: function() {
            // console.log("i hear something about "+this.status+ " "+ event+ " "+event2);
            if(this.status == true) {
                this.$emit("selectedChapter", this.value.id);
                // console.log(this.value.id+" is what you selected");
            }
            else {
                this.$emit("deSelectedChapter", this.value.id);
                // console.log(this.value.id+" is what you deselected");
            }
            // if(this.status == true) {
            //     this.$emit("selectedChapter", this.value.id);
            //     console.log(this.value.id+" is what you selected");
            // }
            // else {
            //     this.$emit("deSelectedChapter", this.value.id);
            //     console.log(this.value.id+" is what you deselected");
            // }
        }
    },
    methods: {
        // inputListener: function() {
        //     console.log("I can hear you");
        //     //yes the status is a bit twisted if you check the console so check for negation if selected
            
        // }
    },
    computed: {
        statePhase: function() {
            if(this.squadChapterIndexes.includes(this.value.id)) {
                this.status = true;
            }
        }
    }
});
</script>


