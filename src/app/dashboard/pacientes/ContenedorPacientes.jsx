"use client";
import { useRouter } from "next/navigation";
import SectionBackgroun from "../../componentes/SectionBackgroun";
import { useDataFetch } from "@/context/userDataFetch";

export default function ContenedorPacientes({}) {
  const router=useRouter()
  const { fetching } = useDataFetch((state) => ({
    fetching: state.fetching,
  }));

  const pacientes = fetching?.pacientes;
  const data = fetching?.data;

  console.log(data)
const handlePaciente=(name)=>{
    router.push('/dashboard/pacientes/'+name)
}

  return (
    <SectionBackgroun>
      <p className="mt-4 text-gray-500">Pacientes de la UTI</p>
      <div
        className="flex bg-white items-center mx-auto justify-between p-1 rounded-lg pb-3"
      >
        <div className="flex flex-col items-center justify-between p-1 gap-2 mx-auto">
              <table className="min-w-full text-xs">
                <thead className="bg-gray-200 text-violet-500 uppercase">
                  <tr className="text-left">
                    <th className="p-3">id Paciente</th>
                    <th className="p-3">Nombre Paciente</th>
                    <th className="p-3">Cant Medicamentos</th>
                    <th className="p-3">Accion</th>
                  </tr>
                </thead>
                <tbody className="text-center py-3">
                  {pacientes?.map((paciente, i) => (
                    <tr
                      key={data[paciente][0]?.paciente}
                      className="border-b border-opacity-20 dark:border-gray-700"
                    >
                      <td className="p-2">
                        <p>{data[paciente][0]?.servicio}</p>
                      </td>
                      <td className="p-2">
                        <p>{paciente}</p>
                      </td>
                      <td className="p-2">
                        <p>{data[paciente]?.length}</p>
                      </td>
                      <td className="p-2 text-right">
                        <button 
                        onClick={()=>handlePaciente(data[paciente][0]?.paciente)}
                        className="px-3 py-1 font-semibold rounded-md dark:bg-violet-500 ">
                          ir a paciente
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
      </div>
    </SectionBackgroun>
  );
}
