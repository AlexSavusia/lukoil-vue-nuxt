<script>
import axios from "axios"

export default {
  inject: ["store"],
  props: {
    show: Boolean
  },
  data() {
    return {
      placeHolderCardValue: this.store.state.cardNumber === '' ? 'Номер карты лояльности «Заправься выгодой»' : this.store.state.cardNumber,
      checkedStatus: false,
      buttonActive: false,
    }
  },
  methods: {
    closeModal() {
      this.store.state.showModalTelephone = false;
    },
    checkButtonActive() {
      if (this.checkedStatus && this.store.state.telephoneNumber !== '' && this.store.state.cardNumber !== '') {
        this.buttonActive = true;
        return;
      }
      this.buttonActive = false;
    },
    async SendSMS() {
      try {
        const res = await axios.get('/api/client/v1/auth/send_otp',
            {params: {phone_number: this.store.state.telephoneNumber}});


        this.store.state.showModalTelephone = false;
        this.store.state.showModalSMS = true;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<template>
  <Transition name="modal">
    <div v-if="this.store.state.showModalTelephone" class="modal-mask">
      <div class="modal-container">
        <a
            class="modal-header__btn-mobile"
            @click="closeModal"
        ><img src="/src/assets/svg/close.svg" alt="Close">
        </a>
        <div class="modal-header">
          <a
              class="modal-header__btn"
              @click="closeModal"
          ><span class="modal-header__close-text">Закрыть</span> <img src="/src/assets/svg/close.svg" alt="Close">
          </a>
          <span class="modal-header__title">Заполните данные</span>

        </div>
        <div class="modal-body">
          <div class="modal-body__top">
            <input class="modal-body__top__input" v-model.number="this.store.state.telephoneNumber" placeholder="71234567890"
                   type="number" @change="checkButtonActive">
            <input class="modal-body__top__input" v-model.number="this.store.state.cardNumber"
                   :placeholder="placeHolderCardValue"
                   type="number" @change="checkButtonActive">
            <div class="modal-body__bottom-mobile">
              <input class="modal-body__bottom__checkbox" type="checkbox" v-model="checkedStatus" @change="checkButtonActive">
              <span class="modal-body__bottom__text">Я даю согласие на обработку персональных данных и согласен (на) с условиями
                <a class="modal-body__bottom__link" href="Политика%20конфиденциальности%20ADVA.pdf" download>Политики конфиденциальности</a> и с
                <a class="modal-body__bottom__link" href="ОФЕРТА_ПРАВИЛА_АБОНЕНТСКОГО_ОБСЛУЖИВАНИЯ_ADVA_ДЛЯ_КЛИЕНТОВ_ООО_ЛИКАРД.pdf" download>Офертой</a>
              </span>
            </div>
            <a :class="{ button_active: buttonActive, button_non_active: !buttonActive }" href="javascript:void(0)" @click="SendSMS">Воспользоваться</a>
          </div>
          <div class="modal-body__bottom">
            <input class="modal-body__bottom__checkbox" type="checkbox" v-model="checkedStatus" @change="checkButtonActive">
            <span class="modal-body__bottom__text">Я даю согласие на обработку персональных данных и согласен (на) с условиями
                <a class="modal-body__bottom__link" href="Политика%20конфиденциальности%20ADVA.pdf" download>Политики конфиденциальности</a> и с
                <a class="modal-body__bottom__link" href="ОФЕРТА_ПРАВИЛА_АБОНЕНТСКОГО_ОБСЛУЖИВАНИЯ_ADVA_ДЛЯ_КЛИЕНТОВ_ООО_ЛИКАРД.pdf" download>Офертой</a>
              </span>
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

.button_active {
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
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
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
    width: 302px;
    height: 69px;
    margin-top: 50px;
  }
}

.button_non_active {
  width: 478px;
  height: 80px;
  background: #9a9a9a;
  border-radius: 20px;
  font-family: 'Cuprum', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.03em;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
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
    width: 302px;
    height: 69px;
    margin-top: 50px;
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
}


.modal-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 318px 122px;
  width: 1488px;
  height: 202px;
  background: linear-gradient(0deg, #DCDDE0, #DCDDE0);
  border-radius: 20px;

  @media (max-width: 1500px) {
    width: 100%;
    height: 100%;
    margin: 58px 0 0 0;
  }

  &__top {
    display: flex;
    flex-direction: row;
    margin: 40px 0 0 55px;
    @media (max-width: 1500px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0;
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
      font-size: 16px;
      line-height: 21px;
      letter-spacing: 0.03em;
      color: #58585A;
      @media (max-width: 1500px) {
        margin-right: 0;
        width: 339px;
        height: 80px;
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        letter-spacing: 0.03em;
        color: #58585A;
        margin-bottom: 8px;
        @media (max-height: 677px) {
          width: 318px;
        }
      }
    }

    &__btn {
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
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
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
        width: 302px;
        height: 69px;
        margin-top: 50px;
      }
    }
  }

  &__bottom-mobile {
    display: flex;
    flex-direction: row;
    @media (min-width: 1500px) {
      display: none;
    }
  }

  &__bottom {
    @media (max-width: 1500px) {
      display: none;
    }
    display: flex;
    flex-direction: row;
    margin-left: 55px;
    margin-top: 14px;
    @media (max-width: 1500px) {
      margin-left: 0;
    }

    &__checkbox {
      width: 24px;
      height: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #9a9a9a;
      color: #9a9a9a;
      margin: 3px 0;
    }

    &__text {
      font-family: 'Cuprum', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 21px;
      line-height: 21px;
      letter-spacing: 0.03em;
      color: #231F20;
      display: inline-block;
      @media (max-width: 1500px) {
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        letter-spacing: 0.03em;
        color: #231F20;
        display: inline-block;
        max-width: 330px;
      }
    }

    &__link {
      font-family: 'Cuprum', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 21px;
      line-height: 21px;
      letter-spacing: 0.03em;
      color: #231F20;
      display: inline-block;
      @media (max-width: 1500px) {
        margin: 0;
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        letter-spacing: 0.03em;
        color: #231F20;
        display: inline-block;
      }
    }
  }
}

.modal-header {
  margin-bottom: 25px;
  text-align: center;
  margin-top: 25px;
  @media (max-width: 1500px) {
    text-align: left;
  }

  &__btn-mobile {
    display: none;
    @media (max-width: 1500px) {
      margin-right: 20px;
      margin-top: 10px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: end;
    }
  }

  &__btn {
    position: absolute;
    right: 0;
    margin-top: 20px;
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
      font-family: 'Cuprum', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 30.6905px;
      line-height: 100%;
      color: #231F20;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  @media (max-width: 1500px) {
    max-width: 1500px;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    //padding: 19px 14px;
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
