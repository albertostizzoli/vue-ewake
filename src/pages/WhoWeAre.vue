<template>
    <!-- chi siamo -->
    <div class="together">
        <img src="/img/Mask group.png" alt="logo">
        <div class="overlay">
            <h6 class="text-start">CHI SIAMO</h6>
            <h1 class="display-1"><i>Insieme facciamo<br> grandi cose</i></h1>
        </div>
    </div>
    <!-- team -->
    <div class="team">
        <img class="image" src="/img/2023_EWK_Agency_0234 1.png" alt="team">
        <div class="d-flex">
            <img src="/img/2023_EWK_Agency_0073 1.png" alt="team">
            <div>
                <h2 class="display-2 text-white mt-5 ms-5"><i>Tante idee, <br>un solo team</i></h2>
                <p class="text-white mt-2 ms-5">Quando scegliete di lavorare con noi, diventate<br> parte del nostro
                    team. Coinvolgiamo
                    tutti durante <br> il processo, favorendo un ambiente in cui<br> convergono prospettive e ambienti
                    diversi. Insieme, <br>
                    superiamo i limiti, sfidiamo le norme e puntiamo<br> all'eccellenza in ogni progetto che<br>
                    intraprendiamo.</p>
                    <button class="mt-2 ms-5">Scopri i servizi</button>
            </div>
        </div>
    </div>



</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
/*---- CHI SIAMO---- */

.together {
    position: relative;
    margin-top: 80px;
    color: white;


    img {
        width: 90%;
        display: block;
    }

    .overlay {
        position: absolute;
        top: 50%;
        right: 20%;
        transform: translate(-50%, -50%);
        font-weight: 400;
    }
}

/*---- TEAM ---- */
.team {
    margin-left: 70px;
    margin-top: 80px;

    .image {
        margin-left: 300px;
    }

    img {
        filter: grayscale(100%);
    }

    button{
        background-color: rgb(107, 106, 106);
        color: white;
        padding: 10px;
        border-radius: 10px;
    }
}
</style>