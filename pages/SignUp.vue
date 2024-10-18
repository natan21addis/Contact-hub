<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white shadow-md rounded-lg p-6 w-96">
      <h1 class="text-2xl font-bold mb-4">Sign Up</h1>
      <form @submit.prevent="signUp" class="space-y-4">
        <div>
          <label class="block mb-1">Name:</label>
          <input
            v-model="name"
            required
            class="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label class="block mb-1">Email:</label>
          <input
            v-model="email"
            type="email"
            required
            class="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label class="block mb-1">Phone:</label>
          <input
            v-model="phone"
            required
            class="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label class="block mb-1">Password:</label>
          <input
            v-model="password"
            type="password"
            required
            class="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Sign Up
        </button>
        <div v-if="error" class="text-red-500 mt-4">{{ error }}</div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async signUp() {
      this.error = null; // Reset error message
      try {
        const response = await this.$axios.post('/auth', {
          action: 'sign-up',
          name: this.name,
          email: this.email,
          phone: this.phone,
          password: this.password,
        });

        // On successful signup, redirect to login page
        this.$router.push('/login');
      } catch (err) {
        this.error = err.response?.data?.message || 'Signup failed. Please try again.';
        console.error('Signup error:', err);
      }
    },
  },
};
</script>

<style scoped>
/* Add any specific styles for your signup page here */
</style>
