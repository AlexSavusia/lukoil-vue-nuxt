<script>
import axios from "axios"
import SliderPackages from './SliderPackages.vue'

export default {
  inject: ["store"],
  // props: {
  //   show: Boolean
  // },
  components: {
    SliderPackages
  },
  data() {
    return {
      cardNumber: '',
    }
  },
  methods: {
    closeModal() {
      this.store.state.showModalPackages = false;
    },
  },
};
</script>

<template>
  <Transition name="modal">
    <div v-if="this.store.state.showModalPackages" class="modal-mask">
      <div class="modal-container">
        <a
            class="modal-header__btn-mobile"
            @click="closeModal"
        ><img src="/src/assets/svg/close.svg" alt="Close">
        </a>
        <div class="modal-header">
          <span class="modal-header__title">Выберите тариф</span>
          <span class="modal-header__title__mobile">Покупайте услуги<br> автоюриста онлайн,<br> а мы <span style="color: red">вернем 30%</span><br> от потраченной суммы</span>
              <a
                  class="modal-header__btn"
                  @click="closeModal"
              ><span class="modal-header__close-text">Закрыть</span> <img src="/src/assets/svg/close.svg" alt="Close">
              </a>
        </div>

        <SliderPackages/>

      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
  overflow-x: hidden;
}

.modal-container {
  width: 100%;
  height: 100%;
  min-height: 850px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1500px) {
    max-width: 1500px;
    width: 100%;
    margin: 0 auto;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    align-items: start;
    padding: 0 10px;
    @media (max-width: 550px) {
      min-height: 864px;
    }
  }
}

.modal-header {
  margin-bottom: 25px;
  text-align: center;
  margin-top: 50px;
  @media (max-width: 1500px) {
    margin-bottom: 15px;
    margin-top: 0;
  }

  &__btn {
    position: absolute;
    right: 0;
    margin-top:20px;
    margin-right: 10%;
    @media (max-width: 1500px) {
      display: none;
    }
  }

  &__title {
    font-family: 'Cuprum', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 82px;
    line-height: 100%;
    color: #231F20;
    @media (max-width: 1500px) {
      display: none;
    }
    &__mobile {
      display: none;
      @media (max-width: 1500px) {
        text-align: left;
        display: block;
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 30.6905px;
        line-height: 100%;
        color: #231F20;
      }
      @media (max-width: 375px) {
        text-align: left;
        display: block;
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        line-height: 100%;
        color: #231F20;
      }
    }
   }

  &__btn-mobile {
    display: none;
    @media (max-width: 1500px) {
      margin-top:20px;
      width: 93%;
      display: flex;
      flex-direction: row;
      justify-content: right;
    }
  }
  &__close-text {
    right: 0;
    font-family: 'Cuprum', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 27px;
    letter-spacing: 0.03em;
    color: #231F20;
    margin: 0 10px;
  }
}

.modal-body {
  margin: 0 auto;

}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
