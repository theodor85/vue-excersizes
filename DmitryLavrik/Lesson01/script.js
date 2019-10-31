var app = new Vue({
    el: '#app',
    data: {
        guests: [],
        email: '',
        firstname: '',
        lasttname: '',
        phone: '',
        showTable: false,
    },
    methods: {
        addGuest: function(){
            this.guests.push("")
        },
        deleteGuest: function(index){
            this.guests.splice(index, 1)
        },
        sendForm: function(){
            this.showTable = true
        },
    }
})