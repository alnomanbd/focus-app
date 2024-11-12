import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase.config'

const Signup = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = async(e) => {
        e.preventDefault()
        console.log(email, password)
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            console.log(user)
            navigate("/login")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        })
    }
  return (
    <main className='w-1/2 mx-auto'>
        <section>
            <div>
                <div>
                    <h1>Focus App</h1>
                    <form>
                        <div>
                            <label htmlFor="email-address">Email Address</label>
                            <input 
                                type="email"
                                label="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder='Email Address'
                            />
                        </div>
                        <div>
                            <label htmlFor="password">
                                Password
                            </label>
                            <input 
                                type="password"
                                label="Create Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder='Password'
                            />
                        </div>
                        <button type='submit' onClick={onSubmit}>Sign Up</button>
                    </form>
                    <p>Already have an account? {' '}</p>
                    <NavLink to="/login">Sign In</NavLink>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Signup