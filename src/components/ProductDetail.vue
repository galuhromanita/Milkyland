<template>
  <!-- card -->
  <section class="w-full px-4 md:px-10 py-30">
    <div
      :class="[
        'rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10',
        imagePosition === 'left' ? 'md:flex-row-reverse' : 'md:flex-row',
      ]"
      :style="{ backgroundColor: bgColor }"
    >
      <div class="md:w-1/3 flex justify-center">
        <img
          :src="image"
          class="drop-shadow-xl w-[180px] md:w-[260px] lg:w-[300px]"
        />
      </div>

      <!-- jenis rasa -->
      <div class="md:w-1/2">
        <h1
          class="text-4xl md:text-4xl font-extrabold text-[#1E3A4C] mb-4 md:mb-6 leading-tight"
        >
          {{ title }}
        </h1>

        <div>
          <p class="text-md md:text-xl font-bold text-[#1E3A4C] mb-2">
            INGREDIENTS:
          </p>
          <p class="text-[#3A4A52] leading-relaxed font-semibold">
            {{ ingredients }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductDetail",
  props: {
    title: {
      type: String,
      required: true,
    },
    ingredients: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },

    // Posisi gambar
    imagePosition: {
      type: String,
      default: "right",
      validator: (value) => ["left", "right"].includes(value),
    },

    //  Ukuran gambar
    imageWidth: {
      type: Number,
      default: 300,
    },

    // Warna background
    bgColor: {
      type: String,
    },
  },
};
</script>
