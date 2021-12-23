import { defineConfig } from 'umi';

// 装载子应用
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // 路由
  routes: [
    {
      path: '/',
      component: '@/layouts/base',
      routes: [
        {
          path: '/app1',
          microApp: 'app1',
        },

        // 配置 app2 关联的路由
        {
          path: '/app2',
          microApp: 'app2',
        },
      ],
    },
  ],

  // 配置子应用
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'app1',
          entry: '//localhost:3001', // entry
        },
        {
          name: 'app2',
          entry: '//localhost:3002',
        },
      ],
    },
  },

  // mfsu
  mfsu: {},
});
