<template>
    <header>
        <div class="container pt-5">
            <div class="row">
                <div class="col-12">
                    <router-link :to="{name: 'mainmenu'}"><button><i class="fa-solid fa-bars p-1"></i>Menù</button></router-link>
                </div>
            </div>
        </div>

    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        background-color: rgb(64, 63, 63);
        padding: 10px;
        border-radius: 15px;
        color: white;
    }
}
</style>