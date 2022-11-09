<template>
    <div class="card text-center">
        <div class="card-header text-danger">Acierto</div>
        <div class="card-body text-dark d-flex flex-column align-items-center">
            <h1 class="card-title mb-4 mt-5">Bien!!, has acertado</h1>

            <h2>Sigue así y podremos salvarnos</h2>

            <a @click="next" class="btn btn-primary mt-4">Siguiente</a>
        </div>
        <div class="card-footer text-muted">{{ fecha }}</div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {
    name: 'Acierto',
    setup() {
        const store = useStore()
        const router = useRouter()
        const preguntaActual = computed(() => store.getters['preguntaActual'])
        const fecha = ref(new Date().toUTCString())

        return {
            next: () => {
                if (preguntaActual.value === 11) {
                    router.push({ name: 'fin' })

                } else {
                    router.push({ name: 'answer', params: {id: preguntaActual.value}})
                }
            },
            fecha
        }
    }
}
</script>

<style lang="scss" scoped>
.form-check-input:checked {
    background-color: #341948;
    border-color: #341948;
}

.card{
    height: 377px;
}
</style>