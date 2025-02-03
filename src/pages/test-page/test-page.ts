import './test-page.css'
import Block from '../../services/block.ts'
import { default as TestPageTemplate } from './test-page.hbs?raw'
import Avatar from '../../components/avatar/avatar.ts'
import { PropsType } from '../../types/types.ts'
import TestComponentClass from '../../components/test-component/test-component.ts'
import { SIZE } from '../../constants/enums.ts'

class TestPageClass extends Block {
  constructor(props: PropsType) {
    super(props)

    if (!this.children.testComponent) {
      this.children.testComponent = new TestComponentClass({
        text: 'hello',
        events: {
          click: event => {
            console.log('from test page click', event)
          }
        }
      })
    }

    if (!this.children.avatar) {
      this.children.avatar = new Avatar({ size: SIZE.medium })
    }
  }

  render() {
    return this.compile(TestPageTemplate, this.props)
  }
}

export const TestPage = new TestPageClass({
  text: 'TestPage',
  attributes: {
    class: ['test-page', 'test-page-2']
  },
  withInternalID: true
})

setTimeout(() => {
  TestPage.children.testComponent.setProps({ text: 'works' })
}, 3000)
