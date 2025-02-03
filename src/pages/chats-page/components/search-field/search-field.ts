import './search-field.css'
import { default as SearchFieldTemplate } from './search-field.hbs?raw'
import Block from '../../../../services/block.ts'
import { PropsType } from '../../../../types/types.ts'

export default class SearchField extends Block {
  constructor(props: PropsType) {
    super({
      ...props,
      tagName: 'form',
      attributes: { class: 'search' }
    })
  }

  render() {
    return this.compile(SearchFieldTemplate, this.props)
  }
}
