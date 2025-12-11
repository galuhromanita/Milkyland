<template>
  <section
    class="relative w-full py-40 md:py-32 lg:py-28 xl:py-40 flex items-center bg-[#D9EAFD] md:min-h-[90vh]"
  >
    <div class="w-full bg-[#D9EAFD] flex justify-center">
      <div class="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 px-6">
        <div class="flex flex-col">
          <h2
            class="text-5xl font-bold text-[#415973] drop-shadow-[-2px_-2px_0_white] drop-shadow-[2px_-2px_0_white] drop-shadow-[-2px_2px_0_white] drop-shadow-[2px_2px_0_white] mb-4"
            style="font-family: Alexandria"
          >
            Saran untuk Website
          </h2>
          <p class="text-2xl text-gray-700 leading-relaxed">
            Tulis saja melalui form di samping ini. Pendapat Anda sangat berarti
            untuk pengembangan website ini ke arah yang lebih baik.
          </p>
        </div>

        <div class="bg-white/40 backdrop-blur-lg p-10 rounded-2xl shadow">
          <label class="block font-semibold text-[#133F6C] mb-1">Nama</label>
          <input
            type="text"
            v-model="nama"
            placeholder="Masukkan nama"
            class="w-full p-3 rounded-lg bg-white border border-gray-300 mb-6"
          />

          <label class="block font-semibold text-[#133F6C] mb-1"
            >Alamat Email</label
          >
          <input
            type="email"
            v-model="email"
            placeholder="Masukkan email"
            class="w-full p-3 rounded-lg bg-white border border-gray-300 mb-6"
          />

          <label class="block font-semibold text-[#133F6C] mb-1">Pesan</label>
          <textarea
            v-model="pesan"
            placeholder="Masukkan pesan"
            class="w-full p-3 rounded-lg bg-white border border-gray-300 h-32 mb-6"
          ></textarea>

          <button
            @click="submitForm"
            class="mx-auto block bg-[#DDEBFF] px-6 py-2 rounded-full font-poppins font-semibold text-black tesxt center shadow-[4px_6px_0_rgba(0,0,0,0.25)] transition hover:bg-[#C5DBFF] hover:-translate-y-[2px] hover:shadow-[6px_8px_0_rgba(0,0,0,0.25)]"
          >
            Kirim Pesan
          </button>
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 px-6 lg:px-20 bg-[#D9EAFD] -mt-[120px]">
    <div class="space-y-6 text-[#1C2A39]">
      <h2 class="text-[18px] opacity-50" style="font-family: 'Poppins', serif">
        P.T. Ultrajaya Milk Industry & Trading Company, Tbk.
      </h2>

      <div class="space-y-3 text-lg" style="font-family: 'Poppins', sans-serif">
        <p>
          <i class="fa-solid fa-location-dot"></i>
          Gedung Sovereign Plaza Lantai 17 CDE Jalan TB Simatupang kav 36
          Jakarta Selatan 12430
        </p>

        <p>
          <i class="fa-solid fa-phone"></i>
          +62-899-38-85872
        </p>

        <p>
          <i class="fa-solid fa-envelope"></i>
          customer_care@ultrajaya.co.id
        </p>
      </div>
    </div>
  </section>

  <!-- popup -->
  <div
    v-if="showPopup"
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
  >
    <div class="bg-white w-[380px] p-6 rounded-2xl shadow-lg text-center">
      <div
        class="w-20 h-20 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4"
      >
        <i class="fa-solid fa-circle-check text-blue-500 text-5xl"></i>
      </div>

      <p class="text-xl font-bold text-black mb-4">Pesan Berhasil Terkirim!</p>
      <button
        @click="showPopup = false"
        class="bg-[#DDEBFF] px-6 py-2 rounded-full font-poppins font-semibold text-black shadow-[4px_6px_0_rgba(0,0,0,0.25)] transition hover:bg-[#C5DBFF] hover:-translate-y-[2px] hover:shadow-[6px_8px_0_rgba(0,0,0,0.25)]"
      >
        OK
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showPopup = ref(false);

const nama = ref("");
const email = ref("");
const pesan = ref("");

function submitForm() {
  if (!nama.value || !email.value || !pesan.value) {
    alert("Semua field harus diisi terlebih dahulu!");
    return;
  }

  if (!email.value.includes("@") || !email.value.includes(".")) {
    alert("Alamat email tidak valid! Harus mengandung '@' dan domain.");
    return;
  }

  showPopup.value = true;

  nama.value = "";
  email.value = "";
  pesan.value = "";
}
</script>
