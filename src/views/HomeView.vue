<script setup>
import Cover from "../components/section/Cover.vue";
import Prj from "../components/section/Prj.vue";
import Who from "../components/section/Who.vue";
import Msg from "../components/section/Msg.vue";
import Navbar from "../components/Navbar.vue";
import PageFooter from "../components/section/PageFooter.vue";
</script>

<template>
  <header><Navbar/></header>
  <main>
    <Cover/>
    <Prj/>
    <Who/>
    <Msg/>
  </main>
  <footer><PageFooter/></footer>
</template>
