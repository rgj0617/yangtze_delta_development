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
        path: '/test',
        name:"test",
        meta:{
            title:"SDGs&Sustainable"
        },
        component: () => import("@/components/map.vue"),
    },


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
        redirect: "/home",
        meta:{
            title:"SDGs&Sustainable"
        },
        component: () => import("@/views/dashboard/home.vue"),
    },
    {
        path: '/home',
        name:"home",
        meta:{
            title:"SDGs&Sustainable"
        },
        component: () => import("@/views/dashboard/home.vue"),
    },
    {
        path: '/chapters',
        name:"chapters",
        meta:{
            title:"SDGs&Sustainable"
        },
        component: () => import("@/views/dashboard/chapters.vue"),
    },
    {
        path: '/rankings',
        name:"rankings",
        meta:{
            title:"SDGs&Sustainable"
        },
        component: () => import("@/views/dashboard/rankings.vue"),
    },
    {
        path: '/interactiveMap',
        name:"interactiveMap",
        meta:{
            title:"SDGs&Sustainable"
        },
        component: () => import("@/views/dashboard/interactiveMap.vue"),
    },
    {
        path: '/dataScreen',
        name:"dataScreen",
        meta:{
            title:"SDGs&Sustainable"
        },
        component: () => import("@/views/dashboard/dataScreen.vue"),
    },
    {
        path: '/downloads',
        name:"downloads",
        meta:{
            title:"SDGs&Sustainable"
        },
        component: () => import("@/views/dashboard/downloads.vue"),
    },
];