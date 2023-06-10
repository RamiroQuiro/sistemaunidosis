"use client"
import { useParams } from 'next/navigation'
import React from 'react'

export default function page({id}) {
    const params=useParams()
console.log(params.id)

  return (
    <div>page</div>
  )
}
