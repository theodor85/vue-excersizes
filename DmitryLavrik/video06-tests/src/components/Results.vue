<template>
    <div class="container">
        <table class="table">
            <thead>
                <tr>
                    <th>Вопрос</th>
                    <th>Ваш ответ</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(qwestion, index) in questions" :key="index">
                    <td>{{ qwestion }}</td>
                    <td>{{ answers[index] }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        questions: Array,
        answers: Array,
    }
}
</script>