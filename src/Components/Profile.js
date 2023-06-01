import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
    const user=useSelector((state)=>state.user.value)
    const themeColor=useSelector((state)=>state.theme.value)
    
    return (
    <div style={{color:themeColor}}>

       <h1>Profile</h1>
       <p>FirstName1:{user.firstname}</p>
       <p>LastName1:{user.lastname}</p>
       <p>E-mail:{user.email}</p>
    </div>
  )
}

export default Profile