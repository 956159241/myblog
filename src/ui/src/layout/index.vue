<template>
  <Top></Top>
  <Nav></Nav>
  <el-scrollbar class="scrollbar">
    <router-view></router-view>
  </el-scrollbar>
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
