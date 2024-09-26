<script setup>
import Cover from "../components/Cover.vue";
import Prj from "../components/Prj.vue";
import Who from "../components/Who.vue";
import Msg from "../components/Msg.vue";
import Navbar from "../components/Navbar.vue";
import PageFooter from "../components/PageFooter.vue";
</script>

<template>
  <Navbar/>
  <main>
    <Cover />
    <Prj />
    <Who />
    <Msg />
  </main>
  <PageFooter/>
</template>
