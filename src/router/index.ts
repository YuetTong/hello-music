/** * createRouter 这个为创建路由的方法 * createWebHashHistory 这个就是vue2中路由的模式， * 这里的是hash模式，这个还可以是createWebHistory等 * RouteRecordRaw 这个为要添加的路由记录，也可以说是routes的ts类型 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
// 路由记录，这个跟vue2中用法一致，就不做过多解释了
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import("@/views/home/index.vue"),
    alias: '/home',
    meta: {
      title: 'home'
    }
  },
  {
    path: '/musicList',
    name: 'musicList',
    component: () => import("@/views/musicList/index.vue"),
    alias: '/musicList',
    meta: {
      title: 'musicList'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import("@/views/register/index.vue"),
    alias: '/register',
    meta: {
      title: '注册'
    }
  },
  {
    path: '/loginQR',
    name: 'loginQR',
    component: () => import("@/views/loginQR/index.vue"),
    alias: '/loginQR',
    meta: {
      title: '二维码登录'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("@/views/login/index.vue"),
    alias: '/login',
    meta: {
      title: '登录'
    }
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import("@/views/demo/index.vue"),
    alias: '/demo',
    meta: {
      title: 'Demo'
    }
  },
  {
    path: '/EditableTable',
    name: 'demo',
    component: () => import("@/views/EditableTable/index.vue"),
    alias: '/EditableTable',
    meta: {
      title: 'EditableTable'
    }
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;
