<template>
	<div>
		<h1>Products</h1>
		<div class="row">
			<div class="col col-sm-4" 
			     v-for="(product, index) in products"
				 :key="index">
			    <router-link tag="h3" :to="'/products/' + product.id">
				    <a>{{ product.title }}</a>
				</router-link>
				<div>{{ product.price }}</div>
				<button v-if="!productIsInCart(product.id)"
						@click="addToCart(product)"
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
		</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';

	export default {
		created(){
			//this.$store.dispatch('products/loadItems');
		},
		computed: {
			...mapGetters('products', {
				products: 'items'
			}),
			...mapGetters('cart', {
				inCart: 'products'
			})
		},
		methods: {
			...mapActions('cart', {
				addToCart: 'add',
				removeFromCart: 'remove'
			}),
			productIsInCart(id){
				for (let i = 0; i < this.inCart.length; i++) {
					const element = this.inCart[i];
					if (element.id == id) {
						return true;
					}
				}
				return false;
			},
		}
	}
</script>

<style scoped>
	.row{
		padding-left: 15px;
	}
</style>