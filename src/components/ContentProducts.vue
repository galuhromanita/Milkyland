<template>
  <div
    class="w-full bg-white px-4 md:px-12 lg:px-20 py-14 md:py-40 mt-[50px] md:mt-0"
  >
    <div class="relative">
      <!-- kiri -->
      <button
        @click="scrollLeft"
        class="absolute left-1 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center hover:bg-gray-100 transition z-20"
      >
        <i class="fa-solid fa-chevron-left text-sm md:text-base"></i>
      </button>

      <!-- kanan -->
      <button
        @click="scrollRight"
        class="absolute -right-3 top-1/3 bg-white shadow-lg rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center hover:bg-gray-100 transition z-20"
      >
        <i class="fa-solid fa-chevron-right text-sm md:text-base"></i>
      </button>

      <div
        ref="scrollContainer"
        class="flex gap-6 md:gap-12 lg:gap-20 px-4 md:px-10 lg:px-20 overflow-x-auto snap-x snap-mandatory scrollbar-hide pt-10 scroll-smooth"
      >
        <!-- card -->
        <div
          v-for="item in products"
          class="snap-start flex-shrink-0 w-[180px] h-[240px] md:w-[220px] md:h-[270px] lg:w-[270px] lg:h-[300px] rounded-3xl shadow-lg p-6 md:p-8 lg:p-10 relative flex flex-col items-center"
          :class="item.bg"
        >
          <img
            :src="item.image"
            class="object-contain absolute left-1/2 -translate-x-1/2"
            :class="[
              item.name === 'Caramel'
                ? 'w-[150px] md:w-[180px] lg:w-[230px] -top-10 md:-top-14'
                : item.name === 'Mocca'
                ? 'w-[140px] md:w-[160px] lg:w-[210px] -top-8 md:-top-12'
                : 'w-[160px] md:w-[200px] lg:w-[250px] -top-8 md:-top-10',
            ]"
          />

          <!-- judul -->
          <h2
            class="text-xl md:text-2xl lg:text-3xl mt-28 md:mt-32 lg:mt-40 w-full text-center"
            style="font-family: Alexandria"
          >
            {{ item.name }}
          </h2>

          <!-- button -->
          <router-link
            :to="item.link"
            class="bg-white mt-2 px-4 py-2 rounded-full shadow hover:bg-gray-100 transition text-center text-xs md:text-sm font-semibold w-[120px] md:w-[140px] whitespace-nowrap"
            style="font-family: Poppins"
          >
            Detail Product
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const scrollContainer = ref(null);

function scrollLeft() {
  scrollContainer.value.scrollBy({
    left: -300,
    behavior: "smooth",
  });
}

function scrollRight() {
  scrollContainer.value.scrollBy({
    left: 300,
    behavior: "smooth",
  });
}

const products = [
  {
    id: 1,
    name: "Strawberry",
    image: "/src/assets/img/stoberi.png",
    link: "/product-strawberry",
    bg: "bg-[#FEE3FF]",
  },
  {
    id: 2,
    name: "Chocolate",
    image: "/src/assets/img/coklat.png",
    link: "/product-chocolate",
    bg: "bg-[#EFFFC3]",
  },
  {
    id: 3,
    name: "Caramel",
    image: "/src/assets/img/karamel.png",
    link: "/product-caramel",
    bg: "bg-[#FFE7A4]",
  },
  {
    id: 4,
    name: "Taro",
    image: "/src/assets/img/taro.png",
    link: "/product-taro",
    bg: "bg-[#E0CCFB]",
  },
  {
    id: 5,
    name: "Mocca",
    image: "/src/assets/img/moka.png",
    link: "/product-mocca",
    bg: "bg-[#ECCFB1]",
  },
];
</script>
