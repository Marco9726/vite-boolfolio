<script>
	import axios from 'axios';
	export default{
		name: 'ProjectMain',
		data(){
			return{
				projects: [],
				loading: true,
				Uri: 'http://127.0.0.1:8000/'
			}
		},
		methods:{
			getPosts(){
				this.loading = true;
				axios.get(`${this.Uri}/api/projects`).then(response => {
					if(response.data.success){
						this.projects = response.data.projects
						this.loading = false;
					}
				})
			}
		}

	}
</script>

<template>
	<section>
		<div class="container">
			<div class="row">
				<div class="col-12">
					<h2 class="text-center">Boolpress</h2>
				</div>
				<div class="col-12">
					<div v-if="this.loading = true" id="loader">
						in caricamento
					</div>
					<div v-else class="d-flex justify-content-center">
						<div class="card my-3" v-for="project in projects" :key="project.id">
							<div class="card-body">
								<div class="card-img-top">
									<img :src="project.cover_image != null ? project.cover_image : 'https://i1.wp.com/potafiori.com/wp-content/uploads/2020/04/placeholder.png?ssl=1'" :alt="project.title" class="img-fluid">
								</div>
								<div class="card-title">
									<h5>
										{{ project.title }}
									</h5>
								</div>
								<div class="card-text">
									<!-- creare funzione per excerpt -->
									<p>
										{{ project.description }}
									</p>
								</div>
								<!-- <a href="#" class="btn btn-success">
									visualizza progetto
								</a> -->
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>

</style>
