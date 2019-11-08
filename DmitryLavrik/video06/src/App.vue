<template>
  <div class="container" style="margin-top: 50px">
                
    <!-- Исходная форма -->
    <form v-if="!showresult">
        <div class="progress" style="margin-bottom: 25px">
            <div class="progress-bar" role="progressbar" :style="progress_bar_width" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        

        <app-input v-for="(item, index) in info" :key="index"
            :name="item.name"
            :value="item.value"
            :pattern="item.pattern"
            @changeinfo="onChangeInfo(index, $event)"
            ></app-input>
        

        <button v-on:click="sendData" v-bind:disabled="isButtonDisabled" type="button" class="btn btn-success">Send data</button>
    </form>
    
    <!-- Таблица с результатом -->
    <div class="result" v-else>
        <table class="table table-bordered">
            <tbody>
            <tr v-for="(item, index) in info" :key="index">
                <td>{{ item['name'] }}</td>
                <td>{{ item['value'] }}</td>
            </tr>
            </tbody>
        </table>
    </div>
    

</div>
</template>

<script>

import AppInput from "./components/Input";


export default {
    data(){
      return {
        showresult: false,
        progress_bar_width: "width: 0%",
        isButtonDisabled: true,
        controls_is_valid: [],

        info: [
            {
                name: 'Name',
                value: '',
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
      }  
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
            let completionPercentage = 0;
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
            this.showresult = true
        },

    },

  components: {
    AppInput,
  }
  
}

</script>
