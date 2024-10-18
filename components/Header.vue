<template>
  <header class="flex justify-between items-center p-4 bg-white text-black">
    <div class="flex items-center">
      <img src="@/static/easy.jpg" alt="Company Logo" class="h-10 mr-4" /> <!-- Replace with your logo path -->
      <nav>
        <ul class="flex space-x-6">
          <li><a href="#home" class="hover:text-blue-400">Home</a></li>
          <li><a href="#about" class="hover:text-blue-400">About</a></li>
          <li><a href="#services" class="hover:text-blue-400">Services</a></li>
          <li><a href="#contact" class="hover:text-blue-400">Contact</a></li>
          <li v-if="isAuthorized">
            <nuxt-link to="/contacts" class="hover:text-blue-400">Contacts</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="flex items-center">
      <img src="@/static/easy.jpg" alt="Profile" class="h-10 w-10 rounded-full border-2 border-gray-400" /> <!-- Replace with your profile image path -->
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  computed: {
    isAuthorized() {
      // Check if the auth token exists in local storage
      return !!localStorage.getItem('authToken');
    },
  },
};
</script>

<style scoped>
/* You can add additional styles here if needed */
</style>
