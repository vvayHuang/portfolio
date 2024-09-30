<script setup>
import Logo from './Logo.vue';
</script>
<template>
  <div class="fixed-top" style="mix-blend-mode: difference">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <span class="flex-grow-1 d-none d-lg-block text-light">©2024</span>
        <Logo/>
        <ul class="navbar-nav mb-lg-0 flex-row flex-grow-1 justify-content-end">
          <li class="nav-item">
            <a href="#PRJ" class="nav-link link-light px-2 px-md-4">作品</a>
          </li>
          <li class="nav-item">
            <a href="#WHO" class="nav-link link-light px-2 px-md-4">關於</a>
          </li>
          <li class="nav-item">
            <a href="#MSG" class="nav-link link-light px-2 px-md-4">聯絡</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
