<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>作品展示</span>
        <el-button class="button" text>分类方式切换</el-button>
      </div>
    </template>

    <el-row>
      <el-col :span="8" v-for="item in 9" :key="item">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>分类名</span>
            </div>
          </template>
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <div style="padding: 14px">
              <span>Yummy hamburger</span>
              <div class="bottom">
                <time class="time">2022.2.2</time>
                <el-button text class="button">Operating</el-button>
              </div>
            </div>
          </el-card>
        </el-card>
      </el-col>
    </el-row>
  </el-card>
</template>
