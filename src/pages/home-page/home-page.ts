import { default as HomePageTemplate } from './home-page.hbs?raw'
import Block from '../../services/block.ts'
import { LinkType, PropsType } from '../../types/types.ts'
import Link from '../../components/link/link.ts'
import { navLinks } from '../../constants/constants.ts'

type Props = PropsType & { links: Array<LinkType> }
class HomePageClass extends Block {
  constructor(props: Props) {
    super({ ...props, tagName: 'nav' })

    if (!this.lists.navLinks) {
      this.lists.navLinks = props.links.map(link => {
        return new Link({
          ...link,
          title: link.title,
          attributes: {
            class: 'js-nav-link',
            href: link.href
          }
        })
      })
    }
  }

  render() {
    return this.compile(HomePageTemplate, this.props)
  }
}

export const HomePage = new HomePageClass({ links: navLinks })
