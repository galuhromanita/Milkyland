<script setup>
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<template>
  <footer class="bg-[#9AA6B2] py-10 px-20 text-gray-700 text-sm">
    <div class="max-w-6xl mx-auto flex justify-between items-center">
      <span
        class="text-xl"
        style="font-family: 'Courgette', cursive; color: #0e3f25"
      >
        MILKY LAND
      </span>

      <span
        class="flex items-center gap-3 text-base"
        style="font-family: sans-serif; color: black"
      >
        <i class="fa-solid fa-phone"></i>
        +62-821-717-921-38
      </span>

      <!-- Copyright -->
      <span
        class="text-base"
        style="font-family: 'Poppins', sans-serif; color: #1e1e1e"
      >
        2025 All Rights Reserved • Terms of Use • MILKYLAND
      </span>
    </div>
  </footer>
</template>
