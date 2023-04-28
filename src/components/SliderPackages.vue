<script>
import {Swiper} from "../../node_modules/swiper/vue/swiper";
import {SwiperSlide} from "../../node_modules/swiper/vue/swiper-slide";
import "../../node_modules/swiper/swiper.min.css";

export default {
  inject: ["store"],
  name: "SliderPackages",
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    change(packageMode) {
      this.store.state.packageMode = packageMode
      this.store.state.showModalPackages = false
      this.store.state.showModalTelephone = true
    },
  },
}
</script>

<template>
  <swiper
      :breakpoints="{ 1550:
        {
        width: 468,
        spaceBetweenSlides: 18,
        },
        550:
        {
        width: 460,
        spaceBetweenSlides: 35,
        }
      }"
      :width="350"
      :space-between="25"
      class="default-slider">

    <swiper-slide>
      <div class="package__min">
        <div class="package__container">
          <div class="package__header">
            <div class="package__header__left">
              <span class="package__text__h48">Стандарт</span>
            </div>
            <div class="package__header__right">
              <span class="package__text__h21">AVTO ADVA</span>
            </div>
          </div>
          <div class="package__row">
            <div class="package__row__round">2</div>
            <div class="package__row__text">Устная правовая консультация</div>
          </div>
          <div class="package__row">
            <div class="package__row__round">2</div>
            <div class="package__row__text">Содействие в переговорах</div>
          </div>
          <div class="package__row">
            <div class="package__row__round">2</div>
            <div class="package__row__text">Письменное составление документа</div>
          </div>
          <div class="package__row">
            <div class="package__row__round">2</div>
            <div class="package__row__text">Помощь в составлении европротокола</div>
          </div>
          <div class="package__footer">
            <div class="package__footer__text">
              <div class="package__footer__text__left">700 руб</div>
              <div class="package__footer__text__right">

                <span class="package__footer__text__right__bottom">90 дней</span>
              </div>
            </div>
            <img class="package__footer__img" src="/src/assets/images/cesh_1.png" alt="Redeem">
            <div class="package__footer__button">
              <a class="package__footer__button__text" href="javascript:void(0)" @click="change('Econom')">Купить</a>
            </div>
          </div>
        </div> <!-- package__container -->
      </div> <!-- package -->
    </swiper-slide>

    <swiper-slide>
      <div class="package__mid">
        <div class="package__container">
          <div class="package__header">
            <div class="package__header__left">
              <span class="package__text__h48">Комфорт</span>
            </div>
            <div class="package__header__right">
              <span class="package__text__h21">AVTO ADVA</span>
            </div>
          </div>
          <div class="package__row">
            <div class="package__row__round">4</div>
            <div class="package__row__text">Устная правовая консультация</div>
          </div>
          <div class="package__row">
            <div class="package__row__round">3</div>
            <div class="package__row__text">Содействие в переговорах</div>
          </div>
          <div class="package__row">
            <div class="package__row__round">4</div>
            <div class="package__row__text">Письменное составление документа</div>
          </div>
          <div class="package__row">
            <div class="package__row__round">2</div>
            <div class="package__row__text">Помощь в составлении европротокола</div>
          </div>
          <div class="package__row">
            <div class="package__row__round">1</div>
            <div class="package__row__text">Составление договора купли-продажи <br>автомобиля</div>
          </div>
          <div class="package__footer">
            <div class="package__footer__text">
              <div class="package__footer__text__left">900 рублей</div>
              <div class="package__footer__text__right">
                <span class="package__footer__text__right__bottom">180 дней</span>
              </div>
            </div>
            <img class="package__footer__img" src="/src/assets/images/cesh_2.png" alt="Redeem">
            <div class="package__footer__button">
              <a class="package__footer__button__text" href="javascript:void(0)" @click="change('Comfort')">Купить</a>
            </div>
          </div>
        </div> <!-- package__container -->
      </div> <!-- package -->
    </swiper-slide>

    <swiper-slide>
      <div class="package__max">
        <div class="package__container">
          <div class="package__header">
            <div class="package__header__left">
              <span class="package__text__h48">Премиум</span>
            </div>
            <div class="package__header__right">
              <span class="package__text__h21">AVTO ADVA</span>
            </div>
          </div>
          <div class="package__row">
            <div class="package__row__round">6</div>
            <div class="package__row__text">Устная правовая консультация</div>
          </div>
          <div class="package__row">
            <div class="package__row__round">6</div>
            <div class="package__row__text">Содействие в переговорах</div>
          </div>
          <div class="package__row">
            <div class="package__row__round">8</div>
            <div class="package__row__text">Письменное составление документа</div>
          </div>
          <div class="package__row">
            <div class="package__row__round">4</div>
            <div class="package__row__text">Помощь в составлении европротокола</div>
          </div>
          <div class="package__row">
            <div class="package__row__round">3</div>
            <div class="package__row__text">Составление договора купли-продажи <br>автомобиля</div>
          </div>
          <div class="package__row">
            <div class="package__row__round">2</div>
            <div class="package__row__text">Правовая консультация по перевозке детей</div>
          </div>
          <div class="package__row">
            <div class="package__row__round">2</div>
            <div class="package__row__text">Правовая консультация по перевозке <br>животных</div>
          </div>
          <div class="package__footer">
            <div class="package__footer__text">
              <div class="package__footer__text__left">1300 руб</div>
              <div class="package__footer__text__right">
                <span class="package__footer__text__right__bottom">365 дней</span>
              </div>
            </div>
            <img class="package__footer__img" src="/src/assets/images/cesh_3.png" alt="Redeem">
            <div class="package__footer__button">
              <a class="package__footer__button__text" href="javascript:void(0)" @click="change('Premium')">Купить</a>
            </div>
          </div>
        </div> <!-- package__container -->
      </div> <!-- package -->
    </swiper-slide>

  </swiper>
</template>


<style lang="scss" scoped>
.pre {
  display: flex;
  flex-direction: column;
  @media (max-width: 1500px) {
    display: none;
  }

  &__text {
    margin-top: 110px;
    margin-left: 373px;
    font-family: 'Cuprum', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #818284;
    &__up {
      margin-top: 40px;
      margin-left: 373px;
      font-family: 'Cuprum', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      color: #818284;
    }
  }

  &__img {
    margin-left: 390px;
    height: 50px;
    &__up {
      margin-left: 390px;
      height: 50px;
    }
  }
}

.package {

  &__min {
    background: #F0F0F0;
    border-radius: 20px;
    padding: 34px 20px 34px 20px;
    position: absolute;
    height: 410px;
    @media (max-width: 1500px) {
      height: 452px;
      padding: 23px 22px 23px 22px;
    }
    @media (max-width: 550px) {
      height: 352px;
    }
  }
  &__mid {
    background: #F0F0F0;
    border-radius: 20px;
    padding: 34px 20px 34px 20px;
    position: absolute;
    height: 460px;
    @media (max-width: 1500px) {
      height: 504px;
      padding: 23px 22px 23px 22px;
    }
    @media (max-width: 550px) {
      height: 404px;
    }
  }
  &__max {
    background: #F0F0F0;
    border-radius: 20px;
    padding: 34px 20px 34px 20px;
    position: absolute;
    height: 560px;
    @media (max-width: 1500px) {
      height: 609px;
      padding: 23px 22px 23px 22px;
    }
    @media (max-width: 550px) {
      height: 509px;
    }
  }



  &__footer {
    &__button {
      &__text {
        margin-top: 0px;
        width: 440px;
        height: 60px;
        border-radius: 20px;
        background: #EF1C2B;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 0.03em;
        text-decoration: none;
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
        @media (max-width: 1500px) {
          width: 305px;
          height: 55px;
          font-family: 'Cuprum', sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          line-height: 21px;
          text-align: center;
          color: #FFFFFF;
          position: absolute;
          bottom: 0;
          margin-bottom: 20px;
        }
      }
    }
    &__img {
      width: 100%;
      margin: 20px auto;
    }

    &__text {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      &__left {
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 90%;
        color: #231F20;
        @media (max-width: 1500px) {
          font-family: 'Cuprum', sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 30.6905px;
          line-height: 90%;
          color: #231F20;
        }
        @media (max-width: 550px) {
          font-family: 'Cuprum', sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 26px;
          line-height: 30px;
          color: #231F20;
        }
      }

      &__right {
        display: flex;
        flex-direction: column;

        &__top {
          display: flex;
          flex-direction: row;

          &__img {
            margin-right: 10px;
            @media (max-width: 1500px) {
              width: 23px;
            }
          }

          &__text {
            font-family: 'Cuprum', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;
            color: #EF1C2B;
            @media (max-width: 1500px) {
              font-family: 'Cuprum',sans-serif;
              font-style: normal;
              font-weight: 400;
              font-size: 15.3453px;
              line-height: 18px;
              color: #EF1C2B;
            }

          }
        }

        &__bottom {
          margin-left: 37px;
          font-family: 'Cuprum', sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 32px;
          line-height: 37px;
          color: #231F20;
          @media (max-width: 1500px) {
            margin-left: 34px;
            font-family: 'Cuprum', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 23.0179px;
            line-height: 27px;
          }
          @media (max-width: 1500px) {
            font-size: 16px;
            line-height: 27px;
            font-weight: 400;
          }
        }
      }

    }
  }

  &__row {
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;
    @media (max-width: 1500px) {
      margin-bottom: 14px;
    }

    &__round {
      margin: 0 21px 0 0;
      width: 28px;
      height: 28px;
      font-family: 'Cuprum', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 18px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      color: #FFFFFF;
      background: #EF1C2B;
      border-radius: 50px;
      @media (max-width: 1500px) {
        width: 30px;
        height: 30px;
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 13.4271px;
        line-height: 16px;
        display: flex;
        align-items: center;
        text-align: center;
      }
      @media (max-width: 550px) {
        width: 20px;
        height: 20px;
        font-size: 11px;
        line-height: 13px;
      }
    }

    &__text {
      font-family: 'Cuprum', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 21px;
      line-height: 24px;
      display: flex;
      align-items: center;
      letter-spacing: 0.03em;
      color: #231F20;
      @media (max-width: 1500px) {
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20.1407px;
        line-height: 19px;
        display: flex;
        align-items: center;
        letter-spacing: 0.03em;
        color: #231F20;
      }
      @media (max-width: 550px) {
        font-size: 16px;
        line-height: 18px;
      }
    }
  }

  &__text {
    // ??? не подключаются на наследственные элементы
    //font-family: 'Cuprum', sans-serif;
    //font-style: normal;
    &__h18 {
      font-family: 'Cuprum', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
      color: #58585A;
      @media (max-width: 1500px) {
        font-family: 'Cuprum',sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 13.4271px;
        line-height: 16px;
        color: #58585A;
      }
    }

    &__h21 {
      font-family: 'Cuprum', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      letter-spacing: 0.03em;
      color: #A8A9AD;
      align-items: center;
      margin: 5px 0;
      @media (max-width: 1500px) {
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 15.3453px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 0.03em;
      }
    }

    &__h32 {
      text-align: right;
      font-family: 'Cuprum', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 37px;
      color: #231F20;
      @media (max-width: 1500px) {
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 20.1407px;
        line-height: 23px;
        color: #231F20;
      }
    }

    &__h48 {
      font-family: 'Cuprum', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 90%;
      color: #231F20;
      @media (max-width: 1500px) {
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 30.6905px;
        line-height: 90%;
        color: #231F20;
      }
    }
  }

  &__container {
  }

  &__header {
    display: flex;
    flex-direction: row;
    margin-bottom: 32px;
    justify-content: space-around;

    &__left {
      margin-right: 133px;
      display: flex;
      flex-direction: column;
      @media (max-width: 1500px) {
        margin-right: 99px;
      }
    }

    &__right {
      display: flex;
      flex-direction: column;
    }
  }
}

.default-slider .swiper-slide {
  transform: translateZ(0);
  height: 685px;
  background: #ffffff;
  @media (max-width: 1500px) {
    height: 655px;
  }
  @media (max-width: 550px) {
    height: 570px;
  }
}


</style>
