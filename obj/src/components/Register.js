import React from 'react'
import { useState } from 'react'
function Register() {
   const [user,setUser]=
   useState({"fullname":"","email":"","password":""})
 const  change=(event)=>
  {
   setUser({...user,[event.target.name]:event.target.value}) // süslü parantez içinde nesne : = anlamına gelir.
  }

  const submit=(event)=>{
    event.preventDefault() // submitten sonra veri kaybolmasın 
    console.log( user)
  }
  
  return (
 <>
 <form onSubmit={submit} > 


<label htmlFor='fullname'>Full Name</label>
<input type="text" onChange={change} name="fullname"/><br/>

<label htmlFor='Email'>Email</label>
<input type="text" onChange={change} name="email"/><br/>

<label htmlFor='Email'>Password</label>
<input type="password" onChange={change} name="password"/><br/>
<button type='submit'>Gönder</button>


 </form>
 </>
  )
}

export default Register