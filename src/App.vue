<script setup>
</script>

<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"/>
    </keep-alive>
  </router-view>
</template>

<style scoped>
div{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
