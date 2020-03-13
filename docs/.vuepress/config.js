module.exports = {
  title: 'Jacky`s FE',
  description: 'Just Do It！',
  themeConfig: {
    logo: '/gratisography-346H.jpg',
    nav: [
      { text: '首页', link: '/' },
      { text: 'Vue', link: '/vue/' },
      { text: 'React', link: '/react/' },
      // { text: '工具库', link: '/utils' },
      // {
      //   text: '项目预览',
      //   items: [
      //     { text: '内网测试环境', link: '/test-env', target: '_blank' },
      //     { text: '线上发布版', link: '/pro-env', target: '_blank' }
      //   ]
      // }
    ],
    sidebar: {
      '/vue/': [
        ['vue3_source', 'Vue3.0源码学习'],
      ],
      '/react/': [
        ['project-one', '项目one'],
        ['project-two', '项目two']
      ]
    }
  }
}