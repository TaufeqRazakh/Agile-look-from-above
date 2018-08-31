<template>
	<div>
        {{ Squad.name }}
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        Squad: {
            type: Object,
            required: true,
        }
    }
})
</script>


