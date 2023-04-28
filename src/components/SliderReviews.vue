<script>
import {Swiper} from "../../node_modules/swiper/vue/swiper";
import {SwiperSlide} from "../../node_modules/swiper/vue/swiper-slide";
import "../../node_modules/swiper/swiper.min.css";

export default {
  name: "SliderReviews",
  components: {
    Swiper,
    SwiperSlide
  },
}
</script>

<template>
  <swiper
      :breakpoints="{ 499:
        {
        width: 724,
        spaceBetween: 40,
        }
      }"
      :width="280"
      :space-between="15"
      class="default-slider">
    <swiper-slide>
      <div class="review">
        <div class="review__upper">
          <img class="review__upper__header__img" src="/src/assets/images/user-1.png" alt="User">
          <span class="review__upper__header"> Максим Б.</span>
        </div>
        <span class="review__desc">
          Полгода назад мне грозило лишение за оставление места ДТП. Переживал страшно, прочитав на форумах сообщения тех, кто с этим столкнулся. Был уверен, что лишение будет однозначно. Но к счастью нашел Автоюриста, обратился. Провели анализ, юрист сказал, что шансы высокие. Дело в итоге выиграли. Буду рекомендовать друзьям и знакомым!
        </span>
          <div class="review__sign">
          <span class="review__sign__left">Ответ: 20 минут</span>
          <span class="review__sign__right">Скорость решения запроса: 2 час</span>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="review">
        <div class="review__upper">
          <img class="review__upper__header__img" src="/src/assets/images/user-2.png" alt="User">
          <span class="review__upper__header"> Виктория Г. </span>
        </div>
        <span class="review__desc">
         Выражаем благодарность за проделанную работу по обжалованию постановления МАДИ, вынесенного организацией по ст.8.25 КоАП г. Москвы. Юристом была проведена профессиональная консультация по всем интересующим вопросам, подробно изложен порядок действий. Работа выполнена в соответствии с ожидаемыми и оговорёнными прогнозами ведения такого рода дел. Цель достигнута - постановление отменено решением суда (недоказанность обстоятельств, на основании которых было вынесено постановление (п.3 ч.1 ст.30.7)).
        </span>
        <div class="review__sign">
          <span class="review__sign__left__mobile">Ответ: 30 мин</span>
          <span class="review__sign__right__mobile">Скорость решения запроса: 4 часа</span>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="review">
        <div class="review__upper">
          <img class="review__upper__header__img" src="/src/assets/images/user-3.png" alt="User">
          <span class="review__upper__header"> Иван А. </span>
        </div>
        <span class="review__desc">Никогда не писал отзывов, но тут не могу. Спасибо Вам. Я часто мотаюсь по регионам (работаю водителем грузоперевозок). Многие дороги знаю как свои 5 пальцев, но была серьезная авария на трассе м-4 Дон, пришлось объезжать окольными путями. И как в анекдоте, из-за кустов доблестный сотрудник. Долго решали вопрос, ничего не оставалось как воспользоваться услугой онлайн юриста. Все было решено меньше, чем за час, я просто повторял слово в слово, что мне говорил юрист. Еще раз спасибо!</span>
        <div class="review__sign">
          <span class="review__sign__left">Ответ: 12 минут</span>
          <span class="review__sign__right">Скорость решения запроса: 45 минут</span>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="review">
        <div class="review__upper">
          <img class="review__upper__header__img" src="/src/assets/images/user-4.png" alt="User">
          <span class="review__upper__header"> Евгений П. </span>
        </div>
        <span class="review__desc">Конструктивно и по существу внесли ясность в мою ситуацию с лишением прав. Объяснили реальный исход, без сказочных и дорогостоящих предложений. И все это за одну консультацию. Искренне благодарен! Впредь буду пользоваться услугами только этого сервиса.</span>
        <div class="review__sign">
          <span class="review__sign__left">Ответ: 30 минут</span>
          <span class="review__sign__right">Скорость решения запроса: 1,5 часа</span>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="review">
        <div class="review__upper">
          <img class="review__upper__header__img" src="/src/assets/images/user-5.png" alt="User">
          <span class="review__upper__header"> Лиза М. </span>
        </div>
        <span class="review__desc">Попала в дтп, связалась с автоюристами и получила квалифицированную помощь по заполнению европротокола и алгоритму действий в такой стрессовой ситуации. Спасибо за помощь!</span>
        <div class="review__sign">
          <span class="review__sign__left">Ответ: 15 минут</span>
          <span class="review__sign__right">Скорость решения запроса: 45 минут</span>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="review">
        <div class="review__upper">
          <img class="review__upper__header__img" src="/src/assets/images/user-6.png" alt="User">
          <span class="review__upper__header"> Александр Л. </span>
        </div>
        <span class="review__desc">Спасибо за оказанную помощь при возмещении денежных средств со страховой компании после ДТП. Сам долго пытался разобраться в ситуации, страховая направляла на ремонт автомобиля к неофициальному дилеру, хотя еще не истек срок гарантийного обслуживания. Юрист прописал все этапы моих действий и подготовил нужные документы, ситуация разрешилась так, как я хотел!</span>
        <div class="review__sign">
          <span class="review__sign__left">Ответ: 30 минут</span>
          <span class="review__sign__right">Скорость решения запроса: 2 часа</span>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>


<style lang="scss" scoped>
.review {
  display: flex;
  flex-direction: column;
  margin: 30px;
  @media (max-width: 550px) {
    margin: 15px;
  }
  &__upper {
    display: inline-flex;
    vertical-align: middle;
    align-items: center;
    justify-content: flex-start;
    &__header {
      font-family: 'Cuprum', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 37px;
      color: #231F20;
      margin: auto 5px;
      @media (max-width: 550px) {
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 18.7324px;
        line-height: 22px;
        color: #231F20;
      }
      &__img {
        margin: auto 5px;
        width: 34px;
        height: 34px;
        display: inline;
      }
    }

  }

  &__desc {
    margin-top: 10px;
    font-family: 'Cuprum', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #231F20;
    @media (max-width: 550px) {
      margin-top: 8px;
      font-family: 'Cuprum', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 120%;
      color: #231F20;
    }
  }

  &__sign {
    display: flex;
    flex-direction: row;
    bottom: 0;
    position: absolute;
    margin-bottom: 25px;
    @media (max-width: 550px) {
      flex-direction: column;
    }

    &__left {
      margin-right: 20px;
      font-family: 'Cuprum', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 21px;
      line-height: 24px;
      color: #231F20;
      @media (max-width: 550px) {
        margin-top: 11px;
        margin-right: 15px;
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 14.0493px;
        line-height: 16px;
        color: #231F20;
      }

      &__mobile {
        margin-top: 82px;
        margin-right: 15px;
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 21px;
        line-height: 24px;
        color: #231F20;
        @media (max-width: 550px) {
          margin-top: 75px;
          margin-right: 15px;
          font-family: 'Cuprum', sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 14.0493px;
          line-height: 16px;
          color: #231F20;
        }
      }
    }

    &__right {
      font-family: 'Cuprum', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 21px;
      line-height: 24px;
      color: #231F20;
      @media (max-width: 550px) {
        margin-top: 3px;
        margin-right: 15px;
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 14.0493px;
        line-height: 16px;
        color: #231F20;
      }

      &__mobile {
        margin-top: 82px;
        font-family: 'Cuprum', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 21px;
        line-height: 24px;
        color: #231F20;
        @media (max-width: 550px) {
          margin-top: 3px;
          margin-right: 15px;
          font-family: 'Cuprum', sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 14.0493px;
          line-height: 16px;
          color: #231F20;
        }
      }
    }
  }
}

.default-slider .swiper-slide {
  transform: translateZ(0);
  height: 276px;
  @media (max-width: 550px) {
    height: 450px;
  }
  border-radius: 20px;
  border: 2px #D2D3D5 solid;

}


</style>
