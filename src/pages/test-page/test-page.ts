import './test-page.css'
import Block from '../../services/block.ts'
import { default as TestPageTemplate } from './test-page.hbs?raw'
import { PropsType } from '../../types/types.ts'
import TestComponentClass from '../../components/test-component/test-component.ts'

class TestPageClass extends Block {
  constructor(props: PropsType) {
    super({ ...props })
  }
  render() {
    return this.compile(TestPageTemplate, this.props)
  }
}

export const TestPage = new TestPageClass({
  className: 'test-page',
  text: 'TestPage',
  withInternalID: true,
  testComponent: new TestComponentClass({
    text: 'hellllo',
    events: {
      click: event => {
        console.log('from test page click', event)
      }
    }
  })
})
