import { create } from "zustand";

export const useDataFetch = create((set) => ({
  fetching: {
    pacientes: [],
    data: {},
  },
  cargaData: ( data) => {
    const agruparPacientes = data?.uti?.reduce((acc, obj) => {
        const key = obj["nombrePaciente"];
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
      }, {});
      const pacientesNombres = Object.keys(agruparPacientes);

    set((state) => ({
      fetching: {pacientes:pacientesNombres, data: agruparPacientes },
    }));
  },
}));
