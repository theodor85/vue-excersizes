<template>
  <div id="app">
    <results
      :questions="questions"
      :answers="answers"
    ></results>
  </div>
</template>

<script>

import results from './components/Results';

export default {
  name: 'app',
  data () {
    return {
      questions: [
        'Сколько будет 2х2?',
        'Сколько будет 3х5?',
      ],
      answers: [
        'Это будет 4',
        'А это 15',
      ],
    }
  },
  components: {
    results
  },
}

function getQuests(){
  return [
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
  ];
}

</script>

