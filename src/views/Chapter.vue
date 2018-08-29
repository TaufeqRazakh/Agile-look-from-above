<template>
	<div id="inputs">
		<h2>How many chapters are there</h2>
    <input v-model="">   
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	data() {
    return {
        
    }
	}
})	
</script>

<style scoped> 
#inputs {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -mozs-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-block-start: 30px;
}
#inputs h2{
	color: #42b983;
}
#inputs a {
  font-weight: bold;
  color: #42b983
}
</style>