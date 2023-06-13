"use client"
import { useDataFetch } from '@/context/userDataFetch';

export default function H2paciente() {
    const { fetching } = useDataFetch((state) => ({
        fetching: state.fetching,
      }));
  return (
    <h2 className="mt-4 text-gray-500 text-xl font-semibold">
        {!fetching?"Paciente" :"Pacientes de la "+fetching?.data[fetching?.pacientes[0]][0]?.servicio}
      </h2>
  )
}
