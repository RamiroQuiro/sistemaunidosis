import React from "react";
import HeadRotulo from "./HeadRotulo";
import BodyRotulo from "./BodyRotulo";

export default function Rotulo({ idMed,id }) {
  return (
    <div
    
    id={id} className="bg-white print: text-sm  w-[360px] h-[250px] print:block rounded-lg  flex flex-col items-center justify-between border-2 ">
      <HeadRotulo idMed={idMed} />

      <BodyRotulo idMed={idMed} />
    </div>
  );
}
