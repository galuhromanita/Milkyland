<template>
  <section
    class="relative w-full h-[100vh] bg-cover bg-center flex items-center -mt-[0px]"
    style="background-image: url('/src/assets/img/bghero.jpg')"
  >
    <!-- Overlay terang -->
    <div class="absolute inset-0 bg-white/45"></div>

    <!-- Teks hero -->
    <div
      class="relative z-10 px-6 lg:px-20 text-center text-white max-w-5xl mx-auto"
    >
      <h1
        class="text-6xl md:text-7xl font-extrabold leading-[1.0] style-home mb-[-10px]"
        style="font-family: 'Alexandria'"
      >
        Fresh Milk
      </h1>

      <h1
        class="text-6xl md:text-7xl font-extrabold leading-[1.0] style-home"
        style="font-family: 'Alexandria'"
      >
        Fun Flavors!
      </h1>

      <p
        class="mt-3 text-[26px] font-bold leading-relaxed max-w-xl mx-auto"
        style="font-family: 'Poppins'; color: #133F6C; sans-serif"
      >
        Rasakan kesegaran Ultra Milk dengan varian rasa yang bikin harimu makin
        seru
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>
