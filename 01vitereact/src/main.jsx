import React from 'react';
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react';
import App from './App.jsx';

function MyApp() {
  return (
    <div>
      <h1>
        Custom App!
      </h1>
    </div>
  );
}

// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank',
//   },
//   children: 'click me to visit google',
// };

const anotherElement = (
  <a href="https://google.com" target="_blank">VISIT GOOGLE</a>
);

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target:'_blank'},
  'bhaiyi ji click kijiye google ke liye'
)

// Use createRoot instead of ReactDOM.createRoot
ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
);
