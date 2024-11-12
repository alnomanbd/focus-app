import { onAuthStateChanged, signOut } from "firebase/auth"
import { useEffect, useState } from "react"
import { auth } from "../utils/firebase.config"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()
    const [userEmail, setUserEmail] = useState()
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                const uid = user.uid;
                console.log(uid)
                setUserEmail(user.email)
            }else{
                console.log('user is logged out')
            }
        })
    },[])

    const handleLogout = () => {
        signOut(auth)
        .then(() => {
            navigate("/login")
            console.log("Signed out successfully")
        }).catch((error) => {
            console.log(error)
        })
    }
  return (
    <div>
        <nav>
            <p>Welcome Home {userEmail}</p>
        </nav>
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    </div>
  )
}

export default Home