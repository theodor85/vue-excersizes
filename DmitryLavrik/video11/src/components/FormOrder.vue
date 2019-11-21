<template>
	<div>
		<progressbar :percentage="readyPercentage"></progressbar>
        <form>  
            <appinput 
                v-for="(item, index) in info"
                :name="item['name']"
                :value="item['value']"
                :pattern="item['pattern']"
                :key="index"
                @changefield="onChangeField(index, $event)"></appinput>

            <button type="button" class="btn btn-primary"
                @click="sendData" 
                :disabled="isButtonDisabled">Send order</button>
        </form> 
    </div>
</template>

<script>
import appinput from './AppInput';
import progressbar from './Progressbar'

export default {
    components: {
        appinput,
        progressbar,
    },
    computed: {
        isButtonDisabled(){
            if (this.readyPercentage==100)
                return false;
            else return true;
        },
        readyPercentage(){
            let result = 0
            for (let index = 0; index < this.info.length; index++) {
                const element = this.info[index];
                if (element['status'])                 
                    result += Number(1 / this.info.length * 100);
            }   
            return Math.round(result);
        },
    },
    methods: {
        sendData(){
            this.$emit('senddata', {
                name: this.info[0].value,
                phone: this.info[1].value,
                email: this.info[2].value,
            })
        },
        onChangeField(index, data){
            this.info[index].value = data['new_value'];
            this.info[index].status = data['is_valid'];

        },
    },
    data(){
        return {
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
            ]
        }
    }
}
</script>