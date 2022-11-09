<template>
    <div class="box-center d-flex align-items-center">
        <div class="container mt-5">
            <h1>Page not foud</h1>
            <img src="@/assets/404.png" alt="404">
            <div>
                <button type="button" class="btn btn-primary">Volver</button>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: '404',
    setup() {
    }
}
</script>

<style lang="scss" scoped>
.box-center {
    background-image: url('@/assets/apocalipsis_fin_del_mundo_profecias.jpg_1834093470.png');
    background-repeat: no-repeat;
    background-size: cover;
    height: calc(100vh - 160px);
    text-align: center;
    color: white;
}
</style>