<template>
  <div id="app" class="container" style="margin: 50px">
    <appheader :username="name"></appheader>
    <progressbar v-if="!showresult" :percentage="readyPercentage"></progressbar>
    <appform v-if="!showresult"></appform>
    <result v-else></result>
  </div>
</template>

<script>

import appheader from './components/AppHeader';
import appform from './components/AppForm';
import result from './components/Result';
import progressbar from './components/Progressbar';

import {mapGetters} from 'vuex';

export default {
  name: 'app',
  components: {
    appheader,
    appform,
    result,
    progressbar,
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
        'readyPercentage',
        'name',
        'showresult',
			]),
  },
  methods: {
  }
}
</script>

<style>
</style>
