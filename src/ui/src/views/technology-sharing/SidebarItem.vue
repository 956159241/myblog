<template>
  <el-menu-item
    :index="item ? item.id : ''"
    v-if="!item || !item.children || item.children.length === 0"
  >
    <el-icon><span :class="`iconfont ${item?.icon}`"></span></el-icon>
    <template #title>{{ item?.menuName }}</template>
  </el-menu-item>

  <el-sub-menu :index="item ? item.id : ''" v-else :collapse="true">
    <template #title>
      <el-icon><span :class="`iconfont ${item?.icon}`"></span></el-icon>

      <span>{{ item?.menuName }}</span>
    </template>

    <div v-for="(child, index) in item?.children" :key="index">
      <template v-if="child.children && child.children.length > 0">
        <sidebar-item :key="child.id" :item="child" />
      </template>
      <el-menu-item v-else :index="child.id">
        <span class="tab sub">{{ child.menuName }}</span>
      </el-menu-item>
    </div>
  </el-sub-menu>
</template>

<script lang="ts" setup>
import { PropType, toRefs } from 'vue';
import { MenuNode } from './types';

const props = defineProps({
  collapse: {
    type: Boolean,
    default: true,
  },
  item: {
    type: Object as PropType<MenuNode>,
  },
});

const { item, collapse } = toRefs(props);
</script>

<style lang="scss">
.el-menu-vertical {
  width: 100%;
  border-right: none !important;

  .tab {
    font-size: 16px;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  min-height: 400px;
}

.iconfont {
  margin-right: 5px;
}
</style>
