import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router';
import Layout from '@/layout/index.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: '首页',
      },
      {
        path: '/life-entertainment',
        component: () => import('@/views/life-entertainment/index.vue'),
        name: '生活娱乐',
      },
      {
        path: '/personal-info',
        component: () => import('@/views/personal-info/index.vue'),
        name: '个人信息',
      },
      {
        path: '/products',
        component: () => import('@/views/products/index.vue'),
        name: '产品',
      },
      {
        path: '/reading',
        component: () => import('@/views/reading/index.vue'),
        name: '阅读',
      },
      {
        path: '/technology-sharing',
        component: () => import('@/views/technology-sharing/index.vue'),
        name: '技术分享',
      },
      {
        // 匹配所有路径  vue2使用*   vue3使用/:pathMatch(.*)*或/:pathMatch(.*)或/:catchAll(.*)
        path: '/:pathMatch(.*)',
        redirect: '/home',
        meta: { hidden: true },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
