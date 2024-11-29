<template>
  <div class="mx-auto overflow-hidden bg-white rounded-lg shadow-lg max-w-96">
    <!-- Imagen de la noticia -->
    <img :src="image" alt="Noticia" class="object-cover w-full h-48">

    <!-- Contenido de la card -->
    <div class="p-6">
      <!-- Título -->
      <h2 class="mb-2 text-xl font-semibold text-gray-800">{{ title }}</h2>

      <!-- Resumen -->
      <p class="mb-4 text-gray-600">{{ summary }}</p>

      <!-- Botón de "Ver más" -->
      <a :href="url" target="_blank" class="inline-block px-4 py-2 text-center text-white rounded-lg bg-rose-500 hover:bg-blue-600">
        Ver más
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
  // Definir las propiedades de la card
  defineProps({
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    summary: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  });
</script>

<style scoped>
  /* Estilos personalizados si es necesario */
  .text-center {
    text-align: center;
  }
  .hover\:bg-blue-600:hover {
    background-color: #2b6cb0;
  }
</style>
