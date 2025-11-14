<template>
  <nav
    class="w-full bg-white px-10 py-5 shadow-sm flex justify-between items-center"
  >
    <!-- Logo -->
    <div class="flex items-center gap-3 font-bold">
      <img src="/public/logo.png" alt="logo" class="w-[100px] h-[50px]" />
    </div>

    <!-- Menu -->
    <ul class="flex gap-10 text-gray-700 font-medium">
      <li>
        <router-link to="/" class="hover:text-blue-600 duration-200"
          >Home</router-link
        >
      </li>
      <li>
        <router-link
          to="/contact"
          class="px-4 py-1 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white duration-200"
        >
          Contact Us
        </router-link>
      </li>
    </ul>
  </nav>
</template>
