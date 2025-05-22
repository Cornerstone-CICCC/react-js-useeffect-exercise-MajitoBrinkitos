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

  {/*Message Logger Handler */}
  const sendMessage = () =>{
    alert('Hello from React!')
  }

  {/*Likes Counter */}
  useEffect(() => {
    if(likes > 0) {
      alert(`Likes update to ${likes}`)
    }
  }, [likes])

  {/*Likes Counter Handler */}
  const updateLikes = () => {
    setLikes((prevLikes) => prevLikes + 1)
  }

  {/*Color Box */}
  useEffect(() => {
    console.log(`Current color: ${color}`)
  }, [color])

  {/*Color Box Handler */}
  const toggleColor = () => {
    setColor((prevColor) => (prevColor === 'red' ? 'blue' : 'red'))
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

          {/*Likes Counter */}
          <div>
            <h2>Likes Counter</h2>
            <button
            type='button'
            onClick={updateLikes}>
              Likes
            </button>
          </div>

          {/*Color Box */}
          <div>
            <h2>Color Box</h2>
            <button
            type='button'
            onClick={toggleColor}>
              Change Color
            </button>
            <div style={{
              width: '100px',
              height: '100px',
              backgroundColor: color,
              display:'flex',
              justifyContent: 'center',
            }}>
              {color}
            </div>
          </div>
        </div>
      </>
    )
  }


export default App
