<template>
  <teleport to="body">
    <Transition name="slide-fade">
    <div class="notification" v-if="notice">
      <div class="notification__content">
        <div @click="notice = !notice" class="notification__close">X</div>
        <div class="body">
          <slot></slot>
        </div>
      </div>
    </div>
    </Transition>
  </teleport>
</template>

<script setup>
const props = defineProps(['notice'])
</script>

<style scoped lang="scss">
.notification {
  width: 320px;
  position: fixed;
  z-index: 100;
  top: 1em;
  right: 1em;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &__content {
    background: #fff;
    box-shadow: 0 0 1em -0.5em #000, -0.5em 1em 5em -1em rgba(0, 0, 0, 0.7);
    padding: 1em;
    position: relative;
    border-left: 0.5em solid #ec4758;
  }

  &__close {
    cursor: pointer;
    position: absolute;
    top: 0.5em;
    right: 0.5em;
    color: #ccc;

    &:hover {
      color: #000;
    }
  }
}

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
