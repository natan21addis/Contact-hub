<!-- pages/index.vue -->
<template>
  <div>
    <Hero />
    <features/>
    <Benefits/>
   
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue';
import Features from '../components/Features.vue';
import Benefits from '../components/Benefits.vue';


export default {
  name: 'IndexPage',
  components: {
    Hero,
    Features,
    Benefits,
   
  },
};
</script>

<style>
/* Any global styles for your index page can go here */
</style>
