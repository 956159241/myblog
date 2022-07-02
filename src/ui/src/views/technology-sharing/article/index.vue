<template>
  <el-scrollbar class="scrollbar">
    <div class="output" v-html="content"></div>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import data from './data';
import { marked } from 'marked';
import { ref } from 'vue';

const content = ref(marked(data));
</script>

<style lang="scss" scoped>
.scrollbar {
  &:deep(.output) {
    padding: 15px;
    font-size: 14px;
    line-height: 25px;
    img {
      max-width: 100%;
      display: block;
      margin: 5px auto;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      text-align: center;
    }
    p {
      text-indent: 2em;
      letter-spacing: 2px;
      line-height: 25px;
    }

    blockquote {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
