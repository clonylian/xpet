import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/Borrow',
    name: 'Borrow',
    component: () => import('../view/Borrow.vue')
  },
  {
    path: '/',
    name: 'HelloWorld',
    component: () => import('../components/HelloWorld.vue')
  },
  {
    path: '/Convert',
    name: 'Convert',
    component: () => import('../view/Convert.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      const element = document.querySelector(to.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return false; // 阻止默认的滚动行为
      }
    }
    return { top: 0 }; // 默认滚动到页面顶部
  },
});

export default router;
