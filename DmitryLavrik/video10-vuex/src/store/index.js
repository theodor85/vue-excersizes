import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		info: [
            {
                name: 'Name',
                value: '',
                pattern: /^[a-zA-Z ]{2,30}$/,
            },
            {
                name: 'Phone',
                value: '',
                pattern: /^[0-9]{7,14}$/,
            },
            {
                name: 'Email',
                value: '',
                pattern: /.+/,
            },
            {
                name: 'Some Field 1',
                value: '',
                pattern: /.+/,
            },
            {
                name: 'Some Field 2',
                value: '',
                pattern: /.+/,
            },
        ],
	},
});