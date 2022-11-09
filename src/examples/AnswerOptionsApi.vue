<template>
    <div class="card text-center">
        <div class="card-header text-danger">
            Pregunta {{ answer.id }} / {{ len }}
        </div>
        <div class="card-body text-dark">
            <h5 class="card-title mb-4">{{ answer.answ }}</h5>

            <div v-for="res in answer.resp" :key="res.r" class="form-check d-flex justify-content-center mb-2">
                <input class="form-check-input me-2" type="radio" name="answer" :value="res.r">
                <label class="form-check-label">{{ res.text }}</label>
            </div>

            <a @click="onSubmit" class="btn btn-primary mt-3">Responder</a>
        </div>
        <div class="card-footer text-muted">2 days ago</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import comprobarResp from '@/api/respuestas-api'


export default {

    name: 'Answer',
    computed: {
        ...mapGetters(['answer', 'answers'])
    },
    methods: {
        onSubmit() {
            const resp = $("input[name='answer']:checked").val()
            if (!resp) return
            const compResp = comprobarResp(answer.value.id, resp)
            this.store.commit('updateAnswer', compResp)
            if (compResp) {
                this.router.push({ name: 'acierto' })
            } else {
                this.router.push({ name: 'error' })
            }
        }
    }
}

</script>

<style lang="scss" scoped>
.form-check-input:checked {
    background-color: #341948;
    border-color: #341948;
}
</style>