<template>
  <el-row class="row box">
    <el-col :span="12" class="column left">欢迎来到小站</el-col>
    <el-col :span="12" class="column right">
      <el-dropdown class="dropdown" v-for="(item, index) in icons" :key="index">
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
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import CommonUtils from '@/utils/commonUtils';
import imgWeichat from '@/assets/images/weichat.jpg';
import imgQQ from '@/assets/images/qq.jpg';
import imgJS from '@/assets/images/jianshu.jpg';
import imgGZH from '@/assets/images/gongzhonghao.jpg';
// import { ref } from 'vue';
const icons = [
  { icon: 'icon-wechat-fill', img: imgWeichat },
  { icon: 'icon-QQ', img: imgQQ },
  { icon: '', text: '简书', img: imgJS },
  { icon: 'icon-gongzhonghao', img: imgGZH },
  {
    icon: 'icon-github',
    img: '',
    needCopy: true,
    clipboardText: 'https://github.com/956159241',
    successInfo: 'github已复制!',
    errorInfo: 'github复制失败,请手动复制: https://github.com/956159241',
  },
  {
    icon: 'icon-share',
    img: '',
    needCopy: true,
    clipboardText: 'https://www.iotzzh.com',
    successInfo: '本网站网址已复制!',
    errorInfo: '本网站网址复制失败,请手动复制: http://www.iotzzh.com',
  },
];
</script>

<style lang="scss" scoped>
.row.box {
  background: #e6e6e6;
  height: 30px;
  line-height: 30px;
  vertical-align: middle;
  width: 100%;
  margin: 0px;
  .column.right {
    text-align: right;
    padding-right: 20px;
    .dropdown {
      margin: 0px 3px;
      cursor: pointer;
    }
    .iconfont {
      font-size: 25px;
      &:deep(.icon-gongzhonghao) {
        &:before {
          position: relative;
          top: 5px;
        }
      }
    }
    .text {
      position: relative;
      top: 5px;
      font-size: 16px;
    }
  }
}

.dropdown-img {
  height: 300px;
  width: 300px;
  img {
    width: 100%;
    height: auto;
  }
}
</style>
