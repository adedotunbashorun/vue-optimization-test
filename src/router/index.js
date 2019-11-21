import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';

import '../../node_modules/nprogress/nprogress.css'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  hash: false,
  routes
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
});

router.afterEach(() => {
  NProgress.done()
});

export default router;
