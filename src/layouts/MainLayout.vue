<template>
    <div class="">
        <header class="sticky top-0 z-50">
            <section class="w-full bg-white border-b-2 border-b-rose-900">
                <div class="flex justify-between w-full px-5 py-2 pr-3 space-x-4 text-lg bg-white font-poppins">
                  <div class="flex items-center space-x-2">
                    <RouterLink :class="{'border-b-rose-900 border-b-2 ': route.name === 'home'}" :to="{ name: 'home' }" >Inicio</RouterLink>
                    <RouterLink :class="{'border-b-rose-900 border-b-2': route.name === 'spaOne'}" :to="{ name: 'spaOne' }" >Beneficios</RouterLink>
                    <RouterLink :class="{'border-b-rose-900 border-b-2': route.name === 'spaTwo'}" :to="{ name: 'spaTwo' }" >Ingredientes</RouterLink>
                    <RouterLink :class="{'border-b-rose-900 border-b-2': route.name === 'spaThree'}" :to="{ name: 'spaThree' }" >Preguntas</RouterLink>
                    <a href="https://www.prasadam.mx/" target="_blank" class="hidden md:block">Prasadam</a>
                  </div>
                    <div class="items-center hidden space-x-2 md:flex">
                      <img class="w-12" src="../assets/ssl-certificate.png" alt="">
                    <p class="font-bold font-parkinsans text-rose-900 animate-fade animate-delay-500">masplacerintimo.com</p>
                    <img class="w-12" src="https://medicinaparaansiedad.com/img/logo.png" alt="">
                    </div>
                </div>

            </section>
        </header>
        <main>
            <slot name="main">

            </slot>
        </main>
        <footer class="relative flex flex-col items-center w-full p-6 mt-5 text-orange-800 bg-white border-t-2 font-poppins border-t-rose-400">
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
      <v-icon name="md-locationon" class="text-4xl" scale="1.5"></v-icon>
      <a
        href="https://www.google.com.mx/maps/place/Gutenberg+128,+Anzures,+Miguel+Hidalgo,+11590+Ciudad+de+México,+CDMX"
        target="_blank"
        rel="noopener noreferrer"
        class="text-lg font-bold hover:underline"
      >
        Gutenberg #128 Anzures, Miguel Hidalgo, 11590 Ciudad de México
      </a>
    </div>
    <iframe
      class="w-full h-96 mb-8 lg:h-[450px] border-0"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5395970522604!2d-99.1760704!3d19.4322888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8b32758939b%3A0xf34fbd07bc47d6dd!2sGutenberg%20128%2C%20Anzures%2C%20Miguel%20Hidalgo%2C%2011590%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1sen!2smx!4v1730328617197!5m2!1sen!2smx"
      allowfullscreen="false"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  <!-- Sección de contactos -->
  <section class="flex flex-wrap justify-center w-full gap-8 mb-8 text-center">
    <div class="flex flex-col items-center">
      <v-icon name="bi-telephone-fill" class="mb-2 text-4xl"></v-icon>
      <a
        href="tel:+525563950178"
        class="text-lg font-bold hover:text-orange-500"
      >+52 55 6395 0178</a>
    </div>
    <div class="flex flex-col items-center">
      <v-icon name="bi-telephone-fill" class="mb-2 text-4xl"></v-icon>
      <a
        href="tel:+525563950179"
        class="text-lg font-bold hover:text-orange-500"
      >+52 55 6395 0179</a>
    </div>
    <div class="flex flex-col items-center">
      <v-icon name="md-email" class="mb-2 text-4xl"></v-icon>
      <a
        href="mailto:informes@prasadam.mx"
        class="text-lg font-bold hover:text-orange-500"
      >informes@prasadam.mx</a>
    </div>
    <div class="flex flex-col items-center">
      <v-icon name="co-whatsapp" class="mb-2 text-4xl"></v-icon>
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
