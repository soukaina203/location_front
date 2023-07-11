import React,{useRef} from 'react'

export default function Create() {
  const data = useRef({  email: '',  password: '' })

  return (
    <div>
      <form action="">
      <label htmlFor="">Email:</label>
                <input type="text" onBlur={(e) => {
                    data.current = { ...data.current, email: e.target.value }
                }}
                />
                <label htmlFor="">Password:</label>
                <input type="text" onBlur={(e) => {
                    data.current = { ...data.current, password: e.target.value }
                }} />
      </form>
    </div>
  )
}

