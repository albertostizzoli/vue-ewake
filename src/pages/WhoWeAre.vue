<template>
    <!--chi siamo-->
    <div class="together">
        <img src="/img/Mask group.png" alt="logo">
        <div class="overlay">
            <p class="text-start">CHI SIAMO</p>
            <h1 class="display-1"><i>Insieme facciamo<br> grandi cose</i></h1>
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
        width: 80%;
        display: block;
    }

    .overlay {
        position: absolute;
        top: 50%;
        right: 20%;
        transform: translate(-50%, -50%);
        font-weight: 200;
    }
}
</style>