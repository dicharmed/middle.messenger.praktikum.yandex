import Block from '../services/block.ts'

export function renderBlock<T extends Block>(block: T) {
  const root: HTMLElement | null = document.getElementById('app')

  // Можно завязаться на реализации вашего класса Block
  const element = block.getContent()
  if (root && element) root.appendChild(element)

  block.dispatchComponentDidMount()

  return root
}
