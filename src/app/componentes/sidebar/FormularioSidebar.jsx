"use client";
import { useState } from "react";
import InputFormulario from "../InputFormulario";
import BotonVolver from "../BotonVolver";
import { useDataFetch } from "@/context/userDataFetch";

export default function FormularioSidebar() {
  const [formulario, setFormulario] = useState({});
  const cargarFormularioRotulo = useDataFetch(
    (state) => state.cargarFormularioRotulo
  );

  /* formateador de hora a string y a formato de argentina */
  const transf = (fecha) => {
    const fech = fecha.target.value;
    const date = new Date(fech);
    const day = date?.getDate();
    const month = date?.getMonth() + 1;
    const year = date?.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    setFormulario({ ...formulario, [fecha.target.name]: formattedDate });
  };

  const handleChange = (e) => {
    if (e.target.type == "date") {
      transf(e);
    } else {
      setFormulario({ ...formulario, [e.target.name]: e.target.value });
    }
  };

  // const input = document.querySelector('input[type="date"]');
  // input.addEventListener("", () => {
  //   const date = input.valueAsDate;
  //   const day = date.getDate();
  //   const month = date.getMonth() + 1;
  //   const year = date.getFullYear();
  //   const formattedDate = `${day}/${month}/${year}`;
  //   console.log(formattedDate);
  // });
  const inputRegister = [
    {
      id: 1,
      label: "",
      name: "peso",
      type: "number",
      onChange: handleChange,
      children: "Peso de paciente",
    },
    {
      id: 2,
      label: "date",
      name: "fechaPrep",
      type: "date",
      onChange: handleChange,
      children: "Fecha de Prep",
    },
    {
      id: 3,
      label: "date",
      name: "horaPrep",
      type: "time",
      onChange: handleChange,
      children: "Hora de Prep",
    },
    {
      id: 4,
      label: "date",
      name: "fechaAdm",
      type: "date",
      onChange: handleChange,
      children: "Fecha de Adm",
    },
    {
      id: 5,
      name: "horaAdm",
      label: "date",
      type: "time",
      onChange: handleChange,
      children: "Hora de Adm",
    },
    {
      id: 6,
      name: "volumenDosis",
      label: "",
      type: "number",
      onChange: handleChange,
      children: "Volumen de Dosis",
    },
    {
      id: 7,
      name: "operadora",
      label: "",
      type: "text",
      onChange: handleChange,
      children: "Operadora",
    },
    {
      id: 8,
      name: "asistente",
      label: "",
      type: "text",
      onChange: handleChange,
      children: "Asistente",
    },
  ];

  const botonGuardar = (e, obj) => {
    e.preventDefault();
    cargarFormularioRotulo(obj);
  };

  return (
    <form
      action=""
      className="flex flex-col w-11/12 items-center justify-center mx-auto my-5 bg-gray-100 border rounded-lg p-2"
    >
      <h2 className="font-medium">Datos a colocar en Rotulo</h2>
      <div className="flex flex-wrap gap-x-1 items-center justify-between px-0.5">
        {inputRegister?.map((label) => (
          <InputFormulario
            label={label.label}
            key={label.id}
            onChange={label.onChange}
            type={label.type}
            name={label.name}
            faIcon={label.faIcon}
          >
            {label.children}
          </InputFormulario>
        ))}
        <label
          htmlFor="viasIntectable"
          className="peer w-full text-sm  py-1 pl-4 focus:bg-transparent  bg-transparent shadow-none border-0 border-b text-gray-700 border-gray-500 outline-none  focus:outline-none relative"
        >
          Via:
          <select onChange={handleChange} name="viasIntectable" id="" className="ml-5">
            <option defaultValue value="subcutaneo">
              subcutaneo
            </option>
            <option value="intramuscular">intramuscular</option>
            <option value="endovenosa">endovenosa</option>
          </select>
        </label>
        <label
          htmlFor="diluyentes"
          className="peer w-full text-sm  py-1 mt-2 pl-4 focus:bg-transparent  bg-transparent shadow-none border-0 border-b text-gray-700 border-gray-500 outline-none  focus:outline-none relative"
        >
          Diluyente:
          <select name="diluyentes" id="" onChange={handleChange} className="ml-5">
            <option defaultValue value="A/D">
              A/D
            </option>
            <option value="S/F">S/F</option>
            <option value="S/D">S/D</option>
          </select>
        </label>
      </div>
      <button
        onClick={(e) => botonGuardar(e, formulario)}
        className="inline-block mt-5 print:hidden rounded-lg bg-blue-500 px-5 py-3  text-sm font-medium text-white hover:bg-violet-500"
      >
        Guardar
      </button>
    </form>
  );
}
