import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import menu from './modules/menu';
import products from './modules/products';
import cart from './modules/cart';
import orders from './modules/orders';

export const store = new Vuex.Store({
	modules: {
		menu,
		products,
		cart,
		orders,
	},
	strict: process.env.NODE_ENV !== 'production'
});