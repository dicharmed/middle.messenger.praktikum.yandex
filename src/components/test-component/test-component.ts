import Block from '../../core/block/block.ts'
import { PropsType } from '../../types/types.ts'
import { compile } from '../../utils/compile.ts'
import { default as template } from './test-componnet.hbs?raw'
import { registerTemplate } from '../../utils/register-template.ts'

export default class TestComponent extends Block {
  constructor(props: PropsType) {
    super({ ...props, tagName: 'div' })
  }

  render() {
    registerTemplate({ template })
    return compile(template, this.props)
  }
}
