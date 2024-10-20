<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-4 text-gray-500">My Contacts</h1>
    <div class="flex justify-between items-center mb-4">
      <div>
        <span v-if="isLoading" class="loader">Loading contacts...</span>
        <span v-if="errorMessage" class="text-red-500">{{ errorMessage }}</span>
      </div>
      <nuxt-link
        to="/add"
        class="btn btn-primary px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
      >
        Create Contact
      </nuxt-link>
    </div>

    <table class="min-w-full border border-gray-300" v-if="!isLoading && !errorMessage">
      <thead>
        <tr class="bg-gray-100">
          <th class="px-4 py-2 border text-red-700">Name</th>
          <th class="px-4 py-2 border text-red-700">Email</th>
          <th class="px-4 py-2 border text-red-700">Phone</th>
          <th class="px-4 py-2 border text-red-700">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contact in contacts" :key="contact._id" class="border-b hover:bg-gray-100">
          <td class="px-4 py-2 border">{{ contact.name }}</td>
          <td class="px-4 py-2 border">{{ contact.email || 'N/A' }}</td>
          <td class="px-4 py-2 border">{{ contact.phone }}</td>
          <td class="px-4 py-2 border">
            <nuxt-link :to="`/edit/${contact._id}`" class="text-blue-500 hover:underline">Edit</nuxt-link>
            <button @click="deleteContact(contact._id)" class="text-red-500 hover:underline ml-2">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="mt-4" v-if="!isLoading && !errorMessage">
      <button @click="prevPage" :disabled="currentPage === 1" class="bg-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-400" :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }">
        Previous
      </button>
      <span class="mx-2">Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages" class="bg-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-400" :class="{ 'opacity-50 cursor-not-allowed': currentPage === totalPages }">
        Next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [],
      currentPage: 1,
      totalPages: 0,
      limit: 10,
      isLoading: false,
      errorMessage: null,
      userId: null, // Initialize userId
    };
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
    async fetchContacts() {
      this.isLoading = true;
      this.errorMessage = null;

      const token = localStorage.getItem('authToken');
      if (!token) {
        this.errorMessage = 'Unauthorized access. Please log in.';
        this.isLoading = false;
        return;
      }

      this.userId = this.getUserIdFromToken(); // Get userId from token

      try {
        const response = await this.$axios.get(`/contacts?page=${this.currentPage}&limit=${this.limit}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.contacts = response.data.contacts;
        this.totalPages = response.data.totalPages;
      } catch (error) {
        this.handleError(error);
      } finally {
        this.isLoading = false;
      }
    },
    async deleteContact(id) {
      if (confirm('Are you sure you want to delete this contact?')) {
        const token = localStorage.getItem('authToken');
        if (!token) {
          this.errorMessage = 'Unauthorized access. Please log in.';
          return;
        }

        try {
          await this.$axios.delete(`/contacts?id=${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          this.fetchContacts(); // Refresh the list after deletion
        } catch (error) {
          this.handleError(error);
        }
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.fetchContacts();
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchContacts();
      }
    },
    handleError(error) {
      console.error('Error:', error);
      if (error.response) {
        this.errorMessage = error.response.data.message || 'An error occurred. Please try again.';
      } else {
        this.errorMessage = 'Network error. Please check your connection.';
      }
    },
  },
  async mounted() {
    await this.fetchContacts();
  },
};
</script>

<style scoped>
.loader {
  border: 4px solid #f3f3f3; /* Light grey */
  border-top: 4px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
