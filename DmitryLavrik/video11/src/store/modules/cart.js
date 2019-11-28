export default {
	namespaced: true,
	state: {
		products: []
	},
	getters: {
		products(state){
			return state.products;
		},
		cnt(state){
			return state.products.length;
		},
		total(state){
			let sum = 0;
			for (let index = 0; index < state.products.length; index++) {
				const element = state.products[index];
				sum += element.price;
			}
			return sum
		},
	},
	mutations: {
		add(state, product){
			state.products.push(product);
		},
		remove(state, id){
			let pos = -1;
			for (let i = 0; i < state.products.length; i++) {
				const prod = state.products[i];
				if (prod.id == id){
					pos = i;
					break;
				}
			}

			if(pos !== -1){
				state.products.splice(pos, 1);
			}
		},
		clear(state){
			while(state.products.length > 0) {
				state.products.pop();
			}
		}
	},
	actions: {
		add(store, product){
			store.commit('add', product);
		},
		remove(store, id){
			store.commit('remove', id);
		},
		clear(store){
			store.commit('clear');
		},
	}
};