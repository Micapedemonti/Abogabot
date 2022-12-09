import '../Formulario/Formulario.css'
import './Login.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
 
  const[email, setEmail ] =useState('');
  const[password, setPassword ] =useState('');

  const [error,setErrors] = useState ();

  const handleSubmit = (e) =>{
    e.preventDefault();
console.log (email, password)
  }

return(
<>
<div className='formulario__login'>
<div className='title__login'>
<h1>Iniciar sesion</h1>
</div>
<form className="formulario__input" onSubmit = {handleSubmit}>
  <label for ="email">E-mail</label>
  <input value ={email} onChange ={(e)=> setEmail (e.target.value)} type="email" placeholder='youermail@gmail.com' id="email" name="email" />
  <label for ="password">Password</label>
  <input  value ={password} onChange ={(e)=> setPassword (e.target.value)} type="password" placeholder='*****' id="password" name="password" />
  <button className='btn__form' type = "submit">Iniciar sesion </button>

</form>
<div className='registrarse'>
     <Link className = "registro__Link" to ="/registro" >¿No tienes una cuenta? Registrese
   </Link> 
</div>
</div>
</>
)

}


export default Login