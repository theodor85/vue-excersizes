var app = new Vue({
    el: '#app',
    data: {
        showresult: true,
        progress_bar_width: "width: 0%",
        isButtonDisabled: true,

        info: [
            {
                name: 'Name',
                value: '',
                pattern: /^[a-zA-Z ]{2,30}$/,
                noIconDisplay: true,
            },
            {
                name: 'Phone',
                value: '',
                pattern: /^[0-9]{7,14}$/,
                noIconDisplay: true,
            },
            {
                name: 'Email',
                value: '',
                pattern: /.+/,
                noIconDisplay: true,
            },
            {
                name: 'Some Field 1',
                value: '',
                pattern: /.+/,
                noIconDisplay: true,
            },
            {
                name: 'Some Field 2',
                value: '',
                pattern: /.+/,
                noIconDisplay: true,
            },
        ],
    },
    
    // хуки
    updated: function(){
        
        // проверяем на валидность все поля и двигаем прогресс-бар
        completionPercentage = 0;
        for (let i = 0; i < this.info.length; i++) {
            const item = this.info[i];

            if (this.isFieldValid(item)){
                completionPercentage += 1 / this.info.length *100;
            }

            // если элемент пустой, то убираем и значок путём установки noIconDisplay
            if (item['value']==''){
                item['noIconDisplay'] = true;
            }
            else{
                item['noIconDisplay'] = false;
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

    methods: {
        sendData: function(){
            this.showresult = false
        },
        isFieldValid: function(item){
            return item['pattern'].test( item['value'] )
        },
        getIconClass: function(item){
            
            if(item['noIconDisplay']){
                return ""
            }
            
            if (this.isFieldValid(item)) {
                return "fas fa-check-circle";
            } else {
                return "fas fa-exclamation-circle";
            }
        },
        getIconStyle: function(item){
            
            if(item['noIconDisplay']){
                return "display: 'none'"
            }
            
            if (this.isFieldValid(item)) {
                return {
                    color: 'green',
                    display: 'inline'
                }
            } else {
                return {
                    color: 'red',
                    display: 'inline'
                }
            }
        }
    },

    computed: {
        
    }
})