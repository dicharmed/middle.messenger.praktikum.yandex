import { SIZE } from '../../../constants/constants.ts'

export const getClassNamesFromSize = (size: string | undefined) => {
  return [
    'avatar',
    size === SIZE.small ? 'avatar_s' : size === SIZE.medium ? 'avatar_m' : ''
  ]
}
