<template>
    <div class="result">
        <table class="table table-bordered">
            <tbody>
            <tr v-for="(item, index) in info" :key="index">
                <td>{{ item['name'] }}</td>
                <td>{{ item['value'] }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data () {
        return {
            info: [],
        }
    },
}
</script>