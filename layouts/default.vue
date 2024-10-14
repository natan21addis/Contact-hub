<template>
  <div>
    <HeaderComponent />
    <main>
      <nuxt />
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue'; // Adjust the path as needed
import FooterComponent from '@/components/Footer.vue'; // Adjust the path as needed

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
/* Add any global styles you want here */
</style>
