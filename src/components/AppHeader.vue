<script setup lang="ts"></script>

<template>
  <header class="flex justify-between items-center w-full h-20">
    <!-- buffer to center title -->
    <div class="flex-1"></div>
    <h1 class="text-2xl font-bold text-white xl:text-4xl">
      {{ $t('header.title') }}
    </h1>
    <div class="flex flex-1 justify-end">
      <select
        v-model="$i18n.locale"
        class="mr-4 text-sm text-white bg-transparent border-0 border-b-2 appearance-none xl:text-base outline-none"
      >
        <option value="en-US" class="text-black">EN</option>
        <option value="fr" class="text-black">FR</option>
      </select>
    </div>
  </header>
</template>
