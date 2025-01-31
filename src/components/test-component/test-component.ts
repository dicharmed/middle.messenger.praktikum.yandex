import Block from '../../services/block.ts'
import { PropsType } from '../../types/types.ts'
import { default as TestComponentTemplate } from './test-component.hbs?raw'

export default class TestComponentClass extends Block {
  constructor(props: PropsType) {
    super({ ...props })
  }

  render() {
    return this.compile(TestComponentTemplate, this.props)
  }
}
