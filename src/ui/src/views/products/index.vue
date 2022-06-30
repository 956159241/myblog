<template>
  <el-scrollbar class="scrollbar">
    <el-row class="row">
      <el-col class="column" :span="18">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>作品展示</span>
              <el-button class="button" text>时间排序</el-button>
            </div>
          </template>
          <el-card class="box-card" v-for="item in 10" :key="item">
            <template #header>
              <div class="card-header">
                <span>20220630</span>
              </div>
            </template>
          </el-card>
        </el-card>
      </el-col>
      <el-col class="column" :span="6">右侧</el-col>
    </el-row>
  </el-scrollbar>
</template>

<style lang="scss" scoped></style>
