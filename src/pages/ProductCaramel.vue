<script>
import NavbarProduct from "@/components/NavbarProduct.vue";
import ProductDetail from "@/components/ProductDetail.vue";
import ProdukSize from "@/components/ProdukSize.vue";

export default {
  name: "ProductCaramel",
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
      title="ULTRA MILK CARAMEL"
      ingredients="Fresh Milk, Sugar, Full Cream Milk Powder, Skim Milk Powder, Cocoa Powder, Caramel Synthetic Flavor (Contains Anti Oxidant Ascorbic Acid), Vegetable Stabilizer, Caramel Natural Color Class IV,  Salt."
      image="/src/assets/img/karamel.png"
      bg-color="#FFE7A4"
    />

    <ProdukSize
      bgImage="/src/assets/img/bg-karamel.png"
      :sizes="[{ label: '200ml', x: 50, y: 20 }]"
      :sizesConfig="{
        mobile: { x: 0, y: 190, scale: 100 },
        tablet: { x: 0, y: -90, scale: 100 },
        desktop: { x: -80, y: -170, scale: 90 },
      }"
      :heightConfig="{
        mobile: 420,
        tablet: 665,
        desktop: 520,
      }"
    />
  </div>
</template>
