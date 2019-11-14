<template>
  <div id="app" class="container" style="margin: 50px">
    <header username="username"></header>
    <statusbar></statusbar>
    <appform v-if="!showresult"></appform>
    <result v-else></result>
  </div>
</template>

<script>

import header from './components/Header';
import appform from './components/AppForm';
import result from './components/Result';

export default {
  name: 'app',
  components: {
    header,
    appform,
    result,
  },
  data () {
    return {
      showresult: true,
      username: '',
    }
  },
}
</script>

<style>
</style>
