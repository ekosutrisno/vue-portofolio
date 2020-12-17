<template>
   <div class="h-auto group w-full max-w-md mb-0.5 text-sm bg-whatsapp-teal-green-dark rounded-lg relative text-gray-300" :class="{'rounded-tr-none ':idx==0}">
      <div v-if="idx == 0" class="absolute top-0 -right-2 arrow-down"></div>
      <div class="p-2">
         <p>Eko Sutrisno</p>
      </div>
      <div class="flex items-center justify-end bottom-0 -right-3 text-xs leading-none text-gray-400 absolute overflow-hidden">
        <div class="inline-flex items-center -mr-3">
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
         <button class="focus:outline-none mr-3 text-transparent group-hover:text-gray-300 transition-transform duration-100 ease-linear transform group-hover:-translate-x-1">
            <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
            </svg>
         </button>
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
  border-top: 12px solid #075E54;
}
</style>