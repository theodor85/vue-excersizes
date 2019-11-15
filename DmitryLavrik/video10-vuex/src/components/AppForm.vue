<template>
    <div>
        <form>
            <appinput 
                v-for="(item, index) in info"
                :name="item['name']"
                :value="item['value']"
                :pattern="item['pattern']"
                :key="index"></appinput>

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
			]),
        isButtonDisabled(){
            return false;
        }
    },

    methods:{
        sendData(){
            alert('OK')
        }
    }
}
</script>