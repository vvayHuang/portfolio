<script setup>
import Cover from "../components/section/Cover.vue";
import Prj from "../components/section/Prj.vue";
import Who from "../components/section/Who.vue";
import Msg from "../components/section/Msg.vue";
import Navbar from "../components/Navbar.vue";
import sectionFooter from "../components/section/sectionFooter.vue";
</script>

<template>
  english
  <header><Navbar/></header>
  <main>
    <Cover/>
    <Prj/>
    <Who/>
    <Msg/>
  </main>
  <sectionFooter/>
</template>
