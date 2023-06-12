"use client";
import { useState } from "react";
import fetchMssql from "@/base/basemssql";
import SectionBackgroun from "../componentes/SectionBackgroun";
import { useRouter } from "next/navigation";
import { useDataFetch } from "@/context/userDataFetch";

export default function PaginaDashborad() {
  const router = useRouter();

  const cargaData = useDataFetch((state) => state.cargaData);
  const [data, setData] = useState(null);
  const [servicio, setServicio] = useState("intercom1");
  const [isLoading, setIsLoading] = useState(false);

  const consultarMssql = async(e, serv) => {
    e.preventDefault();
    setIsLoading(true);
    await fetchMssql(serv)
      .then((data) => {
        cargaData(data,serv);
      })
      .then(() => {
        router.push("/dashboard/pacientes");
        setIsLoading(false);
      });
  };
  const onChangeSelect = (e) => {
    setServicio(e.target.value);
  };

  return (
    <SectionBackgroun>
      {isLoading ? (
        <div className="w-full h-full z-20 flex items-center justify-center mx-auto absolute top-0 left-0 bg-gradient-to-tr to-blue-500/40 from-rose-500/40 backdrop-blur-sm">
          <div className="lds-ripple  text-xl font-medium m-auto ">
          <div></div><div></div>  
          </div>
        </div>
      ) : null}
      <h2 className="mt-4 text-gray-500 text-xl font-semibold">
        Seleccione la Sala a traer las indicaciones
      </h2>
      <form
        action=""
        className="mx-auto mb-0 mt-8 max-w-md space-y-4 w-1/2 flex flex-col items-center"
      >
        <div className="w-full">
          <div className="relative">
            <select
              onChange={onChangeSelect}
              name="servicios"
              id="salas"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            >
              <option value={"intercom1"}>Sala 1</option>
              <option value={"intercom2"}>Sala 2</option>
              <option value={"intercom3"}>Sala 3</option>
              <option value={"cuidinter"}>Sala 4</option>
              {/* <option value={"hospdia"}>Hospital de Dia</option> */}
              <option value={"UTI"}>UTI</option>
            </select>
          </div>
        </div>

        <button
          onClick={(e) => consultarMssql(e, servicio)}
          className="inline-block rounded-lg bg-blue-500 px-5 py-3 w-2/5 text-sm font-medium text-white"
        >
          consultar
        </button>
      </form>
      {/* <div className="flex flex-col text-sm border items-center justify-between bg-white p-1 rounded-lg gap-2 w-1/2">
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
      </div> */}
    </SectionBackgroun>
  );
}
