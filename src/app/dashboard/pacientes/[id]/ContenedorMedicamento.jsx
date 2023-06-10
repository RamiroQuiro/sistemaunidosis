"use client";
import SectionBackgroun from "@/app/componentes/SectionBackgroun";
import { useDataFetch } from "@/context/userDataFetch";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import TablaMedicamentos from "./TablaMedicamentos";

export default function ContenedorMedicamento() {
  const params = useParams();
  const [medicamentos, setMedicamentos] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { fetching } = useDataFetch((state) => ({
    fetching: state.fetching,
  }));

  useEffect(() => {
    if (!fetching) return;
    const data = fetching?.data;

    const pacientes = fetching?.pacientes;

    const find = pacientes.find(
      (elemnt) => data[elemnt][0]?.paciente == params.id
    );
    if (find) {
      setMedicamentos(data[find])
      setIsLoading(true)
    }
  }, [fetching,medicamentos]);

  return <SectionBackgroun>
     <div className="flex flex-col items-center justify-between p-1 gap-2 mx-auto">
     <div
        className="flex bg-white items-center mx-auto justify-between p-1 rounded-lg pb-3"
      >
          { 
            isLoading&&
            <TablaMedicamentos  medicamentos={medicamentos} key={medicamentos[0]?.paciente}/>
          
          }
            </div>
            </div>
  </SectionBackgroun>;
}
