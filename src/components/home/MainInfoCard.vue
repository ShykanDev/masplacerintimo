<template>
  <div class="flex flex-col max-w-full font-poppins">
    <h2 class="mb-4 text-3xl font-bold text-center text-rose-900">{{ title }}</h2>
    <article class="flex items-center justify-around">
      <!-- Imagen a la izquierda -->
      <img :src="image" alt="" class="max-w-[50%]" />
      <!-- Lista a la derecha -->
      <div class="">
        <ul>
          <li class="mb-4" v-for="listItem in list" :key="listItem.ulTitle">
            <span class="font-bold border-b-2 text-rose-800 border-b-rose-500">{{ listItem.ulTitle }}:</span>
            <ul>
              <!-- Subelementos de la lista -->
              <li v-for="(subItem, index) in listItem.listItems" :key="index">
                {{ subItem }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </article>
    <!-- Resumen al final -->
    <div class="flex justify-center px-[10%]">
      <h3>
        {{ summary }}
      </h3>
    </div>
  </div>
</template>


<script lang="ts" setup>
import defineProps from 'vue'
const props = defineProps({
  title: {
    type: String,
    default: 'Lorem ipsum dolor sit amet '
  },
  image: {
    type: String,
    default: 'https://storage.googleapis.com/a1aa/image/xHSvAScbY07yMttsu6fns5OrMg9fV1dVXfoUgAtW8f9hFiXPB.jpg'
  },
  list: {
  type: Array,
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
}
,
  summary:{
    type: String,
    default: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel corrupti consequatur sit animi error architecto, quo sed minima qui accusamus odio et assumenda perferendis facere modi! Assumenda modi aliquid dolores eaque magni maiores vitae odio quis eligendi fugit eum nam, excepturi temporibus ullam iure a consequatur, in cupiditate mollitia! Voluptatum amet sit debitis maiores qui omnis eos, laborum dolores architecto.'
  }
})
</script>

<style scoped>

</style>
