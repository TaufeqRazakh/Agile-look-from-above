<template>
	<div>
        {{ squad.name }}
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        squad: {
            type: Object,
            required: true,
        }
    }
})
</script>


