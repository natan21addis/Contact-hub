<template>
   <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6" style="padding-top: 5rem;">
     <div class="max-w-3xl w-full bg-white border border-[rgb(221,7,7)] rounded-lg shadow-md p-6">
       <div class="flex items-center mb-6">
         <img
           :src="profilePicture || '/default-profile.png'"
           alt="Profile"
           class="w-36 h-36 rounded-full object-cover mr-6 border border-gray-300 shadow-md"
         />
 
         <input
           v-if="isEditing"
           type="file"
           accept="image/*"
           @change="handleFileChange"
           class="block mb-4 text-sm text-gray-700"
         />
 
         <div class="flex-grow">
           <h1 class="text-3xl font-semibold text-gray-900">
             <input
               v-if="isEditing"
               type="text"
               name="name"
               v-model="editedUser.name"
               class="w-full text-3xl font-semibold text-black bg-white border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
               placeholder="Name"
             />
             <span v-else>{{ user.name || 'No Name' }}</span>
           </h1>
         </div>
       </div>
 
       <div class="mb-4">
         <h2 class="text-lg font-semibold text-gray-900">Email</h2>
         <input
           v-if="isEditing"
           type="email"
           name="email"
           v-model="editedUser.email"
           class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
           placeholder="Email"
         />
         <p v-else class="text-lg text-gray-700">{{ user.email || 'No Email' }}</p>
       </div>
 
       <div class="mb-4">
         <h2 class="text-lg font-semibold text-gray-900">Phone Number</h2>
         <input
           v-if="isEditing"
           type="text"
           name="phone_number"
           v-model="editedUser.phone_number"
           class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
           placeholder="Phone Number"
         />
         <p v-else class="text-lg text-gray-700">{{ user.phone_number || 'No Phone Number' }}</p>
       </div>
 
       <div class="mb-4">
         <h2 class="text-lg font-semibold text-gray-900">Birthday</h2>
         <input
           v-if="isEditing"
           type="date"
           name="birthday"
           v-model="editedUser.birthday"
           class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
         />
         <p v-else class="text-lg text-gray-700">{{ user.birthday || 'No Birthday Provided' }}</p>
       </div>
 
       <div class="mt-6">
         <div class="flex space-x-4">
           <button
             v-if="isEditing"
             @click="handleSave"
             class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
           >
             Save
           </button>
           <button
             v-if="isEditing"
             @click="handleCancel"
             class="px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
           >
             Cancel
           </button>
           <button
             v-else
             @click="isEditing = true"
             class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
           >
             Edit Profile
           </button>
          
         </div>
       </div>
     </div>
   </div>
 </template>
 
 <script>
 export default {
   data() {
     return {
       user: JSON.parse(localStorage.getItem('authUser')) || {},
       profilePicture: '',
       isEditing: false,
       editedUser: {},
     };
   },
   created() {
     this.editedUser = { ...this.user };
     this.profilePicture = this.user.photo || '';
   },
   methods: {
     handleFileChange(event) {
       const file = event.target.files[0];
       if (file) {
         const reader = new FileReader();
         reader.onloadend = () => {
           this.profilePicture = reader.result;
           this.editedUser.photo = reader.result;
         };
         reader.readAsDataURL(file);
       }
     },
     handleSave() {
       localStorage.setItem('authUser', JSON.stringify(this.editedUser));
       this.user = { ...this.editedUser };
       this.isEditing = false;
       alert('Profile saved successfully!');
     },
     handleCancel() {
       this.editedUser = { ...this.user };
       this.isEditing = false;
     },
     handleLogout() {
       localStorage.removeItem('authUser');
       this.$router.push('/auth');
     },
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
 