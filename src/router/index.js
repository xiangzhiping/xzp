import {createRouter, createWebHistory} from 'vue-router';

const routes = [
  {path: '/login', component: () => import('@/views/login.vue')},
  {
    path: '/', component: () => import('@/views/HomeView.vue'), meta: {keepAlive: true}   // 设置页面缓存，保持tab状态
    // , children: [
    //   {
    //     path: 'dashboard', component: () => import('@/views/Dashboard.vue'), meta: {keepAlive: true}, name: 'dashboard'   // 设置页面缓存，保持tab状态
    //   },
    //   {
    //     path: 'users', component: () => import('@/views/user.vue'), meta: {keepAlive: true}, name: 'users'   // 设置页面缓存，保持tab状态
    //   },
    //   {
    //     path: 'settings', component: () => import('@/views/Settings.vue'), meta: {keepAlive: true}   // 设置页面缓存，保持tab状态
    //   },
    //   {
    //     path: 'personal', component: () => import('@/views/personal.vue'), meta: {keepAlive: true}   // 设置页面缓存，保持tab状态
    //   },
    // ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
