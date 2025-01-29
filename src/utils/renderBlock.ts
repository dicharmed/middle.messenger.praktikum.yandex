import Block from '../core/block/block.ts'

export function renderBlock(block: Block) {
  const root: HTMLElement | null = document.getElementById('app')

  // Можно завязаться на реализации вашего класса Block
  if (root) root.appendChild(block.getContent() as Node)

  block.dispatchComponentDidMount()

  return root
}
