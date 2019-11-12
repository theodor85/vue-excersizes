<template>
    <div v-if="render" class="container" style="margin: 20px">

        <form> 
            <transition name="slide" mode="out-in">
            
            <div v-if="tests[currentTest].type=='checkbox'" key="qwe">
                <h3>{{ tests[currentTest].title }}</h3>
                <hr>
                <div class="form-check"
                    :key="index"
                    v-for="(answer, index) in tests[currentTest].answers">
                    <input class="form-check-input" 
                        type="checkbox" :value="answer" :id="'id'+index"
                        @click="onInputClick">
                    <label class="form-check-label" for="'id'+index">
                        {{ answer }}
                    </label>
                </div>
            </div>

            <div v-if="tests[currentTest].type=='radio'" key="asd">
                <h3>{{ tests[currentTest].title }}</h3>
                <hr>
                <div class="form-check"
                    :key="index"
                    v-for="(answer, index) in tests[currentTest].answers">
                    <input class="form-check-input" type="radio" 
                        name="radio" :id="'id'+index"
                        :value="answer"
                        @click="onInputClick">
                    <label class="form-check-label" :for="'id'+index">
                        {{ answer }}
                    </label>
                </div>
            </div>

            </transition>
            
            <button type="button" class="btn btn-success" 
                style="margin-top: 10px"
                @click="OnNextClick"
                :disabled="btn_disabled"
                >Далее</button>
        </form>
        
        
    </div>
</template>

<script>
export default {
    data(){
        return  {
            btn_disabled: true,
            render: true,
        }
    },
    props: {
        tests: Array,
        currentTest: {
            type: Number,
        },
        
    },
    methods: {
        OnNextClick(e){

            // получаем список ответов или один ответ, если radio
            let user_answer = [];

            let is_radio = this.tests[this.currentTest].type == 'radio'
            let len = this.tests[this.currentTest].answers.length;
            
            for (let i = 0; i < len; i++) {
                const element = document.getElementById('id'+i);
                if (element.checked){
                    if (is_radio)
                        user_answer = element.value;
                    else
                        user_answer.push(element.value);
                }
                
            }
            this.$emit('next', {
                endedTest: this.currentTest,
                answer: user_answer
            });
            this.btn_disabled = true;
        },
        onInputClick(){
            // активируем/деактивируем кнопку

            // изначально кнопка деактивирована
            this.btn_disabled = true;
            
            // проходим по всем вариантам ответов, 
            // если хоть один выбран, ставим true
            let len = this.tests[this.currentTest].answers.length;
            for (let i = 0; i < len; i++) {
                const element = document.getElementById('id'+i);
                if (element.checked){
                    this.btn_disabled = false;
                }
            }

            return this.btn_disabled;
        }
    },
}
</script>

<style>
	.slide-enter{
		
	}

	.slide-enter-active{
		animation: test-slideIn 0.5s;
	}

	.slide-enter-to{
		
	}

	.slide-leave{
		
	}

	.slide-leave-active{
		animation: test-slideOut 0.5s;
	}

	.slide-leave-to{
		
	}

	@keyframes test-slideIn{
		from{transform: translateX(100vw);}
		to{transform: translateX(0vw);}
	}

	@keyframes test-slideOut{
		from{transform: translateX(0px);}
		to{transform: translateX(-100vw);}
	}

</style>