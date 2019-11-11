<template>
  <div id="app" class="container">
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

