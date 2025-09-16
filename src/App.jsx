import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmojiReplacer from './EmojiReplacer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <EmojiReplacer />
    </>
  )
}

export default App
