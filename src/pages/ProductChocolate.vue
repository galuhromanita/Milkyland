<script>
import ProductDetail from "@/components/ProductDetail.vue";
import NavbarProduct from "@/components/NavbarProduct.vue";
import ProdukSize from "@/components/ProdukSize.vue";

export default {
  name: "ProductChocolate",
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
      title="ULTRA MILK CHOCOLATE"
      ingredients="Fresh Milk, Sugar, Whole Milk Powder, Skim Milk Powder, Cocoa Powder, Vegetable Stabilizer, Chocolate Synthetic Flavor (Contains Natural Color Caramel Class IV), Salt."
      image="/src/assets/img/coklat.png"
      image-position="left"
      bg-color="#EFFFC3"
    />

    <ProdukSize
      bgImage="/src/assets/img/bg-coklat.png"
      :sizes="[
        { label: '1000ml', x: 20, y: 20 },
        { label: '750ml', x: 50, y: 20 },
        { label: '250ml', x: 80, y: 20 },
        { label: '200ml', x: 35, y: 40 },
        { label: '125ml', x: 65, y: 40 },
      ]"
      :sizesConfig="{
        mobile: { x: 0, y: 230, scale: 150 },
        tablet: { x: 0, y: 150, scale: 130 },
        desktop: { x: -70, y: -98, scale: 90 },
      }"
      :heightConfig="{
        mobile: 420,
        tablet: 650,
        desktop: 500,
      }"
    />
  </div>
</template>
