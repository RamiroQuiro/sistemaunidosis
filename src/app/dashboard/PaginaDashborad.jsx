"use client"
import { useState } from "react";
import fetchMssql from "@/base/basemssql";
import SectionBackgroun from "../componentes/SectionBackgroun";

export default function PaginaDashborad() {
  const [data, setData] = useState(null)
  const consultarMssql = (e) => {
    e.preventDefault();
    fetchMssql("UTI").then((data)=>{
        setData(data)
        console.log(data)
    })
  };

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

      {
data?
<div className="flex flex-col text-sm border p-1 rounded-lg gap-2"> {data?.UTI?.map((paciente)=>(
<div key={paciente?.paciente} className="flex bg-gray-200 items-center justify-between p-1">
  <p>{paciente?.nombrePaciente}</p>
  <p>{paciente?.medicamento}</p>

</div>))}</div>
:
null
      }
    </SectionBackgroun>
  );
}
