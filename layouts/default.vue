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
body {
  background-color: #f0f0f0; /* Light gray */
}
</style>
