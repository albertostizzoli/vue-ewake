<template>
    <HeaderSection></HeaderSection>
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
        <h3 class="text-start display-6 intro">Promuoviamo un ambiente in cui <i>incoraggiare le idee</i> e<br>celebrare
            i risultati. Coltiviamo
            un'atmosfera di inclusività, in <br> cui tutti possono contribuire con i propri <i>unici punti di forza.</i>
        </h3>
        <img class="image" src="/img/2023_EWK_Agency_0086 1.png" alt="developers">
        <div class="position-relative mt-5">
            <img src="/img/Group 28.png" alt="explain">
            <div class="overlay">
                <h3 class="text-center">LA NOSTRA FORZA</h3>
                <h4 class="text-center mt-5">Il nostro team può fornire un <br> ventaglio di soluzioni diverse in
                    <br>base alla tua esigenza, dall'idea alla<br>
                    produzione finita. Formiamo un <br> team multidisciplinare di strateghi, <br> designer, analisti,
                    project manager, <br>
                    sviluppatori ed esperti di contenuti<br> e social media.
                </h4>
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
    <!-- kick off -->
    <div class="kick-off">
        <h5 class="text-start">KICK OFF</h5>
        <h2 class="text-start mt-1 display-1"><i>Non sai da<br>dove iniziare ?</i></h2>
        <div class="d-flex justify-content-between align-items-center">
            <div>
                <h4 class="display-5 mt-5">Pianifichiamo e<br> personalizziamo il<br> percorso di crescita<br> del tuo
                    brand.</h4>
                <span><button>Contattaci</button></span>
                <span><button><i class="fa-solid fa-phone "></i></button></span>
            </div>
            <div>
                <h5 class="paragraph">Quando scegliete di lavorare con noi, diventate <br>parte del nostro team.
                    Coinvolgiamo tutti durante<br>
                    il processo, favorendo un ambiente in cui<br> convergono prospettive e talenti diversi. Insieme,
                    <br>superiamo
                    i limiti, sfidiamo le norme e puntiamo<br> all'eccellenza in ogni progetto che <br> intraprendiamo
                </h5>
            </div>
        </div>
        <div class="d-flex justify-content-between align-items-center logo">
            <div>
                <img src="/img/Component 14.png" alt="logo">
            </div>
            <div>
                <ul>
                    <li v-for="item in list">{{ item }}</li>
                </ul>
            </div>
        </div>
    </div>
    <!-- team3 -->
    <div class="team-third">
        <h2 class="text-end mt-1 display-2 me-5"><i>Team compatto <br>e agile</i></h2>
        <div class="d-flex mt-5">
            <img src="/img/image 2.png" alt="emplyoyee">
            <div>
                <p class="text-white mt-2m ms-5">Uno degli aspetti più ottimali della nostra azienda è<br> la dimensione
                    ottimale
                    del nostro team. Abbiamo<br> capito che mantenere un team compatto ci<br> consente di ottenere i
                    migliori risultati
                    per i nostri<br> clienti e per noi stessi. Abbiamo una rete di<br> collaboratori con cui da anni
                    garantiamo una <br>
                    collaborazione efficiente, una comunicazione<br> aperta e un coordinamento con soluzione di<br>
                    continuità.</p>
                <button class="mt-3 ms-5">Entra nel team</button>
            </div>
        </div>
        <div>
            <img class="image" src="/img/2023_EWK_Agency_0259 1.png" alt="team">
        </div>
    </div>
    <!-- brand -->
    <div class="brand">
        <img src="/img/Property 1=Variant2 (3).png" alt="logo-ewake">
        <div class="up">
            <h2 class="display-3">Creiamo qualcosa di <i class="coursive"><strong>unico</strong></i><br> per il <strong
                    class="grass">il tuo brand</strong></h2>
            <button>Contattaci</button>
        </div>
    </div>
    <!-- footer -->
    <FooterSection></FooterSection>
</template>

<script>
import HeaderSection from '../components/HeaderSection.vue';
import FooterSection from '../components/FooterSection.vue';
export default {
    components: {
        HeaderSection,
        FooterSection
    },
    data() {
        return {
            list: [
                'Analisi esigenze',
                'Ricerca e analisi di mercato',
                'Definizione degli obiettivi',
                'Creazione della strategia',
                'Pianificazione del budget',
                'Sviluppo del piano di comunicazione',
                'Creazione di contenuti',
                'Implementazione',
                'Monitoraggio e analisi',
                'Ottimizzazione',
                'Report e feedback',
                'Manutenzione e supporto',
            ],
        }
    }

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

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
    max-width: 1200px;

    .image {
        margin-left: 300px;
    }

    .image-second {
        margin-left: 80px;
    }

    img {
        filter: grayscale(100%);
    }

    button {
        background-color: $secondary-color;
        color: white;
        padding: 10px;
        border-radius: 15px;
    }
}

/*--- SIMBOLI --- */
.symbols {
    margin-top: 150px;

    .icons {
        margin-top: 80px;
    }
}

/*--- SPIEGAZIONI --- */
.explain {
    margin-top: 100px;
    color: white;

    .intro {
        margin-left: 30px;
    }

    i {
        font-weight: 100;
    }

    .image {
        filter: grayscale(100%);
        width: 95%;
        margin-top: 10px;
        margin-left: 30px;
        margin-right: 30px;
    }

    img {
        width: 100%;
    }

    .overlay {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}

/*--- TEAM2 --- */
.team-second {
    background-color: white;
    padding-bottom: 110px;


    .image-second {
        filter: grayscale(100%);
        max-width: 1400px;

        img {
            padding: 5px;
        }
    }
}

/*--- KICK OFF ---*/
.kick-off {
    margin-left: 70px;
    padding-top: 90px;
    color: white;

    span button {
        background-color: $primary-color;
        color: black;
        padding: 15px;
        border-radius: 20px;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 10px;

        &:hover {
            background-color: white;
            color: black;
            transition: transform 0.3s ease-in-out;
            transform: translateX(-20px)rotate(-15deg);
        }
    }

    .paragraph {
        font-size: 20px;
        margin-right: 100px;
    }

    .logo {
        position: relative;

        img {
            position: absolute;
            bottom: 0;
            left: 0;
        }
    }

    ul li {
        list-style-type: none;
        border-top: 1px solid $secondary-color;
        border-bottom: 1px solid $secondary-color;
        padding: 10px;
        font-size: 25px;
        margin-right: 100px;
        display: flex;
        justify-content: space-between;
    }
}

/*--- TEAM3 --- */
.team-third {
    margin-left: 70px;
    padding-top: 130px;
    color: white;
    margin-right: 100px;

    img {
        filter: grayscale(100%);
    }

    p {
        font-size: 25px;
    }

    button {
        background-color: $secondary-color;
        color: white;
        padding: 10px;
        border-radius: 15px;
    }

    .image {
        filter: grayscale(100%);
        margin-left: 550px;
    }
}

/*---- BRAND ----- */
.brand {
    position: relative;
    background-color: $primary-color;
    width: 100%;
    margin: auto;
    padding: 40px;
}

.brand img {
    width: 100%;
    filter: grayscale(100%);
    opacity: 0.3;
    display: block;
}

.up {
    position: absolute;
    top: 50%;
    left: 35%;
    transform: translate(-50%, -50%);
    color: black;
    text-align: left;
    font-weight: 200;

    .coursive {
        font-weight: 300;
    }

    .grass {
        font-weight: 800;
    }


}

.up button {
    background-color: black;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    cursor: pointer;

    &:hover {
        color: $primary-color;
    }
}
</style>