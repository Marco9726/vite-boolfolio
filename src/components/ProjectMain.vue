<script>
	import axios from 'axios';
	import ProjectCard from './ProjectCard.vue';
	export default{
		name: 'ProjectMain',
		components:{
			ProjectCard
		},
		data(){
			return{
				projects: [],
				loading: true,
				Uri: 'http://127.0.0.1:8000',
				currentPage: 1,
				lastPage: null
			}
		},
		methods:{
			getProjects(number_page){
				this.loading = true;
				axios.get(`${this.Uri}/api/projects`, { params:{ page: number_page }} ).then((response) => {
					if(response.data.success){
						console.log(response.data);
						//Se restituisco tutti gli i record della table dal backend con Project::all()
						// this.projects = response.data.results

						//Se utillizzo la paginazione per mostrare solo alcuni record, Project::paginate(X)
						this.projects = response.data.results.data;
						this.currentPage = response.data.results.current_page;
						this.lastPage = response.data.results.last_page;
						this.loading = false;
					}
				})
			}
		},
		mounted(){
			this.getProjects(this.currentPage);
		}

	}
</script>

<template>
	<section>
		<div class="container py-3">
			<div class="row">
				<div class="col-12">
					<h2 class="text-center">Boolpress</h2>
				</div>
				<div class="col-12">
					<div v-if="this.loading == true" id="loader">
						in caricamento
					</div>
					<div v-else id="content-container">
						<div class="d-flex justify-content-between flex-wrap">
							<!-- ciclo le ProjectCard nei progetti ottenuti da getProjects -->
							<ProjectCard v-for="project in projects" :key="project.id" :project="project" />
						</div>
						<!-- Pagination nav -->
						<nav id="pagination-nav">
							<ul class="pagination justify-content-center">
								<li v-if="this.currentPage > 1">
									<button class="page-link" @click="getProjects(currentPage - 1)">{{ currentPage - 1 }}</button>
								</li>
								<li class="current-page page-link">
									{{ currentPage  }}
								</li>
								<li v-if="this.currentPage != this.lastPage">
									<button class="page-link" @click="getProjects(currentPage + 1)">{{ currentPage + 1 }}</button>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>

	#content-container{
		
		nav#pagination-nav{
			
			li.current-page{
				background-color: rgb(235, 235, 235);
			}
		}
	}
</style>
