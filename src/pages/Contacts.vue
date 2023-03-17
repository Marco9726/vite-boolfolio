<script>
	import axios from 'axios';
	import { store } from '../store';
	export default {
		data(){
			return{
				store,
				//form
				name: '',
				surname: '',
				mail: '',
				phone: '',
				message: '',
				//
				errors: null,
				success: false,
				loading: false
			}
		},
		methods: {
			sendForm(){
				const data = {
					name: this.name,
					surname: this.surname,
					mail: this.mail,
					phone: this.phone,
					message: this.message
				}

				this.loading = true;

				axios.post(`${this.store.Uri}/api/contacts`, data).then((response) => {
					if(!response.data.success){
						this.errors = response.data.errors
					}
					else{
						this.name = '';
						this.surname = '';
						this.mail = '';
						this.phone = '';
						this.message = '';
						this.success = true;
						this.loading = false
					}
				})
			}
		}
	}
</script>

<template>
	<div class="container w-75">
		<div class="row">
			<div class="col-12 my-5">
				<h2 class="text-center">Pagina Contatti</h2>
			</div>
			<div class="col-12">
				<h4 class="text-center">Informazioni di contatto</h4>
				<div class="row">
					<div class="col-6 text-center">Telefono: 1111111111</div>
					<div class="col-6 text-center">Email: sjshsvstsysjw</div>
				</div>
			</div>
			<div class="col-12 my-5" v-if="success">
				email inviata con successo
			</div>
			<div class="col-12 my-5">
				<h4 class="text-center">Scrivici</h4>
				<form @submit.prevent="sendForm">
					<div class="row justify-content-center">
						<div class="col-12 col-md-6 my-2">
							<label for="inputName" class="control-label mb-1">Nome</label>
							<input type="text" class="form-control" name="name" id="inputName" placeholder="Inserisci il nome" v-model="name">
						</div>
						<div class="col-12 col-md-6 my-2">
							<label for="inputSurname" class="control-label mb-1">Cognome</label>
							<input type="text" class="form-control" name="surname" id="inputSurname" placeholder="Inserisci il cognome" v-model="surname">
						</div>
						<div class="col-12 col-md-6">
							<label for="inputMail" class="control-label mb-1">Email</label>
							<input type="mail" class="form-control" name="mail" id="inputMail" placeholder="Inserisci un'email" v-model="mail">
						</div>
						<div class="col-12 col-md-6">
							<label for="inputPhone" class="control-label mb-1">Telefono</label>
							<input type="phone" class="form-control" name="phone" id="inputPhone" placeholder="Inserisci il numero di telefono" v-model="phone">
						</div>
						<div class="col-12 my-3">
							<label for="textMessage" class="control-label mb-2 d-block">Lascia un messaggio</label>
							<textarea name="message" id="textMessage" class="form-control" cols="50" rows="5" v-model="message"></textarea>
						</div>
						<div class="col-12 text-center">
							<button type="submit" class="btn btn-success" :disabled="loading">{{ loading ? 'Invio email...' : 'Invia' }}</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	
</style>