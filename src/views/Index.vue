<template>
    <div class="box-center d-flex align-items-center">
        <div class="container mt-5 mb-5">
            <h1 class="multipleStrings"></h1>
            <button type="button" class="btn btn-primary mt-5" @click="inicio" :disabled="btnDisabled">Empezar el
                cuestionario</button>
        </div>
    </div>

</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'
import TypeIt from "typeit";

export default {
    name: 'Index',
    setup() {
        const router = useRouter()
        const store = useStore()
        const btnDisabled = ref(false)
        const preguntaActual = computed(() => store.getters['preguntaActual'])
        const inicio = () => {
            router.push({ name: 'answer', params: { id: preguntaActual.value } })
        }
        return {
            btnDisabled,
            inicio
        }
    },
    mounted() {
        new TypeIt(".multipleStrings", {
            strings: [
                "Hola, me llamo Luis, vengo del futuro para salvar a la humanidad de una extinción inminente.<br>",
                "Solo tú puedes evitarlo, pero para ello debes responder correctamente a una serie de preguntas.<br>",
                "El tiempo es limitado, dado que la energía que me mantiene en esta línea temporal durará 3 minutos.<br>",
                "Confió en ti, nuestro futuro se encuentra en tus manos."
            ],
            speed: 70,
            waitUntilVisible: true,
        }).go();
        // setTimeout(() => {
        //     this.btnDisabled = false
        // }, 31000);
    }
}
</script>

<style lang="scss" scoped>
.box-center {
    background-image: url('@/assets/apocalipsis_fin_del_mundo_profecias.jpg_1834093470.png');
    background-repeat: no-repeat;
    background-size: cover;
    min-height: calc(100vh - 160px);
    text-align: center;
    color: white;
}

.multipleStrings {
    font-size: 1.6em;
    text-align: left;
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
        font-size: 1em;
    }
}
</style>