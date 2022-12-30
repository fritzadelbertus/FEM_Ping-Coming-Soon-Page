import { useState } from "react"

function PingPage() {
  const [input, setInput] = useState('')
  const [inputError, setInputError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const handleForm = (event:any) => {
    event.preventDefault()
    const pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    if (input == '') {
      setErrorMessage('Whoops! It looks like you forgot to add your email')
      setInputError(true)
    }
    else if (input.match(pattern) == null) {
      setErrorMessage('Please provide a valid email adress')
      setInputError(true)
    } else {
      setInputError(false)
    }
  }
  return (
    <div className="PingPage">
      <header><img src="./logo.svg" alt="logo" /></header>
      <main>
        <div className="content">
          <div>
            <h1><span>We are launching </span>soon!</h1>
            <p>Subscribe and get notified</p>
          </div>

          <form 
            action=""
            onSubmit={(e) => {handleForm(e);e.preventDefault}}>
            <div>
              <input 
                className={inputError? 'error' : ''} 
                onChange={(e) => setInput(e.target.value)}
                type="text" 
                placeholder="Your email address..."
                value = {input}/>
              <p className={inputError? 'error' : ''} >{errorMessage}</p>
            </div>
            <button>Notify Me</button>
          </form>
        </div>
        <div className="main-image">
          <img src="./illustration-dashboard.png" alt="board illustration" />
        </div>
      </main>
      <footer>
        <ul>
          <li><i className="fa-brands fa-facebook-f"></i></li>
          <li><i className="fa-brands fa-twitter"></i></li>
          <li><i className="fa-brands fa-instagram"></i></li>
        </ul>
        <p>&copy; Copyright Ping. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default PingPage
