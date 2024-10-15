<template>
  <footer class="bg-red-900 text-white py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between">
        <div class="mb-6 md:mb-0">
          <h3 class="text-lg font-bold mb-2">ContactHub</h3>
          <p class="text-black">
            Your go-to solution for advanced electronic voucher and sale management.
          </p>
        </div>
        <div class="mb-6 md:mb-0">
          <h3 class="text-lg font-bold mb-2">Quick Links</h3>
          <ul>
            <li><a href="#" class="text-black hover:text-white">Home</a></li>
            <li><a href="#" class="text-black hover:text-white">About Us</a></li>
            <li><a href="#" class="text-black hover:text-white">Services</a></li>
            <li><a href="#" class="text-black hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div class="mb-6 md:mb-0">
          <h3 class="text-lg font-bold mb-2">Contact Us</h3>
          <p class="text-black">Email: <a href="mailto:info@example.com" class="hover:text-white">info@example.com</a></p>
          <p class="text-black">Phone: <a href="tel:+123456789" class="hover:text-white">+1 (234) 567-89</a></p>
        </div>
        <div class="mb-6 md:mb-0">
          <h3 class="text-lg font-bold mb-2">Follow Us</h3>
          <div class="flex space-x-4">
            <a href="#" class="text-black hover:text-white"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="text-black hover:text-white"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-black hover:text-white"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" class="text-black hover:text-white"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div class="mt-8 border-t border-gray-700 pt-4 text-center">
        <p class="text-black text-sm">
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
.footer-icon {
  font-size: 1.25rem; /* Adjust icon size */
}
</style>
