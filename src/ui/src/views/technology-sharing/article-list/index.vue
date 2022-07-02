<template>
  <div>文章列表页</div>
  <div>{{ content }}</div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
let content = ref(JSON.stringify(route));

watch(route, (newVal) => {
  content.value = JSON.stringify(newVal);
});
</script>
