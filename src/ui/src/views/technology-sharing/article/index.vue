<template>
  <el-scrollbar class="scrollbar">
    <div class="output" v-html="content"></div>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { ref, shallowRef } from 'vue';

import data from './data';
import { marked } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/felipec.css';

const render = new marked.Renderer();
marked.setOptions({
  renderer: render, // 这是必填项
  gfm: true, // 启动类似于Github样式的Markdown语法
  pedantic: false, // 只解析符合Markdwon定义的，不修正Markdown的错误
  sanitize: false, // 原始输出，忽略HTML标签（关闭后，可直接渲染HTML标签）
  langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
  breaks: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
  // 高亮的语法规范
  highlight: (code: any, lang: any) =>
    hljs.highlight(code, { language: lang }).value,
});

const content = shallowRef('');
content.value = marked(data);

// const content = ref(marked(data));
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

    code.hljs {
      background: url(http://qiniu.iotzzh.com/timg.jpg) !important;
      background-size: cover !important;
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
