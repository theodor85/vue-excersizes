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

            <button type="button" class="btn btn-success"
                @click="sendData" 
                :disabled="isButtonDisabled">Send data</button>
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
        }
    },

    methods:{
        sendData(){
            this.$emit('send', {

            });
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