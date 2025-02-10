import './form-input.css'
import { default as FormInputTemplate } from './form-input.hbs?raw'
import Block from '../../services/block.ts'
import { ErrorType, FormElementType, PropsType } from '../../types/types.ts'

type Props = PropsType &
  FormElementType & {
    error?: ErrorType
  }
export default class FormInput extends Block {
  constructor(props: Props) {
    super({
      ...props,
      attributes: {
        class: 'input'
      }
    })
  }
  get name() {
    return this.props.name
  }
  getValue() {
    return (this.element?.firstElementChild as HTMLInputElement).value
  }

  setError(nextProps: Partial<Props>) {
    if (nextProps.error && nextProps.error.message) {
      this.setProps({
        ...nextProps,
        attributes: {
          class: [this.props.attributes?.class, 'input_with-error']
            .filter(Boolean)
            .join(' ')
        }
      })
    } else {
      this.setProps({
        ...nextProps,
        value: this.getValue(),
        attributes: {
          class: (this.props.attributes?.class as string)
            .split(' ')
            .filter(item => item !== 'input_with-error')
            .join(' ')
        }
      })
    }
  }

  render() {
    return this.compile(FormInputTemplate, this.props)
  }
}
