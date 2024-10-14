<template>
  <div class="flex items-center justify-center h-screen">
    <form @submit.prevent="handleLogin" class="bg-white p-6 rounded shadow-md w-80">
      <h2 class="text-xl font-semibold mb-4">Log In</h2>
      <input v-model="email" type="email" placeholder="Email" class="border p-2 mb-4 w-full" required />
      <input v-model="password" type="password" placeholder="Password" class="border p-2 mb-4 w-full" required />
      <button type="submit" class="bg-blue-500 text-white p-2 rounded w-full">Log In</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async handleLogin() {
      // Call your backend API to handle login
      console.log('Logging in:', this.email, this.password);
      // Add your API call here
    }
  }
}
</script>
