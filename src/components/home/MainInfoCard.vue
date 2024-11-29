<template>
<div class="flex flex-col max-w-full px-2 font-poppins">
  <h2 class="mb-4 text-3xl font-bold text-center text-rose-900">{{ title }}</h2>

  <!-- Estructura para pantallas móviles y para pantallas grandes mantener la estructura original -->
  <article class="flex flex-col items-center justify-around md:flex-row">
    <!-- Imagen en móvil ocupa el 100% y en pantallas grandes se queda en 50% -->
    <img :src="image" alt="" class="w-full md:max-w-[50%] mb-4 md:mb-0" />

    <!-- Lista -->
    <div class="w-full md:w-auto">
      <ul>
        <li class="mb-4" v-for="listItem in list" :key="listItem.ulTitle">
          <span class="font-bold border-b-2 text-rose-800 border-b-rose-500">{{ listItem.ulTitle }}:</span>
          <ul>
            <!-- Subelementos de la lista, usando v-html para resaltar las palabras clave -->
            <li v-for="(subItem, index) in listItem.listItems" :key="index" v-html="highlightKeywords(subItem)"></li>
          </ul>
        </li>
      </ul>
    </div>
  </article>

  <!-- Resumen al final -->
  <div class="flex justify-center px-[10%] mt-4">
    <h3>{{ summary }}</h3>
  </div>
</div>


</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
interface ListItem {
  ulTitle: string;
  listItems: string[];
}
const props = defineProps({
  title: {
    type: String,
    default: 'Lorem ipsum dolor sit amet'
  },
  image: {
    type: String,
    default: 'https://storage.googleapis.com/a1aa/image/xHSvAScbY07yMttsu6fns5OrMg9fV1dVXfoUgAtW8f9hFiXPB.jpg'
  },
  list: {
    type: Array<ListItem>,
    default: () => [
      {
        ulTitle: 'Beneficios para Hombres',
        listItems: [
          'Mejora la calidad y duración de las erecciones',
          'Aumenta el deseo sexual (libido)',
          'Contribuye al equilibrio hormonal',
          'Reduce el estrés y la fatiga general'
        ]
      },
      {
        ulTitle: 'Beneficios para Mujeres',
        listItems: [
          'Incrementa la sensibilidad y el placer',
          'Fortalece la respuesta sexual y emocional',
          'Alivia la fatiga y mejora el bienestar general',
          'Equilibra los niveles de energía en el cuerpo'
        ]
      },
      {
        ulTitle: 'Ingredientes Naturales Clave',
        listItems: [
          'Withania Somnifera (75 mg): Conocida por sus propiedades revitalizantes',
          'Tribulus Terrestris (50 mg): Mejora la función sexual y la energía',
          'Mucuna Pruriens (50 mg): Ayuda a reducir el estrés y mejora el humor',
          'Zingiber Officinale (50 mg): Actúa como un estimulante natural'
        ]
      },
      {
        ulTitle: 'Problemas que Resuelve',
        listItems: [
          'Pérdida de libido en hombres y mujeres',
          'Disfunción eréctil y bajo rendimiento sexual',
          'Debilidad general y fatiga constante',
          'Desequilibrios hormonales relacionados con la intimidad'
        ]
      },
      {
        ulTitle: 'Indicaciones de Uso',
        listItems: [
          'Tome 1 cápsula dos veces al día después de las comidas',
          'Asegúrese de mantenerse hidratado durante el tratamiento',
          'Consulte a su médico si tiene alguna condición de salud previa'
        ]
      },
      {
        ulTitle: 'Advertencias',
        listItems: [
          'No exceda la dosis recomendada',
          'No apto para menores de 18 años',
          'Evite consumir con alcohol o tabaco',
          'Mantener fuera del alcance de los niños'
        ]
      }
    ]
  },
  summary: {
    type: String,
    default: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. ' +
      'Vel corrupti consequatur sit animi error architecto, quo sed minima qui accusamus odio et assumenda perferendis facere modi! ' +
      'Assumenda modi aliquid dolores eaque magni maiores vitae odio quis eligendi fugit eum nam, excepturi temporibus ullam iure a ' +
      'consectetur, in cupiditate mollitia! Voluptatum amet sit debitis maiores qui omnis eos, laborum dolores architecto.'
  }
});

// Función para resaltar las palabras clave en los elementos li
const highlightKeywords = (text: string) => {
  const highlightedText = text.replace(/\b(física)\b/gi, '<span class="font-bold text-orange-700">FÍSICA</span>').replace(/\b(libido)\b/gi, '<span class="font-bold text-orange-700">LIBIDO</span>').replace(/\b(sexual)\b/gi, '<span class="font-bold text-orange-700">SEXUAL</span>').replace(/\b(erecciones)\b/gi, '<span class="font-bold text-orange-700">ERECCIONES</span>').replace(/\b(sexuales)\b/gi, '<span class="font-bold text-orange-700">SEXUALES</span>').replace(/\b(naturales)\b/gi, '<span class="font-bold text-emerald-700">Naturales</span>').replace(/\b(seguro)\b/gi, '<span class="font-bold text-orange-700">SEGURO</span>').replace(/\b(energía)\b/gi, '<span class="font-bold text-orange-700">ENERGÍA</span>');
  return highlightedText;
};

</script>

<style scoped>
/* Estilo para las palabras clave resaltadas */
.underline {
  text-decoration: underline;
}
.text-blue-500 {
  color: #3b82f6;
}
</style>
