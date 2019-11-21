<template>
    <div class="progress" style="margin: 25px 0 25px 0">
        <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
            :style="progress_bar_width"></div>
    </div>
</template>

<script>
export default {
    props: ['percentage'],
    data () {
        return {
        }
    },
    computed: {
        progress_bar_width(){
            return 'width: ' + this.percentage + '%';
        }
    }
}
</script>