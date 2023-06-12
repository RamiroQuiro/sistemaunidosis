"use client"

import { useRouter } from "next/navigation"

export default function BotonVolver() {


    const router=useRouter()

    const onClickend=()=>{
        router.back()
    }
  return (
    <button
    onClick={onClickend}
    className="inline-block rounded-lg bg-blue-500 px-5 py-3  text-sm font-medium text-white hover:bg-violet-500"
  >
    Volver
  </button> 
  )
}
