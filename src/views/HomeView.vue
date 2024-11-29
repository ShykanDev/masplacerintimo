<template>
    <div class="">
      <MainLayout>
        <template #main>
          <section class="flex flex-col gap-32">
            <MainInfoCard v-for="card in cardsData" :key="card.title" :title="card.title" :image="card.image" :list="card.list" :summary="card.summary" />
          </section>

          <section>
            <AyutvedaInfo/>
          </section>

          <section>
            <PageSecure/>
          </section>

          <section>
            <h2 class="py-5 text-5xl font-bold text-center font-poppins text-rose-700">Noticias</h2>
          <article class="flex flex-wrap justify-around w-full gap-11">
            <NewsCard title="Sexualidad & Ayurveda" summary="El Ayurveda considera el sexo como un pilar para una vida saludable junto con la comida y el descanso. Sin embargo, Kama (el deseo) debe estar en control, ya que en exceso causa pérdidas." image="https://indiaveda.com/img/cms/Blog/SexualidadInterior.png" url='https://indiaveda.com/blog/post/sexualidad-ayurveda#:~:text=El%20Ayurveda%20considera%20el%20sexo,que%20en%20exceso%20causa%20p%C3%A9rdidas.' />
            <NewsCard title="Ayurveda en la Intimidad" summary="El ayurveda ya hace 5 mil años vió el sexo como una necesidad básica para una vida saludable junto con la comida y el sueño. De hecho, la milenaria ciencia médica hindú tenía una terapia exclusiva para la mejora de la vida sexual en hombres y mujeres llamada Vaji Karana-terapia afrodisiaca." url='https://www.aleksandrapytlak.com/ayurveda-sexualidad/' image="https://www.aleksandrapytlak.com/wp-content/uploads/2021/12/que-es-y-para-que-sirve-1-1-scaled.jpg" />
            <NewsCard title="Ayurveda y Sexo Tantrico" summary=" Por el lado del Ayurveda, la idea de unir los biotipos con la energía sexual del Tantra nos lleva a exploraqr, descubrir y divertirnos con las más sutiles y poderosas energías. En una lectura práctica, nos hará llegar a una vida sexual muchos más larga, plena y placentera." url='https://latam.casadellibro.com/libro-ayurveda-y-sexo-tantrico/9789876343336/2502197' image="https://imagessl6.casadellibro.com/a/l/s7/36/9789876343336.webp" />
            <NewsCard title="El Ayurveda: comprendiendo la “ciencia de la vida”" summary="No es una moda (lleva practicándose más de 5,000 años en la India), ni es una ciencia vacía (ha sido reconocido por la Organización Mundial de la Salud como un sistema médico tradicional): el Ayurveda es filosofía, medicina y estilo de vida. " url='https://www.admagazine.com/editors-pick/el-ayurveda-comprendiendo-la-ciencia-de-la-vida-20211102-9236-articulos' image="https://media.admagazine.com/photos/618a5d26532cae908aaf27d4/master/w_1600,c_limit/97398.jpg" />
            <NewsCard title="Masaje Ayurvédico " summary="El Ayurveda es originario de la India y consiste en un sistema de medicina tradicional con más de 5.000 años de antigüedad. En términos sánscritos, Ayurveda quiere decir ciencia o conocimiento de la vida." url='https://beaire.com/es/aire-magazine/masaje-ayurvedico-tecnicas-y-principios-hindues' image="https://beaire.com/sites/default/files/styles/magazine_430x300/public/1_masajes_easy-resize.com_.jpg?itok=DBFarqBM" />
          </article>
          </section>

        </template>
      </MainLayout>
    </div>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import MainInfoCard from '@/components/home/MainInfoCard.vue';
import AyutvedaInfo from '@/components/AyurvedaInfo.vue';
import PageSecure from '@/components/PageSecure.vue';
import NewsCard from '@/components/NewsCard.vue';

const cardsData = [
  {
    image: 'https://storage.googleapis.com/a1aa/image/GiC2QAqkSe2WBidSPduVJlgvUSWT703F1ppm9IefeOgsQlXPB.jpg',
    title: 'Recupere la Pasión Perdida',
    list: [
      { ulTitle: 'Confianza renovada', listItems: [
          'Supera la ansiedad por el desempeño',
          'Mejore la calidad de las erecciones',
          'Restablezca la confianza en los momentos íntimos',
          'Reduzca el estrés asociado a problemas sexuales',
          'Fortalezca su autoestima'
        ] },
      { ulTitle: 'Soporte emocional', listItems: [
          'Promueve la conexión emocional con su pareja',
          'Le ayuda a sentirse más seguro y en control',
          'Facilita la comunicación sobre sus necesidades',
          'Reaviva el entusiasmo en la relación',
          'Reduce la tensión causada por frustraciones íntimas'
        ] },
      { ulTitle: 'Rendimiento físico mejorado', listItems: [
          'Aumenta la resistencia durante los encuentros',
          'Le ayuda a recuperarse rápidamente',
          'Optimiza la circulación para un mejor desempeño',
          'Mejora la energía y vitalidad general',
          'Reduce la fatiga física y emocional'
        ] },
      { ulTitle: 'Eficacia comprobada', listItems: [
          'Resultados visibles en semanas',
          'Ingredientes naturales respaldados por estudios',
          'Seguridad para un uso continuo',
          'Fórmula desarrollada para beneficios sostenibles',
          'Sin efectos secundarios dañinos'
        ] },
      { ulTitle: 'Recomendaciones de uso', listItems: [
          'Tome una cápsula dos veces al día',
          'Manténgase hidratado durante el tratamiento',
          'Consulte a su médico si tiene alguna condición previa',
          'Evite consumir con alcohol para mejores resultados',
          'Siga un régimen constante para resultados óptimos'
        ] }
    ],
    summary: 'InstaGo le permite recuperar su confianza, mejorar su desempeño y disfrutar de una vida íntima plena junto a su pareja.'
  },
  {
    image: 'https://storage.googleapis.com/a1aa/image/1wogmKiHw24UNFNwM0kg6OPUsBuLUR5Y3k6nwYxOjOeTs86JA.jpg',
    title: 'Su Aliado Contra la Falta de Libido',
    list: [
      { ulTitle: 'Aumento de deseo', listItems: [
          'Incrementa el libido de forma natural',
          'Restaura el interés en los momentos íntimos',
          'Estimula la pasión en su relación',
          'Ayuda a equilibrar sus hormonas',
          'Contribuye a una vida sexual más activa'
        ] },
      { ulTitle: 'Fortalecimiento de la pareja', listItems: [
          'Promueve la satisfacción para ambos',
          'Facilita la conexión emocional y física',
          'Ayuda a superar tensiones en la relación',
          'Brinda confianza para explorar juntos',
          'Reaviva la chispa en su relación'
        ] },
      { ulTitle: 'Alivio de la fatiga', listItems: [
          'Reduce la fatiga constante que afecta el desempeño',
          'Mejora el estado de ánimo y la energía diaria',
          'Ayuda a mantener un equilibrio entre mente y cuerpo',
          'Contribuye a una mejor recuperación después de los encuentros',
          'Le permite disfrutar de una mejor calidad de vida'
        ] },
      { ulTitle: 'Resultados progresivos', listItems: [
          'Actúa gradualmente para cambios duraderos',
          'Evita soluciones invasivas o químicas',
          'Fórmula desarrollada para mejorar el bienestar general',
          'Resultados evidentes con un uso constante',
          'Apoyo integral para hombres y mujeres'
        ] },
      { ulTitle: 'Precauciones importantes', listItems: [
          'No exceda la dosis recomendada',
          'Mantenga fuera del alcance de los niños',
          'Consulte a su médico si está embarazada o lactando',
          'Evite combinar con sustancias estimulantes no indicadas',
          'Guarde en un lugar fresco y seco'
        ] }
    ],
    summary: 'Con InstaGo, podrá experimentar un deseo renovado, fortalecer su relación y disfrutar de una conexión más profunda y placentera.'
  },
  {
    image: 'https://storage.googleapis.com/a1aa/image/O4jXl3e3nfnaPkxS140DlKaY7EiYJiYKVUae8Yls3G2jyyrnA.jpg',
    title: 'Fortalezca su Conexión Íntima',
    list: [
      { ulTitle: 'Equilibrio para ambos', listItems: [
          'Diseñado para las necesidades de hombres y mujeres',
          'Promueve el bienestar conjunto en la pareja',
          'Apoya la comunicación abierta sobre temas íntimos',
          'Ofrece resultados visibles para ambos',
          'Ayuda a construir una relación más armónica'
        ] },
      { ulTitle: 'Bienestar general', listItems: [
          'Reduce la ansiedad y el estrés diarios',
          'Mejora la energía y vitalidad física',
          'Contribuye a un mejor descanso nocturno',
          'Optimiza su salud emocional',
          'Ayuda a mantener un enfoque positivo en su día a día'
        ] },
      { ulTitle: 'Estimulante natural', listItems: [
          'Ingredientes cuidadosamente seleccionados',
          'Mejoras en el rendimiento sin químicos agresivos',
          'Resultados graduales y sostenibles',
          'Fomenta un equilibrio natural del cuerpo',
          'Compatible con su rutina diaria'
        ] },
      { ulTitle: 'Resuelve problemas frecuentes', listItems: [
          'Pérdida de libido',
          'Disfunción eréctil en hombres',
          'Bajo placer en mujeres',
          'Fatiga constante y falta de energía',
          'Problemas emocionales relacionados con la intimidad'
        ] },
      { ulTitle: 'Fácil de integrar', listItems: [
          'Un régimen simple de dos cápsulas diarias',
          'Resultados visibles sin complicaciones',
          'Compatible con la mayoría de estilos de vida',
          'No requiere ajustes extremos en su rutina',
          'Diseñado para adaptarse a sus necesidades'
        ] }
    ],
    summary: 'InstaGo proporciona una solución integral para mejorar la intimidad, la energía y el equilibrio en su relación.'
  },
  {
    image: 'https://storage.googleapis.com/a1aa/image/yWCbKnh2zAbtGpSXXJ5iecz6wQIkbepO8pFnLu1Mp8u0Z51TA.jpg',
    title: 'Resultados Naturales, Vitalidad Real',
    list: [
      { ulTitle: 'Soporte emocional', listItems: [
          'Reduce la ansiedad que afecta su rendimiento',
          'Le ayuda a sentirse más relajado y seguro',
          'Fortalece la conexión emocional con su pareja',
          'Promueve una actitud positiva hacia la intimidad',
          'Aumenta su confianza en momentos importantes'
        ] },
      { ulTitle: 'Renovación de energía', listItems: [
          'Incrementa su energía diaria y vitalidad',
          'Combate la fatiga física y mental constante',
          'Contribuye a un mejor equilibrio hormonal',
          'Le permite enfrentar su día con más entusiasmo',
          'Optimiza su rendimiento tanto físico como emocional'
        ] },
      { ulTitle: 'Mejora continua', listItems: [
          'Resultados evidentes con un uso consistente',
          'Efectos graduales que mejoran su calidad de vida',
          'Diseñado para un uso prolongado y seguro',
          'Mantiene el equilibrio natural del cuerpo',
          'Compatible con tratamientos adicionales si es necesario'
        ] },
      { ulTitle: 'Bienestar en pareja', listItems: [
          'Mejora la calidad de los momentos compartidos',
          'Aumenta la intimidad emocional y física',
          'Fomenta un ambiente de confianza y comunicación',
          'Ofrece una solución para ambos miembros de la pareja',
          'Crea experiencias más satisfactorias y significativas'
        ] },
      { ulTitle: 'Recomendaciones específicas', listItems: [
          'Consulte a su médico antes de iniciar si toma otros medicamentos',
          'Mantenga un horario constante para mejores resultados',
          'No exceda las dosis recomendadas',
          'Ideal para complementar con una dieta equilibrada',
          'Evite combinaciones con alcohol o tabaco'
        ] }
    ],
    summary: 'InstaGo es su aliado para mejorar la confianza, la conexión emocional y la energía en cada aspecto de su vida íntima.'
  },
  {
    image: 'https://storage.googleapis.com/a1aa/image/LehU7ctvjr0bFK82T4KqKTe7b2KyXURbOlh8uTX9J0Lma51TA.jpg',
    title:'Energía y Confianza Restauradas',
    list: [
      { ulTitle: 'Resultados naturales', listItems: [
          'Fórmula basada en ingredientes naturales',
          'Minimiza los riesgos de efectos secundarios',
          'Proporciona beneficios graduales y sostenibles',
          'Refuerza el equilibrio hormonal de manera natural',
          'Actúa de forma integral sobre cuerpo y mente'
        ] },
      { ulTitle: 'Adaptado a su estilo de vida', listItems: [
          'Fácil de incorporar a su rutina diaria',
          'No requiere cambios drásticos en sus hábitos',
          'Compatible con estilos de vida activos',
          'Diseñado para trabajar en segundo plano',
          'Ideal para quienes buscan discreción y eficacia'
        ] },
      { ulTitle: 'Incremento en la vitalidad', listItems: [
          'Aumenta su capacidad de respuesta física',
          'Le ayuda a enfrentar el día con más energía',
          'Fortalece su resistencia en momentos importantes',
          'Reduce el cansancio tras la actividad física o íntima',
          'Contribuye a una vida más activa y plena'
        ] },
      { ulTitle: 'Alivio de preocupaciones comunes', listItems: [
          'Pérdida de libido en hombres y mujeres',
          'Problemas de desempeño íntimo y confianza',
          'Falta de energía para disfrutar de la vida diaria',
          'Fatiga emocional y física',
          'Dificultades para mantener una conexión íntima'
        ] },
      { ulTitle: 'Precauciones generales', listItems: [
          'No recomendado para menores de 18 años',
          'Consulte si está embarazada o lactando',
          'Mantenga el producto en un lugar fresco y seco',
          'Evite consumir si tiene alergias a alguno de los ingredientes',
          'Consulte con su médico en caso de duda'
        ] }
    ],
    summary: 'Una solución práctica, natural y eficaz para quienes buscan revitalizar su vida íntima y mejorar su bienestar general.'
  },
  {
    image: 'https://storage.googleapis.com/a1aa/image/NxAL5aq5Jt6cNxT4as7TEG2GrWzS4O6Ebeeyo6n0f9sd3yrnA.jpg',
    title:'La Solución Integral para su Bienestar',
    list: [
      { ulTitle: 'Fortalecimiento íntimo', listItems: [
          'Mejora su desempeño físico y emocional',
          'Favorece una conexión más profunda con su pareja',
          'Ayuda a superar inseguridades relacionadas con la intimidad',
          'Proporciona energía y vitalidad para cada encuentro',
          'Contribuye a una experiencia más plena y satisfactoria'
        ] },
      { ulTitle: 'Reducción de estrés', listItems: [
          'Disminuye los niveles de estrés que afectan su vida íntima',
          'Le permite disfrutar más de cada momento con su pareja',
          'Promueve una actitud relajada y positiva',
          'Reduce las preocupaciones asociadas al desempeño',
          'Contribuye a una mejor salud emocional en general'
        ] },
      { ulTitle: 'Solución integral', listItems: [
          'Aborda problemas comunes como falta de libido',
          'Diseñado tanto para hombres como para mujeres',
          'Equilibra la energía y las hormonas de forma natural',
          'Mejora la calidad de los momentos íntimos',
          'Fortalece el bienestar general de la pareja'
        ] },
      { ulTitle: 'Fórmula de confianza', listItems: [
          'Ingredientes seleccionados por su eficacia comprobada',
          'Respaldado por años de investigación',
          'Sin efectos secundarios perjudiciales',
          'Ideal para quienes buscan soluciones naturales',
          'Aprobado por expertos en salud y bienestar'
        ] },
      { ulTitle: 'Compatibilidad total', listItems: [
          'Puede integrarse con otros suplementos si es necesario',
          'No interfiere con rutinas de ejercicio o alimentación',
          'Diseñado para todo tipo de estilos de vida',
          'Resultados visibles en pocas semanas',
          'Facilidad de uso y dosificación clara'
        ] }
    ],
    summary: 'InstaGo proporciona una solución completa y de confianza para quienes buscan revitalizar su vida íntima y emocional de forma natural.'
  }
];


</script>

<style scoped>

</style>
