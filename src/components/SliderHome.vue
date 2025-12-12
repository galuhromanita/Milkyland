<template>
  <div class="w-full overflow-hidden py-10 bg-white">
    <div class="flex w-max animate-infinite-slide gap-40">
      <!-- loop pertama -->
      <div
        v-for="item in items"
        class="bg-[#d9eafd] p-6 rounded-xl w-[200px] h-[180px] flex flex-col items-center text-center shadow-md"
      >
        <img :src="item.icon" class="w-16 h-[70px]" />
        <p class="text-black font-semibold text-[19px] mt-5 leading-tight">
          {{ item.title }}
        </p>
      </div>

      <!-- loop kedua -->
      <div
        v-for="item in items"
        class="bg-[#d9eafd] p-6 rounded-xl w-[200px] h-[180px] flex flex-col items-center text-center shadow-md"
      >
        <img :src="item.icon" class="w-16 h-[70px]" />
        <p class="text-black font-semibold text-[19px] mt-5 leading-tight">
          {{ item.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturesSlider",

  data() {
    return {
      items: [
        {
          icon: "/src/assets/icon/teknologi.png",
          title: "Menggunakan Teknologi UHT Modern",
        },
        {
          icon: "/src/assets/icon/varianrasa.png",
          title: "Berbagai Varian Rasa",
        },
        {
          icon: "/src/assets/icon/kalsium.png",
          title: "Sumber Kalsium Sehari-hari",
        },
        {
          icon: "/src/assets/icon/50.png",
          title: "50 Tahun Terpercaya",
        },
        {
          icon: "/src/assets/icon/peternakan.png",
          title: "Dari Peternakan Terbaik",
        },
        {
          icon: "/src/assets/icon/sususegar.png",
          title: "Susu Sapi Segar Berkualitas",
        },
      ],
    };
  },
};
</script>

<style scoped></style>

