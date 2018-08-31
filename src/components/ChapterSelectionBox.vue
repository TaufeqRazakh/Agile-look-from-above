<template>
    <div>
        <input type="checkbox" id="chapter-option" 
        @select="$emit('toggleSelection', $event.target.value)">
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
})
</script>

