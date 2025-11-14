<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <Navbar />
  <section class="relative w-full h-[100vh] flex items-center bg-blue-70">
    <div class="absolute inset-0 bg-blue-800/30"></div>

    <div class="relative z-10 px-6 lg:px-20 text-left text-white max-w-3xl">
      <h1
        class="text-5xl md:text-6xl font-bold leading-tight"
        style="font-family: 'Poppins', serif"
      >
        Saran untuk website
      </h1>

      <p
        class="mt-4 text-lg opacity-90"
        style="font-family: 'Poppins', sans-serif"
      >
        Tulis saja melalui form di samping ini. Pendapat Anda sangat berarti
        untuk pengembangan website ini ke arah yang lebih baik.
      </p>
    </div>
  </section>
  <section
    class="py-20 px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 bg-blue-100"
  >
    <div class="space-y-6 text-[#1C2A39]">
      <h2 class="text-4xl font-bold" style="font-family: 'Poppins', serif">
        P.T. Ultrajaya Milk Industry & Trading Company, Tbk.
      </h2>

      <div class="space-y-3 text-lg" style="font-family: 'Poppins', sans-serif">
        <p>
          <strong>Address:</strong> Gedung Sovereign Plaza Lantai 17 CDE Jalan
          TB Simatupang kav 36 Jakarta Selatan 12430
        </p>

        <p>
          <strong>Phone:</strong>
          <a href="tel:+628123456789" class="underline underline-offset-4">
            +62-899-38-85872
          </a>
        </p>

        <p>
          <strong>Email:</strong>
          <a
            href="customer_care@ultrajaya.co.id"
            class="underline underline-offset-4"
          >
            customer_care@ultrajaya.co.id
          </a>
        </p>
      </div>
    </div>
    <div>
      <iframe
        class="w-full h-[350px] rounded-xl shadow-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4056271.6191003197!2d107.5147721!3d-6.8662903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64b3392d4c3%3A0xdedd48ccfcd27fda!2sPT%20Ultra%20Jaya%20Milk%20Industry%20And%20Trading%20Company%2C%20Tbk!5e0!3m2!1sid!2sid!4v1763097708436!5m2!1sid!2sid"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
  <Footer />
</template>
