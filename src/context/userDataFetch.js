import { create } from "zustand";

export const useDataFetch = create((set, get) => ({
  fetching: {
    pacientes: [],
    data: {},
  },
  pacienteActivo: {},
  formularioRotulo: {
    peso: 3,
    fechaPrep: "",
    horaPrep: "",
    fechaAdm: "",
    horaAdm: "",
    volumen: "",
    operadora: "",
    asistente: "",
  },
  cargaData: (data, serv) => {
    const agruparPacientes = data?.[serv]?.reduce((acc, obj) => {
      const key = obj["nombrePaciente"];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
    const pacientesNombres = Object.keys(agruparPacientes);

    set((state) => ({
      ...state,
      fetching: { pacientes: pacientesNombres, data: agruparPacientes },
    }));
  },
  activarPaciente: (pte) => {
    const data = get().fetching.data;
    set((state) => ({
      ...state,
      pacienteActivo: data[pte],
    }));
  },
  cargarFormularioRotulo: (obj) => {
    console.log(obj)
    set((state) => ({
      ...state,
      formularioRotulo: { ...state.formularioRotulo, ...obj },
    }));
  },
}));
