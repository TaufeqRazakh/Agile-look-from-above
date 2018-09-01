<template>
    <div>
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
        }
    },
    data() {
        return { 
            status: false,
        }
    },
    methods: {
        inputListener: function() {
            //yes the status is a bit twisted if you check the console so check for negation if selected
            if(this.status != true) {
                console.log(this.value.name+" is what you selected");
            }
            else {
                console.log(this.value.name+" is what you deselected");
            }
            // console.log("input"+ this.status)
        },
        emitEvaluator: function() {

        }
    }
})
</script>

