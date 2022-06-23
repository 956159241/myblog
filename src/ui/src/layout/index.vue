<template>
  <Top></Top>
  <Nav></Nav>
  <el-scrollbar>
    <router-view></router-view>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import Top from './Top.vue';
import Nav from './Nav.vue';
</script>
