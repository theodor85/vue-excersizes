<template>
    <div class="container">
        <h1>Привет, {{ printable_username }}!</h1>
    </div>
</template>

<script>
export default {
    props: ['username'],
    computed: {
        printable_username(){
            return (username == '') ?  'noname' : username;
        }
    },
}
</script>