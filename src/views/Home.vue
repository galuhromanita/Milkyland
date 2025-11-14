<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
</script>
<template>
  <Navbar />
  <section
    class="relative w-full h-[100vh] bg-cover bg-center flex items-center"
    style="background-image: url('/bghero.jpg')"
  >
    <div class="absolute inset-0 bg-black/30"></div>
    <div
      class="relative z-10 px-6 lg:px-20 text-center text-white max-w-4xl mx-auto"
    >
      <h1
        class="mt-1 text-6xl md:text-7xl font-bold leading-[1.1]"
        style="font-family: 'Poppins', serif; text-transform: uppercase"
      >
        Fresh Milk Fun Flavors!
      </h1>
      <p
        class="mt-6 text-xl leading-relaxed max-w-2xl"
        style="font-family: 'Poppins', sans-serif"
      >
        Rasakan kesegaran Ultra Milk dengan varian rasa yang bikin harimu makin
        seru
      </p>
    </div>
  </section>
  <section class="relative w-full py-28 px-6 lg:px-20">
    <div
      class="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
    >
      <div>
        <h2
          class="text-4xl font-bold mb-6"
          style="font-family: 'Poppins', serif"
        >
          Mengapa Ultra Milk?
        </h2>
        <p
          class="text-lg leading-relaxed"
          style="font-family: 'Poppins', sans-serif"
        ></p>
      </div>

      <div class="flex justify-center">
        <div
          class="bg-white p-6 rounded-xl shadow-md flex items-center justify-center"
        >
          <img src="/ultra.png" alt="Ultra Milk" class="max-w-full h-auto" />
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>
