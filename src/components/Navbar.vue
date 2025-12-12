<template>
  <nav
    :class="[
      'fixed top-0 left-0 w-full px-6 md:px-10 py-5 flex justify-between items-center z-50 transition-all duration-300',
      isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent',
    ]"
    style="font-family: Alexandria"
  >
    <div class="flex items-center gap-3 font-bold">
      <img
        src="/src/assets/img/logo.png"
        alt="logo"
        class="w-[120px] h-[60px] md:w-[150px] md:h-[80px]"
      />
    </div>

    <!-- hamburger -->
    <button
      class="md:hidden text-[#133F6C] text-3xl hover:scale-110 transition"
      @click="isOpen = !isOpen"
    >
      <i :class="isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
    </button>

    <!-- desktop/tablet -->
    <ul :class="['hidden md:flex gap-8 font-bold text-lg text-[#133F6C]']">
      <li v-for="item in links" class="group relative overflow-hidden">
        <router-link
          :to="item.to"
          class="px-5 py-1 block transition-all duration-300 hover:translate-x-1"
          exact-active-class="text-[#133F6C] font-extrabold underline underline-offset-4"
        >
          {{ item.label }}
        </router-link>

        <span
          class="absolute bottom-0 left-0 w-full h-[2px] bg-[#133F6C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
        ></span>
      </li>
    </ul>

    <!-- mobile -->
    <transition name="slide-fade">
      <ul
        v-if="isOpen"
        class="absolute top-full left-0 w-full bg-white/90 backdrop-blur-md shadow-xl flex flex-col py-4 md:hidden text-[#133F6C] font-bold text-lg"
      >
        <router-link
          v-for="item in links"
          :to="item.to"
          class="px-6 py-4 rounded-lg transition-all duration-300 hover:bg-[#EAF4FF] hover:pl-8 active:scale-95"
          exact-active-class="bg-[#D9EAFD] border-l-4 border-[#133F6C]"
          @click="isOpen = false"
        >
          {{ item.label }}
        </router-link>
      </ul>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isOpen = ref(false);
const isScrolled = ref(false);

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/product" },
  { label: "Contact Us", to: "/contact" },
  { label: "AboutMe", to: "/about-me" },
];

function handleScroll() {
  isScrolled.value = window.scrollY > 20;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
