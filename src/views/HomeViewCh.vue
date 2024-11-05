<script setup>
import Cover from "../components/section/Cover.vue";
import Prj from "../components/section/sectionProject.vue";
import Who from "../components/section/sectionAbout.vue";
import Msg from "../components/section/sectionContact.vue";
import Navbar from "../components/headerNavbar.vue";
import sectionFooter from "../components/section/sectionFooter.vue";
</script>

<template>
  <Navbar />
  <main>
    <Cover />
    <Prj />
    <Who />
    <Msg />
  </main>
  <sectionFooter />
</template>
