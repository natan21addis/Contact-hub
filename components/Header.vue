<template>
  <header :class="['fixed top-0 left-0 w-full p-4 transition-all', { 'bg-[#202020] text-white': isScrolled, 'bg-transparent text-black': !isScrolled }]">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <img src="@/static/easy.jpg" alt="Company Logo" class="h-10 mr-4" />
        <nav>
          <ul class="flex space-x-6">
            <li><a href="/" :class="linkClasses">Home</a></li>
            <li><a href="about-us" :class="linkClasses">About</a></li>
            <li><a href="contact-us" :class="linkClasses">Contact</a></li>
            <li v-if="isAuthorized">
              <nuxt-link to="/contacts" :class="linkClasses">Contacts</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="relative" @click="toggleDropdown">
        <img src="@/static/easy.jpg" alt="Profile" class="h-12 w-12 rounded-full border-2 border-black cursor-pointer" />
        <div v-if="showDropdown" class="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
          <ul class="flex flex-col">
            <li>
              <nuxt-link to="/profile" class="block px-4 py-2 hover:bg-gray-200">Profile</nuxt-link>
            </li>
            <li v-if="isAuthorized">
              <a @click="logout" class="block px-4 py-2 hover:bg-gray-200 cursor-pointer">Logout</a>
            </li>
            <li v-else>
              <nuxt-link to="/signup" class="block px-4 py-2 hover:bg-gray-200">Sign Up</nuxt-link>
              <nuxt-link to="/login" class="block px-4 py-2 hover:bg-gray-200">Login</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      showDropdown: false,
      isScrolled: false,
    };
  },
  computed: {
    isAuthorized() {
      return !!localStorage.getItem('authToken');
    },
    linkClasses() {
      return this.isScrolled ? 'hover:text-[#ec0a0a] text-[#ec0a0a] link-effect' : 'hover:text-[#ec0a0a] text-black link-effect';
    },
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    logout() {
      localStorage.removeItem('authToken'); // Remove the auth token
      this.showDropdown = false; // Hide the dropdown after logout
      this.$router.push('/login'); // Redirect to login page
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
header {
  z-index: 1000; /* Ensure the header is above other content */
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.link-effect {
  font-size: 1.2rem; /* Adjust link font size */
  transition: all 0.3s ease; /* Smooth transition */
  padding: 10px; /* Padding for the links */
  border-radius: 5px; /* Rounded corners for hover effect */
}

.link-effect:hover {
  transform: translateY(-2px); /* Move up on hover */
  border: 2px solid #ec0a0a; /* Border color on hover */
}

img {
  border-color: #f1ecec;
  transition: border-color 0.3s ease; /* Smooth border transition */
}

img:hover {
  border-color: #e70505; /* Change border color on hover */
}
</style>
