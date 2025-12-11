<template>
  <section
    class="relative w-full overflow-visible"
    :style="{ height: currentHeight + 'px' }"
  >
    <!-- bg -->
    <img
      :src="bgImage"
      class="absolute z-0 pointer-events-none select-none transition-all duration-300"
      :style="{
        top: currentConfig.y + 'px',
        left: `calc(50% + ${currentConfig.x}px)`,
        transform: 'translateX(-50%)',
        width: currentConfig.scale + '%',
      }"
    />

    <h2
      class="relative z-10 text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mb-10"
      style="font-family: Alexandria"
    >
      Tersedia dalam ukuran
    </h2>

    <!-- LABEL SIZE -->
    <div class="relative w-full h-full">
      <div
        v-for="item in sizes"
        class="absolute bg-white px-6 py-3 rounded-full shadow-[4px_4px_0px_rgba(0,0,0,0.25)] text-center font-bold text-base md:text-lg"
        :style="{
          left: item.x + '%',
          top: item.y + '%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'Poppins',
        }"
      >
        {{ item.label }}
      </div>
    </div>
  </section>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  props: {
    bgImage: String,
    sizes: Array,
    sizesConfig: Object,
    heightConfig: Object,
  },

  setup(props) {
    const screen = reactive({ width: window.innerWidth });

    window.addEventListener("resize", () => {
      screen.width = window.innerWidth;
    });

    const currentConfig = computed(() => {
      if (screen.width < 768) return props.sizesConfig.mobile;
      if (screen.width <= 1024) return props.sizesConfig.tablet;
      return props.sizesConfig.desktop;
    });

    const currentHeight = computed(() => {
      if (screen.width < 768) return props.heightConfig.mobile;
      if (screen.width <= 1024) return props.heightConfig.tablet;
      return props.heightConfig.desktop;
    });

    return { currentConfig, currentHeight };
  },
};
</script>
