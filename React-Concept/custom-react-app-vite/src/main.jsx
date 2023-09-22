import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'


// const anotherElement = (
//   <a href='https://zenbridge.io/' rel="noreferrer" target='_blank'>Google</a>
// )

const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'CLik me google'
)

ReactDOM.createRoot(document.getElementById('root')).
render(
    reactElement
)
