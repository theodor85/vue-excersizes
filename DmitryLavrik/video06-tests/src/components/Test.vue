<template>
    <div class="container" style="margin: 20px">
        <h3>{{ title }}</h3>
        <hr>
        <form>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                <label class="form-check-label" for="defaultCheck1">
                    Default checkbox
                </label>
            </div>

            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                <label class="form-check-label" for="exampleRadios1">
                    Default radio
                </label>
            </div>
            <button type="button" class="btn btn-success" style="margin-top: 10px">Далее</button>
        </form>

    </div>
</template>

<script>
export default {
    props: {
        title: String,
        answers: Array,
    }
}
</script>