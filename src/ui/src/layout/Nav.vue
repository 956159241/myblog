<template>
  <el-menu
    v-if="isPc"
    :default-active="activeIndex"
    class="menu"
    mode="horizontal"
    menu-trigger="hover"
    @select="handleSelect"
  >
    <el-menu-item index="Home">首页</el-menu-item>
    <el-menu-item index="TechnologySharing">技术分享</el-menu-item>
    <el-menu-item index="Products">作品展览</el-menu-item>
    <el-menu-item index="Reading">读万卷书</el-menu-item>
    <!-- <el-menu-item index="LifeEntertainment">行万里路</el-menu-item> -->
    <!-- <el-menu-item index="personal-info">个人信息</el-menu-item> -->
  </el-menu>
  <el-icon v-else @click="openMenu" :size="30" style="padding-left: 15px">
    <Expand style="width: 1.5em; height: 1.5em" />
  </el-icon>
  <el-drawer
    custom-class="menu-drawer"
    v-model="drawer"
    title="I am the title"
    direction="ltr"
    :with-header="false"
  >
    <el-menu
      :default-active="activeIndex"
      class="web-menu"
      menu-trigger="hover"
      @select="handleSelect"
    >
      <el-menu-item index="Home">首页</el-menu-item>
      <el-menu-item index="TechnologySharing">技术分享</el-menu-item>
      <el-menu-item index="Products">作品展览</el-menu-item>
      <el-menu-item index="Reading">读万卷书</el-menu-item>
      <!-- <el-menu-item index="LifeEntertainment">行万里路</el-menu-item> -->
      <!-- <el-menu-item index="personal-info">个人信息</el-menu-item> -->
    </el-menu>
  </el-drawer>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import router from '@/router';
import { useLayoutStore } from '@/stores/layout';
import { storeToRefs } from 'pinia';
import isHelper from '@/utils/isHelper';

const store: any = useLayoutStore();
const { tabName } = storeToRefs(store);

const isPc = isHelper.isPC();

const drawer = ref(false);
let activeIndex = ref('');
onMounted(() => {
  activeIndex.value = tabName.value || 'Home';
});

const openMenu = () => {
  drawer.value = true;
};

const handleSelect = (key: string) => {
  setSelectedTab(key);
  drawer.value = false;
};

const setSelectedTab = (key: string) => {
  router.push({ name: key });
  store.setTabName(key);
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>

<style lang="scss">
.menu-drawer {
  width: 60% !important;
}

.web-menu {
  border-right: none !important;
}
</style>
