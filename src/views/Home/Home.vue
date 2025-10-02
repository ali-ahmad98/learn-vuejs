<script setup>
import JobsListing from "../JobsListing/JobsListing.vue";
import Hero from "./partials/Hero.vue";
import HomeCards from "./partials/HomeCards.vue";
</script>

<template>
  <Hero />
  <HomeCards />
  <JobsListing :limit="3" showButton />
</template>

<style scoped></style>
