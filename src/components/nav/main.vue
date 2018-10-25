<script>
    //es6
    export default {
        el: "#nav",
        data: {
        	items: [
        		{test: "JavaScript", n: 75},
        		{test: "Node.js", n: 18},
        		{test: "Vue.js", n: 41},
        		{test: "MongoDB", n: 7},
        		{test: "jQuery", n: 13},
        		{test: "webpack", n: 16},
                {test: "Babel", n: 5},
                {test: "Shell", n: 12},
                {test: "Lodash", n: 4},
                {test: "npm", n: 3},
                {test: "Express", n: 108}
        	]
        }
    }
</script>

<template>
		<div>
			<nav class="cl-effect-11">
				<a v-for="i in items" href="#" v-bind:data-hover="i.test">{{i.test}}<span class="badge">{{i.n}}</span></a>

			</nav>
		</div>
	  
</template>

<style src="./style.css" scoped>
</style>



