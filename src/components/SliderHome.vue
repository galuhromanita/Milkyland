<template>
  <div class="w-full overflow-hidden py-10 bg-white">
    <div class="slider-track gap-40">
      <!-- LOOP 1 -->
      <div
        v-for="(item, index) in items"
        :key="'a' + index"
        class="slider-card"
      >
        <img :src="item.icon" />
        <p>{{ item.title }}</p>
      </div>

      <!-- LOOP 2 (duplikasi untuk infinite) -->
      <div
        v-for="(item, index) in items"
        :key="'b' + index"
        class="slider-card"
      >
        <img :src="item.icon" />
        <p>{{ item.title }}</p>
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
