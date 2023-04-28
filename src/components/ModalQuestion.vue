<script>
import axios from "axios"

export default {
  inject: ["store"],
  data() {
    return {
      checkedStatus: false,
      buttonActive: false,
    }
  },
  methods: {
    closeModal() {
      this.store.state.showModalQuestion = false;
    },
    checkButtonActive() {
      if (this.store.state.questionName !== '' && this.store.state.questionPhone !== '' && this.store.state.questionText !== '' && this.checkedStatus) {
        this.buttonActive = true;
        return;
      }
      this.buttonActive = false;
    },
    sendFeedback() {
      this.store.state.showModalQuestion = false;
      this.store.state.showModalQuestionClose = true;
    }
  },
};
</script>

<template>
  <Transition name="modal">
    <div v-if="this.store.state.showModalQuestion" class="modal-mask">
      <div class="modal-container">
        <div class="modal-container__main">
          <div class="modal-container__main__title">
            <div class="modal-container__main__title__text">Задать вопрос</div>
            <a class="modal-container__main__title__close" @click="closeModal">Закрыть<img class="modal-container__main__title__close__img" src="/src/assets/svg/close.svg" alt="Close"></a>
          </div>
          <div class="modal-container__main__name">
            <textarea class="modal-container__main__name__input" v-model.number="this.store.state.questionName"
                   placeholder="Имя" @change="checkButtonActive"></textarea>
            <textarea class="modal-container__main__name__input" v-model.number="this.store.state.questionPhone"
                   placeholder="Телефон" @change="checkButtonActive"></textarea>
          </div>
          <div class="modal-container__main__text">
            <textarea class="modal-container__main__text__input" v-model.number="this.store.state.questionText"
                      placeholder="Задайте свой вопрос" @change="checkButtonActive"></textarea>
          </div>
          <div class="modal-container__main__checkbox">
            <input class="modal-container__main__checkbox__checkbox" type="checkbox" v-model="checkedStatus"
                   @change="checkButtonActive">
            <span class="modal-container__main__checkbox__text">Я даю согласие на обработку персональных данных и согласен (на) с условиями
                <a class="modal-container__main__checkbox__link" href="Политика%20конфиденциальности%20ADVA.pdf" target="_blank" type="application/pdf" download>Политики конфиденциальности</a> и с
                <a class="modal-container__main__checkbox__link" href="ОФЕРТА_ПРАВИЛА_АБОНЕНТСКОГО_ОБСЛУЖИВАНИЯ_ADVA_ДЛЯ_КЛИЕНТОВ_ООО_ЛИКАРД.pdf" download="ОФЕРТА_ПРАВИЛА_АБОНЕНТСКОГО_ОБСЛУЖИВАНИЯ_ADVA_ДЛЯ_КЛИЕНТОВ_ООО_ЛИКАРД.pdf">Офертой</a>
              </span>
          </div>
          <a :class="{ button_active: buttonActive, button_non_active: !buttonActive }" href="javascript:void(0)" @click="sendFeedback">Отправить</a>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>

textarea {
  resize: none;
}

@layer base {
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}

.button_active {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1031px;
  height: 80px;
  background: #EF1C2B;
  border-radius: 20px;
  font-family: 'Cuprum', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 24px;
  letter-spacing: 0.03em;
  color: #FFFFFF;
  text-decoration: none;
  @media (max-width: 1024px) {
    width: 533px;
    height: 39px;
    border-radius: 9.93648px;
    font-family: 'Cuprum', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 10.4333px;
    line-height: 12px;
    text-align: center;
    letter-spacing: 0.03em;
    color: #FFFFFF;
  }
  @media (max-width: 550px) {
    width: 333px;
  }
}

.button_non_active {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1031px;
  height: 80px;
  background: #8d8d8d;
  border-radius: 20px;
  font-family: 'Cuprum', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 24px;
  letter-spacing: 0.03em;
  color: #FFFFFF;
  text-decoration: none;
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
  @media (max-width: 1024px) {
    width: 533px;
    height: 39px;
    border-radius: 9.93648px;
    font-family: 'Cuprum', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 10.4333px;
    line-height: 12px;
    text-align: center;
    letter-spacing: 0.03em;
    color: #FFFFFF;
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
  @media (max-width: 550px) {
    width: 333px;
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
}

.modal-body {
  margin: 378px 122px;
  width: 1488px;
  height: 202px;
  background: linear-gradient(0deg, #DCDDE0, #DCDDE0);
  border-radius: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 550px) {
    width: 100%;
    height: 100%;
    margin: 58px 0 0 0;
  }

  &__top {
    margin: 50px 0 0 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 550px) {
      margin: 50px 0 0 0;
    }

    &__text {
      margin-top: 40px;
      font-family: 'Cuprum', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 21px;
      letter-spacing: 0.03em;
      color: #231F20;
      @media (max-width: 550px) {
        margin-top: 50%;
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 130%;
        text-align: center;
        color: #231F20;
        @media (max-height: 677px) {
          margin-top: 20%;
        }
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
      @media (max-width: 550px) {
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
        margin: 0 7% 30%;
        position: absolute;
        bottom: 0;
      }
    }
  }

  &__bottom {
    display: flex;
    flex-direction: row;
    margin-left: 55px;
    margin-top: 14px;
    @media (max-width: 550px) {
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
    margin-top: 20px;
    margin-right: 270px;
    @media (max-width: 550px) {
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
  justify-content: center;
  @media (max-width: 550px) {
    max-width: 550px;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    padding: 39px 0px;
    background: #DCDDE0;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
  }

  &__main {
    width: 1027px;
    height: 690px;
    background: #D2D3D5;
    border-radius: 20px;
    padding: 47px 64px;
    @media (max-width: 1024px) {
      width: 530px;
      height: 350px;
      padding: 23px 30px;
      border-radius: 9.93648px;
    }
    @media (max-width: 550px) {
      width: 320px;
      height: 435px;
    }

    &__btn {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1031px;
      height: 80px;
      background: #EF1C2B;
      border-radius: 20px;
      font-family: 'Cuprum', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 21px;
      line-height: 24px;
      letter-spacing: 0.03em;
      color: #FFFFFF;
      text-decoration: none;
      @media (max-width: 1024px) {
        width: 533px;
        height: 39px;
        border-radius: 9.93648px;
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 10.4333px;
        line-height: 12px;
        text-align: center;
        letter-spacing: 0.03em;
        color: #FFFFFF;
      }
      @media (max-width: 550px) {
        width: 333px;
      }
    }

    &__text {
      margin-bottom: 24px;
      @media (max-width: 1024px) {
        margin-bottom: 5px;
      }
      &__input {
        width: 971px;
        height: 194px;
        background: #FFFFFF;
        border-radius: 20px;
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 21px;
        letter-spacing: 0.03em;
        color: #58585A;
        padding: 28px 28px;
        border-color: white;
        @media (max-width: 1024px) {
          width: 504px;
          height: 98px;
          padding: 13px 13px;
          border-radius: 10px;
          font-family: 'Cuprum', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 10px;
          letter-spacing: 0.03em;
          color: #58585A;
        }
        @media (max-width: 550px) {
          width: 304px;
          height: 98px;
        }
      }
    }

    &__checkbox {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 64px;
      @media (max-width: 1024px) {
        //justify-content: space-between;
        margin-bottom: 12px;
      }
      &__checkbox {
        width: 24px;
        height: 24px;
        margin: 0 7px 0 0;
        @media (max-width: 1024px) {
          width: 14px;
          height: 14px;
          margin: 0 4px 0 0;
        }
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
        @media (max-width: 1024px) {
          font-family: 'Cuprum', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 10.4333px;
          line-height: 10px;
          letter-spacing: 0.03em;
          color: #231F20;
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
        @media (max-width: 1024px) {
          font-family: 'Cuprum', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 10.4333px;
          line-height: 10px;
          letter-spacing: 0.03em;
          color: #231F20;
        }
      }
    }

    &__name {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap:10px;
      margin-bottom: 20px;
      @media (max-width: 1024px) {
        margin-bottom: 9px;
      }
      @media (max-width: 550px) {
        flex-direction: column;
      }
      &__input {
        width: 454px;
        height: 53px;
        background: #FFFFFF;
        border-radius: 20px;
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.03em;
        color: #58585A;
        padding: 27px 25px 0;
        border-color: white;
        @media (max-width: 1024px) {
          width: 208px;
          height: 39px;
          background: #FFFFFF;
          border-radius: 10px;
          font-family: 'Cuprum', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 10px;
          letter-spacing: 0.03em;
          color: #58585A;
        }
        @media (max-width: 550px) {
          width: 279px;
        }
      }
    }

    &__title {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 40px;
      @media (max-width: 1024px) {
        margin-bottom: 22px;
      }
      &__text {
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 82px;
        line-height: 100%;
        text-align: center;
        color: #231F20;
        @media (max-width: 1024px) {
          font-family: 'Cuprum', sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 38px;
          line-height: 100%;
          color: #231F20;
        }
      }
      &__close {
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 27px;
        display: flex;
        align-items: center;
        letter-spacing: 0.03em;
        color: #231F20;
        @media (max-width: 1024px) {
          font-family: 'Cuprum', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 11.9238px;
          line-height: 13px;
          display: flex;
          align-items: center;
          letter-spacing: 0.03em;
          color: #231F20;
        }
        &__img {
          margin-left: 14px;
          @media (max-width: 1024px) {
            margin-left: 6px;
            width: 11px;
            height: 11px;
          }
        }
      }
    }
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
