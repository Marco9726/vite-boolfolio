<script>
	import { store } from '../store.js';
	import axios from 'axios';
	export default {
		name: 'SingleProject',
		data(){
			return{
				store,
				project: null,
				loading: true
			}
		},
		mounted(){
			axios.get(`${this.store.Uri}/api/projects/${this.$route.params.slug}`).then((response) => {
				console.log(response);
				this.project = response.data.result;
				this.loading = false
			})
		}
	}
</script>

<template>
	<div>
		<div class="container py-4">
			<div class="row">
				<div class="col-12" v-if="this.loading">
					in caricamento
				</div>
				<div class="col-12" v-else>
					<h2 class="text-center">{{ this.project.title }}</h2>
					<div class="row my-4">
						<div class="col-6 img-container"> <!--se l'immagine non è null, la mostro, altrimento carico un'immagine placeholder-->
							<img :src="project.cover_image != null ? `${store.Uri}/storage/${ project.cover_image}` : 'https://avatars.mds.yandex.net/i?id=8d48f296e8bb9995f9401bfaf34c93637815f6a2-8219873-images-thumbs&n=13'" :alt="project.title" class="w-100">
						</div>
						<div class="col-6"> 
							<!-- type -->
							<strong>Linguaggio: </strong> {{ project.type ? project.type.name : 'Non specificato' }}
							<!-- description -->
							<p class="my-2"><strong>Descrizione: </strong>{{ project.description }}</p>
							<!-- technologies, se sono presenti... -->
							<div class="technologies-list" v-if="project.technologies.length">
								<strong>Tecnologie: </strong>
								<ul>
									<!-- ...le ciclo e le mostro -->
									<li v-for="technology in project.technologies" :key="technology.id">
										{{ technology.name }}
									</li>
								</ul>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	
</style>