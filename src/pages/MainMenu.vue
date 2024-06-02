<template>
    <!-- intestazione -->
    <header>
        <div class="container pt-5">
            <div class="row">
                <div class="col-12">
                    <router-link :to="{ name: 'home' }"><button><i
                                class="fa-solid fa-bars p-2"></i>Chiudi</button></router-link>
                </div>
            </div>
        </div>
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
/*--- INTESTAZIONE --- */
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
        border-top: 1px solid grey;
        border-bottom: 1px solid grey;
        font-size: 70px;

        &:hover {
            background-color: rgb(107, 106, 106);
        }
    }

    .info {
        padding-left: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;

        button {
            background-color: rgb(107, 106, 106);
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