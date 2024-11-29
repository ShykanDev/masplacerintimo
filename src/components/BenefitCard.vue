<template>
  <div class="m-4 border rounded-lg shadow-md card w-72 font-poppins">
    <img :src="image" :alt="title" class="object-cover w-full h-48 rounded-t-lg card-img" />
    <div class="p-4 card-body">
      <h3 class="mb-2 text-2xl font-semibold text-orange-800 border-b card-title border-b-orange-600">{{ title }}</h3>
      <p class="mb-4 text-base card-text">{{ summary }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  image: {
    type: String,
    required: true,
    default: 'https://example.com/default-image.jpg', // Valor por defecto
  },
  title: {
    type: String,
    required: true,
    default: 'Título por defecto', // Valor por defecto
  },
  summary: {
    type: String,
    required: true,
    default: 'Resumen por defecto de los beneficios del ingrediente.', // Valor por defecto
  },
});
</script>

<style scoped>
/* Este componente usa Tailwind CSS, no es necesario agregar estilos adicionales */
</style>
