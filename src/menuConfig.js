const menuList = [
    {
        title: '首页',
        key:"/home"
    },
    {
        title:"UI",
        key:"/ui",
        children:[
            {
                title:"按钮",
                key:"/ui/button"
            },
            {
                title:"弹窗",
                key:"/ui/modals"
            },
            {
                title:"Loading",
                key:"/ui/modals"
            }
        ]
    },
    {   title:"form表单",
        key:"/form",
        children:[
            {
                title:"登录",
                key:"/form/login"
            },
            {
                title:"注册",
                key:"/form/register"
            }
        ]
    }
]
export default menuList