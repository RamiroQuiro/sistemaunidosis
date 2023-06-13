import React from "react";

export default function BodyRotulo({ idMed }) {
  return (
    <div className="flex  items-start justify-evenly leading-tight tracking-tight w-full flex-col relative  my-1">
      <div className="flex w-full bg-gray-200 gap-x-3">
        <p>
          <strong>Medicamento:</strong> {idMed?.medicamento}
        </p>
      </div>
      <div className="flex w-full gap-x-3">
        <p>
          <strong>Indicacion:</strong> {idMed?.indicaciones}
        </p>
      </div>
      <div className="flex w-full  bg-gray-200 gap-x-3">
        <p>
          <strong>Frecuencia:</strong>
          {idMed?.frecuenciaHoras}hs
        </p>
        <p>
          <strong>Present: </strong>
          {idMed?.unidad}
        </p>
        <p>
          <strong>Subcutaneo </strong>
        </p>
      </div>
      <div className="flex w-full gap-x-3">
        <p>
          <strong>FechaPrep:</strong>
          10/50/2015
        </p>
        <p>
          <strong>HrPrep: </strong>
          12:50hs
        </p>
     
      </div>
      <div className="flex w-full bg-gray-200 gap-x-3">
        <p>
          <strong>HrAdmin:</strong>
          12:50hs
        </p>
        <p>
          <strong>FechaAdmn: </strong>
          12:50hs
        </p>
     
      </div>
      <div className="flex w-full  gap-x-3">
        <p>
          <strong>Dosis</strong>
          700mgs
        </p>
        <p>
          <strong>Volumen: </strong>
          1mls
        </p>
     
      </div>
      
      <div className="flex w-full bg-gray-200  gap-x-3">
        <p>
          <strong>Solvente</strong>
         Dexamet
        </p>
        <p>
          <strong>Volumen: </strong>
          1mls
        </p>
     
      </div>
      <div className="flex w-full  gap-x-3">
        <p>
          <strong>Operadora:</strong>
         La Roxana
        </p>
        
      </div>
      <div className="flex w-full bg-gray-200  gap-x-3">
      <p>
          <strong>Asistente: </strong>
          La Deborado
        </p>
        </div>
     

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
