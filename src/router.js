// importo i metodi
import { createRouter, createWebHistory } from 'vue-router';
//importo le componenti rappresentanti le pagine
import HomePage from './pages/HomePage.vue';
import ProjectsList from './pages/ProjectsList.vue';
import SingleProject from './pages/SingleProject.vue';
//creo l'oggetto router
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'homepage',
			component: HomePage
		},
		{
			path: '/progetti',
			name: 'projectslist',
			component: ProjectsList
		},
		// rotta per la show
		{
			path: '/progetti/:slug', //nome del :parametro deve coincidere con quello inserito nella rotta in api.php
			name: 'singleproject',
			component: SingleProject
		}
	]
});
//esporto il router
export { router };

//lo importeremo in main.js