<template>
  <div class="basket">
    <TransitionGroup name="fade">
      <div class="basket__item" v-for="(good, index) in basketStore.goods" :key="good.id">
        <Card :product="good" :index="index" :basket="true"/>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
import Card from "@/components/Card.vue";
import {useBasketStore} from "@/store/basketStore";

const basketStore = useBasketStore()
</script>

<style scoped lang="scss">
.basket {
  &__item {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
