import React from 'react'
import ReactDOM from 'react-dom/client'
import CharacterList from './components/CharacterList'
import './i18n'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CharacterList />
  </React.StrictMode>
)