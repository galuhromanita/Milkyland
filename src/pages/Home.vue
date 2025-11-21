<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import HeroHome from "@/components/HeroHome.vue";
import ContentHome from "@/components/ContentHome.vue";
import FeaturesSlider from "../components/SliderHome.vue";
</script>

<template>
  <Navbar class="transparent-nav" />
  <HeroHome />
  <ContentHome />
  <FeaturesSlider />
  <Footer />
</template>
