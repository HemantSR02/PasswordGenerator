import './App.css';
import { useState, useEffect, useCallback } from 'react';
function App() {

  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");

  useEffect(() => {
    let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=~`';
    let pass = '';
    for (let i = 1; i <= length; i++) {
      pass += char.charAt(Math.floor(Math.random() * char.length));
    }
    setPassword(pass);

  }, [length]);


  const handleCopy = useCallback(() => {
  navigator.clipboard.writeText(password);
  }, [password]);



  return (
    <>
    
      <div className='container'>
        <div className='head'>
          <h1>Password generator</h1>
          <input
          className='text'
            type="text"
            placeholder="password"
            value={password}
            readOnly
          />
          <button className='text'onClick={handleCopy}>copy</button>
          <br />
          <input
            className='range'
            type='range'
            min={8}
            max={20}
            value={length}
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label> Length: {length} </label>

        </div>
      </div>

    </>
  );
}

export default App;
