import { FORM_FIELDS_NAMES } from '../constants/enums.ts'
import Block from '../services/block.ts'
import FormInput from '../components/form-input/form-input.ts'

export default (
  name: FORM_FIELDS_NAMES,
  value: string,
  input: FormInput | unknown,
  validate: (
    context: Block
  ) => Partial<Record<FORM_FIELDS_NAMES, string>> | undefined,
  context: Block
) => {
  const errors = validate(context)
  if (input instanceof FormInput) {
    input.setError({
      value,
      error: {
        message: errors ? errors[name] : undefined
      }
    })
  }
}
