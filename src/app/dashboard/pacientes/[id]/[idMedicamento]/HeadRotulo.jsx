import Image from "next/image";
import logoCepsi from "../../../../../../public/logocontorno.png";

export default function HeadRotulo({ idMed ,formularioRotulo}) {
  return (
    <div className="flex print:bg-gray-500 items-center border-b-2 justify-between w-full bg-gradient-toto-blue-500/80 from-rose-400/80 p- rounded-t-lg">
      {/* <div className="w-1/3 items-center mx-auto relative">
        <Image
          className="object-contain object-center"
          alt="logoCepsi"
          src={logoCepsi}
          width={100}
          height={100}
          quality={50}
        />
      </div> */}
      <div className="flex items-center w-full flex-col ">
        <div className="w-full flex text-center font-bold items-center gap-y-0.5 flex-col px-1.5">
          <div className="flex w-full gap-x-3 text-center items-center justify-between px-2">
            {" "}
            <span className="w-[75%] h-7 text-base text-center text-ellipsis tracking-tighter overflow-hidden ...">{idMed?.nombrePaciente}</span>{" "}
            <span className=" text-sm">ID:{idMed?.paciente?.slice(3, -1)}</span>
          </div>
          <div className="flex w-full gap-x-1 items-center justify-between">
            <p><span className="text-sm">Edad:</span>{idMed?.edad1}años</p>
            <p><span className="text-sm">Peso:</span>{formularioRotulo?.peso}kg</p>
         
            <p><span className="text-sm uppercase">{idMed?.servicio}</span>    {/*idMed?.servicio*/}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
