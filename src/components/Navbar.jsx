import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { GrSwift } from 'react-icons/gr'
import { CiLogout } from "react-icons/ci";

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
  
      <div className="navLogo">
        <span className="logo">Swift</span>
      <GrSwift />
      </div>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}><CiLogout /></button>
      </div>
    </div>
  )
}

export default Navbar