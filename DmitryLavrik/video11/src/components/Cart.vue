<template>
	<div>
		<h1>Cart</h1>
		<hr>
		<div v-if="empty"
			class="alert alert-warning">
			Your cart is empty
		</div>
		<template v-else>
			<ordertable></ordertable>
			<button @click="onOrder"
					class="btn btn-success"
					>
				Order Now
			</button>
			<button @click="clearCart"
					class="btn btn-warning"
					>
				Clear Cart
			</button>
		</template>
	</div>
</template>

<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';

import ordertable from "./OrderTable";

export default {
	components: {
		ordertable,
	},
	computed: {
		...mapGetters('products', {
			productsAll: 'items'
		}),
		...mapGetters('cart', {
			productsInCart: 'products',
		}),
		products(){
			return this.productsAll.filter((elem) => {
				return this.productsInCart.indexOf(elem.id) !== -1;
			});
		},
		empty(){
			return this.products.length === 0;
		},
	},
	methods: {
		onOrder(){
			this.$router.push('/checkout');
		},
		...mapActions('cart', {
			clearCart: 'clear',
		}),
	}
}
</script>