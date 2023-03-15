<script>
export default {
	name: 'NotFound'
}
</script>

<template>
	<div class="container">
		<div class="row my-5 justify-content-center">
			<div class="col-12 py-5 text-center">
				<h2>Ah ah ah! La pagina non è stata trovata</h2>
				<img src="https://media.tenor.com/ttEnKdyDKKIAAAAM/jurassic-park-nedry-dennis.gif" alt="" class="my-3">
			</div>
			<div class="col-2">
				<router-link :to="{ name: 'projectslist' }" class="btn btn-warning">Torna ai progetti</router-link>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	
</style>