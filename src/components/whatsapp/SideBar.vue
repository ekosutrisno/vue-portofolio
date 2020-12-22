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
      <ChatSideBar v-for="inbox in inboxChats" :key="inbox.inboxId" :inboxChat="inbox" />
   </div>

</div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue'
import ChatSideBar from './ChatSideBar.vue'
   export default {
  components: { ChatSideBar },
      setup(){
         const shwoChatOptions = ref(false)
         const state = reactive({
            inboxChats:[
               {
                  inboxId: '8b2f0a31-db02-4463-8c7c-8d1e6a8d69ed',
                  author: 'Eko Sutrisno',
                  time: '12:21 PM',
                  message: 'Kuy, kapan makan2 nih?',
                  entry: 1,
                  imageAvatar:'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/9_avatar-128.png'
               },
               {
                  inboxId: 'f5bdcd3e-bfa8-475d-80d4-697f8bad6462',
                  author: 'Tukang Ngerecokin',
                  time: '10:00 PM',
                  message: 'Eko apa kabar?',
                  entry: 0,
                  imageAvatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/female_woman_avatar_portrait-128.png'
               },
               {
                  inboxId: '1d3d9920-a0e6-4bf2-a432-840af630bc2a',
                  author: 'Anak Kecoak',
                  time: '05:00 AM',
                  message: 'Woy woy woy woy woy Aku laper nih',
                  entry: 12,
                  imageAvatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/zombie_avatar_monster_dead-128.png'
               },
               {
                  inboxId: 'a6f5d032-4c1e-4d67-a0f3-74f79dabc981',
                  author: 'Hanifah',
                  time: '10:00 PM',
                  message: 'Eko apa kabar?',
                  entry: 0,
                  imageAvatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/boy_person_avatar_kid-128.png'
               },
               {
                  inboxId: '8df61a4d-11a5-4db4-b081-cc27bdb265e7',
                  author: 'Aisyah Ayu Asyifa',
                  time: '10:00 PM',
                  message: 'Eko apa kabar?',
                  entry: 1,
                  imageAvatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/grandma_elderly_nanny_avatar-128.png'
               },
               {
                  inboxId: '819163a6-2d45-442a-9a6c-066797a3420f',
                  author: 'Ibukku Sayang',
                  time: '10:00 PM',
                  message: 'Eko apa kabar?',
                  entry: 0,
                  imageAvatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/pilot_traveller_person_avatar-128.png'
               },
               {
                  inboxId: '6273ffde-c877-4515-b25f-b74c2507e83b',
                  author: 'Mbah Q Keren',
                  time: '10:00 PM',
                  message: 'Eko apa kabar?',
                  entry: 1,
                  imageAvatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/marilyn_monroe_artist_avatar-128.png'
               },
               {
                  inboxId: '8335712b-87b0-4ad7-921d-54a113bc57de',
                  author: 'Paman Q',
                  time: '10:00 PM',
                  message: 'Eko apa kabar?',
                  entry: 0,
                  imageAvatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/avocado_scream_avatar_food-128.png'
               },
               {
                  inboxId: 'e0d2477d-5d53-4a4f-bd00-5e17037257f0',
                  author: 'Bibik Q',
                  time: '10:00 PM',
                  message: 'Eko apa kabar?',
                  entry: 2,
                  imageAvatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/cloud_crying_rain_avatar-128.png'
               },
               {
                  inboxId: '027dfa72-946c-44bd-b316-2d64bce00f3f',
                  author: 'Anak Gak Kenal',
                  time: '10:00 PM',
                  message: 'Eko apa kabar?',
                  entry: 0,
                  imageAvatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/ufo_alien_space_avatar-128.png'
               },
               {
                  inboxId: '',
                  author: 'Paijo',
                  time: '10:00 PM',
                  message: 'Eko apa kabar?',
                  entry: 0,
                  imageAvatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/breaking_bad_chemisrty_avatar_heisenberg-128.png'
               },
               {
                  inboxId: '',
                  author: 'Bambang Susilo',
                  time: '10:00 PM',
                  message: 'Eko apa kabar?',
                  entry: 0,
                  imageAvatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/punk_man_person_avatar-128.png'
               },
            ]
         })
         return {
            ...toRefs(state),
            shwoChatOptions
         }
      }
   }
</script>