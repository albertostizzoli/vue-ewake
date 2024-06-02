<template>
    <header class="pt-5 me-5">
        <img class="logo" src="/img/Frame 19.png" alt="logo">
        <router-link :to="{ name: 'mainmenu' }"><button><i class="fa-solid fa-bars p-2"></i>Menù</button></router-link>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo{
        margin-left: 20px;
    }
}

button {
    background-color: $secondary-color;
    padding: 10px;
    border-radius: 20px;
    color: white;
    margin-right: 20px;
}
</style>