<template>
    <div class="card text-center">
        <div class="card-header text-danger">
            Pregunta {{ answer.id }} / {{ len }}
        </div>
        <div class="card-body text-dark">
            <h5 class="card-title mb-4">{{ answer.answ }}</h5>
            <div class="">
                <div v-for="res in answer.resp" :key="res.r" class="form-check mb-2">
                    <input class="form-check-input me-3" type="radio" name="answer" :value="res.r">
                    <label class="form-check-label">{{ res.text }}</label>
                </div>
            </div>

            <a @click="onSubmit" class="btn btn-primary mt-3">Responder</a>
        </div>
        <div class="card-footer text-muted">{{ fecha }}</div>
    </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import comprobarResp from '@/api/respuestas-api'
import { computed, ref } from 'vue'

export default {
    name: 'Formulario',
    props: {
        id: {
            type: String,
            required: true
        }
    },
    components: {},
    setup() {
        const route = useRoute()
        const id = route.params.id
        const router = useRouter()
        const store = useStore()
        const len = store.getters['answers'].length
        // const answer = computed(() => store.getters['answer'])
        const answer = computed(() => store.getters['answerById'](+id))
        const preguntaActual = computed(() => store.getters['preguntaActual'])
        const fecha = ref(new Date().toUTCString())

        const onSubmit = () => {
            const resp = $("input[name='answer']:checked").val()
            if (!resp) return
            const compResp = comprobarResp(answer.value.id, resp)
            if (preguntaActual === 11) router.push({ name: 'fin' })

            if (compResp) {
                router.push({ name: 'acierto' })
            } else {
                router.push({ name: 'error' })
            }
            store.commit('updateAnswer', compResp)
        }

        return {
            answer,
            len,
            onSubmit,
            fecha
        }
    },
    mounted() {

    }
}
</script>

<style lang="scss" scoped>
.form-check-input:checked {
    background-color: #341948;
    border-color: #341948;
}

.form-check {
    text-align: left;
    margin-left: 40px;
    width: 70%;
}

.form-check-input{
        margin-right: 0 !important;
    }

// .card{
//     height: 377px;
// }

@media screen and (max-width: 420px) {
    .form-check {
        text-align: left;
        margin-left: 20px;
    }

}
</style>