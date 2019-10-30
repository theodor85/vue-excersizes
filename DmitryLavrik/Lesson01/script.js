var app = new Vue({
    el: '#app',
    data: {
        guests: [],
        email: '',
        firstname: '',
        lasttname: '',
        phone: '',
        showTable: true,
    },
    methods: {
        addGuest: function(){
            this.guests.push("")
        },
        deleteGuest: function(index){
            this.guests.splice(index, 1)
        },
        changeGuest: function(index){
            this.guests[index] = document.getElementById(index).value
        },
    }
})