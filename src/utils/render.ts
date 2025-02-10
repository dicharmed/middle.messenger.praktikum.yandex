import Block from '../services/block.ts'

export function render<T extends Block>(query: string, block: T) {
  const root: HTMLElement | null = document.getElementById(query)

  const element = block.getContent()
  if (root && element) root.replaceChildren(element)

  block.dispatchComponentDidMount()

  return root
}
