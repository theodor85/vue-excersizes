<template>
	<div v-if="!cartIsEmpty">
		<h1>Order now</h1>
		<hr>
		<h3>Your cart:</h3>
		<ordertable></ordertable>
		<hr>
		<h3>Your data:</h3>
		<formorder @senddata="sendData"></formorder>
		
	</div>
	<div v-else>
		<h1>Order now</h1>
		<hr>
		<p class="alert alert-warning">Your cart is empty! Nothing to order.</p>
	</div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

import formorder from './FormOrder';
import ordertable from './OrderTable';

export default {
	components: {
		formorder,
		ordertable,
	},
	data(){
		return {
			cartIsEmpty: this.cnt == 0,
		}
	},
	computed: {
		...mapGetters('cart', {
			products: 'products',
			cnt: 'cnt',
		}),
	},
	methods: {
		sendData(data){
			orderData = {
				name: data.name,
				phone: data.phone,
				email: data.email,
				products: this.products,
			}
		},
		...mapActions('orders', {
			sendOrder: 'sendOrder',
		}),
	},
}
</script>