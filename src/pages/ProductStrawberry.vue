<script>
import NavbarProduct from "@/components/NavbarProduct.vue";
import ProductDetail from "@/components/ProductDetail.vue";
import ProdukSize from "@/components/ProdukSize.vue";

export default {
  name: "ProductStrawberry",
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
      title="ULTRA MILK STRAWBERRY"
      ingredients="Fresh Milk, Sugar, Skim Milk Powder, Vegetable Stabilizer, Strawberry Synthetic Flavor, Raspberry Synthetic Flavor, Salt, Carmine Color (CI 75470)."
      image="/src/assets/img/stoberi.png"
      bgColor="#FEE3FF"
    />

    <ProdukSize
      bgImage="/src/assets/img/bg-stoberi.png"
      :sizes="[
        { label: '750ml', x: 35, y: 10 },
        { label: '250ml', x: 65, y: 10 },
        { label: '200ml', x: 35, y: 30 },
        { label: '125ml', x: 65, y: 30 },
      ]"
      :sizesConfig="{
        mobile: { x: 0, y: 160, scale: 150 },
        tablet: { x: 0, y: 20, scale: 130 },
        desktop: { x: -80, y: -125, scale: 90 },
      }"
      :heightConfig="{
        mobile: 420,
        tablet: 700,
        desktop: 680,
      }"
    />
  </div>
</template>
