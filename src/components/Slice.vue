<template>
  <div class="max-w-[1400px] mx-auto py-16 px-4 relative group">
    <div v-if="slides.length > 0" :style="{
      backgroundImage: `url(${slides[currentIndex].url})`,
      backgroundSize: '30vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '50vh',
    }" class="duration-50">
      <h1 class="absolute text-4xl bottom-4 left-1/2 transform -translate-x-1/2 text-white 
    md:text-2xl sm:bottom-2 sm:text-xl">{{ slides[currentIndex].alt }}</h1>
    </div>

    <!-- Left Arrow -->
    <div v-if="slides.length > 0"
      class="hidden group-hover:block absolute top-1/2 transform -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
      @click="prevSlide">
      <button :size="30"></button>
    </div>
    <!-- Right Arrow -->
    <div v-if="slides.length > 0"
      class="hidden group-hover:block absolute top-1/2 transform -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
      @click="nextSlide">
      <button :size="30"></button>
    </div>
    <div class="flex justify-center mt-4">
      <div v-for="(slide, slideIndex) in slides" :key="slideIndex" @click="goToSlide(slideIndex)"
        class="text-6xl cursor-pointer text-white mx-2">
        <span>-</span>
      </div>
    </div>
  </div>
</template>
  
<script>
import slice1 from "../assets/slice1.png"
import slice2 from "../assets/slice2.png"
import slice3 from "../assets/slice3.png"
export default {
  data() {
    return {
      currentIndex: 0,
      slides: [
        { url: slice1, alt: 'animeYabu.' },
        { url: slice2, alt: 'animeKyojuro.' },
        { url: slice3, alt: 'animeInosuke.' },
      ], // add your slides array here
      intervalId: null,
    };
  },
  methods: {
    prevSlide() {
      const isFirstSlide = this.currentIndex === 0;
      const newIndex = isFirstSlide ? this.slides.length - 1 : this.currentIndex - 1;
      this.currentIndex = newIndex;
    },
    nextSlide() {
      const isLastSlide = this.currentIndex === this.slides.length - 1;
      const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
      this.currentIndex = newIndex;
    },
    goToSlide(slideIndex) {
      this.currentIndex = slideIndex;
    },
  },
  mounted() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  },
  watch: {
    currentIndex() {
      clearInterval(this.intervalId);
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, 5000);
    },
  },
};
</script>
  