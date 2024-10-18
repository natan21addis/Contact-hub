<template>
  <footer class="footer-bg text-red-500 py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between">
        <div class="mb-6 md:mb-0">
          <h3 class="text-xl font-bold mb-2">ContactHub</h3>
          <p>
            Your go-to solution for advanced contact management.
          </p>
        </div>
        <div class="mb-6 md:mb-0">
          <h3 class="text-xl font-bold mb-2">Quick Links</h3>
          <ul>
            <li><a href="#" class="text-white hover:text-red-300 transition">Home</a></li>
            <li><a href="#" class="text-white hover:text-red-300 transition">About Us</a></li>
            <li><a href="#" class="text-white hover:text-red-300 transition">Services</a></li>
            <li><a href="#" class="text-white hover:text-red-300 transition">Contact</a></li>
          </ul>
        </div>
        <div class="mb-6 md:mb-0">
          <h3 class="text-xl font-bold mb-2">Contact Us</h3>
          <p>Email: <a href="mailto:info@example.com" class="hover:text-red-300 transition">info@example.com</a></p>
          <p>Phone: <a href="tel:+123456789" class="hover:text-red-300 transition">+1 (234) 567-89</a></p>
        </div>
        <div class="mb-6 md:mb-0">
          <h3 class="text-xl font-bold mb-2">Follow Us</h3>
          <div class="flex space-x-4">
            <a href="#" class="text-white hover:text-red-300 transition"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="text-white hover:text-red-300 transition"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-white hover:text-red-300 transition"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" class="text-white hover:text-red-300 transition"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div class="mt-8 border-t border-gray-700 pt-4 text-center">
        <p class="text-red-500 text-sm">
          &copy; {{ currentYear }} ContactHub. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer-bg {
  background-color: #202020; /* Deep black background */
}

.footer-icon {
  font-size: 1.25rem; /* Adjust icon size */
}

h3 {
  color: #ec0a0a; /* Bright red for headings */
}

p {
  color: #e0e0e0; /* Light gray for better readability */
}

ul li a {
  font-size: 1.125rem; /* Increase font size */
}

.flex a {
  font-size: 1.125rem; /* Increase font size for social links */
}
</style>
