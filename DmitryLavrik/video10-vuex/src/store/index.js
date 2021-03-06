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
                status: false,
            },
            {
                name: 'Phone',
                value: '',
                pattern: /^[0-9]{7,14}$/,
                status: false,
            },
            {
                name: 'Email',
                value: '',
                pattern: /.+/,
                status: false,
            },
            {
                name: 'Some Field 1',
                value: '',
                pattern: /.+/,
                status: false,
            },
            {
                name: 'Some Field 2',
                value: '',
                pattern: /.+/,
                status: false,
            },
        ],
        username: '',
        showresult: false,
    },
    
    getters: {
        info(state){
            return state.info;
        },
        readyPercentage(state){
            let result = 0
            for (let index = 0; index < state.info.length; index++) {
                const element = state.info[index];
                if (element['status'])                 
                    result += Number(1 / state.info.length * 100);
            }   
            return result;
        },
        name(state){
            return state.username;
        },
        showresult(state){
            return state.showresult;
        }
    },

    mutations: {
        setValue(state, item){
            state.info[item.index].value = item.value;
            state.info[item.index].status = item.status;
        }
    },

    actions: {
		send(store, payload){
			
			setTimeout(() => {
				console.log(payload);
                store.state.username = store.state.info[0].value;
                store.state.showresult = true;
			}, 3000);
		}
	},

});