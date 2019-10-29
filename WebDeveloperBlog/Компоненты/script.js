Vue.component('book', {
    template:'#books',
    props: ['title', 'author', 'content']
});

var app = new Vue({
    el: '#app',
    data: {
        author: 'Дронов',
        title: 'Прауууктика создания на Джанго',
        content: 'Flkj sldkjf  sdlkfjasldjf'
    }
});