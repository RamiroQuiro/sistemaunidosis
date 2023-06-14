import React from "react";
import ContenedorDivBodyRotulo from "./ContenedorDivBodyRotulo";

export default function BodyRotulo({ idMed,formularioRotulo }) {
  return (
    <div className="flex  items-center text-center mx-auto font-bold justify-evenly leading-tight tracking-tight w-full flex-col relative  my-1">
      <ContenedorDivBodyRotulo>
        <p className="text-base">{idMed?.medicamento}</p>
      </ContenedorDivBodyRotulo>
      <ContenedorDivBodyRotulo>
        <p>
          <span className="font-medium">Indicacion:</span> {idMed?.indicaciones}
        </p>{" "}
        <p>
          <spam className="font-medium">Volumen: </spam>
          {formularioRotulo?.volumenDosis}
        </p>
      </ContenedorDivBodyRotulo>
      <ContenedorDivBodyRotulo>
        <p>
          <span className="font-medium">Frecuencia:</span>
          {idMed?.frecuenciaHoras}hs
        </p>
        <p>
          <span className="font-medium">Present: </span>
          {idMed?.unidad}
        </p>
        <p>
          <span className="font-medium">{formularioRotulo?.subcutaneo} </span>
        </p>
      </ContenedorDivBodyRotulo>
      <ContenedorDivBodyRotulo>
        <p>
          <spam className="font-medium">FechaPrep:</spam>
          {formularioRotulo?.fechaPrep}
        </p>
        <p>
          <spam className="font-medium"> HrPrep: </spam>
          {formularioRotulo?.horaPrep}
        </p>
      </ContenedorDivBodyRotulo>
      <ContenedorDivBodyRotulo>
        <p>
          <spam className="font-medium">HrAdmin:</spam>
          {formularioRotulo?.horaAdm}
        </p>
        <p>
          <spam className="font-medium">FechaAdmn: </spam>
          {formularioRotulo?.fechaAdm}
        </p>
      </ContenedorDivBodyRotulo>

      <ContenedorDivBodyRotulo>
        <p>
          <spam className="font-medium">Solvente</spam>
          Dexamet
        </p>
        <p>
          <spam className="font-medium">Volumen: </spam>
          1mls
        </p>
      </ContenedorDivBodyRotulo>
      <ContenedorDivBodyRotulo>
        <p>
          <spam className="font-medium">Operadora:</spam>
          La Roxana
        </p>
      </ContenedorDivBodyRotulo>
      <ContenedorDivBodyRotulo>
        <p>
          <spam className="font-medium">Asistente: </spam>
          La Deborado
        </p>
      </ContenedorDivBodyRotulo>

      {/* <form className="w-full text-sm flex flex-col bg- rounded items-center justify-between gap-1 my-0.5 p-1">
        <div className="w-full font-medium flex items-center  rounded p-0.5 border justify-between mx-auto">
          <label htmlFor="FechaPrep" className="">
            FechaPrep:
            <input
              type="date"
              name="FechaPrep"
              id=""
              className="w-  rounded py- ml-2"
            />{" "}
          </label>
          <label htmlFor="horaPrep" className="">
            HoraPrep:
            <input
              type="time"
              name="horaPrep"
              id=""
              className="w- rounded py- ml-2"
            />{" "}
          </label>
        </div>
        <div className="w-full font-medium border  rounded p-0.5 flex items-center justify-between mx-auto">
          <label htmlFor="horaAdm" className="">
            Hora Adm:
          
          <input
            type="time"
            name="horaPrep"
            id=""
            className="w- rounded py- ml-2"
          /></label>{" "}
          <label htmlFor="FechaAdm" className="">
            FechaAdm:
            <input
              type="date"
              name="FechaAdm"
              id=""
              className="w- rounded py- ml-2"
            />
          </label>
        </div>
        <div className="w-full font-medium flex items-center gap-x-2 justify-between mx-auto">
          <div className="flex flex-col border rounded p-0.5">
            {" "}
            <label htmlFor="horaAdm" className="inline-flex">
              Dosis:
              <input
                type="number"
                name="horaPrep"
                id=""
                className="w-full rounded py- ml-2"
              />
            </label>
            <label htmlFor="horaAdm" className="inline-flex">
              Vol:
              <input
                type="number"
                name="horaPrep"
                id=""
                className="w-full rounded py- ml-2"
              />
            </label>{" "}
          </div>
          <div className="flex flex-col border rounded w-1/2">
            {" "}
            <label htmlFor="horaAdm" className="inline-flex">
              Solvente:
              <select name="solventes" id="">
                <option value="fisiológico ">fisiológico</option>
                <option value="fisiológico">fisiológico</option>
                <option value="fisiológico">fisiológico</option>
              </select>
            </label>
            <label htmlFor="horaAdm" className="inline-flex">
              Vol:
              <input
                type="number"
                name="horaPrep"
                id=""
                className="w-full rounded py- ml-2"
              />
            </label>{" "}
          </div>
        </div>
        <div className="w-full font-medium">
          <label htmlFor="operadora">
            Operadora
            <input
              type="text"
              name="operadora"
              id=""
              className="w-1/2 rounded py- ml-2"
            />
          </label>
        </div>
        <div className="w-full font-medium">
          <label htmlFor="operadora">
            Asistente
            <input
              type="text"
              name="operadora"
              id=""
              className="w-1/2 rounded py- ml-2"
            />
          </label>
        </div>
      </form> */}
      <p className="text-sm font-bold mx-auto mt-1 -bottom-4  left-14">
        ¡Alcemos la voz por la seguridad del paciente!
      </p>
    </div>
  );
}
