<template>
  <el-menu
    :default-active="activeIndex"
    class="menu"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="Home">首页</el-menu-item>
    <el-menu-item index="TechnologySharing">技术分享</el-menu-item>
    <el-menu-item index="Products">作品展览</el-menu-item>
    <el-menu-item index="Reading">读万卷书</el-menu-item>
    <!-- <el-menu-item index="life-entertainment">行万里路</el-menu-item> -->
    <!-- <el-menu-item index="personal-info">个人信息</el-menu-item> -->
  </el-menu>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import router from '@/router';
import { useLayoutStore } from '@/stores/layout';
import { storeToRefs } from 'pinia';

const store: any = useLayoutStore();
const { tabName } = storeToRefs(store);

let activeIndex = ref('');
onMounted(() => {
  activeIndex.value = tabName.value || 'Home';
});
const handleSelect = (key: string) => {
  setSelectedTab(key);
};

const setSelectedTab = (key: string) => {
  router.push({ name: key });
  store.setTabName(key);
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
