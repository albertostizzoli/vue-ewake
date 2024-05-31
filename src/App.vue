<template>
<HeaderSection></HeaderSection>
<main>
  <router-view></router-view>
</main>


</template>

<script>
import HeaderSection from './components/HeaderSection.vue';
  export default {
    components: {
      HeaderSection,
    }
    
  }
</script>

<style lang="scss" scoped>

</style>
