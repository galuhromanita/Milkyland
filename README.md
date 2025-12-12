# MILKYLAND

COTS DESAIN WEB

1. Menambahkan pages "AboutMe" yang di import yaitu "Navbar" dan "ContentAboutMe" karena "Footer" sudah masuk semua di App.vue
2. Menambahkan components "ContentAboutMe"
3. Menambahkan import dan path di router index.js "import AboutMe from "@/pages/AboutMe.vue"; dan
   " {
   path: "/about-me",
   name: "AboutMe",
   component: AboutMe,
   },
4. Menambahkan const link di file Navbar.vue untuk diarahkan ke halaman AboutMe
   const links = [
   { label: "Home", to: "/" },
   { label: "About", to: "/about" },
   { label: "Products", to: "/product" },
   { label: "Contact Us", to: "/contact" },
   { label: "AboutMe", to: "/about-me" },
   ];
5. Cara mengaksesnya lewat "http://localhost:5173/about-me"

This template should help get you started developing with Vue 3 in Vite.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
