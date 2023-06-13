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
          label:"",
          name: "kilogramos",
          type: "number",
          onChange: handleChange,
          children: "Peso de paciente",
        },
        {
          id: 2,
          label:"date",
          name: "fechaPrep",
          type: "date",
          onChange: handleChange,
          children: "Fecha de Prep",
        },
        {
          id: 3,
          label:"date",
          name: "horaPrep",
          type: "time",
          onChange: handleChange,
          children: "Hora de Prep",
        },
        {
          id: 4,
          label:"date",
          name: "fechaAdm",
          type: "date",
          onChange: handleChange,
          children: "Fecha de Adm",
        },
        {
          id: 5,
          name: "horaAdm",
          label:"date",
          type: "time",
          onChange: handleChange,
          children: "Hora de Adm",
        },
        {
          id: 6,
          name: "volumenDosis",
          label:"",
          type: "number",
          onChange: handleChange,
          children: "Volumen de Dosis",
        },
        {
          id: 7,
          name: "operadora",
          label:"",
          type: "text",
          onChange: handleChange,
          children: "Operadora",
        },
        {
          id: 8,
          name: "asistente",
          label:"",
          type: "text",
          onChange: handleChange,
          children: "Asistente",
        },
    ]

     
  return (
    <form
    action=""
    className="flex flex-col w-11/12 items-center justify-center mx-auto my-5 bg-gray-100 border rounded-lg p-2"
  >
    <h2 className="font-medium">Datos a colocar en Rotulo</h2>
  <div className='flex flex-wrap gap-x-1 items-center justify-between px-0.5'>
  {
     inputRegister?.map((label) => (
        <InputFormulario
        label={label.label}
        key={label.id}
        onChange={label.handleChange}
        type={label.type}
        name={label.name}
        faIcon={label.faIcon}
      >
        {label.children}
      </InputFormulario>
     ))
  }</div>
   
  </form>
  )
}
