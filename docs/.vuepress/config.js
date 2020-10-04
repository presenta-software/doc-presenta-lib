module.exports = {
  title: 'PRESENTA Lib.',
  description: 'Buid presentation the modern way',
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
      '/extend/'
    ]
  }
}
