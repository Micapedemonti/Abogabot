import { useState } from "react";

const FormValidation = (initialData) =>{
  const [form, setForm] = useState(initialData)
  const [loading, setLoading] = useState(false)

  const handleChange = () =>{}
  const handleSubmit= () =>{}


 return {
    form, loading, handleChange,handleSubmit
   }
}

export default FormValidation