<template>
	<div class="relative overflow-hidden">
	  <div class="absolute inset-0 flex items-center justify-center">
		<img :src="currentImage" alt="Slide" class="object-cover w-full h-full">
	  </div>
	  <div class="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
		<div v-for="(image, index) in images" :key="index" class="h-2 w-2 mx-2 rounded-full transition duration-500 ease-in-out" :class="{'bg-white': index === currentIndex, 'bg-gray-300': index !== currentIndex}" @click="changeSlide(index)"></div>
	  </div>
	</div>
  </template>
  
  <script>
  export default {
	data() {
	  return {
		images: [
		  'https://via.placeholder.com/800x400/1abc9c/ffffff',
		  'https://via.placeholder.com/800x400/3498db/ffffff',
		  'https://via.placeholder.com/800x400/e74c3c/ffffff',
		],
		currentIndex: 0,
		timer: null,
	  };
	},
	computed: {
	  currentImage() {
		return this.images[this.currentIndex];
	  },
	},
	methods: {
	  changeSlide(index) {
		this.currentIndex = index;
		this.resetTimer();
	  },
	  resetTimer() {
		clearTimeout(this.timer);
		this.timer = setTimeout(() => {
		  this.currentIndex = (this.currentIndex + 1) % this.images.length;
		  this.resetTimer();
		}, 5000);
	  },
	},
	mounted() {
	  this.resetTimer();
	},
  };
  </script>
  
  <style>
  /* No es necesario agregar estilos aquí si ya has incluido TailwindCSS en tu proyecto */
  </style>
  