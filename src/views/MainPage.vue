<template>
  <main class="main">
    <div class="main__products">
      <TransitionGroup name="fade">
        <div class="main__product" v-for="product in productsStore.products.slice(0, productsVisible)"
             :key="product.id">
          <Card :product="product"/>
        </div>
      </TransitionGroup>
      <div class="main__loading" v-if="productsStore.loading">
        <Loading/>
      </div>
    </div>
    <button class="main__btn" @click="productsVisible += 4" v-if="productsVisible < productsStore.products.length">
      Показать ещё
    </button>
  </main>
</template>

<script setup>
import Card from "@/components/Card.vue";
import Loading from "@/components/UI/Loading.vue";
import {useProductsStore} from '@/store/productsStore';
import {ref} from 'vue'

const productsStore = useProductsStore();

const productsVisible = ref(4)

</script>
<style lang="scss">
.main {

  &__products {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__product {
    margin-bottom: 40px;
    margin-right: auto;
  }

  &__btn {
    display: block;
    outline: none;
    border: none;
    cursor: pointer;
    padding: 4px 18px;
    border-radius: 4px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: #6A6A6A;
    font-size: 16px;
    margin-left: auto;
    margin-top: 40px;
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
