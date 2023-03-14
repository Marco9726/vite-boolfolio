<script>
	import { store } from '../store.js';
	import axios from 'axios';
	export default {
		name: 'SingleProject',
		data(){
			return{
				store
			}
		},
		mounted(){
			this.store.loading = true;
			axios.get(`${this.store.Uri}/api/projects/.$route.params.slug`).then(() => {
				console.log(response);
			})
		}
	}
</script>

<template>
	<div>
		<h2>Dettagli progetto</h2>
	</div>
</template>

<style lang="scss">
	
</style>