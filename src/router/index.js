import MainPage from "../views/MainPage.vue";
import BasketPage from "../views/BasketPage.vue";
import {createRouter, createWebHistory} from "vue-router";


const router = createRouter({
  routes: [
    {
      path: "/",
      name: "MainPage",
      component: MainPage,
      meta: {
        title: 'MainPage'
      }
    },
    {
      path: "/basket",
      name: "BasketPage",
      component: BasketPage,
      meta: {
        title: 'BasketPage'
      }
    }
  ],
  history: createWebHistory(import.meta.env.BASE_URL),
})


export default router;
