import { useState, useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import '../Formulario/Formulario.css'
import './Registro.css'


const Registro  = (props) => {
  const[nombre, setNombre ] =useState('');
  const[email, setEmail ] =useState('');
  const[password, setPassword ] =useState('');
  const[passConf, setPassConf ] =useState('');
  const[loading,setLoading] = useState(false);
  const [errors, setErrors ] = useState (null) ;

  useEffect (() =>{
   setLoading(true)
   setTimeout(()=>{
    setLoading(false)

   },5000)
  }, [])

  const handleSubmit = (e) =>{
    e.preventDefault();
  console.log (nombre, email, password, passConf)
  }
  return (
    <>
  <div className='registro'>
  { 
    loading? 
  <ClipLoader color = {'#FFFFFF'}  loading={loading} size={50} aria-label="Loading Spinner"data-testid="loader"/>
     
     :
    

  <form className="formulario__input" onSubmit = {handleSubmit}>
   
  <label for ="nombre">nombre</label>
  <input value ={nombre} onChange ={(e)=> setNombre(e.target.value)} type="text" placeholder='nombre' id="nombre" name="nombre" />
  <label for ="email">email</label>
  <input value ={email} onChange ={(e)=> setEmail (e.target.value)} type="email" placeholder='youermail@gmail.com' id="email" name="email" />
  <label for ="password">password</label>
  <input  value ={password} onChange ={(e)=> setPassword (e.target.value)} type="password" placeholder='*****' id="password" name="password" />
  <label for ="password">confirma tu contraseña </label>
  <input  value ={passConf} onChange ={(e)=> setPassConf (e.target.value)} type="password" placeholder='*****' id="password" name="password" />
  <button className="btn__form" type = "submit">Registrarse</button>
</form>
  }
 </div>
 </>
  )


    
};
 
export default Registro