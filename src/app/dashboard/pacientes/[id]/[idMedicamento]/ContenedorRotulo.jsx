"use client";
import SectionBackgroun from "@/app/componentes/SectionBackgroun";
import { useDataFetch } from "@/context/userDataFetch";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import BodyRotulo from "./BodyRotulo";
import HeadRotulo from "./HeadRotulo";
import BotonVolver from "@/app/componentes/BotonVolver";
export default function ContenedorRotulo() {
  const params = useParams();
  const [idMed, setIdMed] = useState({});
  const { pacienteActivo } = useDataFetch((state) => ({
    pacienteActivo: state.pacienteActivo,
  }));

  useEffect(() => {
    if (!pacienteActivo) return;
    const find = pacienteActivo?.find(
      (elemnt) => elemnt?.idMedicamento == params.idMedicamento.toString()
    );
    if (find) {
      setIdMed(find);
    }
  }, []);

  return (
    <SectionBackgroun>
      <div className="bg-white  p-2  rounded-lg  flex flex-col items-center justify-between ">
        <div></div>
        <div className="bg-white print: p-2 w-[500px]  rounded-lg  flex flex-col items-center justify-between border-2 ">
          <HeadRotulo idMed={idMed}/>

       <BodyRotulo idMed={idMed}/>
        </div>
      </div>
      <div className="w- mt-8 flex items-center gap-x-10 justify-between">
   <BotonVolver/>
        
         <button
          onClick={"consultarMssql"}
          className="inline-block rounded-lg bg-blue-500 px-5 py-3  text-sm font-medium text-white  hover:bg-violet-500"
        >
          Imprimir
        </button>
      </div>
    </SectionBackgroun>
  );
}
