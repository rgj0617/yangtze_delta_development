/**
 * tips:所有路径的总和，该js只管理路径
 * date:2024/2/27
 * author:watermelo
 *
 * Notes:
 * 1、
 * meta可配置的参数有：
 * meta:{
 * title:(string)
 * requireAuth:(true)
 * }
 *
 */
export default [
  // 专用测试url，用来测组件
  {
    path: "/test1",
    name: "test",
    meta: {
      title: "长三角高质量发展",
    },
    component: () => import("@/components/foot.vue"),
  },
  // {
  //   path: "/test2",
  //   name: "test",
  //   meta: {
  //     title: "SDGs&Sustainable",
  //   },
  //   component: () => import("@/components/foot.vue"),
  // },
  {
    path: "/:catchAll(.*)",
    name: "error",
    meta: {
      title: "404-页面不存在",
    },
    component: () => import("@/views/error/404.vue"),
  },
  {
    path: "/",
    redirect: "home",
    meta: {
      title: "长三角高质量发展",
    },
    component: () => import("@/views/dashboard/home.vue"),
  },
  {
    path: "/home",
    name: "home",
    meta: {
      title: "长三角高质量发展",
    },
    component: () => import("@/views/dashboard/home.vue"),
  },
  {
    path: "/chapters",
    name: "chapters",
    meta: {
      title: "长三角高质量发展",
    },
    component: () => import("@/views/dashboard/chapters.vue"),
    children: [
      {
        path: "", //默认加载子页面——导航页
        name: "chapters",
        meta: {
          title: "长三角高质量发展",
        },
        component: () => import("@/views/chapters/contents.vue"),
      },
      {
        path: "preface",
        name: "preface",
        meta: {
          title: "长三角高质量发展",
        },
        component: () => import("@/views/chapters/preface.vue"),
      },
      {
        path: "chapter2",
        name: "chapter2",
        meta: {
          title: "长三角高质量发展",
        },
        component: () => import("@/views/chapters/chapter2.vue"),
      },
      {
        path: "chapter3",
        name: "chapter3",
        meta: {
          title: "长三角高质量发展",
        },
        component: () => import("@/views/chapters/chapter3.vue"),
      },
      {
        path: "chapter4",
        name: "chapter4",
        meta: {
          title: "长三角高质量发展",
        },
        component: () => import("@/views/chapters/chapter4.vue"),
      },
      {
        path: "appendix",
        name: "appendix",
        meta: {
          title: "长三角高质量发展",
        },
        component: () => import("@/views/chapters/appendix.vue"),
      },
    ],
  },
  {
    path: "/rankings",
    name: "rankings",
    meta: {
      title: "长三角高质量发展",
    },
    component: () => import("@/views/dashboard/rankings.vue"),
  },
  {
    path: "/interactiveMap",
    name: "interactiveMap",
    meta: {
      title: "长三角高质量发展",
    },
    component: () => import("@/views/dashboard/interactiveMap.vue"),
  },
  {
    path: "/dataScreen",
    name: "dataScreen",
    meta: {
      title: "长三角高质量发展",
    },
    component: () => import("@/views/dashboard/dataScreen.vue"),
  },
  {
    path: "/downloads",
    name: "downloads",
    meta: {
      title: "长三角高质量发展",
    },
    component: () => import("@/views/dashboard/downloads.vue"),
  },
  {
    path: "/ours",
    name: "ours",
    meta: {
      title: "长三角高质量发展",
    },
    component: () => import("@/views/dashboard/ours.vue"),
  },
];
