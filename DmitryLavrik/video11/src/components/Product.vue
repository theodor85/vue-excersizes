<template>
	<div>
		<h1>{{ product.title }}</h1>
		<router-link :to="{name: 'products'}">Back to products</router-link>
		<hr>
		<div class="alert alert-success">
			{{ product.price }}
		</div>
		<button v-if="inCart.indexOf(product.id) === -1"
						@click="addToCart(product.id)"
						class="btn btn-primary"
						>
					Add to cart
				</button>
				<button v-else
						@click="removeFromCart(product.id)"
						class="btn btn-warning"
				>
					Remove from cart
				</button>
	</div>
</template>

<script>

import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';

export default {
	computed: {
		id(){
			return this.$route.params.id;
		},
		product(){
			return this.$store.getters['products/item'](this.id);
		},
		...mapGetters('cart', {
			inCart: 'products'
		}),

	},
	methods: {
		...mapActions('cart', {
			addToCart: 'add',
			removeFromCart: 'remove'
		})
	}
}

</script>