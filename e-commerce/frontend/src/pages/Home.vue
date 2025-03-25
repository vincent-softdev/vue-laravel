<script setup>
import DefaultLayout from '@/components/DefaultLayout.vue';
</script>

<template>
  <DefaultLayout>
    <!-- We have slot id #header in DefaultLayout. Hence, this #header will inject in DefaultLayout slot with name is header -->
    <template #header>
      <h1>Home Header</h1>
    </template>
    <h1>Home Body</h1>
  </DefaultLayout>
</template>

<style scoped></style>