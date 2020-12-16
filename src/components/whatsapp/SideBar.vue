<template>
<div class="w-side-width flex-none flex-shrink-0 flex flex-col bg-whatsapp-dark-300">
   <div class="flex-shrink-0">
      <!-- Header Sidebar -->
      <div class="bg-whatsapp-dark-200 flex items-center justify-between border-r w-full h-14 text-gray-100 border-gray-700 py-2 px-4">
         <div>
            <img class="w-10 h-10 object-cover" src="https://avatars0.githubusercontent.com/u/51039205?s=460&u=cb1d242b6a9b13a3b6383e46b5410fafe471b63d&v=4" alt="profile-img">
         </div>
         <div class="inline-flex items-center space-x-3">
            <button class="text-gray-400 focus:outline-none hover:bg-whatsapp-dark-300 hover:bg-opacity-30 rounded-full p-2">
               <svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
               </svg>
            </button>
            <button class="text-gray-400 focus:outline-none hover:bg-whatsapp-dark-300 hover:bg-opacity-30 rounded-full p-2">
               <svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
               </svg>
            </button>
            <button class="text-gray-400 focus:outline-none hover:bg-whatsapp-dark-300 hover:bg-opacity-30 rounded-full p-2">
               <svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
               </svg>
            </button>
         </div>
      </div>

      <!-- Info Sidebar -->
      <div class="bg-whatsapp-blue-dark w-full h-22 items-center inline-flex space-x-3 text-gray-100 border-gray-700 py-2 px-4">
         <div class="rounded-full p-2.5 bg-gray-300 bg-opacity-40">
            <svg class="w-6 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
         </div>
         <div class="text-gray-300 font-semibold leading-none">
            <h1 class="mb-0.5">Get notified of new messages</h1>
            <a href="#" class="text-sm font-normal hover:underline">Turn on dekstop notification ></a>
         </div>
      </div>

      <!-- Input Seacrh -->
      <div class="px-4 py-2 border-r border-b border-gray-700">
            <div class="relative">
               <input type="text" class="py-1.5 pl-12 text-gray-300 w-full focus:outline-none rounded-full bg-whatsapp-dark-100">
               <svg class="w-4 absolute inset-y-0 top-2.5 text-gray-500  left-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
               </svg>
            </div>
      </div>
   </div>
   <div class="flex-1 flex flex-col overflow-y-auto on-scrollbar border-r border-gray-700">
      <ChatSideBar v-for="(chat,i) in 5" :key="i" />
   </div>

</div>
</template>

<script>
import { ref } from 'vue'
import ChatSideBar from './ChatSideBar.vue'
   export default {
  components: { ChatSideBar },
      setup(){
         const shwoChatOptions = ref(false)
         return {
            shwoChatOptions
         }
      }
   }
</script>