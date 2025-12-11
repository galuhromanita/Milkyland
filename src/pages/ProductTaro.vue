<script>
import ProductDetail from "@/components/ProductDetail.vue";
import NavbarProduct from "@/components/NavbarProduct.vue";
import ProdukSize from "@/components/ProdukSize.vue";

export default {
  name: "ProductTaro",
  components: {
    NavbarProduct,
    ProductDetail,
    ProdukSize,
  },
};
</script>

<template>
  <div>
    <NavbarProduct />
    <ProductDetail
      title="ULTRA MILK TARO"
      ingredients="Fresh Milk, Sugar, Skim Milk Powder, Vegetable Stabilizer, Taro Artificial Flavor, Carmine Natural Color CI. No. 75470, Salt."
      image="/src/assets/img/taro.png"
      image-position="left"
      bg-color="#E0CCFB"
    />

    <ProdukSize
      bgImage="/src/assets/img/bg-taro.png"
      :sizes="[{ label: '200ml', x: 50, y: 20 }]"
      :sizesConfig="{
        mobile: { x: 0, y: 150, scale: 150 },
        tablet: { x: 0, y: -15, scale: 130 },
        desktop: { x: -80, y: -165, scale: 90 },
      }"
      :heightConfig="{
        mobile: 420,
        tablet: 700,
        desktop: 680,
      }"
    />
  </div>
</template>
