"use client";
import SectionBackgroun from "../../componentes/SectionBackgroun";
import { useDataFetch } from "@/context/userDataFetch";

export default function ContenedorPacientes({}) {
  const { fetching } = useDataFetch((state) => ({
    fetching: state.fetching,
  }));

  const pacientes = fetching?.pacientes;
  const data = fetching?.data;
  return (
    <SectionBackgroun>
      <p className="mt-4 text-gray-500">Pacientes de la UTI</p>
      <div
        className="flex bg-gray-200 items-center mx-auto justify-between p-1 w-full"
      >
        <div className="flex flex-col items-center justify-between p-1 gap-2 mx-auto">
          <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs">
                <thead className="dark:bg-gray-700">
                  <tr className="text-left">
                    <th className="p-3">Invoice #</th>
                    <th className="p-3">Client</th>
                    <th className="p-3">Issued</th>
                    <th className="p-3">Due</th>
                    <th className="p-3 text-right">Amount</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pacientes?.map((paciente, i) => (
                    <tr
                      key={data[paciente]?.idPaciente}
                      className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900"
                    >
                      <td className="p-3">
                        <p>{data[paciente].idPaciente}</p>
                      </td>
                      <td className="p-3">
                        <p>{paciente}</p>
                      </td>
                      <td className="p-3">
                        <p>{data[paciente].medicamento}</p>
                      </td>
                      <td className="p-3">
                      </td>
                      <td className="p-3 text-right">
                      </td>
                      <td className="p-3 text-right">
                        <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                          <span>ir a paciente</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </SectionBackgroun>
  );
}
