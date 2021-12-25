import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/star/earth', component: '@/pages/star/earth' },
    { path: '/star/sun', component: '@/pages/star/sun' },
    { path: '/water/ocean', component: '@/pages/water/ocean' },
    { path: '/water/sea', component: '@/pages/water/sea' },
  ],
  fastRefresh: {},
  qiankun: {
    slave: {},
  },
});
