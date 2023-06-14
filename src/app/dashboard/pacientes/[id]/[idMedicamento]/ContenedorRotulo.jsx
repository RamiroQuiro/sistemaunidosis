"use client";
import SectionBackgroun from "@/app/componentes/SectionBackgroun";
import { useDataFetch } from "@/context/userDataFetch";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import BotonVolver from "@/app/componentes/BotonVolver";
import Rotulo from "./Rotulo";
import Sidebar from "@/app/componentes/sidebar/Sidebar";
export default function ContenedorRotulo() {
  const [printer, setPrinter] = useState(false);
  const params = useParams();
  const [idMed, setIdMed] = useState({});
  const { pacienteActivo,formularioRotulo } = useDataFetch((state) => ({
    pacienteActivo: state.pacienteActivo,
    formularioRotulo:state.formularioRotulo
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

  const print = (id) => {
    setPrinter(true);
    window.print();
    setPrinter(false);
  };
  const centimetrosAPixeles = (centimetros, dpi) => {
    const centimetrosPorPulgada = dpi / 2.54;
    return centimetrosPorPulgada * centimetros;
  };
  /*funcion para calcular cm en pixeles 
  const anchoEnPixeles = centimetrosAPixeles(7, 72);
*/

  return (
    <>
      {printer ? (
        <Rotulo id="printContent" idMed={idMed} key={1} />
      ) : (
        <SectionBackgroun>
          <Sidebar/>
          <div className="bg-white  p-1.5  rounded-lg  flex flex-col items-center justify-between ">
            <Rotulo  formularioRotulo={formularioRotulo} id="printContent" idMed={idMed} key={2} />
          </div>
          <div className="w- print:hidden mt-8 flex items-center gap-x-10 justify-between">
            <BotonVolver />

            <button
              onClick={() => print("printContent")}
              className="inline-block  rounded-lg bg-blue-500 px-5 py-3  text-sm font-medium text-white  hover:bg-violet-500"
            >
              Imprimir
            </button>
          </div>
        </SectionBackgroun>
      )}
    </>
  );
}
