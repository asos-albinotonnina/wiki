/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Flyingbear Ghost Wiki',
  tagline: 'Setup, calibrazioni, upgrade e molto altro',
  url: 'https://flyingbearghost.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'resources/favicon.ico',
  organizationName: 'flyingbear-club-ita',
  trailingSlash: false,
  projectName: 'wiki',
  scripts: [
    {
      src: '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
      async: true,
    },
    {
    src: '/anchorAd.js',
    },
  ],
  themeConfig: {
    image: 'img/ghost5.jpg',
    navbar: {
      title: 'Home',
      logo: {
        alt: 'My Site Logo',
        src: 'resources/fbghostitaLogo.jpg',
      },
      items: [
        {
          href: '/',
          label: 'Scheda tecnica',
          position: 'left',
          items:[
            {
              href:'/four_s',
              label: 'Ghost 4s',
            },
            {
              href: '/five',
              label: 'Ghost 5',
            }
          ]
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Wiki',
          position: 'left',
        },
        // {
        //   to: 'blog',
        //   label: 'Blog',
        //   position: 'left'
        // },
        // {
        //   href: '/gallery',
        //   label: 'Gallery',
        //   position: 'left',
        // },
        {
          href: '/upgrades',
          label: 'Upgrades',
          position: 'left',
        },
        {
          href: '/ricambi',
          label: 'Ricambi',
          position: 'left',
        },
        {
          href: '/faq',
          label: 'FAQ',
          position: 'left',
        },
        {
          href: 'https://github.com/flyingbear-club-ita',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: 'Created by the Flyingbear Italian Community',
      links: [{
        title: 'Legal',
        items: [
          {
            label: 'Privacy Policy',
            to: '/privacypolicy'
          }
        ]
      }],
    },
    googleAnalytics: {
      trackingID: 'UA-199656279-2',
      // Optional fields.
      anonymizeIP: false, // Should IPs be anonymized?
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/flyingbear-club-ita/wiki/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      "docusaurus2-dotenv",
      {
        systemvars: true,
      },
    ],
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["it", "en"],
        indexPages: true,
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],
  i18n: {
    defaultLocale: 'it',
    locales: ['en', 'it'],
  },
};
