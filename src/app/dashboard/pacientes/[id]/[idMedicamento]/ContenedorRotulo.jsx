"use client";
import SectionBackgroun from "@/app/componentes/SectionBackgroun";
import { useDataFetch } from "@/context/userDataFetch";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
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
        <div className="bg-white  p-2 w-[500px]  rounded-lg  flex flex-col items-center justify-between border-2 ">
          <div className="flex  items-center justify-between w-full bg-gradient-to-tr to-blue-500/80 from-rose-400/80 p-1">
            <div className="w-1/3 items-center mx-auto">logo</div>
            <div className="flex items-center w-full flex-col justify-evenly">
              <div className="w-full flex text-lg font-bold items-center gap-2 flex-col">
                <div className="flex w-full gap-x-3">
                  {" "}
                  <p>Paciente:{idMed?.nombrePaciente}</p>{" "}
                  <p>Edad:{idMed?.edad1}</p>
                </div>
                <div className="flex w-full gap-x-3">
                  {" "}
                  <p>ID:{idMed?.paciente}</p> <p> Servicio:{idMed?.servicio}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start leading-tight tracking-wider w-full flex-col justify-evenly my-2">
            <div className="flex w-full gap-x-3">
              <p>
                <strong>Medicamento:</strong> {idMed?.medicamento}
              </p>
             
            </div>
            <div className="flex w-full gap-x-3">
              <p>
                <strong>Indicacion:</strong> {idMed?.indicaciones}
              </p>
            </div>
            <div className="flex w-full gap-x-3">
              <p>
                <strong>Frecuencia:</strong>
                {idMed?.frecuenciaHoras}hs
              </p>
              <p>
                <strong>Present: </strong>
                {idMed?.unidad}
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionBackgroun>
  );
}
