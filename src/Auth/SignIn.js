import React ,{useRef} from 'react'

function SignIn() {
  const data = useRef({  email: '',  password: '' })

  return (
    <div>
      <h1>Sign In</h1>
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
            
                <input type="submit" />
            </form>
    </div>
  )
}

export default SignIn
