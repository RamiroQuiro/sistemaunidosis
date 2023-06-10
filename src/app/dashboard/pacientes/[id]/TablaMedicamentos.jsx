import React from 'react'

export default function TablaMedicamentos({medicamentos}) {
  return (
    <table className="min-w-full text-xs">
    <thead className="bg-gray-200 text-violet-500 uppercase">
      <tr className="text-center">
        <th className="p-3">Medicamento</th>
        <th className="p-3">Indicaciones</th>
        <th className="p-3">Posologia</th>
        <th className="p-3">Unidad</th>
        <th className="p-3">Accion</th>
      </tr>
    </thead>
    <tbody className="text-center py-3">
      {
      
      medicamentos?.map((medicamento, i) => (
        <tr
          key={medicamento?.idMedicamento}
          className="border-b border-opacity-20 dark:border-gray-700"
        >
          <td className="p-2">
            <p>{medicamento?.medicamento}</p>
          </td>
          <td className="p-2">
            <p>{medicamento?.indicaciones}</p>
          </td>
          <td className="p-2">
            <p>{medicamento?.idPaciente}</p>
          </td>
          <td className="p-2">
            <p>{medicamento?.unidad}</p>
          </td>
          <td className="p-2 text-right">
            <button 
            onClick={()=>handlePaciente('')}
            className="px-3 py-1 font-semibold rounded-md dark:bg-violet-500 ">
              ir a paciente
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}
