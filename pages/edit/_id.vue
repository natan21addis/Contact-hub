<template>
   <div>
     <h1>Edit Contact</h1>
     <form @submit.prevent="updateContact">
       <div>
         <label>Name:</label>
         <input v-model="contact.name" required />
       </div>
       <div>
         <label>Email:</label>
         <input v-model="contact.email" type="email" required />
       </div>
       <div>
         <label>Phone:</label>
         <input v-model="contact.phone" required />
       </div>
       <button type="submit">Update Contact</button>
     </form>
   </div>
 </template>
 
 <script>
 export default {
   data() {
     return {
       contact: {
         name: '',
         email: '',
         phone: ''
       }
     };
   },
   async asyncData({ $axios, params }) {
     const response = await $axios.get(`/contacts?id=${params.id}`);
     return { contact: response.data };
   },
   methods: {
     async updateContact() {
       await this.$axios.put(`/contacts?id=${this.$route.params.id}`, this.contact);
       this.$router.push('/'); // Redirect to the contact list after updating
     }
   }
 };
 </script>
 