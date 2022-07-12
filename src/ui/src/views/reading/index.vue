<template>
  <el-row>
    <el-col :span="12" :xs="24">
      <el-carousel
        @change="changeCarousel"
        :interval="2000"
        type="card"
        height="200px"
      >
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 text="2xl" justify="center">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-col>
    <el-col :span="12" :xs="0" style="text-align: center">
      简介{{ index1 + 1 }}
    </el-col>
  </el-row>

  <div class="collapse">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="推荐书籍" name="1">
        <div>大学</div>
        <div>中庸</div>
      </el-collapse-item>
      <el-collapse-item title="中华随笔" name="2">
        <div>读xxx后感</div>
        <div>观xxx后感</div>
      </el-collapse-item>
      <el-collapse-item title="中华酱油诗" name="3">
        <div>酱油1</div>
        <div>酱油2</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const activeName = ref('');
const index1 = ref(0);
const changeCarousel = (index: any) => {
  index1.value = index;
  // todo: 根据轮播显示的图片，显示简介
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
