"use client";

export default function HeadSidebar({ paciente }) {
  return (
    <div className="w-11/12 text-gray-500 mx-auto flex flex-col items-center justify-center violet-700 rounded-lg p-1  font-black text-center text-sm ">
      <h2>{paciente?.[0]?.nombrePaciente}</h2>
      <h3>ID: {paciente?.[0]?.paciente}</h3>
      <h3>Edad: {paciente?.[0]?.edad1} año</h3>
    </div>
  );
}
