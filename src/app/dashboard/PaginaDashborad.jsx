"use client";
import { useState } from "react";
import fetchMssql from "@/base/basemssql";
import SectionBackgroun from "../componentes/SectionBackgroun";
import { useRouter } from "next/navigation";
import { useDataFetch } from "@/context/userDataFetch";
import LoadingCss from "../componentes/LoadingCss";

export default function PaginaDashborad() {
  const router = useRouter();
  const cargaData = useDataFetch((state) => state.cargaData);
  const [servicio, setServicio] = useState("intercom1");
  const [isLoading, setIsLoading] = useState(false);

  const consultarMssql = async (e, serv) => {
    e.preventDefault();
    setIsLoading(true);
    await fetchMssql(serv)
      .then((data) => {
        cargaData(data, serv);
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
      {!isLoading ? null : <LoadingCss />}
      <h2 className="mt-4 text-gray-500 text-xl font-semibold">
        Seleccione la Sala a traer las indicaciones
      </h2>
      <form
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
    
    </SectionBackgroun>
  );
}
