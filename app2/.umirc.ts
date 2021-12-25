import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/animal/cat', component: '@/pages/animal/cat' },
    { path: '/animal/dog', component: '@/pages/animal/dog' },
    { path: '/fruit/banana', component: '@/pages/fruit/banana' },
    { path: '/fruit/mongo', component: '@/pages/fruit/mongo' },
  ],
  fastRefresh: {},
  qiankun: {
    slave: {},
  },
});
