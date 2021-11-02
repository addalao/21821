

var menuList = [
    {
        title: "首页",
        key: "/admin/home"
    },

    {
        key: "sub2",
        title: "商品",
        Children: [
            {
                key: "/admin/category",
                title: "品类管理"
            },
            {
                key: "/admin/commodity",
                title: "商品管理"
            }
        ]
    },

    {
        key: "/admin/user",
        title: "用户管理",

    },
    {
        key: "/admin/Role",
        title: "角色管理",

    }, {
        key: "sub5",
        title: "图形图表",
        Children: [
            {
                key: "/admin/ChartOpt1",
                title: "opt1"
            },
            {
                key: "/admin/ChartOpt2",
                title: "opt2"
            }
        ]
    }
]
export default menuList