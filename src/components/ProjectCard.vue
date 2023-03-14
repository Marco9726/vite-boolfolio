<script>
import { store } from '../store.js';
export default {
	name: 'ProjectCard',
	props:{
		project: Object
	},
	data(){
			return{
				store
			}
		},
}
</script>
<template>
	<div class="card my-3">
		<div class="card-body">
			<div class="card-img-top mb-2">
				<img :src="project.cover_image != null ? `${store.Uri}/storage/${ project.cover_image}` : 'https://avatars.mds.yandex.net/i?id=8d48f296e8bb9995f9401bfaf34c93637815f6a2-8219873-images-thumbs&n=13'" :alt="project.title" class="img-fluid">
			</div>
			<div class="card-title">
				<h5>
					{{ project.title }}
				</h5>
				<em v-if="project.type">
					{{ project.type.name }}
				</em>
			</div>
			<div class="card-text">
				<p>
					{{ project.description }}
				</p>
				<ul v-if="project.technologies">
					<li v-for="technology in project.technologies" :key="technology.id">
						{{ technology.name }}
					</li>
				</ul>
			</div>
		</div>
	</div>			
</template>
<style lang="scss">

	.card{
		width: calc(100% / 3 - 1rem);
	}

</style>