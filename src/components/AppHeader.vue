<script>
export default {
	name: 'AppHeader',
	data(){
		return{
			menuItems: [
				{
					label: 'Homepage',
					routeName: 'homepage'
				},
				{
					label: 'Progetti',
					routeName: 'projectslist'
				},
			]
		}
	}
}
</script>

<template>
	<header class="bg-dark">
		<nav class="navbar navbar-expand-md m-auto justify-content-between w-75">
			<div class="navbar-brand">
				<img src="/public/vite.svg" alt="" class="img-fluid">
			</div>
			<div class="collapse navbar-collapse justify-content-end">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item" v-for="(item,index) in menuItems" :key="index">
						<router-link :to="{ name: item.routeName }" class="nav-link text-white">
							{{ item.label }}
						</router-link>
					</li>
				</ul>
			</div>
		</nav>		
	</header>
</template>

<style lang="scss">
	
</style>