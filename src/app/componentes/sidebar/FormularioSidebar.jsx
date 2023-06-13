"use client"
import { useState } from 'react'
import InputFormulario from '../InputFormulario'

export default function FormularioSidebar() {
  const [formulario, setFormulario] = useState({})
    const handleChange=(e)=>{
      setFormulario({...formulario,[e.target.name]:e.target.value})
    }
    const inputRegister = [
        {
          id: 1,
          name: "kilogramos",
          type: "number",
          onChange: handleChange,
          children: "Peso de paciente",
        },
    ]

     
  return (
    <form
    action=""
    className="flex flex-col w-11/12 items-center justify-center mx-auto my-5 bg-gray-200 rounded-lg p-2"
  >
    <h2 className="font-medium">Datos a colocar en Rotulo</h2>
  
  {
     inputRegister?.map((label) => (
        <InputFormulario
        key={label.id}
        onChange={label.handleChange}
        type={label.type}
        name={label.name}
        faIcon={label.faIcon}
      >
        {label.children}
      </InputFormulario>
     ))
  }
   
  </form>
  )
}
