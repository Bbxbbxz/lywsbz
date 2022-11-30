const private = require('./private/private')
// 把最后更改时间更改为 中国地区的样式

module.exports = {
  "title": "阿斌的精神世界",
  "description": "欢迎来到",
  "dest": "public",
  theme: "reco",
  themeConfig: {
    // 博客配置
    type: "blog",
    fullscreen: true,
    logo: "/avatar.jpg",
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: '标签'      // 默认文案 “标签”
      },
      tag: {
        location: 4,     // 在导航栏菜单中所占的位置，默认3
        text: '读书'      // 默认文案 “标签”
      },
      tag: {
        location: 5,     // 在导航栏菜单中所占的位置，默认3
        text: '技术网站'      // 默认文案 “标签”
      },
      tag: {
        location: 7,     // 在导航栏菜单中所占的位置，默认3
        text: '宠物||她'      // 默认文案 “标签”
      },
      tag: {
        location: 6,     // 在导航栏菜单中所占的位置，默认3
        text: '宣传视频'      // 默认文案 “标签”
      },
    },
    subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    sidebar: "auto",//所有页面自动生成侧边栏
    author: "阿斌呀",
    authorAvatar: "/ava.jpg",
    mode: "light", //默认显示模式  modePicker: false 关闭该按钮
    codeTheme: "tomorrow", // default 'tomorrow' okaidia
    record: "蜀ICP备20019955号",
    recordLink: "https://icp.chinaz.com/home/info?host=pengsir.top",
    smooth: "true", //平滑滚动
    // 评论设置 
    valineConfig: {
      appId: private.appId,
      appKey: private.appKey,
      recordIP: true,
      placeholder: '填写邮箱地址可以及时收到回复噢...',
      visitor: true,
    },
    lastUpdated: '最后更新于', friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: 'recoluan@qq.com',
        link: ''
      },
      {
        title: '唐子涵的博客',
        desc: '至于未来会怎么样 反正路还长 天总会亮',
        link: ''
      },
      {
        title: '李Sir的博客',
        desc: '活在当下',
        link: ''
      },
      

      // ...
    ],
    nav: [
      // 导航栏
      { text: "主页", link: "/", icon: "reco-home" },
      {
        text: "标签",
        icon: "iconfont icon-tools",
        items: [
          { text: "不宅", link: "" },
          { text: "技术男", link: "" },
          { text: "理工男", link: "" },
          { text: "穷人", link: "" },
          { text: "有趣", link: "" },
          { text: "菜鸟", link: "" },
        ]
      },
      {
        text: "读书",
        icon: "iconfont icon-tools",
        items: [
          { text: "百年孤独", link: "https://www.bainiangudu.cc/" },
          { text: "外婆的道歉信", link: "http://www.dubu123.com/book/p6891/" },
          { text: "活 着", link: "http://www.dubu123.com/book/p7914/" },
          { text: "边 城", link: "http://www.dubu123.com/book/p7560/" },
          { text: "老残游记 ", link: "http://www.dubu123.com/book/p7497/" },
        ]
      },
      {
        text: "技术网站",
        icon: "iconfont icon-tools",
        items: [
          { text: "菜鸟教程", link: "https://www.runoob.com/" },
          { text: "易百教程", link: "https://www.yiibai.com/" },
          { text: "码农教程", link: "http://www.manongjc.com/" },
          { text: "简单教程", link: "https://www.twle.cn/" },
          { text: "Break易站", link: "https://www.breakyizhan.com/" },
          { text: "C语言中文网", link: "http://c.biancheng.net/" },
          { text: "tutorials", link: "http://tutorials.jenkov.com/" },
          { text: "Baeldung", link: "https://www.baeldung.com/" },
          { text: "实验楼", link: "https://www.lanqiao.cn/courses/" },
        ]
      },
      {
        text: "宣传视频",
        icon: "iconfont icon-tools",
        items: [
          { text: "云AI超声诊断背景视频", link: "https://share.weiyun.com/uqfdXmKw" },
          { text: "云AI操作示范视频", link: "https://share.weiyun.com/6Etd2hc1" },
          { text: "物料配送分析系统视频", link: "https://share.weiyun.com/8s9SY8Qd" },
         
        ]
      },
      {
        text: "宠物||她",
        icon: "iconfont icon-tools",
        items: [
          { text: "@->", link: "" },
          ]
      },
      {
        text: "工具箱",
        icon: "iconfont icon-tools",
        items: [
          { text: "在线PS", link: "https://www.uupoop.com/" },
          { text: "奶牛快传", link: "https://cowtransfer.com/" },
          { text: "编程语言排行榜", link: "https://www.tiobe.com/tiobe-index/" },
          { text: "增值税计算", link: "http://shui.00cha.net/zengzhishui.asp" },
          { text: "画廊", link: "https://666wxy666.github.io/gallery/" },
          { text: "调色板", link: "https://666wxy666.github.io/color/?t=1655801645290" },
          { text: "表情", link: "http://emojihomepage.com/" },
        ]
      },
      {
        text: "项目",
        icon: 'iconfont icon-tools',
        items: [
          { text: '高仿微信', link: 'https://github.com/nacker/LZEasemob3', icon: "iconfont icon-wangyiyunyinle" },
          { text: '高仿 youtube', link: 'https://github.com/TeamNewPipe/NewPipe', icon: "iconfont icon-vue" },
          { text: '高仿网易云音乐', link: 'https://github.com/aa112901/remusic', icon: "iconfont icon-vue" },
          { text: "高仿 Bilibili", link: "https://github.com/HotBitmapGG/bilibili-android-client", icon: "iconfont icon-vue" },
          { text: "高仿微博", link: "https://github.com/wenmingvs/WeiBo", icon: "reco-wechat" },
          { text: '云AI超声诊断', link: 'https://github.com/aa112901/remusic', icon: "iconfont icon-vue" },
        ]
      },
      { text: "时间线", link: "/timeline/", icon: "reco-date" },
      {
        text: "关于",
        icon: "reco-message",
        items: [
          {
            text: "关于我",
            link: "/docs/views/About/author",
            icon: "reco-account"
          },
          {
            text: "简历",
            link: "/docs/views/About/resume",
            icon: "reco-document"
          },
          {
            text: "随笔",
            link: "/docs/views/About/sb",
            icon: "reco-document",
          },
          {
            text: "MY-公主",
            link: "/docs/views/About/sb",
            icon: "reco-document",
          },
          {
            text: "CSDN",
            link: "https://blog.csdn.net/qq_43318892",
            icon: "reco-csdn",
          },
          {
            text: "GitHub",
            link: "https://github.com/Bbxbbxz",
            icon: "reco-github",
          },
          {
            text: "Gitee",
            link: "https://gitee.com/l2910971081",
            icon: "reco-mayun",
          },
        ]
      }
    ],
  },


  "markdown": {
    "lineNumbers": true
  },

  "plugins": [
    [
      "@vuepress/active-header-links",
      {
        sidebarLinkSelector: ".sidebar-link",
        headerAnchorSelector: ".header-anchor",
      },
    ],
    [
      //先安装在配置， npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
        clean: false,
        messages: {
          welcome: '我是lookroot欢迎你的关注 ',
          home: '心里的花，我想要带你回家。',
          theme: '好吧，希望你能喜欢我的其他小伙伴。',
          close: '再见哦'
        },
        width: 240,
        height: 352
        
      }
    ],
    [
      //彩带背景 先安装在配置， npm install vuepress-plugin-ribbon --save
      "ribbon",
      {
        size: 90,     // width of the ribbon, default: 90
        opacity: 0.5, // opacity of the ribbon, default: 0.3
        zIndex: -1    // z-index property of the background, default: -1
      }
    ],
    [
      //动态标题 先安装在配置， npm install vuepress-plugin-dynamic-title --save
      "dynamic-title",
      {
        showIcon: "/logo.png",
        showText: "(/≧▽≦/)你来啦！",
        hideIcon: "/failure.ico",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 2000
      }
    ],


    ['@vuepress-reco/vuepress-plugin-bgm-player', {
      "audios": [
        {
          name: '강남역 4번 출구',
          artist: 'Plastic / Fallin` Dild',
          url: 'https://assets.smallsunnyfox.com/music/2.mp3',
          cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
        },
        {
          name: '用胳膊当枕头',
          artist: '최낙타',
          url: 'https://assets.smallsunnyfox.com/music/3.mp3',
          cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
        }
      ]
    }]
  ]
}
