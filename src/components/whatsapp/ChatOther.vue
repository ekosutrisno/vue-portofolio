<template>
   <div class="h-auto w-auto max-w-md mb-0.5 text-sm bg-whatsapp-dark-200 rounded-lg relative text-gray-300" :class="{'rounded-tl-none ':idx==0}">
      <div v-if="idx == 0" class="absolute top-0 -left-2 arrow-down"></div>
      <div class="p-2">
         <p>Eko Sutrisno</p>
      </div>
      <div class="flex items-center justify-end bottom-0 right-1 text-xs leading-none text-gray-400 absolute">
         <span>12:22 PM</span>
         <span class="ml-0.5 text-whatsapp-blue">
         <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
         </svg>
         <svg class="w-4 -mt-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
         </svg>
         </span>
      </div>
  </div>
</template>

<script>
   export default {
      props:{
         idx: Number
      }
   }
</script>

<style scoped>
.arrow-down {
  width: 0; 
  height: 0; 
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-radius: 4px;
  border-top: 12px solid #2A2F32;
}
</style>