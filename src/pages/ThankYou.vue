<script>
export default {
	name: 'ThankYou'
}
</script>

<template>
	<div class="container">
		<div class="row my-5 justify-content-center">
			<div class="col-12 text-center">
				<img src="https://lh4.googleusercontent.com/wZCVtsFnGRC6B_0nyNdJeNY5TKM2LWF3JjCGQjmqG-3HBd7gReXAsTXXpAoGKQFfU_oAFr6GsSObY2SOIsHPZ8zCdKEM4TUfWVqf4Q9mQVvaV3kZ7fdrgmG61JRrMEWXnU1aZ2ukTaC4NYKpUExE_b9TZw_C7qVYXP2T78rkqbYe271clci6L0zPMO-41w" alt="" class="my-3 img-fluid h-75">
				<h2>Grazie per averci contattato! La tua mail &egrave; stata inviata con successo</h2>
			</div>
			<div class="col-2">
				<router-link :to="{ name: 'projectslist' }" class="btn btn-warning">Torna ai progetti</router-link>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	
</style>