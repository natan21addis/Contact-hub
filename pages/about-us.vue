<template>
   <div class="min-h-screen bg-gray-200">
     <!-- First Section -->
     <section class="relative w-full bg-white py-40">
       <div class="max-w-screen-xl px-6">
         <div class="flex flex-col lg:flex-row items-center lg:items-start">
           <!-- Image Section -->
           <div class="flex-1 lg:pr-8">
             <img
               src="/call.webp"
               alt="About Us"
               class="w-full h-auto object-cover rounded-lg shadow-lg"
             />
           </div>
           <!-- Text Section -->
           <div class="flex-1 lg:pl-8 mt-8 lg:mt-0">
             <h2 class="text-2xl lg:text-5xl font-bold mb-8 text-gray-800 text-center">About Us</h2>
             <p :class="['text-base text-gray-600 leading-relaxed', isExpanded ? '' : 'line-clamp-5']" style="font-size: 20px">
               Our platform is designed to streamline communication, enabling you to manage your contacts effortlessly. With features like automated responses, real-time notifications, and customizable workflows, we ensure you stay connected and organized.
             </p>
           </div>
         </div>
       </div>
     </section>
 
     <!-- Second Section -->
     <section class="px-4 py-8 lg:py-12">
       <!-- Container for Card Groups -->
       <div class="space-y-8">
         <div v-for="(chunk, index) in cardChunks" :key="index" class="flex justify-center gap-x-8">
           <div v-for="card in chunk" :key="card.id" class="bg-white p-4 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:translate-x-2 hover:translate-y-2" style="min-height: 500px; max-width: 350px;">
             <h3 class="text-2xl lg:text-2xl font-bold mb-8 text-gray-800 text-center">{{ card.title }}</h3>
             <img
               :src="card.imgSrc"
               :alt="card.title"
               class="object-cover rounded-lg mb-4"
               width="70"
               height="55"
             />
             <p class="text-gray-500 text-center" style="font-size: 16px; margin-bottom: 48px;">
               {{ card.description }}
             </p>
           </div>
         </div>
       </div>
     </section>
  
   </div>
 </template>
 
 <script>
 import Footer from '@/components/Footer.vue';
 
 export default {
   components: {
   
   },
   data() {
     return {
       isExpanded: false,
       cards: [
         {
           id: 1,
           title: 'Mission and vision',
           description: 'our mission is to revolutionize contact handling by providing innovative and user-friendly solutions that streamline communication for individuals and businesses .  and Our vision is to be the leading platform for contact management, empowering users to communicate effortlessly across all devices. ',
           imgSrc: '/vision_2421304-1.png',
         },
         {
           id: 2,
           title: 'Objective',
           description: 'our primary objectives are to streamline communication and provide a seamless contact management experience that ensures important messages are never missed. We aim to develop user-friendly solutions that are intuitive and accessible on both desktop and mobile platforms, making contact handling straightforward for everyone',
           imgSrc: '/objective.png',
         },
     
         {
           id: 4,
           title: 'Partnerships',
           description: 'By partnering with us, you can easily integrate our innovative contact handling solutions into your business, accessible on both desktop and mobile devices.'
,
           imgSrc: '/partnership.png',
         },
      
       ],
     };
   },
   computed: {
     cardChunks() {
       const chunkSize = 3;
       const result = [];
       for (let i = 0; i < this.cards.length; i += chunkSize) {
         result.push(this.cards.slice(i, i + chunkSize));
       }
       return result;
     },
   },
 };
 </script>
 
 <style scoped>
 .line-clamp-5 {
   overflow: hidden;
   display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: 5;
 }
 </style>
 