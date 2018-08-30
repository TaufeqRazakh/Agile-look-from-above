<template>
	<div>
		<h2>Type in all the Chapters in the team</h2>
		<p>(hint: This refers to the capabilites or skills in your team, say, cartoonists, machinists, copy writers)</p>
		<segment-input></segment-input>	
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import SegmentInput from '../components/SegmentInput.vue';
export default Vue.extend ({
  components: {
  	'segment-input': SegmentInput,
  }
});
</script>