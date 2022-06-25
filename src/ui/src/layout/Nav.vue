<template>
  <el-menu
    :default-active="activeIndex"
    class="menu"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="home">首页</el-menu-item>
    <el-menu-item index="technology-sharing">技术分享</el-menu-item>
    <el-menu-item index="products">作品展览</el-menu-item>
    <el-menu-item index="reading">读万卷书</el-menu-item>
    <el-menu-item index="life-entertainment">行万里路</el-menu-item>
    <el-menu-item index="personal-info">个人信息</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import router from '@/router';
import { useLayoutStore } from '@/stores/layout';
import { storeToRefs } from 'pinia';

const store: any = useLayoutStore();
const { tabName } = storeToRefs(store);

const activeIndex = ref(tabName.value);
const handleSelect = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath);
  router.push(key);
  store.setTabName(key);
};
</script>

<style lang="scss" scoped>
.menu {
  justify-content: flex-end;
}
</style>
