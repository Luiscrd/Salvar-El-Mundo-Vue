<template>
    <div class="card text-center">
        <div class="card-header text-danger">Error</div>
        <div class="card-body text-dark">
            <h1 class="card-title mb-4 mt-5">Has fallado la pregunta!!</h1>

            <h2>Cada vez estamos mas cerca de la extinción!!</h2>

            <a @click="next" class="btn btn-primary mt-3">Siguiente</a>
        </div>
        <div class="card-footer text-muted">{{ fecha }}</div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {
    name: 'Fallo',
    setup() {
        const store = useStore()
        const router = useRouter()
        const preguntaActual = computed(() => store.getters['preguntaActual'])
        const fecha = ref(new Date().toUTCString())
        const next = () => {
            if (preguntaActual.value === 11) router.push({name: 'fin'})
            router.push({ name: 'answer', params: {id: preguntaActual.value}})
        }
        return {
            next,
            fecha
        }
    },
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