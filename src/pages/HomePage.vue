<template>
    <div class="container pt-5 mt-2">
        <h2>Siamo una <strong>Fabbrica di Creatività Digitale</strong> <i class="coursive">indipendente</i> e <span
                class="highlight">made in Italy</span>, guidata e vissuta da imprenditori e
            professionisti del digitale.</h2>
    </div>
    <div class="image">
        <img src="/img/Property 1=Variant2 (3).png" alt="logo-ewake">
    </div>
    <h2 class="motto">PENSA, CREA. SVEGLIA</h2>
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
    <div class="projects">
        <h5>PROGETTI SELEZIONATI</h5>
        <img class="pt-5 w-100" src="/img/Frame 1.png" alt="Projects">
    </div>

</template>

<script>
export default {
    name: 'HomePage',

}
</script>

<style lang="scss" scoped>
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

        button{
            background-color: rgb(90, 239, 116); 
            padding: 10px;
            border-radius: 20px;
        }
    }

}

.projects{
    margin-top: 60px;
    margin-left: 100px;
    margin-right: 100px;
    color: white;
    border-bottom: 1px solid grey;
}
</style>