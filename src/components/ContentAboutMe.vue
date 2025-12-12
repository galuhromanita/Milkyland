<template>
  <section class="w-full bg-[#D9EAFD] px-4 md:px-12 lg:px-20 pt-40 pb-40">
    <div
      class="max-w-6xl md-auto mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
    >
      <div>
        <h1
          class="text-3xl md:text-4xl lg:font-bold text-[#133F6C] mb-5 text-center sm:text-center md:text-left drop-shadow-[-2px_-2px_0_white] drop-shadow-[2px_-2px_0_white] drop-shadow-[-2px_2px_0_white] drop-shadow-[2px_2px_0_white]"
          style="font-family: Alexandria"
        >
          Galuh Juliviana Romanita
        </h1>
        <h1
          class="text-gray-700 font-bold leading-relaxed sm:text-center md:text-left text-lg md:text-lg"
          style="font-family: Poppins"
        >
          11231027 - Informatika - Institut Teknologi Kalimantan
        </h1>
        <p
          class="text-gray-700 leading-relaxed sm:text-center md:text-left text-base md:text-lg mt-4"
          style="font-family: Poppins"
        >
          Saya mahasiswi di ITK yang sedang menempuh semester 5 super dasyhat,
          semoga kuat sampai tamat dan bisa cepet lulus. Aamiin Allahumma
          Aamiin.
        </p>
      </div>

      <div class="hidden md:flex justify-center">
        <img
          src="/src/assets/img/gals.jpeg"
          class="w-[220px] md:w-[350px] lg:w-[420px] drop-shadow-xl mx-auto"
        />
      </div>
    </div>
  </section>

  <section class="w-full px-4 md:px-12 lg:px-20 xl:px-20 py-40 bg-white">
    <div
      class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
    >
      <div
        v-for="(product, index) in products"
        :key="index"
        class="rounded-2xl shadow-lg p-6 md:p-8 flex flex-col items-center"
        :style="{ backgroundColor: product.bgColor }"
      >
        <h3
          class="text-xl md:text-2xl font-extrabold text-[#1E3A4C] mb-2 text-center"
        >
          {{ product.title }}
        </h3>
        <p class="text-[#3A4A52] font-semibold text-center">
          {{ product.ingredients }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MilkylandSection",
  data() {
    return {
      products: [
        {
          title: "Ngoding",
          ingredients: "JavaScripts, Python, MySQL",
          bgColor: "#ECCFB1",
        },
        {
          title: "Networking",
          ingredients: "Cisco Paket Tracer",
          bgColor: "#EFFFC3",
        },
        {
          title: "Baby Sitting",
          ingredients: "Menjaga dan mengurus anak kecil",
          bgColor: "#FEE3FF",
        },
      ],
    };
  },
};
</script>
