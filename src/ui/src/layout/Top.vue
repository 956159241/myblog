<template>
  <el-row class="top row box">
    <el-col :xs="0" :span="12" class="column left">欢迎来到小站</el-col>
    <el-col :xs="24" :span="12" class="column right">
      <el-dropdown
        class="dropdown"
        v-for="(item, index) in iconsDropdown"
        :key="index"
      >
        <span
          v-if="item.icon"
          :class="`iconfont ${item.icon}`"
          :data-clipboard-text="item.clipboardText"
          @click="
            item.needCopy &&
              CommonUtils.copy(
                `iconfont ${item.icon}`,
                item.successInfo,
                item.errorInfo
              )
          "
        ></span>
        <span
          v-else-if="item.text"
          class="iconfont text"
          :data-clipboard-text="item.clipboardText"
          @click="
            item.needCopy &&
              CommonUtils.copy(
                'iconfont text',
                item.successInfo,
                item.errorInfo
              )
          "
        >
          {{ item.text }}
        </span>
        <template #dropdown v-if="item.img">
          <img class="dropdown-img" :src="item.img" />
        </template>
      </el-dropdown>
      <span
        class="icon-text"
        v-for="(item, index) in iconsText"
        :key="index"
        :class="`iconfont ${item.icon}`"
        :data-clipboard-text="item.clipboardText"
        @click="
          CommonUtils.copy(
            `iconfont ${item.icon}`,
            item.successInfo,
            item.errorInfo
          )
        "
      ></span>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import CommonUtils from '@/utils/commonUtils';
import imgWeichat from '@/assets/images/weichat.jpg';
import imgQQ from '@/assets/images/qq.png';
import imgJS from '@/assets/images/jianshu.png';
import imgGZH from '@/assets/images/gongzhonghao.jpg';
import { IconModel } from './types';
// import { ref } from 'vue';
const iconsDropdown: Array<IconModel> = [
  { icon: 'icon-wechat-fill', img: imgWeichat },
  { icon: 'icon-QQ', img: imgQQ },
  { icon: '', text: '简书', img: imgJS },
  { icon: 'icon-gongzhonghao', img: imgGZH },
];

const iconsText: Array<IconModel> = [
  {
    icon: 'icon-github',
    clipboardText: 'https://github.com/956159241',
    successInfo: 'github已复制!',
    errorInfo: 'github复制失败,请手动复制: https://github.com/956159241',
  },
  {
    icon: 'icon-share',
    clipboardText: 'https://www.iotzzh.com',
    successInfo: '本网站网址已复制!',
    errorInfo: '本网站网址复制失败,请手动复制: http://www.iotzzh.com',
  },
];
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
