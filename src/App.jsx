import { useState } from 'react'
import './App.css'
import './index.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <img src="/vite.svg" alt="" />

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Detail</li>
          <li>Contact us</li>
        </ul>
      <div className="btn">
        <button>Login</button>
        <button>Sign up</button>
      </div>
        <img src="/react.svg" alt="" />
      </nav>
      <div className="banner">
        <img src="https://graphicsfamily.com/wp-content/uploads/edd/2021/01/Web-banner-template-with-sports-concept-1024x576.jpg" alt="" />
      </div>
    </>
  )
}

export default App
