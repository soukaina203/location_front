import React, { useRef } from 'react'

function SignUp() {
    const data = useRef({ name: "", email: '', address: "", phone: '', password: '' })
    return (
        <div>
      <h1>Sign Up</h1>

            <form action="">
                <label htmlFor="">Name:</label>
                <input type="text" onBlur={(e) => {
                    data.current = { ...data.current, name: e.target.value }
                }}
                />
                <label htmlFor="">Email:</label>
                <input type="text" onBlur={(e) => {
                    data.current = { ...data.current, email: e.target.value }
                }} />
                <label htmlFor="">Address:</label>
                <input type="text" onBlur={(e) => {
                    data.current = { ...data.current, address: e.target.value }
                }} />
                <label htmlFor="">phone:</label>
                <input type="text" onBlur={(e) => {
                    data.current = { ...data.current, phone: e.target.value }
                }} />
                <label htmlFor="">password:</label>
                <input type="text" onBlur={(e) => {
                    data.current = { ...data.current, password: e.target.value }
                }} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default SignUp
