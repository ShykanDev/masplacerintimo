<template>
  <div class="flex flex-col items-center p-6 mx-auto rounded-lg shadow-lg font-poppins">
    <!-- Título de la sección -->
    <h2 class="mb-4 text-4xl font-semibold text-center text-rose-700">
      Seguridad de Nuestra Página
    </h2>

    <!-- Descripción de la seguridad -->
    <div class="p-6 mb-6 bg-white rounded-lg shadow-lg">
      <h3 class="mb-4 text-xl font-medium">Su privacidad es nuestra prioridad</h3>
      <p class="mb-4 text-lg text-gray-700">
        En InstaGo, tomamos muy en serio su seguridad. Utilizamos tecnologías avanzadas para asegurar que su experiencia en línea sea confiable y protegida.
      </p>

      <!-- Lista con íconos -->
      <ul class="pl-6 space-y-2 text-lg list-disc">
        <li><i class="text-blue-600 fas fa-lock"></i> Su información está segura gracias a la encriptación HTTPS</li>
        <li><i class="text-green-600 fas fa-shield-alt"></i> Conexiones seguras para proteger sus datos personales</li>
        <li><i class="text-green-600 fas fa-check-circle"></i> Garantizamos la autenticidad de nuestra página web</li>
        <li><i class="text-blue-500 fas fa-link"></i> Protocolo HTTPS asegurado para una navegación sin preocupaciones</li>
        <li><i class="text-yellow-500 fas fa-user-shield"></i> Proteja su privacidad con la más alta tecnología de seguridad</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  // Aquí puedes agregar cualquier lógica de Vue si lo necesitas
</script>

<style scoped>
  /* Agregar estilos personalizados si es necesario */
  .fa-lock, .fa-shield-alt, .fa-check-circle, .fa-link, .fa-user-shield {
    margin-right: 10px;
  }
</style>
