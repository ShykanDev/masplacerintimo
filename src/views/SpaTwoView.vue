<template>
  <div class="">
      <MainLayout>
          <template #main>
            <h1 class="p-4 py-4 mb-8 text-3xl font-semibold text-center text-white shadow-lg md:text-5xl rounded-b-md font-poppins bg-gradient-to-r from-orange-500 via-pink-600 to-red-700 animate-fade">
    Ingredientes 100% Naturales de InstaGo
</h1>
<!-- <section class="flex flex-wrap gap-4 justify-evenly">
  <img src="https://i.ibb.co/R6yLyLB/left-Insta-Go-removebg-preview.png" alt="">
  <img src="https://i.ibb.co/fnHctjp/center-Insta-Go-removebg-preview.png" alt="">
  <img src="https://i.ibb.co/xmVR7h2/right-Insta-Go-removebg-preview.png" alt="">
</section> -->
<section class="grid grid-cols-1 gap-6 p-4 md:grid-cols-3 bg-gray-50 font-poppins">
  <!-- Card 1: Left Bottle -->
  <div class="flex flex-col items-center p-6 text-center bg-white rounded-lg shadow-lg">
    <img src="https://i.ibb.co/R6yLyLB/left-Insta-Go-removebg-preview.png" alt="InstaGo Left" class="max-w-[200px] mb-4">
    <i class="mb-2 text-4xl text-blue-500 fas fa-pills"></i>
    <h3 class="text-xl font-semibold text-rose-700">Ingredientes Clave</h3>
    <ul class="mb-4 space-y-2 text-left list-none">
      <li><strong>Bombax Malabaricum:</strong> 50 mg</li>
      <li><strong>Pueraria Tuberosa:</strong> 50 mg</li>
      <li><strong>Sida Cordifolia:</strong> 40 mg</li>
    </ul>
    <i class="mb-2 text-4xl text-red-500 fas fa-heartbeat"></i>
    <h4 class="text-lg font-semibold text-rose-700">Beneficios</h4>
    <ul class="mb-4 space-y-2 text-left list-none">
      <li>Aumento de libido</li>
      <li>Aumento de energía</li>
      <li>Bienestar general</li>
    </ul>
    <i class="mb-2 text-4xl text-green-500 fas fa-capsules"></i>
    <h4 class="text-lg font-semibold text-rose-700">Uso Sugerido</h4>
    <ul class="space-y-2 text-left list-none">
      <li>Dosis: Una cápsula dos veces al día</li>
      <li>Consulte a su médico para dosis personalizadas</li>
    </ul>
  </div>

  <!-- Card 2: Center Bottle -->
  <div class="flex flex-col items-center p-6 text-center bg-white rounded-lg shadow-lg">
    <img src="https://i.ibb.co/fnHctjp/center-Insta-Go-removebg-preview.png" alt="InstaGo Center" class="max-w-[200px] mb-4">
    <i class="mb-2 text-4xl text-blue-500 fas fa-pills"></i>
    <h3 class="text-xl font-semibold text-rose-700">Ingredientes Clave</h3>
    <ul class="mb-4 space-y-2 text-left list-none">
      <li><strong>Tribulus Terrestris:</strong> 50 mg</li>
      <li><strong>Zingiber Officinale:</strong> 50 mg</li>
      <li><strong>Withania Somnifera:</strong> 75 mg</li>
    </ul>
    <i class="mb-2 text-4xl text-red-500 fas fa-heartbeat"></i>
    <h4 class="text-lg font-semibold text-rose-700">Beneficios</h4>
    <ul class="mb-4 space-y-2 text-left list-none">
      <li>Fortalece la energía</li>
      <li>Mejora el rendimiento físico</li>
      <li>Aumenta la resistencia</li>
    </ul>
    <i class="mb-2 text-4xl text-green-500 fas fa-capsules"></i>
    <h4 class="text-lg font-semibold text-rose-700">Uso Sugerido</h4>
    <ul class="space-y-2 text-left list-none">
      <li>Tomar una cápsula dos veces al día</li>
      <li>Consultar a su médico para dosis personalizadas</li>
    </ul>
  </div>

  <!-- Card 3: Right Bottle -->
  <div class="flex flex-col items-center p-6 text-center bg-white rounded-lg shadow-lg">
    <img src="https://i.ibb.co/xmVR7h2/right-Insta-Go-removebg-preview.png" alt="InstaGo Right" class="max-w-[200px] mb-4">
    <i class="mb-2 text-4xl text-blue-500 fas fa-pills"></i>
    <h3 class="text-xl font-semibold text-rose-700">Ingredientes Clave</h3>
    <ul class="mb-4 space-y-2 text-left list-none">
      <li><strong>Mucuna Pruriens:</strong> 50 mg</li>
      <li><strong>Anacyclus Pyrethrum:</strong> 25 mg</li>
      <li><strong>Piper Nigrum:</strong> 10 mg</li>
    </ul>
    <i class="mb-2 text-4xl text-red-500 fas fa-heartbeat"></i>
    <h4 class="text-lg font-semibold text-rose-700">Beneficios</h4>
    <ul class="mb-4 space-y-2 text-left list-none">
      <li>Alivia la fatiga</li>
      <li>Mejora el bienestar general</li>
      <li>Equilibra los niveles de energía</li>
    </ul>
    <i class="mb-2 text-4xl text-green-500 fas fa-capsules"></i>
    <h4 class="text-lg font-semibold text-rose-700">Uso Sugerido</h4>
    <ul class="space-y-2 text-left list-none">
      <li>Tomar según recomendación médica</li>
      <li>Consultar las indicaciones del envase</li>
    </ul>
  </div>
</section>

            <section class="flex flex-wrap gap-4 justify-evenly">
              <BenefitsCard data-aos="fade-up" v-for="ingredient in ingredients" :key="ingredient.image" :image="ingredient.image" :title="ingredient.title" :summary="ingredient.summary" :lists="ingredient.lists"/>
            </section>
          </template>
      </MainLayout>
  </div>
</template>

<script lang="ts" setup>
import BenefitsCard from '@/components/BenefitsCard.vue';
import MainLayout from '@/layouts/MainLayout.vue';

const ingredients = [
{
image: "https://storage.googleapis.com/a1aa/image/WOgmZKsGi6bFONYW2FCMMyhUI4p64jI2g5TM7ObTWBSPpe6JA.jpg",
title: "Bombax Malabaricum",
summary: "Bombax Malabaricum, también conocido como el árbol de la seda, es una planta originaria de India que ha sido utilizada en la medicina tradicional durante siglos debido a sus efectos revitalizantes y adaptógenos. Se destaca por sus propiedades que ayudan a restaurar la energía física y mental, promoviendo un bienestar general y reduciendo la fatiga. Es muy apreciado por su capacidad para mejorar la resistencia al estrés y fortalecer el sistema inmunológico, lo que lo convierte en un aliado ideal en situaciones de agotamiento físico o emocional.",
quantity: "50 mg",
lists: [
  {
    title: "Propiedades",
    items: [
      "Revitaliza el cuerpo y la mente",
      "Adaptógeno natural que ayuda a equilibrar la respuesta del cuerpo al estrés",
      "Propiedades antioxidantes que protegen las células del daño oxidativo",
      "Propiedades antiinflamatorias que mejoran el confort general y la recuperación muscular",
      "Mejora la circulación sanguínea, lo que favorece el transporte de nutrientes y oxígeno a los tejidos"
    ]
  },
  {
    title: "Beneficios",
    items: [
      "Aumenta la energía sin causar nerviosismo o agitación",
      "Reduce el estrés y la ansiedad, equilibrando los niveles hormonales relacionados con el estrés (como el cortisol)",
      "Mejora el bienestar general, reduciendo la sensación de agotamiento",
      "Aumenta la resistencia física, ideal para personas que practican deportes o tienen jornadas largas de trabajo",
      "Refuerza el sistema inmunológico, ayudando a prevenir enfermedades y acelerando la recuperación de afecciones menores"
    ]
  },
  {
    title: "Uso recomendado",
    items: [
      "Tomar 1 cápsula al día o según las indicaciones de su médico. Es preferible consumirlo con las comidas para mejorar la absorción.",
      "Recomendado para personas con agotamiento físico o mental, estrés prolongado o falta de energía.",
      "Consultar con un profesional de la salud antes de su consumo, especialmente si está tomando otros suplementos o medicamentos, o si tiene alguna condición preexistente.",
      "Combina bien con otros adaptógenos como la ashwagandha o la rhodiola para potenciar sus efectos."
    ]
  },
  {
    title: "Precauciones",
    items: [
      "Consultar con un médico si tiene alguna condición preexistente, especialmente enfermedades cardíacas o presión arterial alta.",
      "No consumir en exceso, ya que su efecto revitalizante puede causar insomnio o nerviosismo en algunas personas."
    ]
  },
  {
    title: "Historia y uso tradicional",
    items: [
      "Bombax Malabaricum es un árbol que crece principalmente en las regiones tropicales de la India. En la medicina tradicional ayurvédica, se ha utilizado durante siglos como un remedio para la fatiga crónica, la debilidad general y los trastornos relacionados con el estrés.",
      "Los extractos de la corteza y las flores se emplean en diversas formulaciones para tratar desde trastornos digestivos hasta problemas de la piel, aunque su uso más destacado es para restaurar la energía y mejorar la capacidad del cuerpo para lidiar con situaciones de estrés intenso."
    ]
  },
  {
    title: "Composición y bioactividad",
    items: [
      "El componente activo de Bombax Malabaricum actúa sobre el sistema nervioso central y el sistema endocrino, ayudando a regular los niveles de cortisol y otras hormonas relacionadas con el estrés.",
      "Contiene flavonoides, taninos y compuestos fenólicos que le otorgan sus propiedades antioxidantes y antiinflamatorias. Estos compuestos también favorecen la circulación sanguínea y protegen el cuerpo contra los daños causados por los radicales libres."
    ]
  }
]
},
{
image: "https://storage.googleapis.com/a1aa/image/FzxOsc7uLyoEB5ayJ5TAmh7VBTev5tmgkNPWEyOeddYTl61TA.jpg",
title: "Pueraria Tuberosa",
summary: "Pueraria Tuberosa, conocida también como Kudzu, es una planta utilizada en la medicina tradicional china y ayurvédica por sus efectos sobre el equilibrio hormonal, la vitalidad física y emocional, y la mejora de la energía general. Se ha demostrado que ayuda en el mantenimiento de la salud reproductiva y en la regulación de los niveles hormonales, lo que la convierte en un ingrediente valioso para quienes buscan restaurar su energía y bienestar.",
quantity: "50 mg",
lists: [
  {
    title: "Propiedades",
    items: [
      "Equilibra los niveles hormonales",
      "Ayuda en el mantenimiento de la energía",
      "Fortalece el cuerpo en general",
      "Promueve la salud reproductiva",
      "Alivia los síntomas relacionados con la menopausia y el síndrome premenstrual"
    ]
  },
  {
    title: "Beneficios",
    items: [
      "Aumenta la vitalidad y energía",
      "Mejora la salud reproductiva, especialmente en mujeres",
      "Reduce los síntomas de fatiga",
      "Alivia los síntomas del síndrome premenstrual y la menopausia",
      "Promueve una piel más saludable y joven",
      "Apoya el sistema cardiovascular"
    ]
  },
  {
    title: "Uso recomendado",
    items: [
      "Tomar 1 cápsula al día o según las indicaciones de su médico. Puede tomarse con las comidas para mejorar la absorción.",
      "Consultar con un profesional de la salud antes de su consumo, especialmente si está tomando otros suplementos o medicamentos.",
      "Para mejores resultados, combinar con una dieta equilibrada y ejercicio regular."
    ]
  },
  {
    title: "Precauciones",
    items: [
      "No consumir durante el embarazo o la lactancia, salvo indicación médica.",
      "Consultar con un médico antes de su uso si tiene antecedentes de problemas hormonales o cáncer dependiente de hormonas.",
      "Puede causar interacciones con medicamentos para la tiroides y los anticoagulantes, por lo que se recomienda precaución."
    ]
  },
  {
    title: "Historia y uso tradicional",
    items: [
      "En la medicina tradicional china, Pueraria Tuberosa se ha utilizado durante siglos como un remedio para aumentar la energía, equilibrar las hormonas y aliviar el dolor muscular.",
      "También es conocida por su capacidad para mejorar la circulación y como un tónico para la salud general, especialmente en mujeres durante y después de la menopausia."
    ]
  },
  {
    title: "Composición y bioactividad",
    items: [
      "Pueraria Tuberosa contiene isoflavonas, que son compuestos vegetales que imitan la actividad de los estrógenos, lo que la convierte en una excelente opción para equilibrar los niveles hormonales.",
      "Los compuestos antioxidantes presentes en la planta ayudan a combatir el envejecimiento prematuro, al tiempo que protegen las células del daño oxidativo.",
      "Tiene efectos positivos sobre la salud cardiovascular, mejorando la circulación sanguínea y reduciendo el riesgo de enfermedades cardiovasculares."
    ]
  }
]
},{
image: "https://storage.googleapis.com/a1aa/image/Q61J7fKxWV3bV6cX8u5IkcIkvNS1U5w2mdRr3vWyGmGxS96JA.jpg",
title: "Sida Cordifolia",
summary: "Sida Cordifolia, también conocida como 'Bala', es una planta utilizada en la medicina tradicional india (Ayurveda) por sus propiedades revitalizantes, energizantes y afrodisíacas. Se destaca por su capacidad para aumentar la resistencia física, mejorar la libido y aliviar la debilidad general. Esta planta ha sido empleada durante siglos como un tónico para mejorar la fuerza, la energía y la vitalidad.",
quantity: "40 mg",
lists: [
  {
    title: "Propiedades",
    items: [
      "Aumenta la resistencia física y mental",
      "Estimulante natural que mejora la energía",
      "Afrodisíaca, aumenta la libido",
      "Propiedades antiinflamatorias que ayudan a reducir dolores musculares",
      "Fortalece el sistema inmunológico y mejora la circulación sanguínea"
    ]
  },
  {
    title: "Beneficios",
    items: [
      "Aumenta la energía y la vitalidad general",
      "Mejora la libido y el rendimiento sexual",
      "Alivia la fatiga crónica y la debilidad general",
      "Reduce la inflamación y mejora la recuperación muscular",
      "Mejora el bienestar general y la salud cardiovascular"
    ]
  },
  {
    title: "Uso recomendado",
    items: [
      "Tomar 1 cápsula al día o según las indicaciones de su médico.",
      "Es recomendable tomarlo con las comidas para mejorar la absorción.",
      "Consultar con un profesional de la salud antes de su consumo si está tomando otros medicamentos o suplementos."
    ]
  },
  {
    title: "Precauciones",
    items: [
      "No consumir durante el embarazo o lactancia, salvo indicación médica.",
      "Consultar con un médico antes de su uso si padece de hipertensión o problemas cardíacos.",
      "Puede interactuar con medicamentos para la presión arterial, por lo que se recomienda precaución."
    ]
  },
  {
    title: "Historia y uso tradicional",
    items: [
      "En la medicina ayurvédica, Sida Cordifolia es conocida por sus propiedades como un tónico energizante, que ayuda a mejorar la vitalidad, la fuerza y la libido.",
      "Tradicionalmente se utiliza para tratar la fatiga crónica, la debilidad, los dolores musculares y como un afrodisíaco natural."
    ]
  },
  {
    title: "Composición y bioactividad",
    items: [
      "Sida Cordifolia contiene alcaloides como la efedrina, que es conocida por sus efectos estimulantes sobre el sistema nervioso central y que contribuye a aumentar la energía y la resistencia.",
      "Además, contiene flavonoides y saponinas que proporcionan propiedades antiinflamatorias y antioxidantes, ayudando a proteger las células del daño oxidativo."
    ]
  }
]
},
{
image: "https://storage.googleapis.com/a1aa/image/Ht96Dhy1UG6wC9E6gNRUgwOqnymcA8ygLWgwk6e3Zo09S96JA.jpg",
title: "Tribulus Terrestris",
summary: "Tribulus Terrestris es una planta conocida por sus efectos sobre el aumento de la testosterona, la mejora de la función sexual y el rendimiento físico. Este ingrediente se ha utilizado ampliamente en la medicina tradicional para mejorar la vitalidad, la libido y la energía, especialmente en hombres. También es reconocido por su capacidad para equilibrar los niveles hormonales, lo que lo convierte en un aliado natural para quienes buscan optimizar su bienestar sexual y físico.",
quantity: "50 mg",
lists: [
  {
    title: "Propiedades",
    items: [
      "Aumenta los niveles de testosterona",
      "Mejora la función sexual y el deseo",
      "Favorece el rendimiento físico y la resistencia",
      "Estimula la producción de esperma",
      "Apoya la salud cardiovascular y la circulación sanguínea"
    ]
  },
  {
    title: "Beneficios",
    items: [
      "Mejora la calidad y duración de las erecciones",
      "Aumenta el deseo sexual y la energía vital",
      "Reduce el estrés y mejora la calidad del sueño",
      "Favorece la construcción muscular y el rendimiento atlético",
      "Ayuda a equilibrar los niveles hormonales y mejorar el bienestar general"
    ]
  },
  {
    title: "Uso recomendado",
    items: [
      "Tomar 1 cápsula dos veces al día o según las indicaciones de su médico.",
      "Consultar con un profesional de la salud antes de su consumo, especialmente si tiene condiciones preexistentes.",
      "Combinar con una dieta equilibrada y un programa de ejercicio regular para mejores resultados."
    ]
  },
  {
    title: "Precauciones",
    items: [
      "No consumir durante el embarazo o lactancia, salvo indicación médica.",
      "Consultar con un médico antes de su uso si tiene antecedentes de problemas hormonales o enfermedades cardíacas.",
      "Evitar el consumo excesivo, ya que puede causar efectos secundarios relacionados con el desequilibrio hormonal."
    ]
  },
  {
    title: "Historia y uso tradicional",
    items: [
      "Tribulus Terrestris ha sido utilizado en diversas culturas, como la india y la china, para mejorar la vitalidad y la energía sexual, así como para aumentar la fuerza física y el rendimiento atlético.",
      "En la medicina tradicional india (Ayurveda), es conocido por sus efectos sobre la libido y la salud reproductiva, así como por sus propiedades energizantes."
    ]
  },
  {
    title: "Composición y bioactividad",
    items: [
      "El ingrediente activo de Tribulus Terrestris son los saponinas, especialmente la protodioscina, que estimulan la producción de testosterona y mejoran el rendimiento sexual.",
      "Además, contiene antioxidantes que protegen el cuerpo del daño oxidativo y ayudan a reducir la inflamación, promoviendo una mejor circulación sanguínea."
    ]
  }
]
},
{
image: "https://storage.googleapis.com/a1aa/image/77K99UAufDzccSzyQffHEhTHmuDqJE3eG3dlZLpewD2EyUveE.jpg",
title: "Zingiber Officinale (Jengibre)",
summary: "El jengibre es una planta conocida por sus potentes propiedades antiinflamatorias, antioxidantes y estimulantes. Se utiliza tradicionalmente para mejorar la digestión, aliviar náuseas y reducir la inflamación. En el contexto de la salud sexual y la energía, el jengibre ha demostrado ser eficaz para mejorar la circulación sanguínea, aumentar la libido y proporcionar un impulso de energía natural, lo que lo convierte en un ingrediente clave para el bienestar general.",
quantity: "50 mg",
lists: [
  {
    title: "Propiedades",
    items: [
      "Estimula la circulación sanguínea y la función cardiovascular",
      "Propiedades antiinflamatorias y antioxidantes",
      "Mejora la digestión y alivia náuseas",
      "Aumenta la libido y el deseo sexual",
      "Favorece la energía y la vitalidad"
    ]
  },
  {
    title: "Beneficios",
    items: [
      "Mejora la circulación sanguínea, favoreciendo el rendimiento físico y sexual",
      "Reduce la inflamación en el cuerpo, ayudando a la recuperación muscular",
      "Aumenta la energía y combate la fatiga",
      "Alivia los síntomas de indigestión y náuseas",
      "Estimula el deseo sexual y mejora la función eréctil"
    ]
  },
  {
    title: "Uso recomendado",
    items: [
      "Tomar 1 cápsula al día o según las indicaciones de su médico.",
      "Recomendado para personas con baja energía, digestión lenta o problemas de circulación.",
      "Consultar con un profesional de la salud antes de su consumo si tiene condiciones preexistentes."
    ]
  },
  {
    title: "Precauciones",
    items: [
      "No consumir durante el embarazo o lactancia sin consultar con un médico.",
      "Puede interactuar con medicamentos anticoagulantes, por lo que se recomienda precaución.",
      "Evitar en personas con úlceras gástricas o problemas digestivos graves."
    ]
  },
  {
    title: "Historia y uso tradicional",
    items: [
      "El jengibre ha sido utilizado durante miles de años en la medicina tradicional china y ayurvédica para tratar problemas digestivos, dolores articulares y mejorar la circulación.",
      "En la medicina india, el jengibre se considera un tónico para la energía y la vitalidad, siendo uno de los ingredientes más utilizados en remedios para mejorar el bienestar general."
    ]
  },
  {
    title: "Composición y bioactividad",
    items: [
      "El jengibre contiene gingerol, un compuesto bioactivo que le otorga sus propiedades antiinflamatorias, antioxidantes y estimulantes.",
      "Los aceites esenciales presentes en el jengibre también favorecen la circulación y tienen un efecto positivo sobre el sistema nervioso, mejorando la energía y el bienestar general."
    ]
  }
]
},
{
image: "https://storage.googleapis.com/a1aa/image/7fcCji7OE7TkYCaKl1vOAtZ7oqAnhcV0YJo8ID5nigjaT96JA.jpg",
title: "Asteracantha Longifolia",
summary: "Asteracantha Longifolia, también conocida como 'Kokilaksha' en la medicina ayurvédica, es una planta utilizada por sus propiedades revitalizantes y afrodisíacas. Se ha utilizado tradicionalmente para mejorar la función sexual, aumentar la energía y tratar trastornos relacionados con el sistema reproductivo masculino y femenino. Además, se cree que tiene efectos antiinflamatorios, antioxidantes y de mejora del sistema inmunológico.",
quantity: "50 mg",
lists: [
  {
    title: "Propiedades",
    items: [
      "Aumenta la libido y el deseo sexual",
      "Propiedades antioxidantes y antiinflamatorias",
      "Mejora la vitalidad y la energía",
      "Equilibra las funciones hormonales",
      "Apoya la salud reproductiva y el bienestar sexual"
    ]
  },
  {
    title: "Beneficios",
    items: [
      "Mejora la función sexual y aumenta la libido",
      "Reduce la fatiga y mejora la energía general",
      "Alivia los trastornos relacionados con el estrés y la ansiedad",
      "Apoya la salud reproductiva, especialmente en hombres",
      "Promueve un sistema inmunológico fuerte y saludable"
    ]
  },
  {
    title: "Uso recomendado",
    items: [
      "Tomar 1 cápsula al día o según las indicaciones de su médico.",
      "Recomendado para quienes buscan mejorar la función sexual y aumentar la vitalidad.",
      "Consultar con un profesional de la salud antes de su consumo si está tomando otros medicamentos o suplementos."
    ]
  },
  {
    title: "Precauciones",
    items: [
      "No consumir durante el embarazo o lactancia, salvo indicación médica.",
      "Consultar con un médico antes de su uso si tiene problemas hormonales o está bajo tratamiento para trastornos hormonales.",
      "No consumir en exceso, ya que puede causar desequilibrios hormonales."
    ]
  },
  {
    title: "Historia y uso tradicional",
    items: [
      "En la medicina ayurvédica, Asteracantha Longifolia se utiliza como un remedio para mejorar la salud sexual, especialmente en hombres, y para aumentar la energía.",
      "Tradicionalmente se ha utilizado también para reducir los efectos del envejecimiento, combatir la fatiga y equilibrar las funciones del cuerpo."
    ]
  },
  {
    title: "Composición y bioactividad",
    items: [
      "Asteracantha Longifolia contiene flavonoides, saponinas y alcaloides, que tienen propiedades antioxidantes, antiinflamatorias y afrodisíacas.",
      "Estos compuestos ayudan a mejorar la circulación sanguínea, reducen la inflamación y favorecen la producción hormonal, especialmente en lo que respecta a la testosterona y otras hormonas relacionadas con la función sexual."
    ]
  }
]
},
{
image: "https://storage.googleapis.com/a1aa/image/5o8SyNZeVyW1CqQRpeHX4uPBfQeW88z3PWU3TxXVJBmbcqXPB.jpg",
title: "Withania Somnifera (Ashwagandha)",
summary: "Withania Somnifera, conocida como Ashwagandha, es una planta adaptógena de la medicina ayurvédica que ayuda al cuerpo a adaptarse al estrés físico y mental. Es famosa por sus efectos revitalizantes, siendo utilizada para aumentar la energía, reducir la ansiedad, mejorar la función cognitiva y equilibrar las hormonas. Ashwagandha también es muy valorada por sus propiedades afrodisíacas, que favorecen la salud sexual y mejoran el bienestar general.",
quantity: "75 mg",
lists: [
  {
    title: "Propiedades",
    items: [
      "Adaptógena que ayuda a manejar el estrés",
      "Mejora el rendimiento físico y mental",
      "Equilibra los niveles hormonales",
      "Favorece la función sexual y aumenta la libido",
      "Propiedades antioxidantes que protegen el cuerpo del daño celular"
    ]
  },
  {
    title: "Beneficios",
    items: [
      "Reduce el estrés y la ansiedad",
      "Aumenta la energía y la vitalidad",
      "Mejora la función sexual y el deseo",
      "Mejora la memoria y la función cognitiva",
      "Apoya la salud hormonal y ayuda a equilibrar los niveles de cortisol"
    ]
  },
  {
    title: "Uso recomendado",
    items: [
      "Tomar 1 cápsula al día o según las indicaciones de su médico.",
      "Consultar con un profesional de la salud antes de su consumo, especialmente si está tomando medicamentos para el estrés o la ansiedad.",
      "Se recomienda combinar con un estilo de vida saludable para obtener mejores resultados."
    ]
  },
  {
    title: "Precauciones",
    items: [
      "No consumir durante el embarazo o lactancia sin consultar con un médico.",
      "Puede causar somnolencia, por lo que se debe evitar su uso junto con otros sedantes o medicamentos para el sueño.",
      "Consultar con un médico si tiene condiciones preexistentes relacionadas con la tiroides o el sistema inmunológico."
    ]
  },
  {
    title: "Historia y uso tradicional",
    items: [
      "En la medicina ayurvédica, Ashwagandha ha sido utilizada durante miles de años como un tónico rejuvenecedor para mejorar la resistencia, reducir el estrés y promover la longevidad.",
      "Se cree que Ashwagandha también tiene un impacto positivo en la salud sexual y reproductiva, siendo un afrodisíaco natural ampliamente utilizado en tratamientos para la disfunción sexual y la infertilidad."
    ]
  },
  {
    title: "Composición y bioactividad",
    items: [
      "Ashwagandha contiene withanolides, que son compuestos activos conocidos por sus propiedades antiinflamatorias, antioxidantes y adaptógenas.",
      "Estos compuestos ayudan a reducir el cortisol, la hormona del estrés, lo que permite al cuerpo manejar mejor las situaciones de presión y mantener el equilibrio hormonal."
    ]
  }
]
},
{
image: "https://storage.googleapis.com/a1aa/image/JOBpT24PfsV7BKJWouK1f3W629f6TggsFWRVYh7fcgWwdqXPB.jpg",
title: "Mucuna Pruriens",
summary: "Mucuna Pruriens, también conocida como 'frijol de terciopelo', es una planta tropical conocida por sus propiedades afrodisíacas y sus beneficios para la salud sexual y reproductiva. Contiene L-dopa, un precursor de la dopamina, lo que la hace particularmente eficaz para mejorar el ánimo, reducir el estrés y aumentar la energía. Además, se utiliza para aumentar la libido, tratar la disfunción eréctil y mejorar el bienestar general.",
quantity: "50 mg",
lists: [
  {
    title: "Propiedades",
    items: [
      "Aumenta los niveles de dopamina y mejora el estado de ánimo",
      "Favorece la salud sexual y aumenta la libido",
      "Propiedades antioxidantes y antiinflamatorias",
      "Mejora la función reproductiva y la calidad del esperma",
      "Ayuda a reducir el estrés y la ansiedad"
    ]
  },
  {
    title: "Beneficios",
    items: [
      "Mejora la función sexual y aumenta el deseo sexual",
      "Reduce la ansiedad y mejora el estado de ánimo",
      "Favorece la producción de esperma y la fertilidad masculina",
      "Ayuda a combatir la fatiga y aumenta la energía",
      "Mejora la calidad del sueño y reduce el estrés"
    ]
  },
  {
    title: "Uso recomendado",
    items: [
      "Tomar 1 cápsula al día o según las indicaciones de su médico.",
      "Se recomienda para personas con bajo deseo sexual o que experimentan disfunción eréctil.",
      "Consultar con un profesional de la salud antes de su consumo, especialmente si está tomando medicamentos para la depresión o trastornos relacionados con la dopamina."
    ]
  },
  {
    title: "Precauciones",
    items: [
      "No consumir durante el embarazo o lactancia sin consultar con un médico.",
      "Consultar con un médico antes de usarlo si está tomando medicamentos para el Parkinson o problemas relacionados con la dopamina.",
      "Evitar el consumo excesivo, ya que puede causar efectos secundarios relacionados con el exceso de dopamina."
    ]
  },
  {
    title: "Historia y uso tradicional",
    items: [
      "Mucuna Pruriens ha sido utilizada en la medicina tradicional india (Ayurveda) para tratar una variedad de trastornos sexuales, mejorar la función reproductiva y aumentar la energía vital.",
      "En la medicina tradicional africana, también se ha utilizado para tratar la infertilidad masculina y mejorar la libido."
    ]
  },
  {
    title: "Composición y bioactividad",
    items: [
      "El principal compuesto activo de Mucuna Pruriens es la L-dopa, que es un precursor de la dopamina, un neurotransmisor relacionado con el placer, la motivación y el deseo sexual.",
      "También contiene antioxidantes que protegen el cuerpo de los daños causados por el estrés oxidativo y ayudan a mejorar la salud reproductiva."
    ]
  }
]
},
{
image: "https://storage.googleapis.com/a1aa/image/e1hZjUQGLPQPOy10Lk7HkFYRGQ3exuoTFnYJTM6Yqwkyn61TA.jpg",
title: "Anacyclus Pyrethrum",
summary: "Anacyclus Pyrethrum, también conocido como 'Akarkara', es una planta utilizada en la medicina tradicional por sus propiedades estimulantes y afrodisíacas. Se ha utilizado históricamente para aumentar la libido, mejorar la función sexual y aumentar la energía general. Esta planta es particularmente eficaz para mejorar el rendimiento sexual y reducir la fatiga, siendo ideal para combatir la debilidad general y mejorar la vitalidad.",
quantity: "25 mg",
lists: [
  {
    title: "Propiedades",
    items: [
      "Aumenta la libido y el deseo sexual",
      "Estimula la energía y la vitalidad",
      "Favorece la función reproductiva",
      "Reduce la fatiga y mejora el rendimiento físico",
      "Propiedades antiinflamatorias que benefician el cuerpo en general"
    ]
  },
  {
    title: "Beneficios",
    items: [
      "Mejora la función sexual y aumenta el deseo",
      "Favorece la circulación sanguínea, lo que mejora la calidad de las erecciones",
      "Reduce el estrés y mejora el bienestar general",
      "Aumenta la energía y combate la fatiga",
      "Mejora la vitalidad general y la resistencia física"
    ]
  },
  {
    title: "Uso recomendado",
    items: [
      "Tomar 1 cápsula al día o según las indicaciones de su médico.",
      "Recomendado para personas con baja libido o debilidad general.",
      "Consultar con un profesional de la salud antes de su consumo si está tomando medicamentos o tiene condiciones preexistentes."
    ]
  },
  {
    title: "Precauciones",
    items: [
      "No consumir durante el embarazo o lactancia sin consultar con un médico.",
      "Puede interactuar con ciertos medicamentos, por lo que es recomendable consultar con un profesional de la salud antes de su uso.",
      "Evitar su consumo excesivo para no causar efectos secundarios."
    ]
  },
  {
    title: "Historia y uso tradicional",
    items: [
      "Anacyclus Pyrethrum ha sido utilizado durante siglos en la medicina tradicional india (Ayurveda) como afrodisíaco y tónico para mejorar la salud sexual y reproductiva.",
      "En la medicina árabe medieval, también se utilizaba para tratar la impotencia y mejorar la función sexual masculina."
    ]
  },
  {
    title: "Composición y bioactividad",
    items: [
      "El principal compuesto activo de Anacyclus Pyrethrum es el piretano, que tiene propiedades estimulantes sobre el sistema nervioso, mejorando la circulación y favoreciendo el deseo sexual.",
      "Los aceites esenciales de la planta también tienen efectos antiinflamatorios, lo que ayuda a reducir la fatiga y mejorar el bienestar físico general."
    ]
  }
]
},
{
image: "https://storage.googleapis.com/a1aa/image/SBa7oqR0efmvW0ZHxTbBwqY1d1yE1PgJmf3n49EAwAvTQ1rnA.jpg",
title: "Piper Nigrum (Pimienta Negra)",
summary: "Piper Nigrum, comúnmente conocida como pimienta negra, es una especia muy valorada en todo el mundo no solo por su sabor, sino también por sus propiedades medicinales. En la medicina tradicional, se ha utilizado por sus efectos estimulantes, antioxidantes y antiinflamatorios. La pimienta negra es conocida por mejorar la absorción de nutrientes, aumentar la circulación y proporcionar energía, lo que la hace ideal para mejorar el rendimiento sexual y la vitalidad general.",
quantity: "10 mg",
lists: [
  {
    title: "Propiedades",
    items: [
      "Mejora la absorción de nutrientes y vitaminas",
      "Estimulante natural que aumenta la circulación",
      "Propiedades antioxidantes que protegen las células",
      "Aumenta la energía y combate la fatiga",
      "Mejora la función digestiva"
    ]
  },
  {
    title: "Beneficios",
    items: [
      "Mejora la circulación sanguínea, favoreciendo la salud sexual",
      "Aumenta la energía y reduce la sensación de fatiga",
      "Ayuda a la digestión y al bienestar digestivo",
      "Mejora la absorción de otros ingredientes activos",
      "Reduce los efectos del estrés oxidativo en el cuerpo"
    ]
  },
  {
    title: "Uso recomendado",
    items: [
      "Tomar 1 cápsula al día o según las indicaciones de su médico.",
      "Se recomienda su consumo para mejorar la absorción de otros nutrientes y para aumentar la energía y vitalidad.",
      "Consultar con un profesional de la salud antes de su consumo si tiene problemas digestivos o está tomando otros suplementos."
    ]
  },
  {
    title: "Precauciones",
    items: [
      "No consumir durante el embarazo o lactancia sin consultar con un médico.",
      "Puede causar irritación estomacal en algunas personas, por lo que se recomienda tomarlo con alimentos.",
      "Consultar con un médico si tiene problemas gástricos o toma medicamentos para la acidez estomacal."
    ]
  },
  {
    title: "Historia y uso tradicional",
    items: [
      "La pimienta negra ha sido utilizada desde la antigüedad en la medicina ayurvédica para mejorar la digestión, aumentar la circulación y potenciar los efectos de otros remedios.",
      "En la medicina tradicional europea, se ha empleado como un tónico para la salud general y para combatir la fatiga."
    ]
  },
  {
    title: "Composición y bioactividad",
    items: [
      "La piperina, el compuesto activo de la pimienta negra, es conocida por sus efectos estimulantes sobre la digestión y la circulación, además de mejorar la absorción de otros nutrientes.",
      "La pimienta negra también contiene antioxidantes que protegen el cuerpo de los daños causados por el estrés oxidativo y mejoran la salud celular."
    ]
  }
]
}
];
</script>

<style scoped>

</style>
