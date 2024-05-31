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
</style>