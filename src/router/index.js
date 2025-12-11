import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";
import Product from "../pages/Product.vue";
import ProductStrawberry from "@/pages/ProductStrawberry.vue";
import ProductChocolate from "@/pages/ProductChocolate.vue";
import ProductCaramel from "@/pages/ProductCaramel.vue";
import ProductTaro from "@/pages/ProductTaro.vue";
import ProductMocca from "@/pages/ProductMocca.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/about",
    name: "About",
    component: About,
  },

  {
    path: "/product",
    name: "Product",
    component: Product,
  },

  {
    path: "/product-strawberry",
    name: "ProductStrawberry",
    component: ProductStrawberry,
  },

  {
    path: "/product-chocolate",
    name: "ProductChocolate",
    component: ProductChocolate,
  },

  {
    path: "/product-caramel",
    name: "ProductCaramel",
    component: ProductCaramel,
  },

  {
    path: "/product-taro",
    name: "ProductTaro",
    component: ProductTaro,
  },

  {
    path: "/product-mocca",
    name: "ProductMocca",
    component: ProductMocca,
  },

  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
