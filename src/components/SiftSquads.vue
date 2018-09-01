<template>
    <div id="title"> 
        {{value.name}}
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
</style>



