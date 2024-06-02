<template>
    <footer>
        <div class="d-flex justify-content-around align-items-start contacts">
            <img src="/img/Component 5.png" alt="logo">
            <ul>
                <li>
                    <p class="grey">Indirizzo uffici</p>
                </li>
                <li>EWAKE s.r.l</li>
                <li>Viale del Lavoro, 33</li>
                <li>37173 - Verona</li>
                <li>T 045 82 13 434E.</li>
                <li>M <a href="#">info@ewake.agency</a></li>
            </ul>
            <ul>
                <li>
                    <p class="grey">Seguici</p>
                </li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Linkedin</li>
            </ul>
            <ul>
                <li>
                    <p class="grey">Menù</p>
                </li>
                <li>Home</li>
                <li>Progetti</li>
                <li>Servizi</li>
                <li>Candidati</li>
                <li>Contatti</li>
            </ul>
        </div>
        <div class="d-flex align-content-center justify-content-center info">
            <p class="text-center">© eWAKE - PEC: ewake@bpec.it - P.iva 03932720232 - SDI: WP7SE2Q - <a href="#">Privacy
                    Policy</a> - <a href="#">Cookies Policy</a></p>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
footer {
    background-color: rgb(12, 11, 11);
    padding-bottom: 20px;

    .contacts {
        margin-top: 90px;
        margin-left: 80px;
        margin-right: 80px;
        padding-bottom: 80px;
    }

    ul {
        margin: 0;
        padding: 0;

        li {
            list-style-type: none;
            color: white;

            p {
                color: grey;
                margin: 0;
            }

            a {
                color: white;
            }
        }
    }

    .info {
        color: white;
        margin-left: 80px;
        margin-right: 80px;
        text-align: center;
    }

    .info a {
        color: white;
    }
}
</style>
