<script>
import axios from "axios"

export default {
  inject: ["store"],
  methods: {
    closeModal() {
      this.store.state.showModalTermsOfAction = false;
    },
  },
};
</script>

<template>
  <Transition name="modal">
    <div v-if="this.store.state.showModalTermsOfAction" class="modal-mask">
      <div class="modal-container">
        <div class="modal-container__body">
          <div class="modal-container__body__left">
            <div class="modal-container__body__left__icon">
              <img class="logo-img" src="../assets/images/logo_black.png" alt="LOGO">
            </div>
            <span class="modal-container__body__left__title">
              Условия акции
            </span>
            <a class="modal-container__body__left__back" @click="closeModal">
              <img class="reply" src="../assets/svg/reply.svg" alt="REPLY">
              <span class="modal-container__body__left__back__text">Вернуться назад</span>
            </a>
            <div class="modal-container__body__left__name">
              <span class="font-size-21">Наименование Акции: </span>
              <span class="font-size-18">“Автоюристы” дарим 30% кешбэка</span>
            </div>
            <div class="modal-container__body__left__period">
              <span class="font-size-21">Период проведения Акции: </span>
              <span class="font-size-18">с 00:00 __ ___________ 20__ года по 23:59 __ ________ 20___ года включительно (по Московскому времени).</span>
            </div>
            <div class="modal-container__body__left__period">
              <span class="font-size-21">Участник Акции: </span>
              <span class="font-size-18">Участники программы, купившие товар в акционной торговой точке с предъявлением карты.</span>
            </div>
            <div class="modal-container__body__left__order">
              <span class="font-size-21">Порядок предоставления участникам баллов: за приобретение пакета услуг в период проведения акции, участнику акции предоставляются баллы в следующем порядке:</span>
              <div>
                <span class="font-size-18-red">210 (двести десять) баллов </span>
                <span class="font-size-18"><br>за покупку участником акции пакета услуг «AVTO ADVA Econom»;</span>
              </div>
              <div>
                <span class="font-size-18-red">300 (триста) баллов </span>
                <span class="font-size-18"><br>за покупку участником акции пакета услуг «AVTO ADVA Comfort»;</span>
              </div>
              <div>
                <span class="font-size-18-red">390 (триста девяносто)</span>
                <span class="font-size-18"><br>баллов за покупку участником акции пакета услуг «AVTO ADVA Premium».</span>
              </div>
            </div>
            <span class="modal-container__body__left__support">Услуга оказывается сервисом ADVA<br>Поддержка partner@adva.org.ru<br>Ожидая ответ проверяйте папку спам</span>
          </div>
          <div class="modal-container__body__right">
            <img src="/src/assets/images/illustrate.png" alt="CAR"/>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>

.font-size-18-red {
  font-family: 'Cuprum',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #EF1C2B;
  @media (max-width: 1024px) {
    font-size: 16px;
  }
}

.font-size-18 {
  font-family: 'Cuprum', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #231F20;
  @media (max-width: 1024px) {
    font-size: 16px;
  }
}

.font-size-21 {
  font-family: 'Cuprum', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 105%;
  color: #231F20;
  @media (max-width: 1024px) {
    font-size: 18px;
  }
}

.logo-img {
  margin-top: 43px;
  @media (max-width: 1024px) {
    height: 43px;
  }
  @media (max-width: 550px) {
    height: 54px;
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
}

.modal-header {
  margin-bottom: 25px;
  text-align: center;
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
  max-height: 1329px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;

  &__body {

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1588px;
    padding: 0 120px;

    &__left {
      display: flex;
      flex-direction: column;

      &__icon {
        @media (max-width: 550px) {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }

      &__support {
        margin-top: 238px;
        margin-bottom: 39px;
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.04em;
        color: #231F20;
        @media (max-width: 1024px) {
          margin-top: 86px;
          font-size: 14px;
          line-height: 16px;
        }
        @media (max-width: 550px) {
          margin-top: 83px;
        }
      }

      &__name {
        margin: 10px 0;
        width: 550px;
        height: 63px;
        background: #F0F0F0;
        border-radius: 20px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @media (max-width: 1024px) {
          width: 400px;
          height: 57px;
        }
        @media (max-width: 452px) {
          width: 291px;
          height: 57px;
        }
      }

      &__period {
        margin: 10px 0;
        width: 550px;
        height: 84px;
        background: #F0F0F0;
        border-radius: 20px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @media (max-width: 1024px) {
          width: 400px;
          height: 75px;
        }
        @media (max-width: 452px) {
          width: 291px;
          height: 91px;
        }
      }

      &__order {
        margin: 10px 0;
        width: 550px;
        height: 234px;
        background: #F0F0F0;
        border-radius: 20px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @media (max-width: 1024px) {
          width: 400px;
          height: 288px;
        }
        @media (max-width: 452px) {
          width: 291px;
          height: 307px;
        }
      }

      &__back {
        margin-bottom: 30px;
        &__text {
          margin-left: 13px;
          font-family: 'Cuprum', sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 21px;
          line-height: 105%;
          color: #EF1C2B;
          cursor: pointer;
          @media (max-width: 1024px) {
            font-size: 18px;
          }
        }
      }

      &__title {
        margin-top: 41px;
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 82px;
        line-height: 100%;
        color: #231F20;
        @media (max-width: 1024px) {
          font-size: 42px;
        }
      }
    }

    &__right {
      @media (max-width: 1560px) {
        display: none;
      }
      margin-left: 150px;
      margin-top: 294px;
    }

  }


}


.modal-default-button {
  float: right;
}

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
