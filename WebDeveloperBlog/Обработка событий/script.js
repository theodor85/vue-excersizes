var app = new Vue({
    el: '#app',
    data: {
        url: "https://youtube.com/",
        cleanUrl: ""
    },
    methods: {
        cleanerUrl: function(){
            this.cleanUrl = this.url.replace(/^https:?:\/\//, '').replace(/\/$/, '')
        }
    }
})