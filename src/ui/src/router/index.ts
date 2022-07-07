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
        name: 'Home',
      },
      {
        path: '/technology-sharing',
        component: () => import('@/views/technology-sharing/index.vue'),
        name: 'TechnologySharing',
        redirect: '/technology-sharing/article',
        children: [
          {
            path: '/technology-sharing/article',
            component: () =>
              import('@/views/technology-sharing/article/index.vue'),
            name: 'TechnologySharingArticle',
          },
          {
            path: '/technology-sharing/article-list',
            component: () =>
              import('@/views/technology-sharing/article-list/index.vue'),
            name: 'TechnologySharingArticleList',
          },
        ],
      },
      {
        path: '/life-entertainment',
        component: () => import('@/views/life-entertainment/index.vue'),
        name: 'LifeEntertainment',
      },
      {
        path: '/personal-info',
        component: () => import('@/views/personal-info/index.vue'),
        name: 'PersonalInfo',
      },
      {
        path: '/products',
        component: () => import('@/views/products/index.vue'),
        name: 'Products',
      },
      {
        path: '/reading',
        component: () => import('@/views/reading/index.vue'),
        name: 'Reading',
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

router.beforeEach((to, from, next) => {
  // console.log('to:' + to.fullPath);
  // console.log('from:' + from.fullPath);
  next();
});

export default router;
