<template>
  <div class="">
      <MainLayout>
          <template #main>
            <h1 class="p-4 py-4 mb-8 text-3xl font-semibold text-center text-white shadow-lg md:text-5xl rounded-b-md font-poppins bg-gradient-to-r from-orange-500 via-pink-600 to-red-700 animate-fade">
  Beneficios que InstaGo le ofrece
</h1>


            <section class="flex flex-wrap gap-4 justify-evenly">
              <BenefitCard data-aos="zoom-in-up" v-for="benefit in benefits" :key="benefit.image" :image="benefit.image" :title="benefit.title" :summary="benefit.summary"/>
            </section>
          </template>
      </MainLayout>
  </div>
</template>

<script lang="ts" setup>
import BenefitCard from '@/components/BenefitCard.vue';
import MainLayout from '@/layouts/MainLayout.vue';

const benefits = [
  {
    image: "https://storage.googleapis.com/a1aa/image/fxS1lE3kajVUDqezG5J70ueo9yQE1weofn3CXXoCkmG6KYveE.jpg",
    title: "Intimidad Satisfactoria con Bombax Malabaricum",
    summary: "Bombax Malabaricum, conocido por sus propiedades revitalizantes, mejora la circulación sanguínea, reduce el estrés y la fatiga, y fortalece el sistema inmunológico. Estos efectos pueden beneficiar la función sexual al aumentar la energía física y mental, lo que favorece una vida sexual más activa y satisfactoria. Su capacidad antioxidante también protege la salud general, promoviendo la vitalidad y resistencia durante las relaciones íntimas."
  },
  {
    image: "https://storage.googleapis.com/a1aa/image/zsxpRwZ93eQ2PqR6L0b30XAAkB7nVLWEm8JNUQofxZa2B71TA.jpg",
    title: "Intimidad Satisfactoria con Pueraria Tuberosa",
    summary: "Pueraria Tuberosa es conocida por su capacidad para equilibrar los niveles hormonales, lo que mejora la libido y la función sexual. Su acción equilibrante en las hormonas puede ayudar a reducir síntomas de fatiga y mejorar el deseo sexual tanto en hombres como en mujeres, favoreciendo una vida sexual más plena y satisfactoria. Además, contribuye a la salud reproductiva y al bienestar emocional, elementos esenciales para una intimidad saludable."
  },
  {
    image: "https://storage.googleapis.com/a1aa/image/w22vMjimXXZZMlalcpFnnBbvfTAtod9FQfxmz5JjsfGWF2rnA.jpg",
    title: "Intimidad Satisfactoria con Sida Cordifolia",
    summary: "Sida Cordifolia es una planta adaptógena que mejora la circulación sanguínea y reduce el estrés, lo que puede tener un impacto positivo en la función sexual. Al mejorar el flujo sanguíneo, favorece la excitación y el deseo sexual, ayudando a lograr erecciones más firmes y un rendimiento sexual más vigoroso. Además, sus efectos tonificantes aumentan la vitalidad y la energía general, lo que contribuye a una experiencia sexual más satisfactoria."
  },
  {
    image: "https://storage.googleapis.com/a1aa/image/Jf0YzdvZOB3LOCHzU4bIfQWD3b11BNQuTFp2CQ81jfFrG2rnA.jpg",
    title: "Intimidad Satisfactoria con Tribulus Terrestris",
    summary: "Tribulus Terrestris es famoso por su capacidad para aumentar los niveles de testosterona, lo que mejora la función sexual en hombres y mujeres. Este potente ingrediente natural ayuda a mejorar la calidad de las erecciones, aumenta la libido y reduce la fatiga, favoreciendo una experiencia sexual más duradera y satisfactoria. También tiene propiedades adaptógenas que ayudan a reducir el estrés, favoreciendo una vida sexual más tranquila y placentera."
  },
  {
    image: "https://storage.googleapis.com/a1aa/image/Rdns4VVNXKq3JRG70UCcL5yoJbbc3UB3YbebyMS3hQ9Ci96JA.jpg",
    title: "Intimidad Satisfactoria con Zingiber Officinale (Jengibre)",
    summary: "El jengibre es conocido por sus efectos estimulantes y afrodisíacos. Al mejorar la circulación sanguínea, favorece la función eréctil y aumenta el deseo sexual, contribuyendo a una experiencia sexual más satisfactoria. Su capacidad para dilatar los vasos sanguíneos mejora el flujo sanguíneo hacia los órganos sexuales, resultando en erecciones más firmes y duraderas. Además, sus propiedades antioxidantes promueven la salud general y reducen la fatiga, lo que ayuda a mantener un rendimiento sexual activo."
  },
  {
    image: "https://storage.googleapis.com/a1aa/image/pB4FBDYaQCJpJhTzIiukoEz1BjPyvJDxQa0CefVoisNbE71TA.jpg",
    title: "Intimidad Satisfactoria con Asteracantha Longifolia",
    summary: "Asteracantha Longifolia, tradicionalmente usada para aumentar la libido, actúa sobre el sistema nervioso y la circulación sanguínea, favoreciendo una mayor excitación y deseo durante la actividad sexual. Su capacidad para regular los niveles hormonales contribuye al equilibrio emocional y físico, lo que favorece una vida sexual más satisfactoria. Además, su acción revitalizante mejora la resistencia general, reduciendo la fatiga y promoviendo una mayor satisfacción sexual."
  },
  {
    image: "https://storage.googleapis.com/a1aa/image/Ab50qNRMeDwgYKEQzhKJ45oiTOe6n6H6zLs9aFN8ByJGF71TA.jpg",
    title: "Intimidad Satisfactoria con Withania Somnifera (Ashwagandha)",
    summary: "Withania Somnifera es conocida por sus propiedades adaptógenas que mejoran el equilibrio hormonal y reducen el estrés. Estos efectos pueden tener un impacto positivo en la libido, mejorando el deseo sexual y la energía para una experiencia íntima más satisfactoria. Al reducir la ansiedad y promover la relajación muscular, Ashwagandha ayuda a aumentar la confianza y el disfrute en las relaciones sexuales, favoreciendo una vida sexual más equilibrada y activa."
  },
  {
    image: "https://storage.googleapis.com/a1aa/image/G3elFDfmdms8nkEN62mojRB8VwZH3ylX8GaA4sAayQvtF71TA.jpg",
    title: "Intimidad Satisfactoria con Mucuna Pruriens",
    summary: "Mucuna Pruriens, rica en L-Dopa, es un precursor de la dopamina que juega un papel clave en la mejora del deseo sexual. Este ingrediente regula los niveles de dopamina en el cerebro, aumentando la excitación y favoreciendo una respuesta sexual más rápida y placentera. Además, su capacidad para reducir el estrés y la fatiga mental mejora la energía para una vida sexual más activa y satisfactoria."
  },
  {
    image: "https://storage.googleapis.com/a1aa/image/sUEHCfcMMDVTeE58OF6pzFWBexRowuyPTglOjETA7eYrYsXPB.jpg",
    title: "Intimidad Satisfactoria con Anacyclus Pyrethrum",
    summary: "Anacyclus Pyrethrum, conocido como Akarkara, es un estimulante natural que favorece la circulación sanguínea y aumenta la libido. Mejorando la excitación y el deseo sexual, este ingrediente contribuye a una experiencia sexual más vigorosa y duradera. Al aumentar la circulación hacia los órganos reproductivos, favorece erecciones más firmes y una mayor satisfacción durante las relaciones sexuales. Además, su capacidad tonificante aumenta la energía general, lo que mejora el rendimiento sexual."
  },
  {
    image: "https://storage.googleapis.com/a1aa/image/r442qmlIfp30CKdbmyM9v7KPGYR0f9jCafPJNAdo9I6SN2rnA.jpg",
    title: "Intimidad Satisfactoria con Piper Nigrum (Pimienta Negra)",
    summary: "La pimienta negra es conocida por sus propiedades estimulantes que favorecen el aumento de la libido y mejoran la circulación sanguínea. Esta acción mejora la función sexual, aumentando el deseo y el rendimiento durante las relaciones íntimas. Además, la pimienta negra ayuda a reducir la fatiga y aumenta la energía física, lo que contribuye a una vida sexual más activa y satisfactoria."
  },
  {
    image: "https://storage.googleapis.com/a1aa/image/FoNp8RDnWqrZGhBbDWgpjTV6AAWMmRdNamOFPX6qHqxuxe6JA.jpg",
    title: "Intimidad Satisfactoria con Bombax Malabaricum",
    summary: "Bombax Malabaricum, conocido por sus propiedades revitalizantes, mejora la circulación sanguínea, reduce el estrés y la fatiga, y fortalece el sistema inmunológico. Estos efectos pueden beneficiar la función sexual al aumentar la energía física y mental, lo que favorece una vida sexual más activa y satisfactoria. Su capacidad antioxidante también protege la salud general, promoviendo la vitalidad y resistencia durante las relaciones íntimas."
  },
  {
    image: "https://storage.googleapis.com/a1aa/image/H1IEYdf6FmVCYqYEVwBVXBdlTpmeTBgfzFhMCRIcD2UcP2rnA.jpg",
    title: "Intimidad Satisfactoria con Pueraria Tuberosa",
    summary: "Pueraria Tuberosa es conocida por su capacidad para equilibrar los niveles hormonales, lo que mejora la libido y la función sexual. Su acción equilibrante en las hormonas puede ayudar a reducir síntomas de fatiga y mejorar el deseo sexual tanto en hombres como en mujeres, favoreciendo una vida sexual más plena y satisfactoria. Además, contribuye a la salud reproductiva y al bienestar emocional, elementos esenciales para una intimidad saludable."
  },
  {
    image: "https://storage.googleapis.com/a1aa/image/rjs5hseWs1XIPKmsfwxWAjMaI9kdGVrTPTU2MfacTPD8P2rnA.jpg",
    title: "Intimidad Satisfactoria con Sida Cordifolia",
    summary: "Sida Cordifolia es una planta adaptógena que mejora la circulación sanguínea y reduce el estrés, lo que puede tener un impacto positivo en la función sexual. Al mejorar el flujo sanguíneo, favorece la excitación y el deseo sexual, ayudando a lograr erecciones más firmes y un rendimiento sexual más vigoroso. Además, sus efectos tonificantes aumentan la vitalidad y la energía general, lo que contribuye a una experiencia sexual más satisfactoria."
  },
  {
    image: "https://storage.googleapis.com/a1aa/image/0JuSnM10zBplBRKhNSSGSeeWD1c1IEP7rqTwg8NzcR2qI71TA.jpg",
    title: "Intimidad Satisfactoria con Tribulus Terrestris",
    summary: "Tribulus Terrestris es famoso por su capacidad para aumentar los niveles de testosterona, lo que mejora la función sexual en hombres y mujeres. Este potente ingrediente natural ayuda a mejorar la calidad de las erecciones, aumenta la libido y reduce la fatiga, favoreciendo una experiencia sexual más duradera y satisfactoria. También tiene propiedades adaptógenas que ayudan a reducir el estrés, favoreciendo una vida sexual más tranquila y placentera."
  },
  {
    image: "https://storage.googleapis.com/a1aa/image/8FL93jOy2gYMBVdNaRngTyAxj6UTIvIQ71jKMiOfeu2eR2rnA.jpg",
    title: "Intimidad Satisfactoria con Zingiber Officinale (Jengibre)",
    summary: "El jengibre es conocido por sus efectos estimulantes y afrodisíacos. Al mejorar la circulación sanguínea, favorece la función eréctil y aumenta el deseo sexual, contribuyendo a una experiencia sexual más satisfactoria. Su capacidad para dilatar los vasos sanguíneos mejora el flujo sanguíneo hacia los órganos sexuales, resultando en erecciones más firmes y duraderas. Además, sus propiedades antioxidantes promueven la salud general y reducen la fatiga, lo que ayuda a mantener un rendimiento sexual activo."
  },
  {
    image: "https://storage.googleapis.com/a1aa/image/Q0YTGfBiF2ziaiIfrCyvZCe4uc35SZk8QBLVMecSLyCVlsXPB.jpg",
    title: "Intimidad Satisfactoria con Asteracantha Longifolia",
    summary: "Asteracantha Longifolia, tradicionalmente usada para aumentar la libido, actúa sobre el sistema nervioso y la circulación sanguínea, favoreciendo una mayor excitación y deseo durante la actividad sexual. Su capacidad para regular los niveles hormonales contribuye al equilibrio emocional y físico, lo que favorece una vida sexual más satisfactoria. Además, su acción revitalizante mejora la resistencia general, reduciendo la fatiga y promoviendo una mayor satisfacción sexual."
  },
  {
    image: "https://storage.googleapis.com/a1aa/image/RIzapFwEay4NPpk7FMYkMfajQkwInDkFbXkHve7uHSFQK71TA.jpg",
    title: "Intimidad Satisfactoria con Withania Somnifera (Ashwagandha)",
    summary: "Withania Somnifera es conocida por sus propiedades adaptógenas que mejoran el equilibrio hormonal y reducen el estrés. Estos efectos pueden tener un impacto positivo en la libido, mejorando el deseo sexual y la energía para una experiencia íntima más satisfactoria. Al reducir la ansiedad y promover la relajación muscular, Ashwagandha ayuda a aumentar la confianza y el disfrute en las relaciones sexuales, favoreciendo una vida sexual más equilibrada y activa."
  }
];

</script>

<style scoped>

</style>
