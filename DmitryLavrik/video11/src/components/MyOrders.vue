<template>
	<div>
		<h1>My orders</h1>
		<hr>
		<div v-if="empty"
			class="alert alert-warning">
			You haven't any orders
		</div>
		<template v-else>
            <table class="table table-bordered">	
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Products</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(order, index) in orders"
                        :key="index">
                        <td>{{ order.name }}</td>
                        <td>{{ order.phone }}</td>
                        <td>{{ order.email }}</td>
                        <td>{{ order.total }}</td>
                    </tr>
                </tbody>	
            </table>
		</template>
	</div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
	computed: {
		...mapGetters('orders', {
			orders: 'items'
		}),
		empty(){
			return this.orders.length === 0;
		},
	},
}
</script>