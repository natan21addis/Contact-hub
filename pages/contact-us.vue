<template>
   <div class="min-h-screen bg-gray-200">
     <!-- First Section -->
     <section class="relative w-full bg-gray-200 py-16">
       <div class="max-w-screen-xl px-6">
         <div class="flex flex-col lg:flex-row items-center lg:items-start">
           <!-- Form Section -->
           <div class="flex-1 lg:pr-8 mb-8 lg:mb-0">
             <div class="bg-white p-32 rounded-lg shadow-lg mb-12 lg:mb-0">
               <h2 class="text-4xl font-bold mb-6 text-sky-900" style="font-size: 22px;">
                 Contact us if you have any <span class="text-white">funny this</span><span class="text-center"> query</span>
               </h2>
               <form @submit.prevent="handleSubmit" class="space-y-4">
                 <div class="mb-4">
                   <label for="name" class="block text-gray-700 font-semibold mb-2">Name</label>
                   <input
                     type="text"
                     id="name"
                     v-model="formData.name"
                     class="w-full p-3 border border-gray-300 rounded-lg"
                     placeholder="Your Name"
                     required
                   />
                 </div>
                 <div class="mb-4">
                   <label for="email" class="block text-gray-700 font-semibold mb-2">Email</label>
                   <input
                     type="email"
                     id="email"
                     v-model="formData.email"
                     class="w-full p-3 border border-gray-300 rounded-lg"
                     placeholder="Your Email"
                     required
                   />
                 </div>
                 <div class="mb-4">
                   <label for="message" class="block text-gray-700 font-semibold mb-2">Message</label>
                   <textarea
                     id="message"
                     v-model="formData.message"
                     class="w-full p-3 border border-gray-300 rounded-lg"
                     rows="4"
                     placeholder="Your Message"
                     required
                   ></textarea>
                 </div>
                 <button
                   type="submit"
                   class="w-36 h-16 bg-white text-blue-600 flex items-center justify-center border-2 border-sky-400 hover:bg-sky-100 hover:border-sky-500 transition duration-300"
                   style="border-radius: 20%;"
                 >
                   Send Message
                 </button>
               </form>
             </div>
           </div>
           <!-- Large Text Section -->
           <div class="flex-1 lg:pl-8 flex items-center justify-center lg:justify-end">
             <div class="text-center lg:text-left mt-12 lg:mt-0" style="margin-top: 250px;">
               <h2 class="text-5xl lg:text-4xl font-bold text-sky-900 mb-4">
                 Have questions or feedback? We'd love to hear from you!
               </h2>
             </div>
           </div>
         </div>
       </div>
     </section>
 
     <!-- Second Section -->
     <section class="px-4 py-12 lg:py-24 bg-gray-100">
       <div class="max-w-screen-xl mx-auto text-center">
         <h2 class="text-4xl font-bold text-sky-900 mb-8">Let's keep in touch</h2>
         <div class="mb-12">
           <div class="flex justify-center space-x-8">
             <div class="w-6 h-6 bg-sky-500 rounded-full animate-bounce border-2 border-sky-500"></div>
             <div class="w-6 h-6 bg-sky-500 rounded-full animate-bounce border-2 border-sky-500"></div>
             <div class="w-6 h-6 bg-sky-500 rounded-full animate-bounce border-2 border-sky-500"></div>
           </div>
         </div>
       </div>
     </section>
 
     <!-- Third Section -->
     <section class="px-4 py-8 lg:py-12 bg-gray-100">
       <div class="max-w-screen-xl mx-auto">
         <div class="flex flex-col lg:flex-row justify-center space-y-8 lg:space-y-0 lg:space-x-8">
           <!-- Address -->
         
           <!-- Phone Number -->
           <div class="bg-white p-8 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:translate-x-2 hover:translate-y-2">
             <div class="text-6xl text-sky-500 mb-4">
               <font-awesome-icon icon="phone-alt" />
             </div>
             <h3 class="text-2xl font-bold mb-4 text-gray-800">Phone Number</h3>
             <p class="text-lg text-gray-600">+259 79202894</p>
           </div>
         </div>
       </div>
     </section>
 
   
   </div>
 </template>
 
 <script>
 import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
 import { library } from '@fortawesome/fontawesome-svg-core';
 import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
 import Footer from '@/components/Footer.vue';
 
 export default {
   components: {
     FontAwesomeIcon,
   
   },
   data() {
     return {
       formData: {
         name: '',
         email: '',
         message: '',
       },
     };
   },
   methods: {
     handleSubmit() {
       // Handle form submission logic here
       console.log(this.formData);
       // Reset form after submission
       this.formData = {
         name: '',
         email: '',
         message: '',
       };
     },
   },
   created() {
     library.add(faMapMarkerAlt, faPhoneAlt);
   },
 };
 </script>
 
 <style scoped>
 .animate-bounce {
   animation: bounce 1s infinite;
 }
 
 @keyframes bounce {
   0%, 100% {
     transform: translateY(0);
   }
   50% {
     transform: translateY(-10px);
   }
 }
 </style>
 