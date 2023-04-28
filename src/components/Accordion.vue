<template>
  <div>
    <a
        @click="toggleAccordion()"
        :aria-expanded="isOpen"
        :aria-controls="`collapse${_uid}`"
        class="href-row"
    >
      <img
          :class="{ active_icon: isOpen, non_active_icon: !isOpen }"
          src="/src/assets/svg/arrow_drop_down.svg"
          aria-hidden="true"
          alt="Arrow"

      >
      <div>
        <span :class="{ main_title_active: isOpen, main_title: !isOpen }"><slot name="title"/></span>
      </div>
    </a>

    <div class="text-container" v-show="isOpen" :id="`collapse${_uid}`">
      <span class="main-text"><slot name="content"/></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
}
</script>

<style lang="scss" scoped>

.href-row {
  display: flex;
  flex-direction: row;
}

.main_title {
  font-family: 'Cuprum', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
  color: #231F20;
  @media (max-width: 550px) {
    font-family: 'Cuprum', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 24px;
    color: #231F20;
    max-width: 350px;
    display: block;
  }
}

.main_title_active {
  font-family: 'Cuprum', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
  color: #EF1C2B;
  @media (max-width: 550px) {
    font-family: 'Cuprum', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 23.0179px;
    line-height: 27px;
    color: #EF1C2B;
    max-width: 350px;
    display: block;
  }

}

.text-container {
  margin-left: 32px;
  width: 550px;
  height: 42px;
  margin-top: 8px;
  @media (max-width: 550px) {
    width: 320px;
    height: 65px;
  }
}

.main-text {
  font-family: 'Cuprum', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #231F20;
}


.active_icon {
  transform: rotate(180deg);
  filter: invert(22%) sepia(69%) saturate(3324%) hue-rotate(342deg) brightness(91%) contrast(107%);
  width: 13px;
  height: 7px;
  padding: 13px 10px 9px 9px;

  @media (max-width: 550px) {
    width: 12px;
    padding: 13px 10px 9px 9px;
  }
}

.non_active_icon {
  width: 13px;
  height: 7px;
  padding: 7px 10px 9px 9px;

  @media (max-width: 550px) {
    width: 12px;
    padding: 13px 10px 9px 9px;
  }
}


</style>
