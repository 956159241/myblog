<template>
  <div class="box">
    <el-menu
      class="el-menu-vertical"
      @open="handleOpen"
      @close="handleClose"
      :collapse-transition="false"
      :unique-opened="true"
      :collapse="false"
      :style="{ width: false ? '56px' : '300px' }"
    >
      <SidebarItem
        v-for="route in menuList"
        :key="route.id"
        :item="route"
      ></SidebarItem>
    </el-menu>
    <div style="flex: 1; padding: 10px; background-color: rgba(0,0,0,0.1);">测试内容</div>
  </div>
</template>

<script lang="ts" setup>
import data from './data';
import SidebarItem from './SidebarItem.vue';
import { MenuNode } from './types';
import { convertMenuArrToTree } from './index';

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const menuList = convertMenuArrToTree(data as MenuNode[]);
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
