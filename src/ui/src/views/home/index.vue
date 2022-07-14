<template>
  <el-scrollbar>
    <el-row class="box">
      <el-col :span="16" :xs="24">
        <div class="left">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="文章" name="first">
              <ul>
                <li class="item" v-for="item in 10" :key="item">
                  <div class="content">
                    <el-link class="title">
                      JavaScript * DOM： 监听div的resize事件
                    </el-link>
                    <p class="desc">
                      今天无意看到tsconfig.json的文件的开始位置有些小小的红色的波浪线，鼠标移入一看，提示：无法写入....,如下：
                      本来想着去百度下的，...
                    </p>
                    <div class="footer">
                    <el-icon><View /></el-icon>18
                    <el-link class="video-address">视频地址</el-link>
                    </div>

                  </div>
                  <div class="image-box">
                    <img class="image" src="http://qiniu.iotzzh.com/timg.jpg" />
                  </div>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="最新评论" name="third">最新评论</el-tab-pane>
            <el-tab-pane label="热门" name="fourth">热门</el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
      <el-col :span="8" :xs="0">
        <div class="right">
          <div class="box">
            <div>
              <h5>个人介绍</h5>
              <p>一名软件开发从业人员</p>
              <h5>个人网站</h5>
              <el-link href="https://www.iotzzh.com" target="_new">
                https://www.iotzzh.com
              </el-link>
              <h5>简书</h5>
              <el-link
                href="https://www.jianshu.com/u/73338f0db75f"
                target="_new"
              >
                https://www.jianshu.com/u/73338f0db75f
              </el-link>
              <h5>Github</h5>
              <el-link href="https://github.com/956159241" target="_new">
                https://github.com/956159241
              </el-link>
              <h5>座右铭</h5>
              <p>不忘初心，方得始终。念念不忘，必有回响。</p>
              <h5>联系方式</h5>
              <p>微信：iotzzh</p>
              <p>QQ：956159241</p>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { TabsPaneContext } from 'element-plus';

const activeName = ref('first');

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
