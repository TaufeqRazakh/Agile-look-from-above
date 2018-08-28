<template>
	<div id="greeting">
		<h1>Hello! {{greet}}</h1>
		<h2>This application is meant to illustrate the structure in an Agile team. <br>
		You can also try putting members of your team into tribes, squads and chapters to 
		<br> visualize your operation structure. </h2>
		<p>To learn more about agile teams may I suggest this
			<a href="https://www.mckinsey.com/business-functions/organization/our-insights/the-agile-manager" target="_blank"
			rel="noopener"> McKinsey article</a>
		</p>
		<h3>Hit the button below to begin</h3><div id="nav">
		<router-link to="/InputStage1" tag="button">Agile View</router-link></div>
	</div>
</template>

<script <script lang="ts">
import Vue from 'vue'
var d = new Date();
let time = d.getHours();

export default Vue.extend({
	computed: {
		greet: function() {
			var greetString : string = "Good Evening";
			if (time<12) {
				greetString = "Good Morning";
			}
			if(time>12 && time< 13) {
				greetString = "Good Afternoon";
			}
			return greetString;
		}
	}
})
</script>

<style scoped>
#greeting {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#greeting h1{
	color: #42b983;
}
#greeting a {
  font-weight: bold;
  color: #42b983
}
#nav {
	padding: 20px
}
#nav a {			
  color:#42b983;
}
</style>

