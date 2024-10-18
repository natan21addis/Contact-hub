<template>
  <div class="p-6">
    <div class="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105">
      <h1 class="text-2xl font-bold mb-4">Create Contact</h1>
      <form @submit.prevent="addContact" class="space-y-4">
        <div>
          <label class="block mb-1">Name:</label>
          <input v-model="name" required class="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label class="block mb-1">Email:</label>
          <input v-model="email" type="email" required class="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label class="block mb-1">Phone:</label>
          <input v-model="phone" required class="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
          Add Contact
        </button>
      </form>
      <div v-if="error" class="error text-red-500 mt-4">{{ error }}</div>
      <div v-if="successMessage" class="success text-green-500 mt-4">{{ successMessage }}</div>
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
      error: null,
      successMessage: null,
    };
  },
  methods: {
    async addContact() {
      this.error = null; // Reset error before making the request
      this.successMessage = null; // Reset success message

      // Get the auth token (assuming it's stored in localStorage)
      const token = localStorage.getItem('authToken');

      try {
        await this.$axios.post('/contacts', {
          name: this.name.trim(), // Trim whitespace
          email: this.email.trim(), // Trim whitespace
          phone: this.phone.trim(), // Trim whitespace
        }, {
          headers: {
            Authorization: `Bearer ${token}` // Include the token in the headers
          }
        });
        this.successMessage = 'Contact added successfully!';
        setTimeout(() => {
          this.$router.push('/contacts'); // Redirect to contacts page after a short delay
        }, 2000); // 2 seconds delay
      } catch (err) {
        this.error = 'Failed to add contact. Please try again.';
        console.error('Error adding contact:', err);
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
  margin-top: 10px;
}

.success {
  color: green;
  margin-top: 10px;
  animation: fadeIn 0.5s;
}

/* Animation for success message */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Additional styling */
.bg-white {
  background-color: white;
}

.shadow-md {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.transition-transform {
  transition: transform 0.2s ease;
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}
</style>
