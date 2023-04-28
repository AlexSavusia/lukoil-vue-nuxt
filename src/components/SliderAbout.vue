<script>
import {Swiper} from "../../node_modules/swiper/vue/swiper";
import {SwiperSlide} from "../../node_modules/swiper/vue/swiper-slide";
import "../../node_modules/swiper/swiper.min.css";

export default {
  name: "Slider",
  components: {
    Swiper,
    SwiperSlide
  },
}
</script>

<template>
  <swiper
      :breakpoints="{ 550:
        {
        width: 342,
        spaceBetweenSlides: 20,
        }
      }"
      :width="160"
      :space-between="40"
      class="default-slider">
    <swiper-slide>
      <div class="about-box">
        <div class="about-box__img">
          <img class="about-box__img__container-1" src="/src/assets/svg/speech-bubble.svg" alt="Speech Bubble"/>
        </div>
      </div>
      <div class="about-box__text">
        Посодействует в переговорах
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="about-box">
        <div class="about-box__img">
          <img class="about-box__img__container-2" src="/src/assets/svg/speech-bubble-with-dots.svg" alt="Speech Bubble"/>
        </div>
      </div>
      <div class="about-box__text">
        Проведет устную консультацию
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="about-box">
        <div class="about-box__img">
          <img class="about-box__img__container-3" src="/src/assets/svg/cup-with-pencils.svg" alt="Speech Bubble"/>
        </div>
      </div>
      <div class="about-box__text">
        Оформит письменный документ
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="about-box">
        <div class="about-box__img">
          <img class="about-box__img__container-4" src="/src/assets/svg/documents.svg" alt="Speech Bubble"/>
        </div>
      </div>
      <div class="about-box__text">
        Составит европротокол
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="about-box">
        <div class="about-box__img">
          <img class="about-box__img__container-4" src="/src/assets/svg/car.svg" alt="Car"/>
        </div>
      </div>
      <div class="about-box__text">
        Составит договор купли-продажи авто
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="about-box">
        <div class="about-box__img">
          <img class="about-box__img__container-4" src="/src/assets/svg/girl.svg" alt="Car"/>
        </div>
      </div>
      <div class="about-box__text">
        Проконсультирует по перевозке детей
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="about-box">
        <div class="about-box__img">
          <img class="about-box__img__container-4" src="/src/assets/svg/dog.svg" alt="Car"/>
        </div>
      </div>
      <div class="about-box__text">
        Проконсультирует по перевозке животных
      </div>
    </swiper-slide>
  </swiper>
</template>


<style lang="scss" scoped>
.about-box {
  height: 300px;
  background: #F0F0F0;
  border-radius: 20px;
  position: relative;
  @media (max-width: 550px) {
    height: 150px;
  }
  &__img {
    margin:auto;
    max-width: 150px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: 550px) {
      margin: 25px 0 0 25px;
      top: 35%;
      left: 35%;
    }
    &__container-1 {
      width: 140px;
      height: 140px;
      @media (max-width: 550px) {
        width: 73px;
      }
    }
    &__container-2 {
      width: 140px;
      height: 140px;
      @media (max-width: 550px) {
        width: 59px;
      }
    }
    &__container-3 {
      width: 140px;
      height: 140px;
      @media (max-width: 550px) {
        height: 100px;
      }
    }
    &__container-4 {
      width: 140px;
      height: 140px;
      @media (max-width: 550px) {
        width: 120px;
      }
    }
  }

  &__text {
    margin: 5px;
    left: 0;
    bottom: 0;
    font-family: 'Cuprum', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 0.06em;
    color: #231F20;
    @media (max-width: 550px) {
      margin: 5px 6px;
      font-family: 'Cuprum', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 17.2634px;
      line-height: 20px;
      letter-spacing: 0.03em;
      color: #231F20;
    }
  }
}

.section-with-carousel .swiper-slide img {
  height: 420px;
}

.default-slider .swiper-slide {
  touch-action: auto;
  transform: translateZ(0);
  height: 400px;
  @media (max-width: 550px) {
    height: 200px;
  }
}


</style>
