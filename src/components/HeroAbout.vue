<template>
  <section
    class="relative w-full min-h-screen bg-cover bg-center flex items-center"
    style="background-image: url('/src/assets/img/bgabt.jpg')"
  >
    <div class="absolute inset-0 bg-white/70"></div>

    <div
      class="relative z-10 px-6 md:px-12 lg:px-20 text-center max-w-4x1 mx-auto md:text-7xl font-extrabold leading-[1.0] text-[#415973] drop-shadow-[-2px_-2px_0_white] drop-shadow-[2px_-2px_0_white] drop-shadow-[-2px_2px_0_white] drop-shadow-[2px_2px_0_white]"
    >
      <h1
        class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight md:leading-snug"
        style="font-family: 'Alexandria'"
      >
        ULTRA MILK FLAVOR
      </h1>
      <p
        class="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl font-medium md:font-bold leading-relaxed"
        style="font-family: 'Poppins', sans-serif; color: #133f6c"
      >
        Sebagai bagian dari PT Ultrajaya Milk Industry Tbk., Ultra Milk telah
        menjadi pilihan utama keluarga Indonesia sejak 1975. Ultra Milk Flavor
        adalah susu alami yang lezat, dikombinasikan dengan rasa alami yang
        memberikan rasa terbaik dan nutrisi esensial untuk seluruh anggota
        keluarga, terutama untuk remaja.
      </p>

      <router-link
        to="/product"
        class="inline-block mt-8 md:mt-10 px-8 md:px-10 py-3 md:py-4 bg-[#D8EAFE] text-[#133F6C] font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition duration-300 text-lg md:text-xl"
        style="font-family: 'Poppins'"
      >
        See Product
      </router-link>
    </div>
  </section>
</template>
