<template>
	<div id="app">
		<component :is="layout">
			<router-view />
		</component>
	</div>
</template>

<script>
	export default ({
		computed: {
			layout() {
				return "layout-" + ( this.$route.meta.layout || "default" ).toLowerCase();
			}
		},
	})
</script>

<style lang="scss">
	#app {
		background-color: rgb(235, 235, 235);
	}
</style>