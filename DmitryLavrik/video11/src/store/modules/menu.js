export default {
	namespaced: true,
	state: {
		items: [
			{
				url: '/products',
				text: 'Products List'
			},
			{
				url: '/cart',
				text: 'Your Cart'
			},
			{
				url: '/checkout',
				text: 'Order Now'
			},
			{
				url: '/my-orders',
				text: 'My orders'
			}
		]
	},
	getters: {
		items(state){
			return state.items;
		}
	}
};