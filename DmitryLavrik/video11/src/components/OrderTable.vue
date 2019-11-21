<template>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>Title</th>
                <th>Price</th>
            </tr>
        </thead>	
        <tbody>
            <tr v-for="(product, index) in products"
                :key="index">
                <td>{{ product.title }}</td>
                <td>{{ product.price }}</td>
            </tr>
            <tr class="bg-primary">
                <td>Total</td>
                <td>{{ total }}</td>
            </tr>
        </tbody>	
    </table>
</template>

<script>
	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';

	export default {
		computed: {
			...mapGetters('products', {
				productsAll: 'items'
			}),
			...mapGetters('cart', {
				productsInCart: 'products'
			}),
			products(){
				return this.productsAll.filter((elem) => {
					return this.productsInCart.indexOf(elem.id) !== -1;
				});
			},
			empty(){
				return this.products.length === 0;
			},
			total(){
				let sum = 0;
				for (let index = 0; index < this.products.length; index++) {
					const element = this.products[index];
					sum += element.price;
				}
				return sum
			}
		},
	}
</script>