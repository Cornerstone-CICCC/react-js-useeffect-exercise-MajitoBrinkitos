import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("");
  const [likes, setLikes] = useState(0);
  const [color, setColor] = useState('red');

  {/*Message Logger */}
  useEffect(() => {
    if(message){
      console.log(`Message logged: ${message}`);
    }
  }, [message])

  const sendMessage = () =>{
    alert('Hello from React!')
  }


    return (
      <>
        <div className='flex flex-column justify-center'>
          {/*Message Logger */}
          <div>
            <h2>Message Logger </h2>
              <button 
              type='button'
              onClick={sendMessage}>
                Send Message
              </button>
          </div>
        </div>
      </>
    )
  }


export default App
