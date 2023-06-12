
import SectionBackgroun from "../../componentes/SectionBackgroun";
import BotonVolver from "@/app/componentes/BotonVolver";
import TablaPacientes from "./TablaPacientes";
import H2paciente from "@/app/componentes/H2paciente";

export default function ContenedorPacientes() {
 
  return (
    <SectionBackgroun>
     <H2paciente/>
      <div className="flex bg-white items-center mx-auto justify-between p-1 rounded-lg pb-3 my-5">
        <div className="flex flex-col items-center justify-between p-1 gap-2 mx-auto">
          <TablaPacientes />
        </div>
      </div>
      <BotonVolver />
    </SectionBackgroun>
  );
}
