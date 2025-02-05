import { default as HomePageTemplate } from './home-page.hbs?raw'
import Block from '../../services/block.ts'
import { LinkType, PropsType } from '../../types/types.ts'
import { navLinks } from '../../constants/constants.ts'
import NavLink from '../../components/navLink/navLink.ts'
import './home-page.css'

type Props = PropsType & { links: Array<LinkType> }
class HomePageClass extends Block {
  constructor(props: Props) {
    super({ ...props, tagName: 'nav', attributes: { class: 'nav' } })

    if (!this.lists.navLinks) {
      this.lists.navLinks = props.links.map(link => {
        return new NavLink(link)
      })
    }
  }

  render() {
    return this.compile(HomePageTemplate, this.props)
  }
}

export default new HomePageClass({ links: navLinks })
