import store from '@/store'
import { isTestnet } from '../../libs/utils'

function processMenu() {
  const chainMenus = []
  const blockchains = []
  Object.keys(store.state.chains.config).forEach(chain => {
    const menu = {
      title: chain,
      logo: store.state.chains.config[chain].logo,
      route: { name: 'dashboard', params: { chain } },
    }
    blockchains.push(menu)
  })

  if (blockchains.length > 1) {
    chainMenus.push({ header: 'ecosystem' })
    chainMenus.push({
      title: 'blockchains',
      children: blockchains,
      tag: `${blockchains.length}`,
      icon: 'https://explorer.aoinode.my.id/logo.svg',
    })
  }
  chainMenus.push({ header: 'LINKS' })
  if (isTestnet()) {
    chainMenus.push({
      title: 'Zk Explorer',
      href: 'https://explorer.Zksystem.my.id',
      icon: 'ChromeIcon',
    })
  } else {
    chainMenus.push({
      title: 'Website',
      href: 'http://ZkSystem.my.id',
      icon: 'LifeBuoyIcon',
    })
  }
  chainMenus.push({
    title: 'Twitter',
    href: 'https://twitter.com/mereal03',
    icon: 'TwitterIcon',
  })
  chainMenus.push({
    title: 'Github Ex',
    href: 'https://github.com/ZKSystemId/',
    icon: 'GithubIcon',
  })

  return chainMenus
}

export default processMenu()
