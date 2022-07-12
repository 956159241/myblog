<template>
  <el-scrollbar class="scrollbar">
    <el-row class="row">
      <el-col class="column" :span="18" :xs="24">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>作品展示</span>
            </div>
          </template>
          <el-card class="box-card" v-for="item in 10" :key="item">
            <template #header>
              <div class="card-header">
                <span>标签：{{ item }}</span>
              </div>
            </template>
            <div class="item-list">
              <div
                v-for="product in 10"
                :key="product"
                class="item"
                style="width: 250px; margin-bottom: 15px"
              >
                <img
                  style="width: 100%"
                  src="http://qiniu.iotzzh.com/timg.jpg"
                />
                <div class="tags">
                  <el-tag class="tag">vue3</el-tag>
                  <el-tag class="tag">element-plus</el-tag>
                </div>
                <div class="demo-link">
                  <el-link
                    type="primary"
                    href="https://www.iotzzh.com"
                    target="_new"
                  >
                    https://www.iotzzh.com
                  </el-link>
                </div>
                <div class="short-desc">
                  简介：vue3 + ts + element plus + pinia + axios 后台管理系统
                </div>
              </div>
            </div>
          </el-card>
        </el-card>
      </el-col>
      <el-col class="column right" :span="6" :xs="0">
        <el-divider content-position="center">推荐</el-divider>
        <div
          v-for="product in 10"
          :key="product"
          class="item"
          style="width: 100%; margin-bottom: 15px"
        >
          <img style="width: 100%" src="http://qiniu.iotzzh.com/timg.jpg" />
          <div class="tags">
            <el-tag class="tag">vue3</el-tag>
            <el-tag class="tag">element-plus</el-tag>
          </div>
          <div class="demo-link">
            <el-link type="primary" href="https://www.iotzzh.com" target="_new">
              https://www.iotzzh.com
            </el-link>
          </div>
          <div class="short-desc">
            简介：vue3 + ts + element plus + pinia + axios 后台管理系统
          </div>
        </div>
      </el-col>
    </el-row>
  </el-scrollbar>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
