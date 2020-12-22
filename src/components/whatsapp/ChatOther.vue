<template>
   <div class="h-auto group max-w-md mb-0.5 text-sm rounded-lg relative text-gray-300" :class="{
      'rounded-tl-none ':idx == 0 && chat.isOwner == false,
      'bg-whatsapp-dark-200': chat.isOwner == false,
      'rounded-tr-none ':idx == 0 && chat.isOwner,
      'bg-whatsapp-teal-green-dark ': chat.isOwner,
      }"
   >

      <div v-if="idx == 0"
         class="absolute top-0 arrow-down"
         :class="{
            '-left-2': chat.isOwner == false,
            'arrow-down-gray' : chat.isOwner == false,
            '-right-2': chat.isOwner,
            'arrow-down-green' : chat.isOwner,
         }"
      ></div>
      <div class="p-2">
         <p class="w-auto pr-20"> {{chat.chatMessages}} </p>
      </div>
      <div class="flex items-center justify-end bottom-0 -right-3 text-xs leading-none text-gray-400 absolute">
        <div class="inline-flex items-center -mr-3">
            <span>  {{chat.chatTime}} </span>
            <span v-if="chat.isOwner" class="ml-0.5 text-whatsapp-blue">
               <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
               </svg>
               <svg class="w-4 -mt-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
               </svg>
            </span>
        </div>
         <button class="focus:outline-none mr-3 text-transparent group-hover:text-gray-400 transition-transform duration-100 ease-linear transform group-hover:-translate-x-1">
            <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
            </svg>
         </button>
      </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
   export default {
      props:{
         idx: Number,
         chat: Object,
         isOwner: Boolean
      },
      setup(){
         const state = reactive({
        
         })

         return{
            ...toRefs(state)
         }
      }
   }
</script>

<style scoped>
.arrow-down-gray {
  width: 0; 
  height: 0; 
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-radius: 4px;
  border-top: 12px solid #2A2F32
}
.arrow-down-green {
  width: 0; 
  height: 0; 
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-radius: 4px;
  border-top: 12px solid #075E54
}
</style>