export const getChatMessageClassNames = (type: string) => {
  const classNames = ['chat-message']
  if (type === 'outcoming') {
    classNames.push('chat-message_outcoming')
  } else {
    classNames.push('chat-message_incoming')
  }
  return classNames
}
