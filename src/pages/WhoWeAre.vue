<template>
    <!-- chi siamo -->
    <div class="together">
        <img src="/img/Mask group.png" alt="logo">
        <div class="overlay">
            <h5 class="text-start">CHI SIAMO</h5>
            <h1 class="display-1"><i>Insieme facciamo<br> grandi cose</i></h1>
        </div>
    </div>
    <!-- team -->
    <div class="team">
        <img class="image" src="/img/2023_EWK_Agency_0234 1.png" alt="team">
        <div class="d-flex">
            <img class="image-second" src="/img/2023_EWK_Agency_0073 1.png" alt="team">
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
    <!-- simboli -->
    <div class="symbols">
        <h3 class="text-white text-center display-5">3 simboli per spiegare il nostro mantra:</h3>
        <div class="text-center icons">
            <img src="/img/Icone Hover.png" alt="icons">
        </div>
    </div>
    <!-- spiegazioni -->
    <div class="explain">
        <h3 class="text-start display-6 intro">Promuoviamo un ambiente in cui <i>incoraggiare le idee</i> e<br>celebrare i risultati. Coltiviamo
        un'atmosfera di inclusività, in <br> cui tutti possono contribuire con i propri <i>unici punti di forza.</i></h3>
        <img class="image" src="/img/2023_EWK_Agency_0086 1.png" alt="developers">
        <div class="position-relative mt-5">
            <img src="/img/Group 28.png" alt="explain">
            <div class="overlay">
                <h3 class="text-center">LA NOSTRA FORZA</h3>
                <h4 class="text-center mt-5">Il nostro team può fornire un <br> ventaglio di soluzioni diverse in <br>base alla tua esigenza, dall'idea alla<br>
                produzione finita. Formiamo un <br> team multidisciplinare di strateghi, <br> designer, analisti, project manager, <br>
                sviluppatori ed esperti di contenuti<br> e social media.</h4>
            </div>
        </div>
    </div>
    <!-- team2 -->
    <div class="team-second">
        <h3 class="text-center pt-5 pb-5">TI PRESENTIAMO IL NOSTRO STRAORDINARIO TEAM</h3>
        <div class="container-fluid d-flex flex-wrap image-second">
            <img src="/img/Group 4.png" alt="employee">
            <img src="/img/Group 5.png" alt="employee">
            <img src="/img/Group 6.png" alt="employee">
            <img src="/img/Group 7.png" alt="employee">
            <img src="/img/Group 6.png" alt="employee">
            <img src="/img/Group 7.png" alt="employee">
            <img src="/img/Group 4.png" alt="employee">
            <img src="/img/Group 5.png" alt="employee">
            <img src="/img/Group 7.png" alt="employee">
            <img src="/img/Group 4.png" alt="employee">
            <img src="/img/Group 5.png" alt="employee">
            <img src="/img/Group 6.png" alt="employee">
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
        width: 70%;
        display: block;
        margin-left: 450px;
    }

    .overlay {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-weight: 400;
    }
}

/*---- TEAM ---- */
.team {
    margin-left: 70px;
    margin-top: 170px;

    .image {
        margin-left: 300px;
    }

    .image-second{
        margin-left: 80px;
    }
    img {
        filter: grayscale(100%);
    }

    button{
        background-color: rgb(107, 106, 106);
        color: white;
        padding: 10px;
        border-radius: 15px;
    }
}

/*--- SIMBOLI --- */
.symbols{
    margin-top: 150px;

    .icons{
        margin-top: 80px;
    }
}

/*--- SPIEGAZIONI --- */
.explain{
    margin-top: 100px;
    color: white;

    .intro{
        margin-left: 30px;
    }

    i{
        font-weight: 100;
    }

    .image{
        filter: grayscale(100%);
        width: 95%;
        margin-top: 10px;
        margin-left: 30px;
        margin-right: 30px;
    }

    img{
        width: 100%;
    }

    .overlay{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}

/*--- TEAM2 --- */
.team-second{
    background-color: white;
    padding-bottom: 110px;
    

    .image-second{
        filter: grayscale(100%);
        max-width: 1400px;
        
        img{
            padding: 5px;
        }
    }

}

</style>