<template>
    <div>
        <form>
            <appinput v-for="(item, index) in info" :key="index"></appinput>

            <button type="button" class="btn btn-success"
                @click="sendData" 
                :disabled="isButtonDisabled">Send data</button>
        </form> 
        
    </div> 
</template>

<script>

import appinput from './AppInput';

export default {
    components: {
        appinput,
    },
    
    data () {
        return {
            info: [],
        }
    },
}
</script>