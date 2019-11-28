import Vue from 'vue';

export default {
	namespaced: true,
	state: {
		items: [],
	},
	getters: {
		items(state){
			return state.items;
		}
	},
	mutations: {
		loadItems(state, data){
			state.items = data;
		},
		addOrder(state, order){
			state.items.push(order);
		}
	},
	actions: {
		sendOrder(store, orderData){
			console.log(orderData);
			store.commit('addOrder', orderData);
			Vue.http.post('orders/', orderData)
			 	.then(res => {
					 console.log(res.status)
				});
		},
		getOrders(store) {
			Vue.http.get('orders/')
					  .then(response => response.json())
					  .then(data => {
					  	 store.commit('loadItems', data);
					  });
		}
	}
};