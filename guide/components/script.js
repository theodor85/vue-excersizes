Vue.component('blog-post', {
    props: ['title'],
    template: '<li>{{ title }}</li>'
  })

var app = new Vue({
    el: '#demo',
    data: {
        posts: [
            { id: 1, title: 'My journey with Vue' },
            { id: 2, title: 'Blogging with Vue' },
            { id: 3, title: 'Why Vue is so fun' },
            { id: 4, title: 'Lorem sdfsd sdkka a' }
        ]
        
    }
});