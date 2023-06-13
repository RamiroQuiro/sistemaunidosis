"use client";
import { useDataFetch } from "@/context/userDataFetch";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import HeadSidebar from "./HeadSidebar";
import FormularioSidebar from "./FormularioSidebar";
export default function ContenedorDatosSidebar() {
    const params = useParams();
    const [paciente, setPaciente] = useState({})
    const [isLoading, setIsLoading] = useState(false);
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
          setPaciente(data[find])
        }
      }, [fetching,paciente]);
    
  return (
    <div className="h-full w-64">
    <HeadSidebar paciente={paciente}/>
   <FormularioSidebar/>
    </div>
  )
}
