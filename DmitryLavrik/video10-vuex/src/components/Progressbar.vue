<template>
    <div class="progress" style="margin-bottom: 25px">
        <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
            :style="progress_bar_width"></div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            progress_bar_width: 'width: 25%',
        }
    },
}
</script>