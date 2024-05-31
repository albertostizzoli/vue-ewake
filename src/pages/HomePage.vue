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
            <h3>Siamo un'<strong>agenzia creativa</strong> situata nella zona industriale di <i>Verona.</i></h3>
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
    <div class="d-flex justify-content-around align-items-center text-white mt-5">
            <h5>I NOSTRI SERVIZI</h5>
            <h5>CI OCCUPIAMO DI</h5>
        </div>
    <div class="services">
        <div class="paragraph">
            <h3>Diamo <i class="coursive">nuova carica</i> a progetti di <span class="highlight">comunicazione
                    digitale</span></h3>
            <span><button>Scopri i servizi</button></span>
        </div>
        <img src="/img/curve 1.png" alt="curve">
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
    margin-left: 100px;
    margin-right: 100px;
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

/*----- PROJECTS ----- */
.projects {
    margin-top: 60px;
    margin-left: 100px;
    margin-right: 100px;
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
    margin-left: 100px;
    margin-right: 100px;
    border-bottom: 1px solid grey;

    .paragraph {
        color: white;
        text-align: center;
        display:flex;
        flex-direction: column;

        h5 {
            font-weight: 200;
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
            padding: 19px;
        }
    }
}
</style>