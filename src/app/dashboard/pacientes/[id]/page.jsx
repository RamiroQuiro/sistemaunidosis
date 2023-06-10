"use client"
import { useParams } from 'next/navigation'
import React from 'react'
import ContenedorMedicamento from './ContenedorMedicamento'

export default function page({id}) {
    

  return (
    <ContenedorMedicamento/>
  )
}
