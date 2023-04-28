<script>
import ModalPackages from './ModalPackages.vue'
import ModalTelephone from './ModalTelephone.vue'
import ModalSMS from './ModalSMS.vue'
import ModalSend from './ModalSend.vue'
import ModalTermsOfAction from './ModalTermsOfAction.vue'
import ModalQuestion from './ModalQuestion.vue'
import ModalQuestionClose from './ModalQuestionClose.vue'
import SliderAbout from './SliderAbout.vue'
import SliderPackages from './SliderPackages.vue'
import SliderAdvantages from './SliderAdvantages.vue'
import SliderReviews from './SliderReviews.vue'
import Accordion from './Accordion.vue'

export default {
  inject: ["store"],
  name: "MainLine",
  components: {
    Accordion,
    ModalPackages,
    ModalTelephone,
    ModalSMS,
    ModalSend,
    SliderAbout,
    SliderPackages,
    SliderAdvantages,
    SliderReviews,
    ModalTermsOfAction,
    ModalQuestion,
    ModalQuestionClose,
  },
  mounted() {
    this.store.state.cardNumber = this.$route.query.card_number
  },
  methods: {
    change() {
      this.store.state.showModalPackages = true
    },
    showTermsOfAction() {
      this.store.state.showModalTermsOfAction = true
    },
    showQuestion() {
      this.store.state.showModalQuestion = true
    },
  }
}
</script>

<template>
  <Teleport to="body">
    <ModalPackages/>
  </Teleport>
  <Teleport to="body">
    <ModalTelephone/>
  </Teleport>
  <Teleport to="body">
    <ModalSMS/>
  </Teleport>
  <Teleport to="body">
    <ModalSend/>
  </Teleport>
  <Teleport to="body">
    <ModalTermsOfAction/>
  </Teleport>
  <Teleport to="body">
    <ModalQuestion/>
  </Teleport>
  <Teleport to="body">
    <ModalQuestionClose/>
  </Teleport>


  <div class="intro">
    <div class="container">
      <div class="container__left">
        <div class="header">
          <img class="header__logo_img" src="../assets/images/logo.png">
          <h1 class="intro__title">Воспользуйтесь услугами автоюристов онлайн и получайте<span style="color: red"> кешбэк 30% </span>баллами</h1>
        </div>
        <div class="intro__inner">
          <ul class="intro__case">
            <li class="intro__case_width">
              Кешбэк 30% от любой потраченной суммы
            </li>
            <li class="intro__case_width">
              Стоимость услуг от 700 ₽
            </li>
          </ul>
          <div class="intro__footer">
            <div class="intro__footer__text-link">
              <a class="intro__footer__btn" href="javascript:void(0)" @click="change">Воспользоваться</a>
              <span class="intro__footer__text">Предложение действует до 31 июля 2023 года
              </span>
<!--              <a class="intro__footer__link" href="javascript:void(0)" @click="showTermsOfAction">Подробнее об-->
<!--                условиях</a>-->
              <a class="intro__footer__link" href="Правила-Акции-Автоюристы.pdf" target="_blank">Подробнее об условиях</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>


  <section class="section">
    <div class="section__container">
      <div class="section__header">
        <h2 class="section__title">Автоюрист – <span style="color: red">поможет</span><br class="mobile-break"> на
          дорогах!</h2>
      </div>

      <SliderAbout/>

    </div>
  </section>

  <section class="section">
    <div class="section__container">
      <div class="section__header">
        <h2 class="section__title">Покупайте услуги автоюриста онлайн, и получайте <span
            style="color: red">кешбэк 30%</span> от потраченной суммы</h2>
      </div>

      <SliderPackages/>
    </div>
  </section>

  <section class="section">
    <div class="section__container">
      <div class="section__header">
        <h2 class="section__title">Преимущества<br class="mobile-break"> онлайн-юриста</h2>
      </div>

      <SliderAdvantages class="not-show-on-mobile"/>
      <div class="advantages-container-mobile">
        <div class="advantage">
          <img class="advantage__img" src="/src/assets/svg/history.svg" alt="History">
        </div>
        <span class="text_h32">Широкая география</span>
        <span
            class="text_h18">Получайте консультацию профессионального юриста из любой точки России</span>
        <div class="advantage">
          <img class="advantage__img" src="/src/assets/svg/acute.svg" alt="Acute">
        </div>
        <span class="text_h32" >Оперативный ответ</span>
        <span class="text_h18">Вашим вопросом займутся сразу после оплаты, обычно это занимает менее 30 минут</span>
        <div class="advantage">
          <img class="advantage__img" src="/src/assets/svg/savings.svg" alt="Clock">
        </div>
        <span class="text_h32">Экономия денег</span>
        <span
            class="text_h18">3 выгодных тарифа <br> с необходимым набором услуг</span>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="section__container">
      <div class="section__header">
        <h2 class="section__title"><span style="color: red">Более 3 000</span> успешно закрытых случаев
        </h2>
      </div>

      <SliderReviews/>
    </div>
  </section>

  <section class="section">
    <div class="faq">
      <div class="faq__questions">
        <span class="faq__questions__title">FAQ</span>
        <div class="faq__questions__question">
          <div style="margin: 20px 0">
            <Accordion>
              <template v-slot:title>
                По каким вопросам я могу обращаться?
              </template>
              <template v-slot:content>
                Наши специалисты помогут разобраться в любой отрасли права и объяснят, как дейстовать в сложившейся
                ситуации.
              </template>
            </Accordion>
          </div>
        </div>
        <div class="faq__questions__question">
          <div style="margin: 20px 0">
            <Accordion>
              <template v-slot:title>
                Как проходит консультация?
              </template>
              <template v-slot:content>
                В устной или письменной форме по номеру телефона, указанному в заявке.
              </template>
            </Accordion>
          </div>
        </div>
        <div class="faq__questions__question">
          <div style="margin: 20px 0">
            <Accordion>
              <template v-slot:title>
                Могу ли я вернуть услугу?
              </template>
              <template v-slot:content>
                Вы можете вернуть денежные средства за услугу в течение 14 дней после её оформления, если она не была оказана.
              </template>
            </Accordion>
          </div>
        </div>
        <div class="faq__questions__question">
          <div style="margin: 20px 0">
            <Accordion>
              <template v-slot:title>
                Как быстро мне ответит юрист?
              </template>
              <template v-slot:content>
                Наши юристы свяжутся с вами в течение 30 минут после оформления заявки. Мы проведем консультацию в удобной для вас форме: устно или письменно.
              </template>
            </Accordion>
          </div>
        </div>
        <div class="faq__questions__question">
          <div style="margin: 20px 0">
            <Accordion>
              <template v-slot:title>
                Как получить кешбэк?
              </template>
              <template v-slot:content>
                Кешбэк баллами начислится на вашу карту программы лояльности «Заправься выгодой» после оплаты и получения услуги в течение 14 рабочих дней.
              </template>
            </Accordion>
          </div>
        </div>
      </div>
      <div class="faq__feedback">
        <span class="faq__feedback__title">Воспользуйтесь<br> услугами онлайн-автоюриста</span>
        <a class="faq__feedback__btn-red" href="javascript:void(0);" @click="change">Воспользоваться</a>
        <a class="faq__feedback__btn-white" href="javascript:void(0);" @click="showQuestion">Задать вопрос</a>
        <span class="faq__feedback__text"> Задать вопрос в мессенджере</span>
        <div class="social-icons">
          <a href="https://telegram.org"><i class="telegram-icon"></i></a>
          <a href="https://vk.com"><i class="vk-icon"></i></a>
          <a href="https://whatsapp.com"><i class="whatsapp-icon"></i></a>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="footer">
      <span class="footer__text">Услуга оказывается сервисом ADVA<br>Поддержка office@adva.org.ru<br>Ожидая ответ проверяйте папку спам</span>
<!--      <a class="footer__link" href="javascript:void(0)" @click="showTermsOfAction">Условия акции</a>-->
      <a class="footer__link" href="Правила-Акции-Автоюристы.pdf" target="_blank">Условия акции</a>
    </div>
  </section>

</template>

<style lang="scss" scoped>
.social-icons {
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 20px 0;
}

.social-icons a {
  display: inline-block;
  margin: 0 10px;
  width: 50px;
  height: 50px;
}

.social-icons a:hover {
  transform: scale(1.2);
}

.social-icons .telegram-icon {
  background-image: url("/src/assets/images/telegram-icon.svg");
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.3s ease;
  width: 48px;
  height: 48px;
  display: block;

}

.social-icons .vk-icon {
  background-image: url("/src/assets/images/vk.svg");
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.3s ease;
  width: 48px;
  height: 48px;
  display: block;
}

.social-icons .whatsapp-icon {
  background-image: url("/src/assets/images/whatsapp.svg");
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.3s ease;
  width: 48px;
  height: 48px;
  display: block;
}

@media screen and (min-width: 550px) {
  .mobile-break {
    display: none;
  }
}

@media screen and (max-width: 550px) {
  .desktop-break {
    display: none;
  }
}

.not-show-on-mobile {
  @media (max-width: 550px) {
    display: none;
  }
}

.advantages-container-mobile {
  display: none;
  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
  }
}

.advantage {
  display: flex;
  flex-direction: column;
  margin: 32px auto 32px auto;
  background: #F0F0F0;
  border-radius: 20px;
  width: 465px;
  height: 240px;
  @media (max-width: 550px) {
    width: 95%;
    height: 142.04px;
    margin: 16px auto;
  }
  &__img {
    margin: auto;
    width: 240px;
    height: 200px;
    @media (max-width: 550px) {
      width: 200px;
      height: 100px;
    }
  }
}
.text_h32 {
  margin-left: 5px;
  margin-top: 9px;
  font-family: 'Cuprum', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 37px;
  color: #231F20;
  @media (max-width: 550px) {
    text-align: center;
  }
}
.text_h18 {
  margin-left: 5px;
  margin-top: 4px;
  font-family: 'Cuprum', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #231F20;
  @media (max-width: 550px) {
    text-align: center;
  }
}

.footer {
  width: 100%;
  max-width: 1728px;
  margin: 140px auto 53px;
  padding: 0 124px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 550px) {
    margin: 52px 0 47px;
    padding: 0 14px 0 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__text {
    font-family: 'Cuprum', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.04em;
    color: #231F20;
  }

  &__link {
    display: inline-block;
    font-family: 'Cuprum', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: right;
    letter-spacing: 0.04em;
    text-decoration-line: underline;
    color: #EF1C2B;
    @media (max-width: 550px) {
      margin-top: 28px;
      text-align: left;
      font-family: 'Cuprum', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 17.2634px;
      line-height: 20px;
      letter-spacing: 0.04em;
      text-decoration-line: underline;
      color: #EF1C2B;
    }
  }
}

.faq {
  width: 100%;
  max-width: 1728px;
  margin: 140px auto;
  padding: 0 124px;
  display: flex;
  flex-direction: row;
  @media (max-width: 1600px) {
    margin: 10% auto;
    display: flex;
    flex-direction: column;
    padding: 0 10%;
  }

  @media (max-width: 550px) {
    margin: 14px auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    max-width: 345px;
  }

  &__questions {
    display: flex;
    flex-direction: column;

    &__question {
      display: flex;
      flex-direction: row;
      opacity: 0.9;
      border-bottom: 1px dashed #A8A9AD;
      width: 717px;
      @media (max-width: 1024px) {
        width: 450px;

      }
      @media (max-width: 1224px) {
        width: 450px;

      }
      @media (max-width: 550px) {
        width: 345px;
      }

      &__img {
        width: 32px;
        height: 32px;
        padding: 13px 10px 12px 9px;
        margin: 20px 3px 20px 0;

        @media (max-width: 550px) {
          width: 30px;
          height: 30px;
          padding: 13px 10px 12px 9px;
          margin: 20px 3px 20px 0;
        }
      }

      &__text {
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 37px;
        color: #231F20;
        margin: 20px 0 20px 0;
        @media (max-width: 550px) {
          font-family: 'Cuprum', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 23.0179px;
          line-height: 27px;
          color: #231F20;
        }
      }
    }

    &__title {
      font-family: 'Cuprum', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 62px;
      line-height: 100%;
      color: #231F20;
      margin-bottom: 40px;
      @media (max-width: 550px) {
        margin-top: 27px;
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 30.6905px;
        line-height: 100%;
        color: #231F20;
      }
    }
  }

  &__feedback {
    display: flex;
    flex-direction: column;
    margin-left: 167px;
    margin-top: 170px;
    @media (max-width: 1280px) {
      margin-left: 0;
      margin-top: 70px;
    }
    @media (max-width: 550px) {
      margin-left: 0;
      margin-top: 65px;
      padding: 0;
    }

    &__title {
      font-family: 'Cuprum', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 42px;
      line-height: 100%;
      color: #231F20;
      @media (max-height: 1024px) {
        font-size: 24px;
      }
      @media (max-width: 550px) {
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 29px;
        line-height: 100%;
        color: #231F20;
      }
    }
    &__text {
      margin: 20px 0;
      font-family: 'Cuprum', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 100%;
      color: #231F20;
      @media (max-height: 1024px) {
        font-size: 14px;
      }
      @media (max-width: 550px) {
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 19px;
        line-height: 100%;
        color: #231F20;
      }
    }

    &__btn-red {
      margin-top: 24px;
      width: 595px;
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
      @media (max-height: 1024px) {
        width:470px;
        height: 60px;
      }
      @media (max-width: 550px) {
        margin-top: 28px;
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        color: #FFFFFF;
        width: 346px;
        height: 55px;
        border-radius: 19px;
      }
    }

    &__btn-white {
      margin-top: 24px;
      width: 595px;
      height: 60px;
      border-radius: 20px;
      border: 2px solid #EF1C2B;
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
      color: #EF1C2B;
      @media (max-height: 1024px) {
        width:470px;
        height: 60px;
      }
      @media (max-width: 550px) {
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        color: #EF1C2B;
        width: 345px;
        height: 57px;
      }
    }
  }
}

body {
  margin: 0 auto;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

/* Container */
.container {
  width: 100%;
  max-width: 1728px;
  height: 100%;
  max-height: 1155px;
  margin: 0 auto;
  padding: 0 124px;
  display: flex;
  flex-direction: row;
  z-index: 3;
  @media (max-width: 1024px) {
    padding: 0 50px;
    max-height: 1000px;
    width: 100%;
  }

  @media (max-width: 550px) {
    padding: 0;
  }
  @media (max-width: 450px) {
    max-height: 800px;
    padding: 0;
  }
}


/* Intro */
.intro {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #141B22 url("/src/assets/images/bg_1728.png") no-repeat center;
  background-size: cover;
  @media (max-width: 1024px) {
    background-image: url("/src/assets/images/bg_1024.png");
    background-repeat: no-repeat;
    background-position: center;
  }
  @media (max-width: 550px) {
    background-image: url("/src/assets/images/bg_550.png");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
  }
  @media (max-width: 375px) {
    background-image: url("/src/assets/images/bg_375.png");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
  }

  &__case {
    list-style: none;
    padding-left: 0;
    color: white;
    margin: 35px auto;
    @media (max-width: 1024px) {
      margin: 85px 0;
    }
    @media (max-width: 450px) {
      width: 100%;
      margin: 20px auto 160px;
    }

  }

  &__case_width {
    margin: 5px auto;
    font-family: 'Cuprum', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 0.1em;
    color: #FFFFFF;
    &::before {
      content: '■';
      margin-right: 2px;
      font-size: 15px;
      vertical-align: middle;
      display: inline-block;
      margin-top: -5px;
    }
    @media (max-width: 1024px) {
      padding-top: 7px;
      width: 80%;
      margin: 5px 0;
      margin-left: 15px;
    }
    @media (max-width: 450px) {
      width: 75%;
      margin: auto;
      font-size: 22px;
      line-height: 25px;
      text-align: center;
      height: 60px;
      &::before {
        content: '';
      }
    }
  }

  &__inner {
    width: 100%;
    max-width: 778px;
    margin: 0 124px 0 0;

    @media (max-width: 550px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 550px;
      margin: 0 24px 0 0;
    }
  }

  &__title {
    margin-top: 64px;
    width: 60%;
    align-items: flex-start;
    font-family: 'Cuprum', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 72px;
    line-height: 72px;
    color: white;
    text-align: left;

    //@media (max-width: 1550px) {
    //  margin-top: 100px;
    //  font-family: 'Cuprum', sans-serif;
    //  font-style: normal;
    //  font-weight: 400;
    //  font-size: 93px;
    //  line-height: 90%;
    //  color: #FFFFFF;
    //}

    @media (max-width: 1024px) {
      width: 90%;
      margin-top: 79px;
      font-family: 'Cuprum', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 62px;
      line-height: 90%;
      color: #FFFFFF;
    }

    @media (max-width: 550px) {
      font-family: 'Cuprum', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 42px;
      line-height: 90%;
      text-align: center;
      color: #FFFFFF;
      margin: 36px auto 0;
    }
    @media (max-width: 450px) {
      width: 70%;
      text-align: center;
      font-size: 32px;
      margin: 70px auto 0;
    }
  }

  &__footer {
    &__text-link {
      display: flex;
      flex-direction: column;
      @media (max-width: 550px) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    &__link {
      font-family: 'Cuprum', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
      letter-spacing: 0.04em;
      text-decoration-line: underline;
      margin-bottom: 235px;
      color: #FFFFFF;
      @media (max-width: 1024px) {
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 18px;
        text-decoration-line: underline;
        color: #FFFFFF;
        text-align: center;
      }
    }

    &__btn {
      width: 480px;
      height: 85px;
      display: inline-block;
      padding: 26px;
      border-radius: 20px;
      background: #C31C29;
      font-family: 'Cuprum', serif;
      font-style: normal;
      font-weight: 700;
      font-size: 23px;
      line-height: 30px;
      text-align: center;
      letter-spacing: 0.03em;
      text-decoration: none;
      color: white;
      margin-bottom: 50px;

      @media (max-width: 1024px) {
        padding: 18px 15px;
        width: 100%;
        height: 54px;
        opacity: 0.8;
        border-radius: 11.8519px;
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 18px;
        letter-spacing: 0.03em;
        color: #FFFFFF;
        margin-bottom: 32px;
      }
      @media (max-width: 550px) {
        width: 386px;
        margin-bottom: 19px;
        padding: 23px 0;
      }

      @media (max-width: 550px) {
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        text-align: center;
        letter-spacing: 0.03em;
        color: #FFFFFF;
        width: 302px;
        height: 69px;
        border-radius: 10px;
        background: #EF1C2B;

      }
    }

    &__text {
      font-family: 'Cuprum', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      letter-spacing: 0.08em;
      color: #FFFFFF;
      margin-bottom:10px;
      @media (max-width: 1024px) {
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        margin-top: 25px;
        text-align: center;
      }

      @media (max-width: 550px) {
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 18px;
        text-align: center;
        letter-spacing: 0.04em;
        color: white;
        margin-top: 10px;
      }
      @media (max-width: 375px) {
      }
    }
  }
}


/* Header */
.header {
  width: 100%;
  margin: 42px 0 0 0;

  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 39px 0 0 0;
  }
  @media (max-width: 450px) {
    margin: 39px 0 20px 0;
  }

  &__logo_img {
    @media (max-width: 1024px) {
      height: 45px;
    }
    @media (max-width: 550px) {
      height: 98px;
    }
    @media (max-width: 450px) {
      height: 50px;
    }
  }
}


/* Section */
.section {
  background-color: white;

  &__header {
    margin-bottom: 40px;
    @media (max-width: 550px) {
      margin-bottom: 14px;
    }
  }

  &__title {
    font-family: 'Cuprum', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 62px;
    line-height: 100%;
    color: #231F20;
    text-align: left;

    @media (max-width: 1280px) {
      font-size: 52px;
    }

    @media (max-width: 550px) {
      text-align: justify;
      font-family: 'Cuprum', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 29px;
      line-height: 100%;
      color: #231F20;
      letter-spacing: 0.5px;
    }
  }

  &__logo_img {
    height: 77px;
  }

  &__container {
    width: 100%;
    max-width: 1728px;
    margin: 140px auto;
    padding: 0 115px;

    @media (max-width: 1280px) {
      margin: 10% auto;
      padding: 0 35px;
    }

    @media (max-width: 550px) {
      width: 100%;
      max-width: 550px;
      margin: 67px auto;
      padding: 0 14px;
    }

  }
}

.about {
  display: flex;
  gap: 20px;
}
</style>
