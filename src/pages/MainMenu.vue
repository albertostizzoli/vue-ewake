<template>
    <header>
        <div class="container pt-5">
            <div class="row">
                <div class="col-12">
                    <router-link :to="{name: 'home'}"><button><i class="fa-solid fa-bars p-2"></i>Chiudi</button></router-link>
                </div>
            </div>
        </div>

    </header>
    <div>
        <h1 class="text-danger">Hello World</h1>
    </div>
</template>

<script>
    export default {
        name: 'MainMenu',
        
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