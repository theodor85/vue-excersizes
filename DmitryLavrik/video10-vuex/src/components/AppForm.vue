<template>
    <div>
        <form>
            <appinput 
                v-for="(item, index) in info"
                :name="item['name']"
                :value="item['value']"
                :pattern="item['pattern']"
                :key="index"
                @changefield="onChangeField(index, $event)"></appinput>

            <button type="button" :class="btnClass"
                @click="sendData" 
                :disabled="isButtonDisabled">{{ btnLabel}}</button>
        </form> 
        
    </div> 
</template>

<script>

import appinput from './AppInput';

import {mapGetters} from 'vuex';

export default {
    components: {
        appinput,
    },
    
    data () {
        return {
            btnClass: 'btn btn-primary',
            btnLabel: 'Send data',
        }
    },

    computed: {
        ...mapGetters([
            'info',
            'readyPercentage',
		]),
        isButtonDisabled(){
            if (this.readyPercentage==100)
                return false;
            else return true;
        },
    },

    methods:{
        sendData(){
            this.btnClass = 'btn btn-secondary';
            this.btnLabel = 'Loading...',
            this.$store.dispatch('send');
        },
        onChangeField(index, data){

            this.$store.commit('setValue', {
					index: index,
                    value: data['new_value'],
                    status: data.is_valid,
				});
        }
    }
}
</script>