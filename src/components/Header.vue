<template>
  <header class="header">
    <img class="header__logo" src="/src/assets/images/logo.png" alt="logo">
    <nav class="header__nav">
      <router-link class="header__link" to="/">Главная</router-link>
      <router-link class="header__link" to="/basket">Корзина {{basketStore.goods.length > 0 ? `(${basketStore.goods.length})` : ''}}</router-link>
    </nav>
  </header>
</template>

<script setup>
import {useBasketStore} from "@/store/basketStore";

const basketStore = useBasketStore()

</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 20px;

  &__link {
    margin-right: 24px;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
