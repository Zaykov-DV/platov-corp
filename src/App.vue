<template>
  <Header/>
  <Transition name="slide-fade">
    <router-view></router-view>
  </Transition>
</template>

<script setup>
import Header from "@/components/Header.vue";
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
