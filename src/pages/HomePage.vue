<template>
    <!-- intestazione -->
    <div class="container pt-5 mt-2">
        <h2>Siamo una <strong>Fabbrica di Creatività Digitale</strong> <i class="coursive">indipendente</i> e <span
                class="highlight">made in Italy</span>, guidata e vissuta da imprenditori e
            professionisti del digitale.</h2>
    </div>
    <div class="image">
        <img src="/img/Property 1=Variant2 (3).png" alt="logo-ewake">
    </div>
    <!-- motto -->
    <h2 class="motto">PENSA, CREA. SVEGLIA</h2>
    <!-- marca -->
    <div class="marca">
        <div class="image-container">
            <img src="/img/10.png" alt="10">
            <div class="text-overlay">Raccontiamo <i class="coursive">la marca</i> <span class="highlight">da 10
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
    <div class="d-flex justify-content-around align-items-center text-start text-white mt-5">
        <h5>I NOSTRI SERVIZI</h5>
        <h5>CI OCCUPIAMO DI</h5>
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
                <li>Strategy & Innovation</li>
                <li>Branding</li>
                <li>Creativity & Design</li>
                <li>Mindset & Experience</li>
                <li>Performance optimization</li>
                <li>Advertising</li>
                <li>Digital Experience</li>
                <li>Social Media Management</li>
                <li>Creators</li>
                <li>Websites & Apps</li>
                <li>Production</li>
            </ul>
            <!--<img class="image" src="/img/Group 22.png" alt="Barra">-->
        </div>
    </div>
    <!-- siamo fatti così-->
    <h5>SIAMO FATTI COSI'</h5>
    <div class="explain">
        <div class="paragraph">
            <h3>Rigorosi, ambiziosi,<br> affidabili, trasparenti, e <br>sinceri.<strong> Costruiamo<br> dall'inizio alla
                    fine i<br> nostri prodotti,<br></strong> ottimizzando i processi<br> e incrementando le<br>
                performance</h3>
            <span><button>Scopri chi siamo</button></span>
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
            <li>Strategia</li>
            <li>Creatività e design</li>
            <li>Produzione</li>
            <li>Media & Performance</li>
        </ul>
        <div>
            <p>Analisi interna, Analisi contestuale,<br>Definizione di obiettivi S.M.A.R.T. e<br>attuazione operativa:
                questo è l'abbici di<br>
                una strategia vera "a prova di mercato". In altre parole facciamo le giuste<br>domande e interroghiamo
                il mercato<br>prima e solo
                quando abbiamo le risposte <br> stabiliamo cosa fare e come muoverci.</p>
            <a href="#">Leggi tutto</a>
        </div>
    </div>





</template>

<script>
export default {
    name: 'HomePage',

}
</script>

<style lang="scss" scoped>
/* ----- INTESTAZIONE ----- */
.container {
    max-width: 600px !important;
    color: white;

    .coursive {
        font-weight: 300;
    }

    span {
        color: rgb(90, 239, 116);
    }
}

.image img {
    width: 100%;
    margin-top: 100px;
}

.motto {
    text-align: center;
    font-size: 100px;
    color: white;
    font-weight: 300;
    margin-top: 200px;
}

.image-container {
    position: relative;
    display: inline-block;
    margin-top: 70px;
}

.image-container img {
    display: block;
    width: 100%;
    height: auto;
}

.image-container .text-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 40px;
    font-weight: bold;
    background-color: black;

    .coursive {
        font-weight: 100;
    }

    .highlight {
        color: rgb(90, 239, 116);
    }
}

/*---- MARCA ----- */
.marca {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    margin-left: 80px;
    margin-right: 80px;
    padding-bottom: 100px;


    .paragraph {
        color: white;
        margin-top: 70px;
        margin-left: 70px;
        text-align: center;

        span button {
            margin-left: 10px;
        }

        button {
            background-color: rgb(90, 239, 116);
            padding: 10px;
            border-radius: 20px;
        }
    }

}

/*----- PROGETTI ----- */
.projects {
    margin-top: 60px;
    margin-left: 80px;
    margin-right: 80px;
    padding-bottom: 80px;
    color: white;
    border-bottom: 1px solid grey;

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
    margin-left: 80px;
    margin-right: 80px;
    border-bottom: 1px solid grey;

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
            color: rgb(90, 239, 116);
        }

        span button {
            background-color: rgb(107, 106, 106);
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
    margin-left: 80px;
    margin-right: 80px;
    padding-bottom: 80px;
    border-bottom: 1px solid grey;
    color: white;

    .paragraph {
        text-align: center;
        font-size: 20px;
    }

    .paragraph span button {
        background-color: rgb(107, 106, 106);
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
    border-bottom: 1px solid grey;
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
    margin-left: 80px;
    margin-right: 80px;
    padding-bottom: 80px;
    border-bottom: 1px solid grey;
    color: white;

    ul li {
        list-style-type: none;
        font-size: 45px;
    }

    p {
        font-size: 20px;
    }
    
    a{
        color: white;
    }
}
</style>