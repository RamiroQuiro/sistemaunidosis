import SectionBackgroun from '@/app/componentes/SectionBackgroun'
import React from 'react'
import FormularioLogin from './FormularioLogin'

export default function LoginPage() {
  return (

<SectionBackgroun>
<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-lg text-center">
    <h1 class="text-2xl font-bold sm:text-3xl">CePSI Eva Peron</h1>

    <p class="mt-4 text-gray-500">
     Ingrese su clave y contraseña
    </p>
  </div>

  <FormularioLogin/>
</div>
</SectionBackgroun>
  )
}
