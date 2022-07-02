<template>
  <div class="box">
    <el-menu
      class="el-menu-vertical"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
      :collapse-transition="false"
      :unique-opened="true"
      :collapse="collapse"
      :style="{ width: collapse ? '56px' : '300px' }"
    >
      <SidebarItem
        v-for="route in menuList"
        :key="route.id"
        :item="route"
      ></SidebarItem>
    </el-menu>
    <div
      style="
        flex: 1;
        padding: 10px;
        background-color: rgba(0, 0, 0, 0.1);
        overflow-x: hidden;
      "
    >
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
import data from './data';
import SidebarItem from './SidebarItem.vue';
import { MenuNode } from './types';
import { convertMenuArrToTree } from './index';
import { onUnmounted, ref } from 'vue';
import router from '@/router';

const collapse = ref(false);

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
  // router.push({
  //   path: '/technology-sharing/article-list',
  //   query: { index: key },
  // });
};

const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const handleSelect = (index: string, indexPath: string, item: any) => {
  console.log('index', index);
  console.log('indexPath', indexPath);
  console.log('item', item);
  router.push({
    path: '/technology-sharing/article',
    query: { index },
  });
};

const menuList = convertMenuArrToTree(data as MenuNode[]);

window.addEventListener('resize', () => setCollapse());

const setCollapse = () => {
  if (document.body.clientWidth < 900) {
    collapse.value = true;
  } else {
    collapse.value = false;
  }
};
setCollapse();

onUnmounted(() => {
  window.removeEventListener('resize', () => setCollapse());
});
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
