// importo i metodi
import { createRouter, createWebHistory } from 'vue-router';
//importo le componenti rappresentanti le pagine
import HomePage from './pages/HomePage.vue';
//creo l'oggetto router
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'homepage',
			component: HomePage
		}
	]
});
//esporto il router
export { router };

//lo importeremo in main.js