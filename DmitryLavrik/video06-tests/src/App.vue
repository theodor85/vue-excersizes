<template>
  <div id="app" class="container">
    <transition enter-active-class="animated rotateIn"
      leave-active-class="animated rotateOut"
      mode="out-in" appear>
      <test 
        v-if="!showResults"
        :current-test="currentTest" 
        :tests="quests"
        @next="onNext($event)"
        ></test>
      
      <results v-else
        :questions="quests"
        :answers="answers"
      ></results>
    </transition>
  </div>
</template>

<script>

import results from './components/Results';
import test from './components/Test'

export default {
  name: 'app',
  data () {
    return {
      currentTest: 0,
      answers: [],
      showResults: false,

      quests: [
        {
          type: 'radio',
          title: 'Какой тег задаёт ссылку?',
          answers: [
            'a', 'div', 'span', 'img',
          ],
        },
        {
          type: 'checkbox',
          title: 'Какие из тегов строчные?',
          answers: [
            'a', 'div', 'span', 'img',
          ],
        },
      ],
    }
  },
  components: {
    results,
    test
  },
  methods: {
    onNext(data){
      this.$set(this.answers, data.endedTest, data.answer);

      if (this.currentTest+1>=this.quests.length){
        this.showResults = true
      }
      else{
        this.currentTest += 1;
      }
      
    }
  }
}

</script>

<style>
	.boom-enter{
		
	}

	.boom-enter-active{
		animation: slideIn 0.5s;
	}

	.boom-enter-to{
		
	}

	.boom-leave{
		
	}

	.boom-leave-active{
		animation: slideOut 0.5s;
	}

	.boom-leave-to{
		
	}

	@keyframes slideIn{
		from{transform: translateY(-100vw);}
		to{transform: translateY(0px);}
	}

	@keyframes slideOut{
		from{transform: translateY(0px);}
		to{transform: translateY(100vw);}
	}

</style>