<template>
 <div class="flex group items-center hover:bg-whatsapp-dark-100 h-16 px-2">
   <div class="bg-transparent w-20  p-2">
      <img class="h-14 w-14 rounded-full object-cover" :src="inboxChat.imageAvatar" alt="profile">
   </div>
   <div class="flex-1 h-full leading-none flex justify-center flex-col pr-2 border-b border-gray-700 overflow-x-hidden">
      <div class="flex items-center justify-between">
         <span class="font-semibold text-lg text-gray-50"> {{ inboxChat.author }} </span>
         <span class="text-sm text-whatsapp-teal-green"> {{inboxChat.time }} </span>
      </div>
      <div class="flex items-center justify-between">
         <p class="text-sm text-gray-300"><span class="font-semibold"><span class="hidden">{{inboxChat.author}} </span></span> {{ inboxChat.message }}</p>
         <div class="inline-flex space-x-2 transition-transform duration-100 ease-linear transform translate-x-7 group-hover:translate-x-0">
            <div  v-if="inboxChat.entry > 0" class="py-1 px-1.5 bg-whatsapp-teal-green leading-none text-gray-900 rounded-full text-xs">
               <span class="p-0.5 w-full">{{ inboxChat.entry}}</span>
            </div>
            <button class="focus:outline-none text-transparent group-hover:text-gray-500">
               <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
               </svg>
            </button>
         </div>
      </div>
   </div>
</div>
</template>

<script>
export default {
   props:{
      inboxChat: Object
   },
   setup () {
      

      return {}
   }
}
</script>
