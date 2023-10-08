<template>
  <div class="card" :class="{'card_basket' : basket}">
    <div>
      <img class="card__img" :class="{'card__img_basket' : basket}" src="/src/assets/images/card-img.png"
           alt="card-img">
    </div>
    <div class="card__content" :class="{'card__content_basket' : basket}">
      <div class="card__info">
        <h3 class="card__title"> {{ product.title }}</h3>
        <p class="card__descr">{{ product.description }}</p>
      </div>
      <div class="card__footer">
        <span class="card__price">{{ product.price }} ₽</span>
        <img class="card__basket" src="/src/assets/images/basket.svg" alt="basket" @click="addToBasket(product)"
             v-if="!basket">
      </div>
    </div>
    <div class="card__delete" v-if="basket" @click="removeFromBasket(index, product.id)">X</div>
  </div>
  <NotificationHandler :notice="notice">
    Товара не осталось
  </NotificationHandler>
</template>

<script setup>
import {useBasketStore} from '@/store/basketStore'
import {useProductsStore} from '@/store/productsStore'
import NotificationHandler from "@/components/UI/NotificationHandler.vue";
import {ref} from 'vue';

const basketStore = useBasketStore()
const productsStore = useProductsStore()

const props = defineProps(['product', 'basket', 'index'])
const notice = ref(false)
const addToBasket = (product) => {
  if (product.count > 0) {
    productsStore.decreaseCount(product.id)
    basketStore.addToBasket(product)
  } else {
    notice.value = true
    setTimeout(() => {
      notice.value = false
    }, 3000)
  }
}

const removeFromBasket = (index, id) => {
  productsStore.increaseCount(id)
  basketStore.removeFromBasket(index)
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 450px;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.20);
  transition: box-shadow 0.3s ease-in-out;
  border-radius: 10px;

  &_basket {
    width: 500px;
    height: 200px;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    box-shadow: none;
  }

  &__img {
    width: 280px;
    height: 280px;
    background: #BABABA;
    border-radius: 10px 10px 0px 0px;

    &_basket {
      width: 200px;
      height: 200px;
      border-radius: 0;
    }
  }

  &__title {
    font-size: 24px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &__descr {
    font-size: 14px;
    line-height: 26px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    opacity: .5;
  }

  &__content {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 20px;
    background: #fff;
    border-radius: 10px;

    &_basket {
      width: 300px;
      height: 200px;
      border-radius: 0;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__price {
    font-size: 18px;
    line-height: 26px;
  }

  &__basket {
    cursor: pointer;
  }

  &__delete {
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
  }
}
</style>
