import './chat-window-content.css'
export { default as ChatWindowContent } from './chat-window-content.hbs?raw'

const messagesList = [
  {
    sender: 'you',
    type: 'text',
    message: 'Hi!',
    status: 'seen',
    time: '12:30'
  },
  {
    sender: 'Mike',
    type: 'text',
    message: "What's up",
    time: '14:15'
  }
]
