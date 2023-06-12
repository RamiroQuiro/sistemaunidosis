import TablaBodyPacientes from "./TablaBodyPacientes";

export default function TablaPacientes() {
  return (
    <table className="min-w-full text-xs">
      <thead className="bg-gray-200 text-violet-500 uppercase">
        <tr className="text-left">
          <th className="p-3">id Paciente</th>
          <th className="p-3">Nombre Paciente</th>
          <th className="p-3">Cant Medicamentos</th>
          <th className="p-3">Accion</th>
        </tr>
      </thead>
      <TablaBodyPacientes/>
    </table>
  );
}
