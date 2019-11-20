module.exports = {
  title: 'Vuepress Demo',
  description: 'Just Do It！',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '项目结构', link: '/project/' },
      { text: '插件说明', link: '/plugin/' },
      // { text: '工具库', link: '/utils' },
      {
        text: '项目预览',
        items: [
          { text: '内网测试环境', link: '/test-env', target: '_blank' },
          { text: '线上发布版', link: '/pro-env', target: '_blank' }
        ]
      }
    ],
    sidebar: {
      '/project/': [
        ['project-one', '项目one'],
        ['project-two', '项目two']
      ],
      '/plugin/': [
        ['plugin-one', 'axios'],
        ['plugin-two', 'mockjs']
      ]
    }


  }
}