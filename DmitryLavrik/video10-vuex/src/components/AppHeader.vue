<template>
    <div>
        <h2>Привет, {{ printable_username }}!</h2>
        <hr>
    </div>
</template>

<script>
export default {
    props: ['username'],
    computed: {
        printable_username(){
            return (this.username == '') ?  'noname' : this.username;
        }
    },
}
</script>