<template>
   <section class="py-6 bg-gray-100">
     <div class="container mx-auto lg:px-24">
       <h2 class="text-4xl font-bold text-center mb-24 mt-24 text-red-900">Unlock the Power of Seamless Contact Management <br/>
        
</h2>
<h2 class="text-xl  text-center mb-24 mt-12 text-gray-800">Discover a suite of powerful features designed to enhance your contact handling experience. Our platform combines user-friendly tools with advanced functionalities to streamline communication, organize connections, and boost productivity. Explore how our innovative features can transform the way you manage your contacts.</h2> 
       <div class="bg-white rounded-lg shadow-xl w-full mx-auto px-10"> <!-- Adjust background padding -->
         <div class="grid grid-cols-1 md:grid-cols-3 gap-8 p-10"> <!-- Grid setup -->
           <div class="feature-card rounded-lg shadow-lg relative w-full"> <!-- Added relative positioning -->
             <img src="CRUD.webp" alt="Contact Management" class="feature-image" /> <!-- Centered image -->
             <h3 class="card-heading font-bold text-red-800">CRUD Functionality</h3>
             <p class="card-description ">Effortlessly Create, Read, Update, and Delete contacts with our intuitive interface. Adding new contacts is quick and easy, allowing you to capture essential details like names, phone numbers, and email addresses in just a few clicks. You can also update existing contact information anytime, ensuring that your database remains accurate and up-to-date. If a contact is no longer needed, deleting them is just as simple, giving you complete control over your contact list.</p>
           </div>
 
           <div class="feature-card rounded-lg shadow-lg relative w-full">
             <img src="SORTING.avif" alt="Contact Handling" class="feature-image" />
             <h3 class="card-heading font-bold text-red-800">Customizable Sorting Options</h3>
             <p class="card-description ">Organize your contacts with customizable sorting options to suit your needs. Whether you prefer sorting by name, date added, or any other criteria, our flexible sorting tools make it easy to find what you need. This feature enhances your efficiency, allowing you to access your contacts quickly without unnecessary scrolling. Whether you’re searching for a business partner or a friend, you can sort your list to find them in seconds.</p>
           </div>
 
           <div class="feature-card rounded-lg shadow-lg relative w-full">
             <img src="BIRTDAY.webp" alt="Contact Insights" class="feature-image" />
             <h3 class="card-heading  font-bold text-red-800">Birthday Reminders</h3>
             <p class="card-description">Never forget a birthday again with our Birthday Reminders feature. Save important dates for each contact, and receive notifications ahead of time so you can reach out and celebrate. This thoughtful addition helps you maintain personal connections and shows your contacts that you care. It’s an effortless way to foster relationships and ensure you never miss an opportunity to connect.</p>
           </div>
           
         </div>
       </div>
     </div>
   </section>
 </template>
 
 <script>
 export default {
   name: 'Features',
 };
 </script>
 
 <style scoped>
 .feature-card {
   height: 650px; /* Increased height for uniformity */
   transition: border 0.3s ease; /* Smooth transition for border */
   position: relative; /* Set relative positioning for child elements */
   display: flex;
   flex-direction: column;
   justify-content: center; /* Center vertically */
   align-items: center; /* Center horizontally */
 }
 
 .feature-image {
   width: 50%; /* Adjust width of the image */
   height: auto; /* Maintain aspect ratio */
   position: absolute; /* Position it absolutely */
   top: 40px; /* Adjust top position */
 }
 
 .card-heading {
   font-size: 1.8rem; /* Adjust font size */

 
   position: absolute; /* Position it absolutely */
   top: 200px; /* Adjust top position for heading */
   text-align: center; /* Center text */
 }
 
 .card-description {
  /* Description color */
   position: absolute; /* Position it absolutely */
   top:280px; /* Adjust top position for description */
   text-align: center; /* Center text */
   padding: 0 10px; /* Add horizontal padding */
 }
 
 .feature-card:hover {
   border: 2px solid #cc1111; /* Add border on hover */
   border-radius: 8px; /* Maintain rounded corners on hover */
 }
 
 /* Set the width of the background for cards */
 .bg-white {
   width: calc(100% + 180px); /* Adjusted width for background */
   height: 800px;
   margin-left: -40px; /* Push the background to the left */
 }
 
 /* Increase horizontal gap between cards */
 .grid {
   gap: 89px; /* Set gap between cards */
 }
 
 /* Adjust the width of cards */
 .feature-card {
   width: 100%; /* Make cards full width */
 }
 </style>
 