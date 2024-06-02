<template>
  <Carousel :autoplay="2000" :wrap-around="true">
    <Slide v-for="slide in 1" :key="slide">
      <div class="carousel__item ">
        <div>
          <h2>CREA.</h2>
        </div>
      </div>
    </Slide>
    <Slide v-for="slide in 1" :key="slide">
      <div class="carousel__item ">
        <div>
          <h2>SVEGLIA,</h2>
        </div>
      </div>
    </Slide>
    <Slide v-for="slide in 1" :key="slide">
      <div class="carousel__item ">
        <div>
          <h2>PENSA</h2>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Basic',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
})
</script>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: rgb(12, 11, 11);
  color: var(--vc-clr-white);
  font-size: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>