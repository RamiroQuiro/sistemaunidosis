"use client"
import { useRouter } from 'next/navigation'

export default function BotonConsultaNueva() {
    const router=useRouter()
  return (
    <button
    onClick={()=>router.push('/dashboard')}
      className="block rounded-lg bg-blue-500 cursor-pointer px-5 py-3 text-sm font-medium text-white transition hover:bg-violet-500 focus:outline-none focus:ring"
      type="button"
    >
      Nueva Consulta
    </button>
  )
}
