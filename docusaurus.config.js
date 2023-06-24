// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'R.Land Gameplan',
  tagline: 'Animal-verse',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.r.land',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'R.Land', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        concenterPostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/rlandworld/gameplan',
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/mine_resources.png',
      navbar: {
        title: 'R.Land',
        logo: {
          alt: 'R.Land Logo',
          src: 'img/favicon.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Gameplan',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://play.r.land/mine',
            label: 'Start Mining',
            position: 'right',
          },
        ],
      },
      docs:{
        sidebar: {
          hideable: true,
        }
      },      
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Gameplan',
                to: '/',
              },
              {
                label: 'Essentials',
                to: '/category/essentials',
              },
              {
                label: 'NFTS',
                to: '/category/nfts',
              },
              {
                label: 'Gaming',
                to: '/category/gaming',
              },
              {
                label: 'Tokenomics',
                to: '/category/tokenomics',
              },
              {
                label: 'Current Events',
                to: '/category/current-events',
              },
              {
                label: 'Upcoming Features',
                to: '/category/upcoming-features',
              },
              {
                label: 'R.Land\'s History',
                to: '/category/rlands-history-and-future',
              },
              {
                label: 'Community',
                to: '/category/community',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/rland',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/rlandworld',
              },
              {
                label: 'Telgram',
                href: 'https://t.me/rlandworld',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Main Site',
                to: 'https://r.land',
              },
              {
                label: 'Mining Game',
                href: 'https://play.r.land',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} R.Land | Gifter Studios Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
