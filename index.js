import React from 'react'
import { createRoot } from 'react-dom/client'

// Component
import App from './src/App'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(<App/>)