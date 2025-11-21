<template>
  <nav
    :class="[
      'absolute top-0 left-0 w-full px-10 py-5 flex justify-between items-center z-50 transition-all duration-300',
      $attrs.class,
    ]"
    style="font-family: 'Alexandria'"
  >
    <div class="flex items-center gap-3 font-bold">
      <img
        src="/src/assets/img/logo.png"
        alt="logo"
        class="w-[150px] h-[80px]"
      />
    </div>

    <!-- Navigation -->
    <ul class="flex gap-2 text-[#0E3F25] font-bold text-lg">
      <li>
        <router-link
          to="/"
          exact
          class="px-5 py-1 rounded-full transition-all duration-300 ease-in-out"
          exact-active-class="bg-white shadow-md"
        >
          Home
        </router-link>
      </li>

      <li>
        <router-link
          to="/about"
          class="px-5 py-1 rounded-full transition-all duration-300 ease-in-out"
          exact-active-class="bg-white shadow-md"
        >
          About
        </router-link>
      </li>

      <li>
        <router-link
          to="/product"
          class="px-5 py-1 rounded-full transition-all duration-300 ease-in-out"
          exact-active-class="bg-white shadow-md"
        >
          Products
        </router-link>
      </li>

      <li>
        <router-link
          to="/contact"
          class="px-5 py-1 rounded-full transition-all duration-300 ease-in-out"
          exact-active-class="bg-white shadow-md"
        >
          Contact Us
        </router-link>
      </li>
    </ul>
  </nav>
</template>
