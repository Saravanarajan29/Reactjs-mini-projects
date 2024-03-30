import { useCallback, useEffect, useRef, useState } from 'react'

function PasswordGenerator(){

  const [length, setLength] = useState(8)
  const [isNumberAllowed, setIsNumberAllowed] = useState(false)
  const [isCharAllowed, setIsCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef()

    const generatePassword = useCallback(() =>{

        let pass = ""
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

        if (isNumberAllowed) str += "0123456789"
        if (isCharAllowed) str += "!@#$%^&*()_+~`|}{[]:;?><,./-="

        for(let i = 1; i < length; i++) {
        const char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
        }

        setPassword(pass)

        },[length, isNumberAllowed, isCharAllowed]
    );

    const copyPassword = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
    }

    useEffect(() => {
    generatePassword()
    },[length, isNumberAllowed, isCharAllowed]
    )

    return (
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-800 text-orange-500'>
            
            <h1 className='text-white text-center my-3'>Password Generator</h1>
            
            <div className='flex shadow rounded-lg overflow-hidden mb-4'>
                <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' ref={passwordRef} readOnly/>
                <button onClick={copyPassword} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
            </div>

            <div className='flex text-sm gap-x-2'>

                <div className="flex items-center gap-x-1">
                    <input type="range" min={8} maxLength={20} value={length} className='cursor-pointer'onChange={(e) => setLength(e.target.value)}/>
                    <label htmlFor="length">Length: {length}</label>
                </div> 

                <div className="flex items-center gap-x-1">
                    <input type="checkbox" defaultChecked={isNumberAllowed} 
                    onChange={() => {
                    setIsNumberAllowed((n) => !n)}}/>
                    <label htmlFor="number">Numbers</label>
                </div>

                <div className="flex items-center gap-x-1">
                    <input type="checkbox" defaultChecked={isCharAllowed} 
                    onChange={() => {
                    setIsCharAllowed((n) => !n)}}/>
                    <label htmlFor="charInput">Characters</label>
                </div>
                
            </div>

        </div>
    )

}
export default PasswordGenerator