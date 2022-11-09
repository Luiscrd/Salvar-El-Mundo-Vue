<template>
    <div class="box-center">
        <div class="box-second text-center pt-4 pb-5">
            <div id="countdown" class="timer">03:00</div>
            <img class="mb-4 mt-3"
                src="@/assets/kisspng-cyborg-portable-network-graphics-computer-icons-cl-cyborg-clipart-bionic-19-16-x-16-dumielauxep-5d334e790393c7.8255021915636435130147.png"
                alt="Ciborg">
            <div class="progress mb-4">
                <div class="progress-bar" role="progressbar" aria-label="Example with label"
                    :style="{ 'width': porcent + '%' }"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100">{{ porcent }}%</div>
            </div>
            <router-view></router-view>
        </div>
    </div>

</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import startTimer from '@/api/cuenta-atras'

export default {
    name: 'Formulario',
    components: {},
    setup() {
        const store = useStore()
        const porcent = computed(() => store.getters['porcent'])
        return {
            porcent,
        }
    },
    // beforeMount() {
    //     if (this.$route.name !== 'answer' && this.$store.state.preguntaActual === 1) {
    //         this.$router.push({ name: 'answer', params: { id: 1} })
    //     }
    // },
    mounted() {
        startTimer()
    }
}
</script>

<style lang="scss" scoped>
.box-center {
    position: relative;
    background-image: url('@/assets/apocalipsis_fin_del_mundo_profecias.jpg_1834093470.png');
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    color: white;
    position: relative;
    min-height: calc( 100vh - 160px );
    display: flex;
    justify-content: center;
    align-items: center;
}

img{
    width: 170px;
    margin: 0 auto;
}

.box-second{
    width: 48%;
    margin: 0 34.5%;
}
.container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

}

@font-face {
    font-family: "reloj";
    src: url("@/assets/boombox2.ttf");
}

#countdown {
    position: relative;
    text-align: center;
    font-family: reloj;
    font-size: 3em;
}

.progress-bar {
    background-color: #341948;
}

.form-check-input:checked {
    background-color: #341948;
    border-color: #341948;
}

@media screen and (max-width: 420px) {

    .box-second{
    width: 80%;
    margin: 0 10%;
}
    
}
</style>