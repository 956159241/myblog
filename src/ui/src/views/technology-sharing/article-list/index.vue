<template>推荐文章页，待建设。。。</template>

<script lang="ts" setup>
import { TabsPaneContext } from 'element-plus/es/tokens/tabs';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const activeName = ref('first');

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
// const route = useRoute();
// let content = ref(JSON.stringify(route));

// watch(route, (newVal) => {
//   content.value = JSON.stringify(newVal);
// });
</script>
