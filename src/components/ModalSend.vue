<script>
import axios from "axios"

export default {
  inject: ["store"],
  props: {
    show: Boolean
  },
  data() {
    return {
      placeHolderCardValue: this.store.state.cardNumber === '' ? 'Номер карты лояльности «Заправься выгодой»' : this.store.state.cardNumber
    }
  },
  methods: {
    closeModal() {
      this.store.state.showModalSend = false;
    },
  },
};
</script>

<template>
  <Transition name="modal">
    <div v-if="this.store.state.showModalSend" class="modal-mask">
      <div class="modal-container">
        <a
            class="modal-header__btn-mobile"
            @click="closeModal"
        >
          <img src="/src/assets/svg/close.svg" alt="Close">
        </a>
        <div class="modal-header">
          <a
              class="modal-header__btn"
              @click="closeModal"
          ><span class="modal-header__close-text">Закрыть</span> <img src="/src/assets/svg/close.svg" alt="Close">
          </a>
        </div>
        <div class="modal-body">
          <div class="modal-body__top">
            <span class="modal-body__top__text">Вы успешно заполнили форму!
              Теперь у вас есть <span style="color:#EF1C2B">Кешбэк 30% </span></span>
            <a class="modal-body__top__btn" href="javascript:void(0)" @click="closeModal">Закрыть</a>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>

@layer base {
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}

.modal-body {
  margin: 450px 0 0 0;
  width: 1488px;
  height: 202px;
  background: linear-gradient(0deg, #DCDDE0, #DCDDE0);
  border-radius: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1500px) {
    width: 100%;
    height: 100%;
    margin: 58px 0 0 0;
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;


    &__text {
      margin-top: 90px;
      font-family: 'Cuprum', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 21px;
      letter-spacing: 0.03em;
      color: #231F20;
      @media (max-width: 1500px) {
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 130%;
        text-align: center;
        color: #231F20;
      }
    }

    &__input {
      padding-left: 24px;
      width: 404px;
      height: 80px;
      background: #FFFFFF;
      border-radius: 20px;
      margin-right: 20px;
      border: 1px solid white;
      font-family: 'Cuprum', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      letter-spacing: 0.03em;
      color: #58585A;
    }

    &__btn {
      display: none;
      width: 478px;
      height: 80px;
      background: #EF1C2B;
      border-radius: 20px;
      font-family: 'Cuprum', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 21px;
      line-height: 24px;
      text-align: center;
      letter-spacing: 0.03em;
      color: #FFFFFF;
      @media (max-width: 1500px) {
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 17.2634px;
        line-height: 20px;
        text-align: center;
        letter-spacing: 0.03em;
        color: #FFFFFF;
        border-radius: 10.1513px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        width: 302px;
        height: 69px;
        margin-top: 220px;
      }
    }
  }

  &__bottom {
    display: flex;
    flex-direction: row;
    margin-left: 55px;
    margin-top: 14px;
    @media (max-width: 1500px) {
      margin-left: 0;
    }

    &__checkbox {
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__text {
      margin-left: 8px;
      font-family: 'Cuprum', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 21px;
      line-height: 21px;
      letter-spacing: 0.03em;
      color: #231F20;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__link {
      margin-left: 8px;
      font-family: 'Cuprum', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 21px;
      line-height: 21px;
      letter-spacing: 0.03em;
      color: #231F20;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

.modal-header {
  margin-bottom: 25px;
  text-align: center;

  &__btn {
    position: absolute;
    right: 0;
    margin-top:20px;
    margin-right: 270px;
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
  }

  &__btn-mobile {
    display: none;
    @media (max-width: 1500px) {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: right;
      margin-right: 20px;
      margin-top: 10px;
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

}

.modal-container {
  width: 100%;
  height: 100vh;
  margin: auto;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1500px) {
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    background: #DCDDE0;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
  }
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
