<template>
    <div class="">
        <MainLayout>
            <template #main>
              <BenefitCard/>
            </template>
        </MainLayout>
    </div>
</template>

<script lang="ts" setup>
import BenefitCard from '@/components/BenefitCard.vue';
import MainLayout from '@/layouts/MainLayout.vue';


</script>

<style scoped>

</style>
