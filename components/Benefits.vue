<template>
   <section class="benefits-section py-12 bg-gray-100">
     <div class="container mx-auto px-4">
       <h2 class="text-3xl font-bold text-red-800 text-center mb-10">
        KEY BENEFITS THAT USERS GAIN 
       </h2>
 
       <div class="space-y-10">
         <div class="flex items-center justify-between">
           <div class="text-content flex-1 mr-10">
             <h3 class="text-2xl  black mb-4 font-bold">Easy to Use</h3>
             <p class="text-lg text-gray-600 mb-2">
               Our mobile application is designed for straightforward use, making it user-friendly and accessible to everyone. 
               Navigate seamlessly with a clean interface that ensures a hassle-free experience. 
               Whether you're on a mobile device or tablet, you’ll find it easy to manage your tasks efficiently.
             </p>
           </div>
           <div class="image-content flex-1">
             <div class="card border rounded-lg shadow-lg overflow-hidden">
               <div class="overflow-hidden">
                 <img
                   src="EasyToUse.webp"
                   alt="Benefits Image"
                   class="w-full h-64 object-cover transition-transform transform hover:scale-110"
                 />
               </div>
             </div>
           </div>
         </div>
 
         <div class="flex items-center justify-between">
           <div class="text-content flex-1 mr-10">
             <h3 class="text-2xl font-semibold text-gray-700 mb-4">Security Measures</h3>
             <p class="text-lg text-gray-600 mb-2">
               We prioritize your security with robust measures that protect your data at all times. 
               Our system features encryption protocols and multi-factor authentication to ensure that your information remains secure. 
               Rest easy knowing that our application adheres to the highest industry standards for security.
             </p>
           </div>
           <div class="image-content flex-1">
             <div class="card border rounded-lg shadow-lg overflow-hidden">
               <div class="overflow-hidden">
                 <img
                   src="security.webp"
                   alt="Benefits Image"
                   class="w-full h-64 object-cover transition-transform transform hover:scale-110"
                 />
               </div>
             </div>
           </div>
         </div>
 
         <div class="flex items-center justify-between">
           <div class="text-content flex-1 mr-10">
             <h3 class="text-2xl font-semibold text-gray-700 mb-4">Free to Use</h3>
             <p class="text-lg text-gray-600 mb-2">
               Enjoy our services without any fees. 
               Our application allows you to use its full features completely free of charge. 
               There are no hidden costs or subscriptions—just straightforward, free access to all functionalities.
             </p>
           </div>
           <div class="image-content flex-1">
             <div class="card border rounded-lg shadow-lg overflow-hidden">
               <div class="overflow-hidden">
                 <img
                   src="free.webp"
                   alt="Benefits Image"
                   class="w-full h-64 object-cover transition-transform transform hover:scale-110"
                 />
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </section>
 </template>
 
 <script>
 export default {
   name: 'BenefitsSection',
 };
 </script>
 
 <style scoped>
 .image-content img {
   animation: move 5s ease-in-out infinite alternate;
 }
 
 @keyframes move {
   0% {
     transform: translateX(0);
   }
   100% {
     transform: translateX(10px);
   }
 }
 </style>
 