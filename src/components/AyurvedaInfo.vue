<template>
  <div class="flex flex-col items-center p-6 mx-auto bg-gray-100 rounded-lg shadow-lg font-poppins">
    <!-- Título de la sección -->
    <h2 class="mb-4 text-4xl font-semibold text-center text-rose-900">
     Conozca más la Ayurveda
    </h2>

    <!-- Card con video embebido -->
    <div class="flex justify-center w-full p-6 mb-6 bg-white rounded-lg shadow-lg">
      <iframe
        class="w-full h-[650px]"
        src="https://www.youtube.com/embed/scaL7op72dk?si=qf_cGn-tUa2JV0TX"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen>
      </iframe>
    </div>

    <!-- Lista con íconos de FontAwesome -->
    <ul class="p-2 pl-6 space-y-2 text-lg list-none bg-white shadow-md">
      <li><i class="text-red-600 fas fa-heart"></i> Recupere la pasión y la vitalidad con InstaGo</li>
      <li><i class="text-yellow-500 fas fa-bolt"></i> Aumente su energía y bienestar general</li>
      <li><i class="text-blue-600 fas fa-users"></i> Ideal para parejas que buscan mejorar su intimidad</li>
      <li><i class="text-gray-700 fas fa-cogs"></i> Solución integral para la salud sexual</li>
      <li><i class="text-green-600 fas fa-check-circle"></i> Resultados naturales y respaldados por la ciencia</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  // Aquí puedes agregar cualquier lógica de Vue si lo necesitas
</script>

<style scoped>
  /* Agregar estilos personalizados si es necesario */
  .fa-heart, .fa-bolt, .fa-users, .fa-cogs, .fa-check-circle {
    margin-right: 10px;
  }
</style>
