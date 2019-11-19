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
	},
	mutations: {
		add(state, id){
			if(state.products.indexOf(id) === -1){
				state.products.push(id);
			}
		},
		remove(state, id){
			let pos = state.products.indexOf(id);

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
		add(store, id){
			store.commit('add', id);
		},
		remove(store, id){
			store.commit('remove', id);
		},
		clear(store){
			store.commit('clear');
		},
	}
};