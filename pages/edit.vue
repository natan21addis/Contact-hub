<template>
  <div class="p-6">
    <div class="bg-white shadow-md rounded-lg p-6">
      <h1 class="text-2xl font-bold mb-4">Edit Contact</h1>
      <form @submit.prevent="updateContact" class="space-y-4">
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
          Update Contact
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
      userId: null, // Initialize userId
    };
  },
  async mounted() {
    this.userId = this.getUserIdFromToken(); // Get userId from the token
    await this.fetchContact();
  },
  methods: {
    getUserIdFromToken() {
      const token = localStorage.getItem('authToken');
      if (token) {
        const payload = JSON.parse(atob(token.split('.')[1])); // Decode the token
        return payload.userId; // Adjust according to your token structure
      }
      return null;
    },
    async fetchContact() {
      const contactId = this.$route.params.id; // Get the contact ID from the route parameters
      const token = localStorage.getItem('authToken');

      if (!token) {
        this.error = 'Unauthorized access. Please log in.';
        return;
      }

      try {
        const response = await this.$axios.get(`/contacts/${contactId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        console.log('Fetched contact:', response.data);
        this.name = response.data.name;
        this.email = response.data.email || '';
        this.phone = response.data.phone;
      } catch (err) {
        this.handleError(err);
      }
    },
    async updateContact() {
      this.error = null;
      this.successMessage = null;
      const contactId = this.$route.params.id; // Ensure we're getting the ID here
      const token = localStorage.getItem('authToken');

      if (!token) {
        this.error = 'Unauthorized access. Please log in.';
        return;
      }

      try {
        console.log(`Updating contact ID: ${contactId} for user ID: ${this.userId} with data:`, {
          name: this.name.trim(),
          email: this.email.trim(),
          phone: this.phone.trim(),
        });

        await this.$axios.put(`/contacts/${contactId}`, {
          name: this.name.trim(),
          email: this.email.trim(),
          phone: this.phone.trim(),
          userId: this.userId // Pass the userId here
        }, {
          headers: { Authorization: `Bearer ${token}` }
        });
        this.successMessage = 'Contact updated successfully!';
        setTimeout(() => {
          this.$router.push(`/contacts/${this.userId}`); // Redirect to contacts page with userId
        }, 2000);
      } catch (err) {
        this.handleError(err);
      }
    },
    handleError(err) {
      console.error('Error occurred:', err);
      if (err.response) {
        if (err.response.status === 404) {
          this.error = 'Contact not found. Please check the ID and try again.';
        } else if (err.response.status === 401) {
          this.error = 'Unauthorized access. Please log in again.';
        } else {
          this.error = 'An error occurred while processing your request. Please try again.';
        }
      } else if (err.request) {
        this.error = 'No response from server. Please check your network connection.';
      } else {
        this.error = 'Error: ' + err.message;
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
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
