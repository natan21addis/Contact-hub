<!-- components/Hero.vue -->
<template>
   <div class="flex h-screen p-6">
     <div class="flex-1 flex justify-center items-center bg-white bg-opacity-75 p-4 md:p-10">
       <div class="relative z-10 text-left text-white">
         <h1 class="text-4xl md:text-5xl font-bold mb-4 text-red-700 animate-fade-in-left text-shadow">
           Contact Handling Website
         </h1>
         <p class="text-base md:text-3xl text-gray-800 animate-fade-in-left-2 text-shadow text-center">
  For <span class="text-red-600">your</span> comfort
</p>

         <div class="mt-8 max-w-2xl">
           <p class="text-gray-800 animate-fade-in-up text-lg md:text-xl leading-relaxed">
             Our contact handling solution is designed to make your life easier. With seamless integration,
             you can manage your contacts effectively and efficiently. Say goodbye to clutter and confusion;
             embrace a simple, user-friendly interface that puts you in control.
             Join countless satisfied users who have transformed their communication processes.
             Experience the convenience of our system today and take the first step toward better contact management!
           </p>
         </div>
         <div class="text-center">

          <button class="mt-16 font-bold bg-gray-300 text-black py-3 px-6 rounded shadow-md hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-transform transform hover:scale-105 text-center">
           GET STARTED
         </button>

         </div>
       
       </div>
     </div>
     <div class="flex-1 flex justify-center items-center">
       <img src="phonee.avif" alt="Hero Image" class="w-full h-full object-cover rounded-lg" />
     </div>
   </div>
 </template>
 
 <script>
 export default {
   name: 'Hero',
 };
 </script>
 
 <style scoped>
 @keyframes fadeInLeft {
   from {
     opacity: 0;
     transform: translateX(-500px);
   }
   to {
     opacity: 1;
     transform: translateX(0);
   }
 }
 
 @keyframes fadeInLeft2 {
   from {
     opacity: 0;
     transform: translateX(-500px);
   }
   to {
     opacity: 1;
     transform: translateX(0);
   }
 }
 
 @keyframes fadeInUp {
   from {
     opacity: 0;
     transform: translateY(20px);
   }
   to {
     opacity: 1;
     transform: translateY(0);
   }
 }
 
 .animate-fade-in-left {
   animation: fadeInLeft 0.9s ease-in-out;
 }
 
 .animate-fade-in-left-2 {
   animation: fadeInLeft2 1s ease-in-out;
 }
 
 .animate-fade-in-up {
   animation: fadeInUp 1.1s ease-in-out;
 }
 
 .text-shadow {
   text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7), 0 0 5px rgba(0, 0, 0, 0.5);
 }
 </style>
 