<template>
   <div class="flex-1 flex flex-col justify-between bg-whatsapp-dark-300">
      <!-- Header -->
      <div class="bg-whatsapp-dark-200 shadow-lg flex items-center justify-between border-r w-full h-14 text-gray-100 border-gray-700 py-2 px-4">
         <div class="inline-flex">
            <img class="w-10 h-10 object-cover" src="https://avatars0.githubusercontent.com/u/51039205?s=460&u=cb1d242b6a9b13a3b6383e46b5410fafe471b63d&v=4" alt="profile-img">
            <div class="inline-block font-bold ml-3">
               <h1 class="text-gray-300">Eko Sutrisno</h1>
               <p class="text-sm text-gray-400 font-normal">last seen yesterady at 6.19 PM</p>
            </div>
         </div>
         <div class="inline-flex items-center space-x-3">
            <button class="text-gray-400 focus:outline-none hover:bg-whatsapp-dark-300 hover:bg-opacity-30 rounded-full p-2">
               <svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
               </svg>
            </button>
            <button class="text-gray-400 focus:outline-none hover:bg-whatsapp-dark-300 hover:bg-opacity-30 rounded-full p-2">
               <svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
               </svg>
            </button>
         </div>
      </div>

      <!-- Chats Wrapper -->
      <div class="flex-1 flex flex-col space-y-3 overflow-y-auto on-scrollbar bg-whatsapp-dark-300 px-20 py-3">
        <div v-for="(chat,i) in chats" :key="i" :class="{'items-end' : chat.chatWrapper.isOwner}" class="flex w-full flex-col">
            <ChatOther v-for="(cData,i) in chat.chatWrapper.chatData" :key="i" :idx="i" :chat="cData"/>
        </div>
      </div>
      <!-- Input Chat Bottom -->
      <div class="bg-whatsapp-dark-200 shadow-lg flex items-center justify-between border-r w-full h-14 text-gray-100 border-gray-700 py-2 px-4">
         <div class="inline-flex items-center space-x-3">
            <button class="text-gray-500 focus:outline-none hover:bg-whatsapp-dark-300 hover:bg-opacity-30 rounded-full p-2">
              <svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
            </button>
            <button class="text-gray-500 focus:outline-none hover:bg-whatsapp-dark-300 hover:bg-opacity-30 rounded-full p-2">
              <svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
               </svg>
            </button>
         </div>
         <div class="relative w-full">
               <input placeholder="type a message" type="text" class="py-2 px-4 text-gray-300 w-full focus:outline-none rounded-full bg-gray-700 bg-opacity-30">
         </div>
         <div class="inline-flex items-center space-x-3">
            <button class="text-gray-500 focus:outline-none hover:bg-whatsapp-dark-100 hover:bg-opacity-30 rounded-full p-2">
              <svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
               </svg>
            </button>
         </div>
      </div>
   </div>
</template>

<script>
import ChatOther from './ChatOther.vue'
import {chats} from '../../assets/resources/chats'
import { reactive, toRefs } from 'vue'
   export default {
      components: {ChatOther },
      setup(){
         const state = reactive({
            chats
         })
         return{
            ...toRefs(state)
         }
      }
   }
            
</script>

<style scoped>

</style>