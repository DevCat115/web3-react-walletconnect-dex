import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://Giftedhandsswap.org',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://Giftedhandsswap.org/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://Giftedhandsswap.org/syrup',
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://Giftedhandsswap.org/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: 'https://Giftedhandsswap.org/nft',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: 'https://Giftedhandsswap.org/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: 'https://Giftedhandsswap.org/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: 'https://Giftedhandsswap.org/profile',
  //     },
  //   ],
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: 'https://pancakeswap.info',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: 'https://pancakeswap.info/tokens',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: 'https://pancakeswap.info/pairs',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: 'https://pancakeswap.info/accounts',
  //     },
  //   ],
  // },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: 'https://Giftedhandsswap.org/ifo',
  // },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: 'Voting',
  //       href: 'https://voting.Giftedhandsswap.org',
  //     },
  //     {
  //       label: 'Github',
  //       href: 'https://github.com/pancakeswap',
  //     },
  //     {
  //       label: 'Docs',
  //       href: 'https://docs.Giftedhandsswap.org',
  //     },
  //     {
  //       label: 'Blog',
  //       href: 'https://pancakeswap.medium.com',
  //     },
  //   ],
  // },
]

export default config
