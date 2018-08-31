<template>
	<div id="input">
		{{listItem.name}}
		<button @click="$emit('removeItem', listItem.id)">x</button> 
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	props: {
		listItem: {
		  type: Object,
		  required: true
		}
	}
});
</script>