import { useState } from 'react'
import './App.css'

function App() {
  const [likes, setLikes] = useState(0);

  const sendMessage = () => {
    alert(`Hello from React!`)
  };


    return (
      <>
        <div className='flex flex-column justify-center'>
          {/*Message Logger */}
          <div>
            <h2>Message Logger </h2>
              <button 
              type='submit'
              onClick={sendMessage}>
                Send Message
              </button>
          </div>
  
          {/*Like Counter */}
          <div>
            <h2>Like Counter</h2>
            <button
            type='submit'
            >
              Likes
            </button>
          </div>
        </div>
      </>
    )
  }


export default App
