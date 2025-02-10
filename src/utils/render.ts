import Block from '../services/block.ts'

export function render<T extends Block>(block: T) {
  const root: HTMLElement | null = document.getElementById('app')

  // Можно завязаться на реализации вашего класса Block
  const element = block.getContent()
  if (root && element) root.replaceChildren(element)

  block.dispatchComponentDidMount()

  return root
}
