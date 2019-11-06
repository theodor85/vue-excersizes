
var input_comp = Vue.component('input_comp', {
    template:`
    <div class="form-group">
        <label for="name">{{ name }}</label>
        <i v-if="showIcon" :class="iconClass" :style="iconStyle"></i>
        <input @input="onInput" type="text" class="form-control" :id="name" :value="value">
    </div>
    `,
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

});


var app = new Vue({
    el: '#app',
    data: {
        showresult: true,
        progress_bar_width: "width: 0%",
        isButtonDisabled: true,
        controls_is_valid: [],

        info: [
            {
                name: 'Name',
                value: 'sdfsdf',
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
    
    beforeMount(){
        for (let i = 0; i < this.info.length; i++) {
            this.controls_is_valid[i] = false
        }

    },

    methods: {
        onChangeInfo: function(index, data){
            this.info[index].value = data.new_value
            this.controls_is_valid[index] = data.is_valid
            
            // проверяем на валидность все поля и двигаем прогресс-бар
            completionPercentage = 0;
            for (let i = 0; i < this.controls_is_valid.length; i++) {

                if (this.controls_is_valid[i]){
                    completionPercentage += 1 / this.info.length *100;
                }
            }
            this.progress_bar_width = "width: " + Number( Math.round(completionPercentage) ) + "%"

            // управляем кнопкой в зависимости от заполненности полей
            if (Number( Math.round(completionPercentage) ) == 100){
                this.isButtonDisabled = false;
            }
            else{
                this.isButtonDisabled = true;
            }
        },

        sendData: function(){
            this.showresult = false
        },

    },

})