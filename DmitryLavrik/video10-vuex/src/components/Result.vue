<template>
    <div class="result">
        <table class="table table-bordered" style="margin-top: 25px">
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
import {mapGetters} from 'vuex';

export default {
    data () {
        return {
        }
    },

    computed: {
        ...mapGetters([
			'info',
		]),
    },
}
</script>