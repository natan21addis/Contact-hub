<!-- <template>
  <div class="p-6">
    <div class="bg-white shadow-md rounded-lg p-6">
      <h1 class="text-2xl font-bold mb-4">Edit Contact</h1>
      <form @submit.prevent="updateContact" class="space-y-4">
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

        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
        >
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
    };
  },
  async mounted() {
    await this.fetchContact();
  },
  methods: {
    async fetchContact() {
      const contactId = this.$route.params.id; // Get the ID from the route params
      try {
        const response = await this.$axios.get(`/contacts/${contactId}`);
        const contact = response.data; // Assuming the response contains the contact data
        this.name = contact.name;
        this.email = contact.email || ''; // Handle case where email may not exist
        this.phone = contact.phone;
      } catch (err) {
        this.error = 'Failed to fetch contact. Please try again.';
        console.error('Error fetching contact:', err);
      }
    },
    async updateContact() {
      this.error = null; // Reset error message
      this.successMessage = null; // Reset success message
      const contactId = this.$route.params.id; // Get the ID from the route params

      // Get the auth token (assuming it's stored in localStorage)
      const token = localStorage.getItem('authToken');

      try {
        await this.$axios.put(`/contacts/${contactId}`, {
          name: this.name.trim(),
          email: this.email.trim(),
          phone: this.phone.trim(),
        }, {
          headers: {
            Authorization: `Bearer ${token}` // Include the token in the headers
          }
        });
        this.successMessage = 'Contact updated successfully!';
        setTimeout(() => {
          this.$router.push('/contacts'); // Redirect to contacts page after update
        }, 2000); // 2 seconds delay
      } catch (err) {
        this.error = 'Failed to update contact. Please try again.';
        console.error('Error updating contact:', err);
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
</style> -->
