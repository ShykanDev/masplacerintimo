<template>
  <div class="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
    <!-- Imagen de la card -->
    <img :src="image" alt="Beneficio" class="object-cover w-full h-48">

    <!-- Contenido de la card -->
    <div class="p-6">
      <!-- Título -->
      <h2 class="mb-4 text-2xl font-semibold border-b-2 border-b-orange-400 text-rose-800">{{ title }}</h2>

      <!-- Resumen -->
      <p class="mb-6 text-gray-600">{{ summary }}</p>

      <!-- Beneficios en lista -->
      <div v-for="(benefitList, index) in lists" :key="index" class="mb-4">
          <h3 class="mb-2 text-lg font-medium text-orange-700 border-b-2 border-b-orange-400">{{ benefitList.title }}</h3>
        <ul class="pl-6 text-gray-600 list-disc">
          <li v-for="(item, idx) in benefitList.items" :key="idx">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  // Definición de las propiedades
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
    lists: {
      type: Array,
      required: true
    }
  });
</script>

<style scoped>
  .list-disc {
    list-style-type: disc;
  }
  .list-inside {
    list-style-position: inside;
  }
</style>
