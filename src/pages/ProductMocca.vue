<script>
import ProductDetail from "@/components/ProductDetail.vue";
import NavbarProduct from "@/components/NavbarProduct.vue";
import ProdukSize from "@/components/ProdukSize.vue";

export default {
  name: "ProductMocca",
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
      title="ULTRA MILK MOCCA"
      ingredients="Fresh Milk, Sugar, Whole Milk Powder, Skim Milk Powder, Cocoa Powder, Vegetable Stabilizer, MocCa Flavor (Contains Natural Color Caramel Class III), Natural Caramel Color Class IV, Coffee Powder, Salt."
      image="/src/assets/img/moka.png"
      image-position="left"
      bg-color="#ECCFB1"
    />
    <ProdukSize
      bgImage="/src/assets/img/bg-moka.png"
      :sizes="[
        { label: '750ml', x: 35, y: 20 },
        { label: '250ml', x: 65, y: 20 },
        { label: '200ml', x: 50, y: 40 },
      ]"
      :sizesConfig="{
        mobile: { x: 0, y: 160, scale: 150 },
        tablet: { x: 0, y: 20, scale: 130 },
        desktop: { x: -80, y: -125, scale: 90 },
      }"
      :heightConfig="{
        mobile: 420,
        tablet: 610,
        desktop: 500,
      }"
    />
  </div>
</template>
