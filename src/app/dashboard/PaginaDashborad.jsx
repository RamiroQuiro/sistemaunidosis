"use client";
import { useState } from "react";
import fetchMssql from "@/base/basemssql";
import SectionBackgroun from "../componentes/SectionBackgroun";

export default function PaginaDashborad() {
  const [data, setData] = useState(null);
  const [pacientes, setPacientes] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const consultarMssql = (e, serv) => {
    e.preventDefault();
    fetchMssql("uti")
      .then((data) => {
        const groupedByAge = data?.uti?.reduce((acc, obj) => {
          const key = obj["nombrePaciente"];
          if (!acc[key]) {
            acc[key] = [];
          }
          acc[key].push(obj);
          return acc;
        }, {});
        return groupedByAge;
      })
      .then((datos) => {
        setData(datos);
        const pacientesNombres = Object.keys(datos);
        setPacientes(pacientesNombres);
        setIsLoading(true);
      });
  };
  console.log(data["ABREGU, DONATO"]?.medicamento);
  // const groupedByAge=  data?.uti?.reduce((acc, obj) => {
  //   const key = obj["nombrePaciente"];
  //   if (!acc[key]) {
  //     acc[key] = [];
  //   }
  //   acc[key].push(obj);
  //   return acc;
  // }, [])

  // console.log(groupedByAge)

  return (
    <SectionBackgroun>
      <p className="mt-4 text-gray-500">
        Seleccione la Sala a traer las indicaciones
      </p>
      <form
        action=""
        className="mx-auto mb-0 mt-8 max-w-md space-y-4 w-1/2 flex flex-col items-center"
      >
        <div className="w-full">
          <label htmlFor="email" class="sr-only">
            Email
          </label>

          <div class="relative">
            <select
              name="salas"
              id="salas"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            >
              <option>Sala 1</option>
              <option>Sala 2</option>
              <option defaultValue={true}>Sala 3</option>
              <option>Sala 4</option>
            </select>
          </div>
        </div>

        <button
          onClick={consultarMssql}
          className="inline-block rounded-lg bg-blue-500 px-5 py-3 w-2/5 text-sm font-medium text-white"
        >
          consultar
        </button>
      </form>
      <div className="flex flex-col text-sm border items-center justify-between bg-white p-1 rounded-lg gap-2 w-1/2">
        {isLoading &&
          pacientes?.map((paciente, i) => (
            <div
              key={i}
              className="flex bg-gray-200 items-center mx-auto justify-between p-1 w-full"
            >
              <div className="flex flex-col items-center justify-between p-1 gap-2 mx-auto">
                <h2>{paciente}</h2>

                <div className="flex flex-col items-center justify-between p-1 gap-2">
                  {data[paciente]?.map((pac, i) => (
                    <p key={pac?.idPaciente}>{pac?.medicamento}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </SectionBackgroun>
  );
}