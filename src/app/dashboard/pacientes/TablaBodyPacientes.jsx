"use client"
import { useRouter } from 'next/navigation'
import { useDataFetch } from '@/context/userDataFetch';

export default function TablaBodyPacientes() {
    
    const router=useRouter()
    const { fetching } = useDataFetch((state) => ({
        fetching: state.fetching,
      }));
    const activarPaciente=useDataFetch((state)=>state.activarPaciente)
      const pacientes = fetching?.pacientes;
      const data = fetching?.data;
    
    const handlePaciente=(name,paciente)=>{
        activarPaciente(paciente)
          router.push('/dashboard/pacientes/'+name)
      }
  return (
    <tbody className="text-center py-3">
    {pacientes?.map((paciente, i) => (
      <tr
        key={data[paciente][0]?.paciente}
        className="border-b border-opacity-20 dark:border-gray-700"
      >
        <td className="p-2">
          <p>{data[paciente][0]?.paciente}</p>
        </td>
        <td className="p-2">
          <p>{paciente}</p>
        </td>
        <td className="p-2">
          <p>{data[paciente]?.length}</p>
        </td>
        <td className="p-2 text-right">
          <button 
          onClick={()=>handlePaciente(data[paciente][0]?.paciente,paciente)}
          className="px-3 py-1 text-gray-100 font-semibold rounded-md bg-violet-500 ">
            ir a paciente
          </button>
        </td>
      </tr>
    ))}
  </tbody>
  )
}
