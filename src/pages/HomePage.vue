<template>
    <!-- intestazione -->
    <HeaderSection></HeaderSection>
    <div class="container pt-5 mt-2">
        <h2>Siamo una <strong>Fabbrica di Creatività Digitale</strong> <i class="coursive">indipendente</i> e <span
                class="highlight">made in Italy</span>, guidata e vissuta da imprenditori e
            professionisti del digitale.</h2>
    </div>
    <div class="image">
        <img src="/img/Property 1=Variant2 (3).png" alt="logo-ewake" class="image-bottom">
        <img src="/img/Property 1=Variant2.png" alt="boschetti" class="image-top">
    </div>
    <CarouselWord></CarouselWord>
    <!-- marca -->
    <div class="marca">
        <div class="image-container">
            <img src="/img/10.png" alt="10">
            <div class="text-overlay">Raccontiamo<br> <i class="coursive">la marca</i><br> <span class="highlight">da 10
                    anni</span>
            </div>
        </div>
        <div class="paragraph">
            <h3>Siamo un'<strong>agenzia<br> creativa</strong> situata nella<br> zona industriale di<br> <i>Verona.</i>
            </h3>
            <span><button>Contattaci</button></span>
            <span><button><i class="fa-solid fa-phone "></i></button></span>
        </div>
    </div>
    <!-- progetti-->
    <div class="projects">
        <h5>PROGETTI SELEZIONATI</h5>
        <img class="pt-5 w-100 pb-4" src="/img/Frame 1.png" alt="Projects">
        <a class="text-white" href="#">Vedi tutti i progetti</a>
    </div>
    <!-- servizi -->
    <div class="d-flex justify-content-evenly align-items-center text-white mt-5">
        <h5 class="text-start">I NOSTRI SERVIZI</h5>
        <h5 class="text-start">CI OCCUPIAMO DI</h5>
    </div>
    <div class="services">
        <div class="paragraph">
            <h3>Diamo <i class="coursive">nuova carica<br></i> a progetti di<br> <span
                    class="highlight">comunicazione<br>
                    digitale.</span></h3>
            <span><button>Scopri i servizi</button></span>
        </div>
        <img class="image" src="/img/curve 1.gif" alt="curve">
        <div class="paragraph mt-2">
            <ul>
                <li v-for="item in list">{{ item }}</li>
            </ul>
        </div>
        <img class="image-2" src="/img/Group 22.png" alt="Barra">
    </div>
    <!-- siamo fatti così-->
    <h5>SIAMO FATTI COSI'</h5>
    <div class="explain">
        <div class="paragraph">
            <h3>Rigorosi, ambiziosi,<br> affidabili, trasparenti, e <br>sinceri.<strong> Costruiamo<br> dall'inizio alla
                    fine i<br> nostri prodotti,<br></strong> ottimizzando i processi<br> e incrementando le<br>
                performance</h3>
            <router-link :to="{ name: 'whoweare' }"><span><button>Scopri chi siamo</button></span></router-link>
        </div>
        <img class="black-white" src="/img/Group 26.png" alt="team">
    </div>
    <!-- clienti -->
    <h5>CREDONO IN NOI</h5>
    <div class="image-box">
        <img src="/img/Gif loghi 1.gif" alt="clienti">
    </div>
    <!-- settori -->
    <h5>I NOSTRI SETTORI</h5>
    <div class="sector">
        <ul>
            <li v-for="item in sector">{{ item }}</li>
        </ul>
        <div>
            <p>Analisi interna, Analisi contestuale,<br>Definizione di obiettivi S.M.A.R.T. e<br>attuazione operativa:
                questo è l'abbici di<br>
                una strategia vera "a prova di mercato".<br> In altre parole facciamo le giuste<br>domande e
                interroghiamo
                il mercato<br>prima e solo
                quando abbiamo le risposte <br> stabiliamo cosa fare e come muoverci.</p>
            <a class="text-white" href="#">Leggi tutto</a>
        </div>
    </div>
    <!-- brand -->
    <div class="brand">
        <img src="/img/Property 1=Variant2 (3).png" alt="logo-ewake">
        <div class="overlay">
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
import CarouselWord from '../components/CarouselWord.vue';
import FooterSection from '../components/FooterSection.vue';
export default {
    name: 'HomePage',
    components: {
        HeaderSection,
        CarouselWord,
        FooterSection
    },
    data() {
        return {
            list: [
                'Strategy & Innovation',
                'Branding',
                'Creativity & Design',
                'Mindset & Experience',
                'Performance optimization',
                'Advertising',
                'Digital Experience',
                'Social Media Management',
                'Creators',
                'Websites & Apps',
                'Production',
            ],
            sector: [
                'Strategia',
                'Creatività e design',
                'Produzione',
                'Media e Performance',
            ],
        }
    }

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

/* ----- INTESTAZIONE ----- */
.container {
    max-width: 600px !important;
    color: white;

    .coursive {
        font-weight: 300;
    }

    span {
        color: $primary-color;
    }
}


.image img {
    position: relative;
    width: 100%;
    margin-top: 100px;
    padding-bottom: 100px;
    display: inline;

    .image-top {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 30%;
    }
}

.image-container {
    position: relative;
    display: inline-block;
    margin-top: 70px;
}

.image-container img {
    display: block;
    width: 80%;
    height: auto;
}

.image-container .text-overlay {
    position: absolute;
    top: 50%;
    left: 45%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 40px;
    font-weight: bold;
    background-color: black;

    .coursive {
        font-weight: 100;
    }

    .highlight {
        color: $primary-color;
    }
}

/*---- MARCA ----- */
.marca {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid $secondary-color;
    border-bottom: 1px solid $secondary-color;
    margin: 0 auto;
    padding-bottom: 100px;
    max-width: 1300px;


    .paragraph {
        color: white;
        margin-top: 70px;
        text-align: center;

        span button {
            margin-left: 10px;
        }

        button {
            background-color: $primary-color;
            padding: 10px;
            border-radius: 20px;

            &:hover{
                background-color: white;
                color: black;
                transition: transform 0.3s ease-in-out;
                transform: translateX(-20px);
            }
        }
    }

}

/*----- PROGETTI ----- */
.projects {
    margin-top: 60px;
    margin: 0 auto;
    max-width: 1300px;
    padding-bottom: 80px;
    color: white;
    border-bottom: 1px solid $secondary-color;

    h5 {
        font-weight: 200;
    }
}

/*----- SERVIZI ----- */

.services {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 60px;
    margin: 0 auto;
    max-width: 1300px;
    border-bottom: 1px solid $secondary-color;

    .image {
        height: 725px;
    }

    .paragraph {
        color: white;
        text-align: center;
        display: flex;
        flex-direction: column;

        h3 {
            font-size: 30px;
            text-align: center;
        }

        .coursive {
            font-weight: 100;
        }

        .highlight {
            color: $primary-color;
        }

        span button {
            background-color: $secondary-color;
            color: white;
            padding: 12px;
            border-radius: 20px;
        }

        ul li {
            list-style-type: none;
            padding: 18px;
        }
    }
}

/*---- SIAMO FATTI COSI'---- */

h5 {
    text-align: left;
    color: white;
    margin-left: 100px;
    margin-top: 60px;
}

.explain {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 60px;
    margin: 0 auto;
    max-width: 1300px;
    padding-bottom: 80px;
    border-bottom: 1px solid $secondary-color;
    color: white;

    .paragraph {
        text-align: center;
        font-size: 20px;
    }

    .paragraph span button {
        background-color: $secondary-color;
        color: white;
        padding: 12px;
        border-radius: 20px;
    }

    .black-white {
        filter: grayscale(100%);
    }
}

/* ---- CLIENTI ----*/

h5 {
    text-align: left;
    color: white;
    margin-left: 100px;
    margin-top: 60px;
}

.image-box {
    display: flex;
    justify-content: center;
    margin: 0 100px;
    padding-top: 20px;
    padding-bottom: 30px;
    border-bottom: 1px solid $secondary-color;
}

.image-box img {
    max-width: 100%;
    height: auto;
}

/* ---- SETTORI ---- */

h5 {
    text-align: left;
    color: white;
    margin-left: 100px;
    margin-top: 60px;
}

.sector {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 60px;
    margin: 0 auto;
    max-width: 1200px;
    padding-bottom: 80px;
    border-bottom: 1px solid $secondary-color;
    color: white;

    ul li {
        list-style-type: none;
        font-size: 45px;
    }

    p {
        font-size: 20px;
    }

    .image-2 {
        height: 100%
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

.overlay {
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

.overlay button {
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