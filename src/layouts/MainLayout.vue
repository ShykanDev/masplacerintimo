<template>
    <div class="">
      <header class="sticky top-0 z-50">
    <section class="w-full bg-white border-b-2 border-b-rose-900">
        <div class="flex justify-between w-full px-5 py-2 pr-3 space-x-4 text-lg bg-white font-poppins">
            <div class="flex items-center space-x-2">
                <RouterLink :class="{'border-b-rose-900 border-b-2 ': route.name === 'home'}" :to="{ name: 'home' }">Inicio</RouterLink>
                <RouterLink :class="{'border-b-rose-900 border-b-2': route.name === 'spaOne'}" :to="{ name: 'spaOne' }">Beneficios</RouterLink>
                <RouterLink :class="{'border-b-rose-900 border-b-2': route.name === 'spaTwo'}" :to="{ name: 'spaTwo' }">Ingredientes</RouterLink>
                <RouterLink :class="{'border-b-rose-900 border-b-2': route.name === 'spaThree'}" :to="{ name: 'spaThree' }">Preguntas</RouterLink>
                <a href="https://www.prasadam.mx/" target="_blank" class="hidden md:block">Prasadam</a>
            </div>
            <div class="items-center hidden space-x-2 md:flex">
                <img class="w-12" src="https://i.ibb.co/qNgZsFm/ssl.png" alt="SSL Seguridad">
                <p class="font-bold font-parkinsans animate-fade animate-delay-500">
  <span class="text-orange-500">mas</span>
  <span class="text-yellow-500">placer</span>
  <span class="text-red-500">intimo</span>
  <span class="text-pink-600">.com</span>
</p>

                <img class="w-12" src="https://medicinaparaansiedad.com/img/logo.png" alt="Logo">
            </div>
        </div>
    </section>

    <!-- Nuevo div con los íconos rose-800 y texto dentro de los enlaces -->
    <div class="flex flex-col items-center justify-between px-4 py-2 text-sm text-white shadow-md bg-rose-700 md:flex-row md:text-lg font-poppins">
  <!-- Sección de enlaces de contacto -->
  <div class="flex flex-wrap items-center justify-center gap-4 md:justify-start">
    <a href="tel:+525563950178" class="flex items-center gap-2 hover:underline">
      <i class="fas fa-phone"></i>
      <span>+52 55 6395 0178</span>
    </a>
    <a href="tel:+525563950179" class="flex items-center gap-2 hover:underline">
      <i class="fas fa-phone"></i>
      <span>+52 55 6395 0179</span>
    </a>
    <a href="mailto:informes@prasadam.mx" class="flex items-center gap-2 hover:underline">
      <i class="fas fa-envelope"></i>
      <span>informes@prasadam.mx</span>
    </a>
    <a href="https://wa.me/525562516687" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 hover:underline">
      <i class="fab fa-whatsapp"></i>
      <span>+52 5562516687</span>
    </a>
  </div>

  <!-- Sección del dominio y las imágenes (visible solo en pantallas md o mayores) -->

</div>
</header>




        <main>
            <slot name="main">

            </slot>
        </main>
        <footer class="relative flex flex-col items-center w-full p-6 mt-5 bg-white border-t-2 text-rose-800 font-poppins border-t-rose-400">
  <!-- Título de la sección -->
  <h2 class="mb-6 text-4xl font-semibold text-center rounded rounded-t-md">CONTACTO</h2>

  <!-- Imagen de seguridad SSL -->
  <img
    class="absolute w-12 top-4 right-4 lg:w-16"
    src="https://shykandev.github.io/medicinaparadiabetes/assets/ssl-Cjd7i8VT.png"
    alt="SSL Seguridad"
  />

  <!-- Dirección -->
  <div class="flex flex-col items-center w-full mb-8 text-center">
    <div class="flex items-center gap-3 mb-4">
      <a
        href="https://www.google.com.mx/maps/place/Gutenberg+128,+Anzures,+Miguel+Hidalgo,+11590+Ciudad+de+México,+CDMX"
        target="_blank"
        rel="noopener noreferrer"
        class="text-lg font-bold hover:underline"
      >
      <i class="text-4xl fas fa-map-marker-alt text-rose-800"></i>
        Gutenberg #128 Anzures, Miguel Hidalgo, 11590 Ciudad de México
      </a>
    </div>
    <iframe
      class="w-full h-96 mb-8 lg:h-[450px] border-0"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5395970522604!2d-99.1760704!3d19.4322888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8b32758939b%3A0xf34fbd07bc47d6dd!2sGutenberg%20128%2C%20Anzures%2C%20Miguel%20Hidalgo%2C%2011590%20Ciudad%20de%20México%2C%20CDMX!5e0!3m2!1sen!2smx!4v1730328617197!5m2!1sen!2smx"
      allowfullscreen="false"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  <!-- Sección de contactos -->
  <section class="flex flex-wrap justify-center w-full gap-8 mb-8 text-center">
    <div class="flex flex-col items-center">
      <i class="mb-2 text-4xl fas fa-phone-alt text-rose-800"></i>
      <a
        href="tel:+525563950178"
        class="text-lg font-bold hover:text-orange-500"
      >+52 55 6395 0178</a>
    </div>
    <div class="flex flex-col items-center">
      <i class="mb-2 text-4xl fas fa-phone-alt text-rose-800"></i>
      <a
        href="tel:+525563950179"
        class="text-lg font-bold hover:text-orange-500"
      >+52 55 6395 0179</a>
    </div>
    <div class="flex flex-col items-center">
      <i class="mb-2 text-4xl fas fa-envelope text-rose-800"></i>
      <a
        href="mailto:informes@prasadam.mx"
        class="text-lg font-bold hover:text-orange-500"
      >informes@prasadam.mx</a>
    </div>
    <div class="flex flex-col items-center">
      <i class="mb-2 text-4xl fab fa-whatsapp text-rose-800"></i>
      <a
        href="https://wa.me/525562516687"
        target="_blank"
        rel="noopener noreferrer"
        class="text-lg font-bold hover:text-orange-500"
      >+52 5562516687</a>
    </div>
  </section>

  <!-- Pie de página -->
  <div class="text-center">
    <p class="mb-2 text-lg font-bold">
      Todos los derechos reservados &copy; {{ new Date().getFullYear() }}
    </p>
    <p class="text-sm">
      Design: <strong>PACA</strong>
    </p>
  </div>
</footer>



    </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style scoped>

</style>
