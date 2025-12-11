<template>
  <section
    class="w-full flex flex-col items-center py-10 px-4 md:px-12 lg:px-20"
  >
    <h2
      class="text-3xl font-bold italic text-center"
      style="font-family: Alexandria"
    >
      Cara Penyimpanan
    </h2>

    <div class="flex flex-col md:flex-row gap-6 md:gap-10 mt-6 md:mt-8">
      <!-- button 1  -->
      <button
        @click="openPopup('Sebelum dibuka')"
        class="bg-[#DDEBFF] px-8 py-3 rounded-full font-poppins font-semibold text-black shadow-[4px_6px_0_rgba(0,0,0,0.25)] transition hover:bg-[#C5DBFF] hover:-translate-y-[2px] hover:shadow-[6px_8px_0_rgba(0,0,0,0.25)]"
      >
        Sebelum dibuka
      </button>

      <!-- button 2 -->
      <button
        @click="openPopup('Setelah dibuka')"
        class="bg-[#DDEBFF] px-8 py-3 rounded-full font-poppins font-semibold text-black shadow-[4px_6px_0_rgba(0,0,0,0.25)] transition hover:bg-[#C5DBFF] hover:-translate-y-[2px] hover:shadow-[6px_8px_0_rgba(0,0,0,0.25)]"
      >
        Setelah dibuka
      </button>
    </div>

    <!-- popup overlay -->
    <div
      v-if="showPopup"
      class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
    >
      <div class="bg-white w-[380px] p-6 rounded-2xl shadow-lg text-center">
        <h3 class="text-xl font-bold mb-3" style="font-family: Alexandria">
          {{ popupTitle }}
        </h3>

        <p
          class="text-sm text-gray-700 leading-relaxed mb-5"
          style="font-family: Poppins"
        >
          {{ popupText }}
        </p>

        <button
          @click="showPopup = false"
          class="bg-[#DDEBFF] px-6 py-2 rounded-full font-poppins font-semibold text-black shadow-[4px_6px_0_rgba(0,0,0,0.25)] transition hover:bg-[#C5DBFF] hover:-translate-y-[2px] hover:shadow-[6px_8px_0_rgba(0,0,0,0.25)]"
        >
          OK
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const showPopup = ref(false);
const popupTitle = ref("");
const popupText = ref("");

// KONTEN POPUP
const storageInfo = {
  "Sebelum dibuka":
    "Sebaiknya disimpan dalam suhu kamar meskipun tanpa disimpan dalam pendingin. Jangka waktu penyimpanan yaitu maksimum 10 bulan. Produk juga sebaiknya disimpan dalam kondisi kering, bersih dan tempat yang sejuk.",

  "Setelah dibuka":
    "Kemasan harus ditutup rapat dan disimpan dalam lemari pendingin dalam suhu 4° C. Produk harus dihabiskan maksimal dalam 7 hari, namun sebaiknya langsung diminum habis setelah dibuka, supaya tetap terjaga kesegarannya.",
};

function openPopup(type) {
  popupTitle.value = type;
  popupText.value = storageInfo[type];
  showPopup.value = true;
}
</script>
