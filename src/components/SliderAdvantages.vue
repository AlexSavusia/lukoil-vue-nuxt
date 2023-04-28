<script>
import {Swiper} from "../../node_modules/swiper/vue/swiper";
import {SwiperSlide} from "../../node_modules/swiper/vue/swiper-slide";
import "../../node_modules/swiper/swiper.min.css";

export default {
  name: "SliderAdvantages",
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
        width: 469,
        spaceBetween: 40,
        }
      }"
      :width="302"
      :space-between="40"
      class="default-slider">
    <swiper-slide>
      <div class="advantage">
        <img class="advantage__img" src="/src/assets/svg/history.svg" alt="History">
      </div>
      <div class="text_h32">Широкая география</div>
      <div class="text_h18">Получайте консультацию профессионального<br> юриста из любой точки России</div>
    </swiper-slide>
    <swiper-slide>
      <div class="advantage">
        <img class="advantage__img"  src="/src/assets/svg/acute.svg" alt="Acute">
      </div>
      <div class="text_h32" style="margin-top: 11px">Оперативный ответ</div>
      <div class="text_h18">Вашим вопросом займутся сразу после оплаты,<br> обычно это занимает менее 30 минут</div>
    </swiper-slide>
    <swiper-slide>
      <div class="advantage">
        <img class="advantage__img"  src="/src/assets/svg/savings.svg" alt="Clock">
      </div>
      <div class="text_h32">Экономия денег</div>
      <div class="text_h18">3 выгодных тарифа <br> с необходимым набором услуг</div>
    </swiper-slide>
  </swiper>
</template>


<style lang="scss" scoped>
.advantage {
  display: flex;
  flex-direction: column;
  margin: 32px auto 32px auto;
  background: #F0F0F0;
  border-radius: 20px;
  width: 465px;
  height: 240px;
  &__img {
    margin: auto;
    width: 240px;
    height: 200px;
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
}


.default-slider .swiper-slide {
  transform: translateZ(0);
  height: 393px;
  @media (max-width: 499px) {
    height: 200px;
  }
}


</style>
