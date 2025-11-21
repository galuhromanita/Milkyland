<template>
  <section
    class="relative w-full h-[100vh] bg-cover bg-center flex items-center -mt-[0px]"
    style="background-image: url('/src/assets/img/bgabt.jpg')"
  >
    <!-- Overlay terang -->
    <div class="absolute inset-0 bg-white/70"></div>

    <!-- Teks hero -->
    <div
      class="relative z-10 px-6 lg:px-20 text-center text-white max-w-5xl mx-auto"
    >
      <h1
        class="text-4xl md:text-6xl font-extrabold leading-[2.1] style-home mb-[-10px]"
        style="font-family: 'Alexandria'"
      >
        ULTRA MILK FLAVOR
      </h1>

      <p
        class="mt-3 text-[25px] font-bold leading-relaxed max-w-1xl mx-auto"
        style="font-family: 'Poppins', sans-serif; color: #133f6c"
      >
        Sebagai bagian dari PT Ultrajaya Milk Industry Tbk., Ultra Milk telah
        menjadi pilihan utama keluarga Indonesia sejak 1975. Ultra Milk Flavor
        adalah susu alami yang lezat, dikombinasikan dengan rasa alami yang
        memberikan rasa terbaik dan nutrisi esensial untuk seluruh anggota
        keluarga, terutama untuk remaja.
      </p>

      <!-- Button See Product -->
      <router-link
        to="/product"
        class="inline-block mt-10 px-10 py-4 bg-[#D8EAFE] text-[#133F6C] font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
        style="font-family: 'Poppins'; font-size: 20px"
      >
        See Product
      </router-link>
    </div>
  </section>
</template>

<script>
export default {};
</script>
