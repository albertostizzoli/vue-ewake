<template>
<HeaderSection></HeaderSection>
<main>
  <router-view></router-view>
</main>
<FooterSection></FooterSection>


</template>

<script>
import HeaderSection from './components/HeaderSection.vue';
import FooterSection from './components/FooterSection.vue';
  export default {
    components: {
      HeaderSection,
      FooterSection,
    }
    
  }
</script>

<style lang="scss" scoped>

</style>
