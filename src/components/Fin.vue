<template>
    <div class="card text-center">
        <div class="card-header text-danger">{{ msg }}</div>
        <div class="card-body text-dark">
            <h5 class="card-title mb-4">{{ msg2 }}</h5>
            <h1 class="multipleStrings"></h1>
            <a class="btn btn-primary mt-3" @click="nuevoJuego">Volver a empezar</a>
        </div>
        <div class="card-footer text-muted">Fin del jueo</div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { mapState, useStore } from 'vuex'
import { computed } from 'vue'
import TypeIt from "typeit";

export default {
    name: 'Formulario',
    setup() {
        const router = useRouter()
        const store = useStore()
        const porcentaje = computed(() => store.getters['porcentaje'])
        const msg = porcentaje > 50 ? 'Bien Hecho' : 'Estamos perdidos'
        const msg2 = porcentaje > 50 ? 'Nos has salvado' : 'Acabas de matarnos'
        const nuevoJuego = () => {
            store.commit('empezarDeNuevo')
            router.push({ name: 'index' })
        }

        return {
            msg,
            msg2,
            nuevoJuego
        }
    },
    computed: {
        ...mapState(['porcentaje'])
    },
    mounted() {
        if (this.porcentaje > 50) {
            new TypeIt(".multipleStrings", {
                strings: [
                    "Has conseguido salvar la humanidad.<br>",
                    "Gracias a ti no seremos aniquilados.<br>",
                    "Nos vemos dentro de muchos años.",
                ],
                speed: 70
            }).go()
        } else {
            new TypeIt(".multipleStrings", {
                strings: [
                    "No has superado la prueba.<br>",
                    "En un futuro, la humanidad dejará de existir sin remedio."
                ],
                speed: 70
            }).go()
        }
    }
}
</script>

<style lang="scss" scoped>
.form-check-input:checked {
    background-color: #341948;
    border-color: #341948;
}

.card {

}

.multipleStrings {
    font-size: 1.6em;
    text-align: left;
    width: 80%;
    margin: 0 10%;
    margin-bottom: 30px;
}


@media screen and (max-width: 420px) {


    .box-center {
        min-height: calc(100vh - 140px);
    }

    .container {
        padding-right: 30px;
        padding-left: 30px;
    }

    .multipleStrings {
        font-size: 1.1em;
        width: 90%;
        margin: 0 5%;
        margin-bottom: 30px;
    }
}
</style>