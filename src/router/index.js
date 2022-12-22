import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
    path: '/login',
    component: () =>
        import('@/views/login/index'),
    hidden: true
},

{
    path: '/404',
    component: () =>
        import('@/views/404'),
    hidden: true
},
{
    path: '/',
    name: '',
    redirect: '/generalinformation',
},

//总体信息界面
{
    path: '/',
    component: Layout,
    children: [{
        path: '/generalinformation',
        name: 'generalinformation',
        component: () =>
            import('@/views/generalinformation/index'),
        meta: {
            title: '总体信息界面',
            icon: 'info'
        }
    },]
},
//原料界面
{
    path: '/rawmaterial',
    component: Layout,
    children: [{
        path: '/rawmaterial',
        name: 'rawmaterial',
        component: () =>
            import('@/views/rawmaterial/index'),
        meta: {
            title: '原料界面',
            icon: 'raw-material'
        }
    },]
},
//生产界面
{
    path: '/production',
    component: Layout,
    children: [{
        path: '/production',
        name: 'production',
        component: () =>
            import('@/views/production/index'),
        meta: {
            title: '生产界面',
            icon: 'production'
        }
    },]
},
//市场界面
{
    path: '/',
    component: Layout,
    children: [{
        path: 'bazaar',
        name: 'bazaar',
        component: () =>
            import('@/views/bazaar'),
        meta: {
            title: '市场界面',
            icon: 'bazaar'
        }
    }]
},

//交易界面
{
    path: '/',
    component: Layout,
    meta: {
        title: '交易界面',
        icon: 'deal'
    },
    children: [{
        path: 'deal',
        name: 'deal',
        component: () =>
            import('@/views/deal'),
        meta: {
            title: '交易界面',
        }
    }, {
        path: 'freightOrder',
        name: 'freightOrder',
        component: () =>
            import('@/views/deal/freightOrder'),
        meta: {
            title: '运费订单',
        },
        hidden: true
    }, {
        path: 'buyStock',
        name: 'buyStock',
        component: () =>
            import('@/views/deal/buyStock'),
        meta: {
            title: '购买原料',
        },
        hidden: true
    }, {
        path: 'goodsReceiving',
        name: 'goodsReceiving',
        component: () =>
            import('@/views/deal/goodsReceiving'),
        meta: {
            title: '商品列表-接收',
        },
        hidden: true
    }]
},

//研究界面
{
    path: '/',
    component: Layout,
    children: [{
        path: 'study',
        name: 'study',
        component: () =>
            import('@/views/study'),
        meta: {
            title: '研究界面',
            icon: 'study'
        }
    }]
},
//财务界面
{
    path: '/finance',
    component: Layout,
    redirect: '/finance',
    meta: {
        title: '财务界面',
        icon: 'finance'
    },
    children: [{
        path: 'finance',
        name: 'finance',
        component: () =>
            import('@/views/finance'),
        meta: {
            title: '财务界面',
        }
    }]
},

// 素材管理
// {
//   path: '/material',
//   component: Layout,
//   redirect: '/material/upload',
//   meta: {
//     title: '素材管理',
//     icon: 'plane'
//   },
//   children: [{
//       path: 'check-template',
//       name: 'check-template',
//       component: () => import('@/views/material/check-template'),
//       meta: {
//         title: '查看模板',
//       }
//     },
//     {
//       path: 'logo',
//       name: 'logo',
//       component: () => import('@/views/material/check-logo'),
//       meta: {
//         title: '查看logo',
//       }
//     },
//     {
//       path: 'generate',
//       name: 'generate',
//       component: () => import('@/views/material/generate'),
//       meta: {
//         title: '生成素材',
//       }
//     },
//     {
//       path: 'check',
//       name: 'check',
//       component: () => import('@/views/material/check'),
//       meta: {
//         title: '查看素材',
//       }
//     },
//   ]
// },

//测试页面
// {
//     path: '/',
//     component: Layout,
//     children: [{
//         path: 'test',
//         name: 'test',
//         component: () =>
//             import ('@/views/test/test'),
//         meta: {
//             title: '测试',
//         }
//     }]
// },
// 404 page must be placed at the end !!!
{
    path: '*',
    redirect: '/404',
    hidden: true
}
]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router