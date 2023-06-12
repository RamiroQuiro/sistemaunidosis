import React from "react";

export default function BodyRotulo({ idMed }) {
  return (
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
      <form
        action=""
        className="w-full flex flex-col bg-gray-200 rounded items-center justify-between gap-1 my-0.5 p-1"
      >
        <div className="w-full font-medium flex items-center justify-between mx-auto">
          <label htmlFor="FechaPrep" className="">
            FechaPrep:
          </label>{" "}
          <input
            type="date"
            name="FechaPrep"
            id=""
            className="w-1/2  rounded py- ml-2"
          />
          <label htmlFor="horaPrep" className="">
            HoraPrep:
          </label>{" "}
          <input
            type="time"
            name="horaPrep"
            id=""
            className="w-1/2  rounded py- ml-2"
          />
        </div>
        <div className="w-full font-medium flex items-center justify-between mx-auto">
          Heladera
          <select name="heladera" id="heladera">
            <option value="Si" defaultValue>
              Si
            </option>
            <option value="No">No</option>
          </select>{" "}
          <label htmlFor="FechaAdm" className="">
            Fecha Adm:
            <input
              type="date"
              name="FechaAdm"
              id=""
              className="w-1/2 rounded py- ml-2"
            />
          </label>
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
      </form>
    </div>
  );
}
