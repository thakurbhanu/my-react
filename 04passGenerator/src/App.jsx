import { useEffect, useRef } from 'react';
import { useCallback, useState } from 'react'




function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback( () => {
    let pass="";
    let string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) string += "0123456789";
    if(charAllowed) string += "!@#$%^&*(){}][?><";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random()*string.length + 1);
      pass += string.charAt(char);

      setPassword(pass);
      
    }
  }, [length, numberAllowed, charAllowed]);

  const copytoclipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(Password);

  },[Password])

  useEffect(() => {
    passwordGenerator()
  } , [length, numberAllowed, charAllowed, passwordGenerator ])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 pb-5'>
      <div className='text-white text-center my-3'> Password Generator</div>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          value = {Password}
          className='outline-none py-1 px-3 w-full'
          placeholder='Password'
          ref={passwordRef}
          readOnly
          />
          <button
          onClick={copytoclipboard}
          className='outline-none bg-blue-700 px-3 py-0.5 text-white shrink'
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setlength(e.target.value)}} 
            />
            <label >Length : {length}</label>

          </div>
          <div className='flex items-center gap-x-2'>
              <input type="checkbox" defaultChecked={numberAllowed} id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }} 
               />
               <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-2'>
              <input type="checkbox" defaultChecked={charAllowed} id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }} 
               />
               <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
    </div>
    </>
  )
}

export default App
