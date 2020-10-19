module.exports = {
  title: 'PRESENTA Lib',
  description: 'Buid presentation the modern way',
  head:[
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      }
    ]
  ],
  themeConfig: {
    search: false,
    editLinks: true,
    repo: 'presenta-software/presenta-lib',
    repoLabel: 'Github',
    docsRepo: 'presenta-software/doc-presenta-lib',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Improve this page!',


    nav: [
      { text: 'Overview', link: '/overview/' },
      { text: 'Guide', link: '/guide/' }
    ],
    sidebar: [
      '/overview/',
      '/guide/',
      '/reference/',
      '/plugins/',
      //'/extend/'
    ]
  }
}
