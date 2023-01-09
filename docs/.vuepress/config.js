module.exports = {
  title: 'JackyWong\'s FE',
  description: 'keep moving,toooo!',
  themeConfig: {
    logo: '/gratisography-346H.jpg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'JavaScript', link: '/JavaScript/' },
      { text: 'Vue', link: '/Vue/' },
      { text: 'React', link: '/React/' },
      { text: 'Note', link: '/Note/' },
      { text: 'DevTools', link: '/DevTools/' },
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
        ['plugin-two', '2222222222'],
      ],
      '/react/': [
        ['project-one', '项目one'],
        ['project-two', '项目two']
      ]
    }
  }
}