import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// function MyApp(){
//   return(
//     <div>
//       <h1>Cunstom App</h1>
//     </div>
//   )
// }

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit Google'
// }

// const anotherElement = (
//   <a href='https://google.com'>Direct Element</a>
// )

// const anotherUser = ". Arqam"

// === React Special Syntax
// const ReactElement = React.createElement(
//   'a',
//   {href: 'https://google.com', target: '_blank'},
//   'Visit Google via react Element',
//   anotherUser
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
  // ReactElement
)
