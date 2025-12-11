<template>
  <nav
    class="fixed top-0 left-0 w-full px-4 md:px-10 py-3 flex justify-between items-center bg-white/90 backdrop-blur-lg shadow z-50"
    style="font-family: Alexandria"
  >
    <img
      src="/src/assets/img/logo.png"
      class="w-[90px] h-[45px] sm:w-[110px] sm:h-[55px] md:w-[150px] md:h-[80px]"
    />

    <router-link
      to="/Product"
      class="flex items-center gap-1 text-[#133F6C] font-bold text-xs sm:text-sm md:text-lg px-3 py-2 rounded-full hover:bg-[#EAF4FF] transition"
    >
    
      <span class="hidden md:inline">Back to Products</span>
      <span class="inline md:hidden">Back to Product</span>
    </router-link>
  </nav>
</template>
