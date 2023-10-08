import {defineStore} from 'pinia'

export const useBasketStore = defineStore('basketStore', {
    state() {
        return {
            goods: []
        }
    },
    actions: {
        addToBasket(product) {
            this.goods.push(product)
        },
        removeFromBasket(index) {
            this.goods.splice(index, 1)
        }
    }
})
