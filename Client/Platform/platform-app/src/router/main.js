export default {
    path: "/main",
    component: () => import('../views/main/main.vue'),
    redirect: "/main/home",
    children: [
        {
            path: "home",
            name: "home",
            component: () => import('../views/main/children/home.vue')
        },
        // // 入驻审核
        // {
        //     path: "audit",
        //     name: "audit",
        //     commponent: audit
        // },
        // // 用户管理
        // {
        //     path: "userManage",
        //     name: "userManage",
        //     commponent: userManage,
        //     children: [
        //         // 消费者管理
        //         {
        //             path: "consumerManage",
        //             name: "consumerManage",
        //             commponent: consumerManage
        //         },
        //         // 美疗师管理
        //         {
        //             path: "BeautyManage",
        //             name: "BeautyManage",
        //             commponent: BeautyManage
        //         },
        //         // 门店管理
        //         {
        //             path: "storeManage",
        //             name: "storeManage",
        //             commponent: storeManage
        //         },
        //     ]
        // },
        // // 订单管理
        // {
        //     path: "orderManage",
        //     name: "orderManage",
        //     commponent: orderManage
        // }
    ]
}

// 服务管理

// 服务管理

// 敏感词管理

// 财务管理

// 财务管理

// 结算设置

// 违约金

// 优惠券管理

// 权限管理

// 用户管理

// 角色管理

// 广告管理

// 轮播图

// 内容管理

// 评价管理