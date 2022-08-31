// .vuepress/config.js
module.exports = {
    title: 'MT-UI',
    description: '日常使用频率高的组件合集',
    base: '/mtui-ui/',
    themeConfig: {
        logo: '/logo.png',
        nav: [{
            text: 'Home', link: '/'
        }, {
            text: 'Github', link: 'https://lacey-lmq.github.io/mtui-ui/'
        }, {
            text: 'Npm', link: 'https://www.npmjs.com/package/mtui-vue'
        }],
        sidebar: [
            {
                title: '快速上手',
                path: '/'
            },
            {
                title: '基础组件',   // 必要的
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    {
                        title: 'Box 容器',
                        path: '/componentDocs/mtBox'
                    },{
                        title: 'Text 文字',
                        path: '/componentDocs/mtText'
                    },{
                        title: 'Button 按钮',
                        path: '/componentDocs/mtButton'
                    }
                ]
            },

        ]
    }
}
