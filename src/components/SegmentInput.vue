<template>
	<div id="input">
		<p>dev_log: in segment input</p>
		<input type="text" @keyup.enter="onEnter"

	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	computed: {
		onEnter () {
			return {
				
			}
		}
	}
});
</script>