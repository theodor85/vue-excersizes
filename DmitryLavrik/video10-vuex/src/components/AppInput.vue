<template>
    <div class="form-group">
        <label for="name">{{ name }}</label>
        <i v-if="showIcon" 
            :class="iconClass" 
            :style="iconStyle"></i>
        <input type="text" class="form-control"
            @input="onInput"
            :id="name" 
            :value="value">
    </div>
</template>

<script>
export default {
    props: ['name', 'value', 'pattern'],
    data(){
        return {
            showIcon: false,
            iconClass: '',
            iconStyle: '',
        }
    },
    methods: {
        onInput(e){
            this.iconStyle = this.pattern.test( e.target.value ) ?  "color: green" : "color: red";
            this.iconClass = this.pattern.test( e.target.value ) ?  "fas fa-check-circle" : "fas fa-exclamation-circle";
            this.showIcon = true;
            this.$emit('changefield', {
                new_value: e.target.value,
                is_valid: this.pattern.test( e.target.value ),
            });
            
        },
    },
    
    computed: {
    }
    
}
</script>