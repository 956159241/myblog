<template>
  <Top></Top>
  <Nav></Nav>
  <div class="content">
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>

<script lang="ts" setup>
import Top from './Top.vue';
import Nav from './Nav.vue';
import Footer from './Footer.vue';
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
