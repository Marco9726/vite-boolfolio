<script>
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

</template>

<style lang="scss" scoped>

</style>
