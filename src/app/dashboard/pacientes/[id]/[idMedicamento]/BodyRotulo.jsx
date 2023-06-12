import React from "react";

export default function BodyRotulo({ idMed }) {
  return (
    <div className="flex text-base items-start leading-tight tracking-wider w-full flex-col relative justify-evenly my-2">
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
        <select name="subcutaneo" id="" className="cursor-pointer">
          <option value="subcutaneo">Subcutan</option>
          <option value="cutaneo">Cutaneo</option>
        </select>
      </div>
      <form
        className="w-full text-sm flex flex-col bg-gray-200 rounded items-center justify-between gap-1 my-0.5 p-1"
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
          <label htmlFor="horaAdm" className="">
            Hora Adm:
          </label>{" "}
          <input
            type="time"
            name="horaPrep"
            id=""
            className="w-1/3 rounded py- ml-2"
          />
          <label htmlFor="FechaAdm" className="">
            FechaAdm:
            <input
              type="date"
              name="FechaAdm"
              id=""
              className="w-1/2 rounded py- ml-2"
            />
          </label>
        </div>
        <div className="w-full font-medium flex items-center gap-x-2 justify-between mx-auto">
        <div className="flex flex-col border rounded ">
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
      <p className="text-sm font-bold mx-auto mt-1 -bottom-4 absolute left-14">¡Alcemos la voz por la seguridad del paciente!</p>
    </div>
  );
}
