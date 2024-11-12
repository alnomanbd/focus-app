import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase.config'

const Login = ({onLogin}) => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    console.log(email, password)

    const handleLogin = async (e) => {
        e.preventDefault()
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            onLogin()
            navigate("/profile")
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        })
    }
  return (
    <main>
        <section>
            <div>
                <h1>Focus App</h1>
                <form>
                    <div>
                        <label htmlFor="email-address">
                            Email Address
                        </label>
                        <input 
                            type="email"
                            name='email'
                            required
                            placeholder='Email Address'
                            id='email-address'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">
                            Password
                        </label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password"
                            required
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <div>
                        <button onClick={handleLogin}>Login</button>
                    </div>
                </form>
                <p>
                    No account yet? {' '}
                    <NavLink to="/signup">Sign Up</NavLink>
                </p>
            </div>
        </section>
    </main>
  )
}

export default Login