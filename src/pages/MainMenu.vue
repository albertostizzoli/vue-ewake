<template>
    <!-- intestazione -->
    <header class="pt-5 me-5">
        <img class="logo" src="/img/Frame 19.png" alt="logo">
        <router-link :to="{ name: 'home' }"><button><i class="fa-solid fa-bars p-2"></i>Chiudi</button></router-link>
    </header>
    <!-- menu -->
    <div class="menu">
        <div>
            <ul>
                <li>Progetti</li>
                <li>Servizi</li>
                <router-link class="text-decoration-none text-white" :to="{ name: 'whoweare' }">
                    <li>Chi siamo</li>
                </router-link>
                <li>Entra nel team</li>
                <li>Contatti</li>
            </ul>
        </div>
        <!-- contatti -->
        <div class="info">
            <h3><strong>Vediamoci</strong></h3>
            <p>Viale del lavoro, 33</p>
            <p>37173 - Verona</p>
            <h3 class="mt-5"><strong>Contattaci</strong></h3>
            <p>045 82 13 434</p>
            <p>info@ewake.agency</p>
            <button class="mt-5">Inizia un progetto</button>
            <img class="mt-5" src="/img/Component 3.png" alt="logo">
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainMenu',
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

/*--- INTESTAZIONE --- */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo{
        margin-left: 20px;
    }

    button {
        background-color: $secondary-color;
        padding: 10px;
        border-radius: 15px;
        color: white;
        margin-right: 20px;
    }
}

/*--- MENU ---*/

.menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    margin-top: 100px;
    padding-bottom: 150px;
    background-color: black;

    ul li {
        list-style-type: none;
        padding: 10px;
        border-top: 1px solid $secondary-color;
        border-bottom: 1px solid $secondary-color;
        font-size: 70px;

        &:hover {
            background-color: $secondary-color;
        }
    }

    .info {
        padding-left: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;

        button {
            background-color: $secondary-color;
            color: white;
            padding: 12px;
            border-radius: 20px;
            margin-top: 20px;
        }

        img {
            width: 50%;
            display: block;
            margin-top: 20px;
        }
    }
}
</style>