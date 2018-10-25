
<script>
    export default {
        el: "#list",
        data: {
        	items: [
        		"JavaScript 数组",
        		"JavaScript Promise",
        		"JavaScript 箭头函数",
        		"JavaScript import/export ES6",
        		"JavaScript 对象"
        	]
        }
    }
</script>

<template>

  <ul>
		<li v-for="i in items">
				<a href="#">{{i}}</a>
		</li>
  </ul>

</template>

<style src="./style.css"></style>