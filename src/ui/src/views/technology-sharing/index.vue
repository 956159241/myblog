<template>
  <el-row class="row">
    <el-col :span="4" class="column">
      <el-menu
        class="el-menu-vertical"
        @open="handleOpen"
        @close="handleClose"
        :collapse-transition="false"
        router
      >
        <SidebarItem
          v-for="route in menuList"
          :key="route.id"
          :item="route"
        ></SidebarItem>
      </el-menu>
    </el-col>

    <el-col :span="20" class="column">测试内容</el-col>
  </el-row>
</template>

<script lang="ts" setup>
import data from './data';
import SidebarItem from './SidebarItem.vue';
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue';
import CommonUtils from '@/utils/commonUtils';
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const menuList = CommonUtils.convertMenuArrToTree(data as any);
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
