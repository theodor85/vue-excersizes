<template>
  <div class="form-group">
    <label for="name">{{ name }}</label>
    <i v-if="showIcon" :class="iconClass" :style="iconStyle"></i>
    <input @input="onInput" type="text" class="form-control" :id="name" :value="value">
  </div>
</template>

<script>
export default {
    props: ['name', 'value', 'pattern'],
    data(){
        return {
            showIcon: false,
        }
    },
    methods: {
        onInput(e){
            this.$emit('changeinfo', {
                new_value: e.target.value,
                is_valid: this.pattern.test( e.target.value ),
            });
            this.showIcon = true
        },
    },
    
    computed: {
        iconClass() {
            return this.pattern.test( this.value ) ?  "fas fa-check-circle" : "fas fa-exclamation-circle"
        },
        iconStyle() {
            return this.pattern.test( this.value ) ?  "color: green" : "color: red"
        },
    }
}
</script>