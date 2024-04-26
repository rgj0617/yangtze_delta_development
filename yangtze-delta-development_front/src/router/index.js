/**
 * tips:只管理路由配置，包括路由设置，路由守卫等
 * date:2024/2/27
 * author:watermelo
 */
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes";

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
});

// 根据meta中的title属性，设置页面标题
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Default Title";
  next();
});

export default router;
